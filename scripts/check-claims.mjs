#!/usr/bin/env node
/**
 * check-claims.mjs — verificador de claims regulatorios de Amira.
 *
 * Escanea el código fuente en busca de vocabulario que contradice el encuadre
 * de plataforma de bienestar (fuera del régimen de producto médico de ANMAT).
 *
 * Uso:
 *   node scripts/check-claims.mjs
 *   node scripts/check-claims.mjs --json
 *
 * Integrar en package.json:
 *   "check:claims": "node scripts/check-claims.mjs"
 * y en CI como paso obligatorio previo al build.
 *
 * Allowlist: scripts/claims-allowlist.json
 *   Frases exactas aprobadas que contienen términos vetados (típicamente
 *   negaciones legalmente necesarias, como "Amira no diagnostica ni trata").
 *   Se remueven del texto ANTES de buscar, de modo que no generen falsos
 *   positivos. Agregar una entrada es una decisión de producto, no de
 *   implementacion.
 */

import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, extname, relative } from 'node:path';

const ROOT = process.cwd();
const JSON_OUT = process.argv.includes('--json');

const SCAN_EXT = new Set(['.ts', '.tsx', '.js', '.jsx', '.mdx', '.md', '.json', '.html', '.txt']);
const SKIP_DIR = new Set(['node_modules', '.next', '_next', '.git', 'dist', 'build', 'out', 'coverage', '.vercel', 'scripts', '.claude']);
const SKIP_FILE = new Set(['CLAUDE.md', 'package-lock.json', 'pnpm-lock.yaml', 'yarn.lock']);

/**
 * Términos vetados. `re` se aplica sobre el texto en minúsculas y sin acentos.
 * `level`: 'block' rompe el build. 'warn' solo informa.
 */
const RULES = [
  { id: 'terapia',        level: 'block', re: /\bterapias?\b|\bterapeutic[oa]s?\b/g,            hint: 'usar: acompañamiento, espacio, conversación' },
  { id: 'tratamiento',    level: 'block', re: /\btratamientos?\b|\btratar(?:lo|la|te)?\b/g,      hint: 'usar: herramientas, ejercicios, contenidos' },
  { id: 'paciente',       level: 'block', re: /\bpacientes?\b/g,                                 hint: 'usar: usuario, persona, consultante' },
  { id: 'diagnostico',    level: 'block', re: /\bdiagnostic[oa]s?\b|\bdiagnosticar\b/g,          hint: 'usar: lo que registrás, cómo te sentís' },
  { id: 'sintoma',        level: 'block', re: /\bsintomas?\b|\bsintomatologia\b/g,               hint: 'usar: sensación, estado, momento' },
  { id: 'clinico',        level: 'block', re: /\bclinic[oa]s?\b/g,                               hint: 'usar: de calidad, de seguridad, profesional' },
  { id: 'seguimiento',    level: 'block', re: /\bseguimientos?\b|\bmonitore[oa]\w*\b|\blongitudinal\b/g, hint: 'usar: historial, registro, tu evolución personal' },
  { id: 'riesgo-claim',   level: 'block', re: /\bdeteccion de riesgo\b|\bevaluacion de riesgo\b|\bscore de riesgo\b|\bsenales? de riesgo\b|\balertas? (?:de|ante) (?:riesgo|senales)\b|\briskscore\b|\briskdetection\b/g, hint: 'usar: salvaguarda de seguridad, recursos de ayuda' },
  { id: 'alerta',         level: 'block', re: /\balertas? clinicas?\b|\bcrisisalert\b|\bescalada\b/g, hint: 'usar: incidente de seguridad del producto' },
  { id: 'supervision',    level: 'block', re: /\bsupervision clinica\b|\bsupervisad[oa] por (?:un |una )?(?:psicolog|profesional)\w*/g, hint: 'usar: diseñada y auditada por profesionales de la salud mental' },
  { id: 'historia-cl',    level: 'block', re: /\bhistorias? clinicas?\b|\bficha clinica\b|\bevolucion(?:es)? clinica\w*/g, hint: 'usar: mi registro, mi historial, mis check-ins' },
  { id: 'triage',         level: 'block', re: /\btriage\b|\bscreening\b|\bderivacion (?:activa|proactiva|automatica)\b|\bactiva de derivacion\b|\bsugerencia de derivacion\b/g,  hint: 'usar: directorio de profesionales' },
  { id: 'teleasistencia', level: 'block', re: /\bvideoconsultas?\b|\bvideollamadas?\b|\bteleconsultas?\b|\bteleasistencia\b|\btelesalud\b/g, hint: 'excluido del MVP: no ofrecer videoconsulta ni teleasistencia dentro de Amira' },
  { id: 'prevencion',     level: 'block', re: /\bprevenir\b|\bprevencion\b/g,                     hint: 'usar: cuidar, sostener, acompañar' },
  { id: 'anonimo',        level: 'block', re: /\banonim\w+/g,                                     hint: 'usar: seudonimizado, con acceso limitado' },
  { id: 'jovenes',        level: 'warn',  re: /\bjovenes\b/g,                                     hint: 'no usar como límite del producto; el criterio es +18' },
  { id: 'garantias',      level: 'block', re: /\b100% seguro\b|\bcumple con todos los estandares\b|\btotalmente seguro\b/g, hint: 'no afirmar garantías absolutas de seguridad' },
  { id: 'intervencion',   level: 'warn',  re: /\bintervencion\b|\bintervenir\b/g,                 hint: 'usar: respuesta, orientación, recursos' },
];

