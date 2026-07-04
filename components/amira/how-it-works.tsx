import { Button } from "@/components/ui/button"

const steps = [
  {
    number: "01",
    title: "Creá tu cuenta.",
    description: "Sin tarjeta, sin formularios largos.",
  },
  {
    number: "02",
    title: "Contanos cómo te sentís.",
    description: "Un check-in inicial de 2 minutos.",
  },
  {
    number: "03",
    title: "Recibí acompañamiento personalizado.",
    description: "IA + herramientas adaptadas a vos.",
  },
  {
    number: "04",
    title: "Construí tu espacio de bienestar.",
    description: "Tu historial, tus herramientas, tu ritmo.",
  },
]

export function HowItWorks() {
  return (
    <section id="como-funciona" className="relative py-24 md:py-32 bg-teal-mist overflow-hidden">
      <div
        className="blob-slow absolute -bottom-40 -left-32 w-[28rem] h-[28rem] rounded-full bg-teal-light/70 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy text-center mb-16 md:mb-24 text-balance">
          <span data-split>Empezar es</span>{" "}
          <span data-split className="accent-italic text-teal-dark">
            rápido y sencillo.
          </span>
        </h2>

        {/* Steps */}
        <div className="relative">
          {/* Curvy connecting path - Desktop */}
          <svg
            className="hidden md:block absolute top-10 left-[8%] right-[8%] w-[84%] h-16 text-teal/30"
            viewBox="0 0 1000 60"
            fill="none"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path
              d="M0 30 C 125 -10, 210 70, 333 30 S 540 -10, 666 30 S 875 70, 1000 30"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeDasharray="8 10"
              strokeLinecap="round"
            />
          </svg>

          <div data-stagger className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-5">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`group relative flex flex-col items-center text-center ${
                  i % 2 === 1 ? "md:translate-y-10" : ""
                }`}
              >
                {/* Number Circle */}
                <div className="relative z-10 w-20 h-20 rounded-full bg-white shadow-md ring-1 ring-teal/15 flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                  <span className="font-serif italic text-teal text-2xl font-semibold">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <h3 className="font-serif font-semibold text-navy text-xl mb-2 text-balance">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div data-reveal className="mt-20 md:mt-24 text-center">
          <Button
            asChild
            size="lg"
            data-magnetic
            className="bg-teal-dark hover:bg-teal text-white rounded-full px-9 py-7 text-lg font-semibold shadow-xl shadow-teal/20 transition-colors duration-300"
          >
            <a href="#pricing">Probá gratis ahora</a>
          </Button>
        </div>
      </div>
    </section>
  )
}
