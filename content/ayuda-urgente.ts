/**
 * Recursos de ayuda urgente — Argentina.
 * Única fuente de verdad para estos datos: no hardcodear números en
 * componentes. Revalidar contra la fuente oficial según `revalidarCada`.
 */
export const ayudaUrgente = {
  verificadoAl: "2026-07-27",
  revalidarCada: "6 meses",
  recursos: [
    {
      nombre:
        "Dispositivo Nacional de Orientación y Apoyo en la Urgencia de Salud Mental",
      numero: "0800-999-0091",
      alcance: "Nacional, 24 horas, todos los días",
    },
    {
      nombre: "Línea 135 — Salud Mental Escucha",
      numero: "135",
      alcance: "CABA y Gran Buenos Aires, gratuita",
    },
    {
      nombre: "Centro de Asistencia al Suicida",
      numero: "(011) 5275-1135",
      alcance: "Todo el país",
    },
    {
      nombre: "Centro de Asistencia al Suicida",
      numero: "0800-345-1435",
      alcance: "Todo el país",
    },
    {
      nombre: "Emergencias médicas (SAME)",
      numero: "107",
      alcance: "Nacional",
    },
    {
      nombre: "Salud Mental CABA",
      numero: "0800-333-1665",
      alcance: "Ciudad de Buenos Aires",
    },
  ],
} as const
