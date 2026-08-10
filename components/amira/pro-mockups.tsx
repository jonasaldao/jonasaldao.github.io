import { BadgeCheck } from "lucide-react"

/**
 * Shared interface fragments reused across ProValue (pilares) and ProHow
 * (pasos), so all three read as the same product instead of three
 * disconnected mockups. Every one is decorative only (aria-hidden) and
 * carries the minimum fictional data needed to read as real: first
 * name/initials, time, modality, status — never a reason for consulting,
 * notes, chat content, check-ins or emotional indicators.
 */

const estadoStyles: Record<string, string> = {
  Confirmado: "bg-verde/15 text-verde-profundo",
  "Pendiente de confirmación": "bg-arena text-tinta/60 ring-1 ring-verde/10",
  Reprogramado: "bg-menta text-verde-profundo",
  Registrado: "bg-verde/15 text-verde-profundo",
  Pendiente: "bg-arena text-tinta/60 ring-1 ring-verde/10",
  "Sin información": "bg-arena text-tinta/40 ring-1 ring-verde/10",
}

function EstadoChip({ estado }: { estado: string }) {
  return (
    <span
      className={`text-[8px] font-semibold px-1.5 py-0.5 rounded-full shrink-0 ${
        estadoStyles[estado] ?? "bg-arena text-tinta/60"
      }`}
    >
      {estado}
    </span>
  )
}

const turnos = [
  { iniciales: "M.G.", horario: "Lun 10:00", modalidad: "Online", estado: "Confirmado" },
  { iniciales: "L.T.", horario: "Mar 15:30", modalidad: "Online", estado: "Pendiente de confirmación" },
  { iniciales: "R.F.", horario: "Mié 09:00", modalidad: "Online", estado: "Reprogramado" },
]

export function AgendaMockup({ compact = false }: { compact?: boolean } = {}) {
  return (
    <div
      aria-hidden="true"
      className={`bg-white rounded-2xl shadow-lg ring-1 ring-verde/10 w-full ${
        compact ? "max-w-[12rem] p-3" : "max-w-[15rem] p-4"
      }`}
    >
      <p className="text-[10px] font-semibold text-tinta/50 uppercase tracking-wide mb-2">
        Próximos turnos
      </p>
      <div className="space-y-2">
        {turnos.map((t) => (
          <div
            key={t.iniciales}
            className="flex items-center gap-2 py-1 border-b border-verde/5 last:border-0 last:pb-0"
          >
            <span className="w-6 h-6 shrink-0 rounded-full bg-menta flex items-center justify-center text-[9px] font-semibold text-verde-profundo">
              {t.iniciales}
            </span>
            <p className="flex-1 min-w-0 text-[10px] font-medium text-tinta truncate">
              {t.horario} · {t.modalidad}
            </p>
            <EstadoChip estado={t.estado} />
          </div>
        ))}
      </div>
    </div>
  )
}

const cobros = [
  { iniciales: "M.G.", fecha: "12 jul", estado: "Registrado" },
  { iniciales: "L.T.", fecha: "14 jul", estado: "Pendiente" },
  { iniciales: "R.F.", fecha: "15 jul", estado: "Sin información" },
]

export function CobrosMockup() {
  return (
    <div
      aria-hidden="true"
      className="bg-white rounded-2xl shadow-lg ring-1 ring-verde/10 w-full max-w-[13rem] p-4"
    >
      <p className="text-[10px] font-semibold text-tinta/50 uppercase tracking-wide mb-2">
        Cobros
      </p>
      <div className="space-y-2">
        {cobros.map((c) => (
          <div
            key={c.iniciales}
            className="flex items-center justify-between py-1 border-b border-verde/5 last:border-0 last:pb-0"
          >
            <span className="text-[10px] text-tinta">
              {c.iniciales} · {c.fecha}
            </span>
            <EstadoChip estado={c.estado} />
          </div>
        ))}
      </div>
    </div>
  )
}

