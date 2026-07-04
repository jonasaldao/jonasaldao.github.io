import { Check } from "lucide-react"

const negations = [
  "No es una app de meditación.",
  "No es un chatbot genérico.",
  "No reemplaza a un profesional.",
]

const differentiators = [
  "Acompañamiento continuo con IA supervisada clínicamente",
  "Seguimiento emocional longitudinal — tu historia, no solo hoy",
  "Acceso a especialistas cuando estés listo/a",
]

export function Differentiator() {
  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-3 md:space-y-4 mb-14">
          {negations.map((line, i) => (
            <h2
              key={line}
              data-reveal
              data-delay={`${i * 0.15}`}
              className="text-4xl sm:text-5xl md:text-6xl font-semibold text-navy/30 leading-tight"
            >
              {line}
            </h2>
          ))}
        </div>

        <div data-reveal className="flex items-center gap-4 mb-10">
          <div className="h-px flex-1 max-w-24 bg-teal" />
          <p className="font-serif accent-italic text-2xl sm:text-3xl text-teal-dark">
            Amira combina tres cosas que normalmente están separadas:
          </p>
        </div>

        <div data-stagger className="space-y-5">
          {differentiators.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-4 bg-teal-mist rounded-2xl px-6 py-5 ring-1 ring-teal/10"
            >
              <span className="w-8 h-8 shrink-0 rounded-full bg-teal flex items-center justify-center mt-0.5">
                <Check className="w-4.5 h-4.5 text-white" />
              </span>
              <span className="text-navy text-lg sm:text-xl leading-relaxed">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
