import { ShieldCheck, Stethoscope, HeartHandshake } from "lucide-react"

const boundaries = [
  {
    icon: HeartHandshake,
    text: "Acompañamiento, no diagnóstico.",
  },
  {
    icon: Stethoscope,
    text: "Criterios revisados por profesionales.",
  },
  {
    icon: ShieldCheck,
    text: "Disponible para mayores de 18 años.",
  },
]

export function Differentiator() {
  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2
          data-reveal
          className="text-4xl sm:text-5xl md:text-6xl font-semibold text-navy leading-tight text-balance"
        >
          Esto no reemplaza a un profesional.{" "}
          <span className="accent-italic text-verde-profundo">Lo acerca.</span>
        </h2>

        {/* The claim above is a promise — this is the fine print that keeps it honest. */}
        <p
          data-reveal
          data-delay="0.1"
          className="mt-8 text-lg text-navy/60 leading-relaxed max-w-2xl mx-auto text-pretty"
        >
          Amira es una inteligencia artificial de acompañamiento emocional. No es
          un profesional de la salud, no realiza diagnósticos y no es un servicio
          de emergencias. Sus contenidos y criterios de seguridad son revisados
          por profesionales.
        </p>

        <div
          data-stagger
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          {boundaries.map((item) => (
            <span
              key={item.text}
              className="inline-flex items-center gap-2.5 bg-arena text-verde-profundo font-medium text-sm px-5 py-3 rounded-full ring-1 ring-verde/10"
            >
              <item.icon className="w-4 h-4 text-verde" />
              {item.text}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