export function PerfilMockup() {
  return (
    <div
      aria-hidden="true"
      className="flex items-center gap-3 bg-white rounded-2xl shadow-lg ring-1 ring-verde/10 p-3 w-full max-w-[13rem]"
    >
      <span className="w-9 h-9 shrink-0 rounded-xl bg-gradient-to-br from-menta to-arena ring-1 ring-verde/10 flex items-center justify-center">
        <span className="w-3 h-3 rounded-full bg-verde/30" />
      </span>
      <div className="min-w-0 flex-1">
        <p className="text-[10px] font-serif font-semibold text-tinta leading-tight truncate">
          Tu perfil
        </p>
        <p className="text-[9px] text-muted-foreground truncate">Psicología · Online</p>
      </div>
      <BadgeCheck className="w-3.5 h-3.5 text-verde shrink-0" />
    </div>
  )
}

/**
 * Full directory profile preview — what a profile looks like once it's
 * published. Denser and wider than the other fragments on purpose: it's
 * the pilar's actual content, not a teaser. No stars, reviews, scores,
 * rankings, "recomendado" badges or consultant counts — availability slots
 * are the one thing meant to catch the eye, showing the feature working,
 * not promising demand.
 */
const horariosDisponibles = ["Mar 15:00", "Jue 10:00", "Vie 18:00"]

export function ProfileCard() {
  return (
    <div
      aria-hidden="true"
      className="bg-white rounded-2xl shadow-lg ring-1 ring-verde/10 p-4 w-full"
    >
      <div className="flex items-center gap-3 mb-3">
        <span className="w-11 h-11 shrink-0 rounded-xl bg-gradient-to-br from-menta to-arena ring-1 ring-verde/10 flex items-center justify-center">
          <span className="w-3.5 h-3.5 rounded-full bg-verde/30" />
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-xs font-serif font-semibold text-tinta leading-tight truncate">
            Lic. Sofía Rinaldi
          </p>
          <p className="text-[10px] text-muted-foreground truncate">
            Psicología · M.P. 12.345
          </p>
        </div>
      </div>

      <div className="space-y-1 mb-3">
        <p className="text-[10px] text-tinta/70">Enfoque cognitivo-conductual</p>
        <p className="text-[10px] text-tinta/70">Manejo del estrés · Vínculos</p>
        <p className="text-[10px] text-tinta/70">Atención online</p>
        <p className="text-[10px] text-tinta/70">Español e inglés</p>
      </div>

      <div className="border-t border-verde/10 pt-3">
        <p className="text-[9px] font-semibold text-tinta/50 uppercase tracking-wide mb-2">
          Disponible esta semana
        </p>
        <div className="flex flex-wrap gap-1.5 mb-3">
          {horariosDisponibles.map((h) => (
            <span
              key={h}
              className="text-[9px] font-medium px-2 py-1 rounded-full bg-menta/60 text-verde-profundo"
            >
              {h}
            </span>
          ))}
        </div>
        <span className="block text-center text-[10px] font-semibold px-3 py-2 rounded-full bg-verde-profundo text-white">
          Solicitar turno
        </span>
      </div>
    </div>
  )
}

const dias = ["Lun", "Mar", "Mié", "Jue", "Vie"]

export function ConfigMockup() {
  return (
    <div
      aria-hidden="true"
      className="bg-white rounded-2xl shadow-lg ring-1 ring-verde/10 p-4 w-full max-w-[13rem]"
    >
      <p className="text-[10px] font-semibold text-tinta/50 uppercase tracking-wide mb-2">
        Tu modalidad
      </p>
      <div className="flex flex-wrap gap-1.5">
        <span className="text-[9px] font-medium px-2.5 py-1 rounded-full bg-verde-profundo text-white">
          Online
        </span>
      </div>
      <p className="text-[10px] font-semibold text-tinta/50 uppercase tracking-wide mt-3 mb-2">
        Disponibilidad
      </p>
      <div className="flex flex-wrap gap-1.5">
        {dias.map((d) => (
          <span
            key={d}
            className="text-[9px] font-medium w-6 h-6 rounded-full bg-menta/60 text-verde-profundo flex items-center justify-center"
          >
            {d[0]}
          </span>
        ))}
      </div>
    </div>
  )
}
