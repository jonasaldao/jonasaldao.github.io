# CLAUDE.md — Amira

Archivo de memoria del proyecto. Claude Code lo lee automáticamente al iniciar cada sesión.
Mantenerlo actualizado: si el alcance del producto cambia, este archivo se actualiza **antes** de escribir código.

---

## Qué es Amira

Plataforma digital de **bienestar emocional** para personas mayores de 18 años en Argentina.

**Esto es una definición regulatoria, no de marketing.** Amira se posiciona deliberadamente fuera del régimen de producto médico de ANMAT. Todo el copy, la UI, los prompts de la IA y los metadatos deben ser consistentes con ese encuadre, porque ANMAT evalúa la *finalidad prevista* leyéndola del conjunto de lo que el producto comunica: términos y condiciones, landing, fichas de tiendas, textos in-app y material de prensa.

Si una funcionalidad o un texto no encaja en este archivo, **no se implementa**: se escala a producto antes de codear.

---

## Alcance del MVP

### Lado usuario — incluido

- Registro simple (email + confirmación de mayoría de edad).
- Check-in emocional subjetivo: "¿cómo me siento?", sin puntaje clínico ni interpretación devuelta.
- Historial personal de check-ins, visible solo para la persona usuaria.
- Chat con IA para reflexión y acompañamiento general.
- Ejercicios y contenidos educativos: respiración, journaling, sueño, hábitos, autocuidado.
- Acceso a un directorio de profesionales, siempre disponible y no condicionado a lo que la persona registre.
- Capa automatizada de seguridad ante expresiones preocupantes (ver sección "Capa de seguridad").

### Lado profesional — incluido

- Perfil verificado en el directorio público.
- Agenda y disponibilidad.
- Turnos y recordatorios.
- Gestión y seguimiento de cobros.

### Excluido del MVP — no implementar

- Diagnóstico, sugerencia de diagnóstico o descarte de diagnóstico.
- Tratamiento, plan terapéutico o "terapia con IA".
- Puntaje, score, semáforo o clasificación de riesgo (bajo/medio/alto).
- Detección de riesgo presentada como funcionalidad.
- Alertas o notificaciones al profesional sobre el estado de una persona usuaria.
- Resumen preconsulta o contexto semanal para el profesional.
- Historia clínica, ficha clínica, notas clínicas o evoluciones.
- Vinculación entre la cuenta de usuario y la de profesional.
- Videoconsulta o teleasistencia dentro de Amira.
- Monitoreo o revisión humana de conversaciones en tiempo real.
- Contacto de emergencia automático iniciado por Amira.
- Recomendación, ajuste o seguimiento de medicación.
- Cualquier procesamiento de señales biométricas, voz o parámetros fisiológicos.

**En el MVP no existe ningún flujo de datos desde el lado usuario hacia el lado profesional.** Son dos módulos separados que comparten marca y nada más.

---

## Glosario obligatorio

Aplica a **todo** texto visible o legible por máquina: copy, microcopy, labels, placeholders, mensajes de error, prompts del sistema de la IA, metadatos, `alt`, nombres de rutas, y comentarios de cara al usuario.

| No usar | Usar en su lugar |
|---|---|
| terapia, terapéutico, sesión | acompañamiento, espacio, conversación |
| tratamiento, tratar | herramientas, ejercicios, contenidos |
| paciente | usuario, persona (lado Amira) · consultante (lado profesional) |
| diagnóstico, diagnosticar, cuadro | lo que registrás, cómo te sentís |
| síntoma | sensación, estado, momento |
| clínico, clínica | de calidad, de seguridad, profesional |
| seguimiento, monitoreo, monitorear | historial, registro, tu evolución personal |
| detección de riesgo, evaluación de riesgo | recursos de ayuda, salvaguarda de seguridad |
| alerta clínica, escalada, notificación al profesional | incidente de seguridad del producto |
| supervisión clínica, supervisado por psicólogos | diseñada y auditada por profesionales de la salud mental |
| historia clínica, ficha clínica, evolución | mi registro, mi historial, mis check-ins |
| derivación activa, triage, screening | directorio de profesionales, acceso a profesionales |
| intervención, intervenir | respuesta, orientación, recursos |
| prevenir, prevención | cuidar, sostener, acompañar |
| anónimo, anonimizado | seudonimizado, con acceso limitado |
| jóvenes (como límite del producto) | personas mayores de 18 años |

**Notas de precisión:**

- *"seguimiento"* y *"prevención"* integran literalmente la definición de producto médico de la Res. GMC MERCOSUR 25/21. No son sinónimos evitables por estilo: son términos con consecuencia regulatoria.
- *"historia clínica"* tiene contenido legal propio en la Ley 26.529 (guarda, custodia, conservación por diez años). Nombrar así al historial del usuario activa ese régimen aunque el contenido sea un diario de ánimo.
- Las negaciones **sí** pueden usar los términos prohibidos: "Amira no diagnostica ni trata" es correcto y necesario. El verificador de claims tiene un allowlist para esto.