const norm = (s) => s.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

function loadAllowlist() {
  const p = join(ROOT, 'scripts', 'claims-allowlist.json');
  if (!existsSync(p)) return [];
  try {
    const raw = JSON.parse(readFileSync(p, 'utf8'));
    return (raw.approved ?? []).map((e) => (typeof e === 'string' ? e : e.text));
  } catch {
    console.error('claims-allowlist.json no es JSON válido; se ignora.');
    return [];
  }
}

function walk(dir, acc = []) {
  for (const name of readdirSync(dir)) {
    if (SKIP_DIR.has(name) || SKIP_FILE.has(name)) continue;
    if (name.startsWith('__next.')) continue;
    // Artefactos del build de GitHub Pages: deploy.sh copia out/ a la raíz.
    // Se regeneran en cada deploy; escanear la fuente, no el compilado.
    if (dir === ROOT && /\.(html|txt)$/.test(name)) continue;
    const full = join(dir, name);
    const st = statSync(full);
    if (st.isDirectory()) walk(full, acc);
    else if (SCAN_EXT.has(extname(name))) acc.push(full);
  }
  return acc;
}

function lineOf(text, index) {
  return text.slice(0, index).split('\n').length;
}

function run() {
  const allow = loadAllowlist().map(norm).filter(Boolean);
  const files = walk(ROOT);
  const findings = [];

  for (const file of files) {
    const original = readFileSync(file, 'utf8');
    let hay = norm(original);

    // Neutraliza frases aprobadas conservando las posiciones, para que los
    // números de línea sigan siendo correctos.
    for (const phrase of allow) {
      let i = hay.indexOf(phrase);
      while (i !== -1) {
        hay = hay.slice(0, i) + ' '.repeat(phrase.length) + hay.slice(i + phrase.length);
        i = hay.indexOf(phrase, i + phrase.length);
      }
    }

    for (const rule of RULES) {
      rule.re.lastIndex = 0;
      let m;
      while ((m = rule.re.exec(hay)) !== null) {
        findings.push({
          file: relative(ROOT, file),
          line: lineOf(original, m.index),
          rule: rule.id,
          level: rule.level,
          match: original.slice(m.index, m.index + m[0].length),
          hint: rule.hint,
        });
      }
    }
  }

  const blocking = findings.filter((f) => f.level === 'block');
  const warnings = findings.filter((f) => f.level === 'warn');

  if (JSON_OUT) {
    console.log(JSON.stringify({ blocking, warnings }, null, 2));
    process.exit(blocking.length ? 1 : 0);
  }

  if (!findings.length) {
    console.log(`check:claims — ${files.length} archivos escaneados, sin hallazgos.`);
    process.exit(0);
  }

  const print = (list, title) => {
    if (!list.length) return;
    console.log(`\n${title}\n`);
    for (const f of list) {
      console.log(`  ${f.file}:${f.line}`);
      console.log(`    término: "${f.match}"  [regla: ${f.rule}]`);
      console.log(`    ${f.hint}\n`);
    }
  };

  print(blocking, `BLOQUEANTES (${blocking.length})`);
  print(warnings, `ADVERTENCIAS (${warnings.length})`);

  if (blocking.length) {
    console.log('Corregir el copy. Si un término es necesario (típicamente una negación');
    console.log('legal como "Amira no diagnostica"), agregar la frase exacta a');
    console.log('scripts/claims-allowlist.json con justificación.\n');
    process.exit(1);
  }
  process.exit(0);
}

run();
