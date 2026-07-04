import { Lock, Stethoscope } from "lucide-react"

const badges = [
  {
    icon: Lock,
    text: "Datos encriptados",
  },
  {
    icon: Stethoscope,
    text: "Supervisión clínica activa",
  },
]

export function Privacy() {
  return (
    <section id="privacidad" className="py-24 md:py-32 bg-sand overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Lock inside breathing rings */}
        <div data-reveal="scale" className="relative w-24 h-24 mx-auto mb-10">
          <div className="breathe absolute inset-0 rounded-full bg-teal-light/60" aria-hidden="true" />
          <div
            className="breathe absolute -inset-4 rounded-full border border-teal/20"
            style={{ animationDelay: "1.2s" }}
            aria-hidden="true"
          />
          <div className="absolute inset-0 m-auto w-16 h-16 rounded-full bg-teal flex items-center justify-center shadow-lg shadow-teal/30">
            <Lock className="w-7 h-7 text-white" />
          </div>
        </div>

        <h2
          data-reveal
          className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-6 text-balance"
        >
          Tu privacidad es{" "}
          <span className="accent-italic text-teal-dark">parte del cuidado.</span>
        </h2>

        <p
          data-reveal
          data-delay="0.1"
          className="text-lg sm:text-xl text-navy/65 leading-relaxed mb-10 max-w-2xl mx-auto"
        >
          Sabemos que hablar de emociones requiere confianza. Por eso tus datos
          están protegidos y gestionados bajo estándares de seguridad diseñados
          para información sensible.
        </p>

        <div
          data-reveal
          data-delay="0.2"
          className="flex flex-wrap items-center justify-center gap-4"
        >
          {badges.map((badge, index) => (
            <div
              key={index}
              className="flex items-center gap-2.5 bg-white text-teal-dark px-5 py-3 rounded-full shadow-sm ring-1 ring-teal/15"
            >
              <badge.icon className="w-5 h-5 text-teal" />
              <span className="font-semibold">{badge.text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