---

## Capa de seguridad conversacional

Es el componente más sensible del producto desde el punto de vista regulatorio. Está diseñado y documentado como **salvaguarda de seguridad del producto**, no como screening clínico.

Reglas de implementación, no negociables:

1. La respuesta ante una expresión preocupante es **fija y universal**. No se personaliza según el perfil, el historial ni el contenido de la conversación.
2. **No se genera ni se almacena un score de riesgo.** Ni numérico, ni categórico, ni booleano persistido en el perfil.
3. El mecanismo **interrumpe** el flujo conversacional y muestra recursos externos. No ofrece una intervención propia ni continúa la conversación como si nada.
4. **No se registra el resultado como dato del usuario.** Solo se emite un evento agregado y sin identificador de usuario, para métricas de funcionamiento del producto.
5. **No notifica a ningún profesional**, ni del directorio ni del equipo.
6. En el código y en la documentación se llama `safetyGuardrail` o `incidente de seguridad del producto`. Nunca `riskDetection`, `crisisAlert`, `riskScore` ni equivalentes.

Los números de ayuda urgente viven en un único archivo de configuración con fecha de verificación. No hardcodear en componentes.

---

## Reglas de comunicación

- Español rioplatense consistente (voseo). Sin lenguaje inclusivo con "x" ni "e".
- Sin emojis en copy de producto.
- No prometer anonimato. Si la conversación puede asociarse a una cuenta, es seudonimización.
- No afirmar "no se comparte con terceros" si intervienen proveedores tecnológicos o revisión humana.
- Sí se puede afirmar, porque la arquitectura lo cumple: *"tus conversaciones y check-ins no se comparten con los profesionales del directorio"*.
- El claim sobre participación profesional solo se publica si el proceso existe, está documentado y es operativo. Formulación aprobada: *"diseñada y auditada por profesionales de la salud mental"* + *"las conversaciones no se leen en tiempo real"*.
- No publicar precios hasta que el modelo esté confirmado. En esta etapa: captación de beta o lista de espera.

---

## Contenido legal

- Nunca inventar texto legal, políticas de privacidad, términos ni afirmaciones de cumplimiento o certificación.
- Si no hay texto aprobado, generar solo la estructura con el marcador `PENDIENTE_REVISION_LEGAL`.
- No afirmar "cumple con todos los estándares", "100% seguro", "certificado" ni equivalentes.
- Las páginas legales son rutas reales, no anclas.

---

## Arquitectura

```
/                         landing de usuarios
/profesionales            landing de profesionales
/privacidad
/terminos/usuarios
/terminos/profesionales
/ayuda-urgente
```

Separación de datos obligatoria desde el primer commit:

- Identidad de la cuenta separada del contenido conversacional.
- Identificador aleatorio para las conversaciones, no derivado del ID de usuario.
- Permisos por rol. El rol profesional no tiene ninguna consulta posible sobre datos de usuarios.
- Registro de accesos humanos a contenido conversacional.
- Kill switch del chat.
- Versionado de modelo y de prompts del sistema.

---

## Convenciones de trabajo

- Antes de editar, mostrar la lista de archivos a tocar y esperar confirmación.
- Commits chicos y temáticos.
- Después de cada tanda: `lint`, `typecheck`, `build` y `npm run check:claims`.
- `npm run check:claims` debe pasar. Si falla, el copy se corrige — no se agrega al allowlist sin decisión de producto.
- No introducir dependencias nuevas sin justificarlas.
- Mobile first. Respetar `prefers-reduced-motion`. Sin scroll-jacking ni carruseles automáticos.

---

## Contexto regulatorio de referencia

Para entender el porqué de las reglas anteriores:

- **Res. GMC MERCOSUR 25/21** (incorporada por Disp. ANMAT 64/2025): define producto médico como aquello "destinado por el fabricante" a "diagnóstico, prevención, seguimiento, tratamiento o alivio de una enfermedad". La Regla 11 clasifica el software que informa decisiones diagnósticas o terapéuticas en clase II, III o IV según el impacto.
- **Guía ANMAT SaMD/MLMD**: excluye expresamente el "software para bienestar (Wellness)", con cuatro criterios de exclusión acumulativos.
- **Ley 25.326**, arts. 7 y 8: los datos de salud son sensibles; su tratamiento está reservado a establecimientos sanitarios y profesionales de la salud. Este es el bloqueante legal abierto del proyecto.
- **Ley 26.529**: historia clínica, guarda y custodia.
- **Ley 24.240**: la publicidad integra la oferta y obliga al proveedor.

---

## Estado

- Fase: landing publicada y prototipo en diseño.
- Bloqueante legal abierto: base jurídica para el tratamiento de conversaciones emocionales (Ley 25.326, art. 8). Pendiente de dictamen. **No incorporar usuarios reales hasta que esté resuelto.**
- Alpha con conversaciones sintéticas únicamente hasta nuevo aviso.
