import { Check, MessageCircle, Leaf, BarChart3 } from "lucide-react"
import { CheckinScale } from "./checkin-scale"

const steps = [
  {
    number: "01",
    title: "Creá tu espacio",
    description: "Registrate de manera simple y configurá tus preferencias.",
    fragment: (
      <div className="bg-arena/70 rounded-2xl p-4 ring-1 ring-verde/10">
        <p className="text-xs font-semibold text-navy/50 uppercase tracking-wide mb-3">
          Tu cuenta
        </p>
        <div className="space-y-2">
          <div className="h-9 rounded-lg bg-white ring-1 ring-verde/10 flex items-center px-3 text-sm text-navy/40">
            vos@email.com
          </div>
          <div className="flex items-center gap-2 text-xs text-navy/60">
            <span className="w-4 h-4 rounded border border-verde/30 bg-white flex items-center justify-center shrink-0">
              <Check className="w-3 h-3 text-verde" />
            </span>
            Soy mayor de 18 años
          </div>
        </div>
      </div>
    ),
  },
  {
    number: "02",
    title: "Contá cómo te sentís",
    description: "Empezá con un check-in breve para reconocer cómo estás hoy.",
    fragment: (
      <div className="bg-arena/70 rounded-2xl p-4 ring-1 ring-verde/10">
        <CheckinScale
          compact
          legend="¿Cómo estás hoy?"
          legendClassName="text-xs font-semibold text-navy/50 uppercase tracking-wide mb-3"
        />
      </div>
    ),
  },
  {
    number: "03",
    title: "Elegí cómo querés acompañarte",
    description:
      "Podés conversar, explorar una herramienta o simplemente registrar tu día.",
    fragment: (
      <div className="bg-arena/70 rounded-2xl p-4 ring-1 ring-verde/10 space-y-2">
        {[
          { icon: MessageCircle, label: "Conversar" },
          { icon: Leaf, label: "Explorar una herramienta" },
          { icon: BarChart3, label: "Registrar tu día" },
        ].map((opt) => (
          <div
            key={opt.label}
            className="flex items-center gap-2.5 bg-white rounded-xl px-3 py-2 ring-1 ring-verde/5"
          >
            <opt.icon className="w-3.5 h-3.5 text-verde shrink-0" />
            <span className="text-xs text-navy/70">{opt.label}</span>
          </div>
        ))}
      </div>
    ),
  },
]

const staggerOffset = ["md:translate-y-0", "md:translate-y-5", "md:-translate-y-3"]

export function HowItWorks() {
  return (
    <section
      id="como-funciona"
      tabIndex={-1}
      className="relative py-16 md:py-24 bg-arena overflow-hidden scroll-mt-28 focus:outline-none"
    >
      <div
        className="blob-slow absolute -bottom-40 -left-32 w-[28rem] h-[28rem] rounded-full bg-menta/70 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-14 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-5 text-balance">
            <span data-split>Empezar es</span>{" "}
            <span data-split className="accent-italic text-verde-profundo">
              simple.
            </span>
          </h2>
          <p data-reveal className="text-lg sm:text-xl text-navy/65 leading-relaxed text-balance">
            Amira te ayuda a encontrar una forma de empezar, según lo que
            necesites en cada momento.
          </p>
        </div>

        {/* Narrative steps — order is carried by the <ol>/<li> markup itself,
            independent of any visual connector or animation. */}
        <ol className="space-y-8 md:space-y-10">
          {steps.map((step, i) => (
            <li
              key={step.number}
              data-reveal
              data-delay={`${i * 0.08}`}
              className={`flex flex-col md:flex-row items-center gap-7 md:gap-10 bg-white rounded-[2rem] p-7 sm:p-9 md:p-10 shadow-sm ring-1 ring-verde/10 transition-shadow duration-300 hover:shadow-lg ${
                i % 2 === 1 ? "md:flex-row-reverse" : ""
              } ${staggerOffset[i] ?? ""}`}
            >
              {/* Big number */}
              <span
                className="shrink-0 font-serif italic text-6xl sm:text-7xl font-semibold text-verde-profundo select-none"
                aria-hidden="true"
              >
                {step.number}
              </span>

              {/* Copy */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-navy mb-2.5 text-balance">
                  {step.title}
                </h3>
                <p className="text-navy/65 leading-relaxed max-w-md mx-auto md:mx-0">
                  {step.description}
                </p>
              </div>

              {/* Interface fragment */}
              <div className="shrink-0 w-full sm:w-64 md:w-56">
                {step.fragment}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
