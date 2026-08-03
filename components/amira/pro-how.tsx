import { AgendaMockup, ConfigMockup, PerfilMockup } from "./pro-mockups"

const steps = [
  {
    number: "01",
    title: "Creá y validá tu perfil",
    description:
      "Completás tu información profesional y validamos tu matrícula antes de publicarte en el directorio.",
    fragment: <PerfilMockup />,
  },
  {
    number: "02",
    title: "Configurá tu práctica",
    description:
      "Definís tu modalidad, tu disponibilidad y qué información se ve en tu perfil.",
    fragment: <ConfigMockup />,
  },
  {
    number: "03",
    title: "Empezá a recibir turnos",
    description:
      "Tu perfil se publica en el directorio y la agenda se ordena sola.",
    fragment: <AgendaMockup compact />,
  },
]

export function ProHow() {
  return (
    <section
      id="como-funciona"
      className="relative py-16 md:py-24 bg-arena overflow-hidden"
    >
      <div
        className="blob-slow absolute -bottom-40 -left-32 w-[28rem] h-[28rem] rounded-full bg-menta/70 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-14 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-tinta mb-5 text-balance">
            <span data-split>Tres pasos y ya estás</span>{" "}
            <span data-split className="accent-italic text-verde-profundo">
              recibiendo turnos.
            </span>
          </h2>
        </div>

        <ol className="space-y-8 md:space-y-10">
          {steps.map((step, i) => (
            <li
              key={step.number}
              data-reveal
              data-delay={`${i * 0.08}`}
              className={`flex flex-col md:flex-row items-center gap-7 md:gap-10 bg-white rounded-[2rem] p-7 sm:p-9 md:p-10 shadow-sm ring-1 ring-verde/10 transition-shadow duration-300 hover:shadow-lg ${
                i % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <span
                className="shrink-0 font-serif italic text-6xl sm:text-7xl font-semibold text-verde-profundo select-none"
                aria-hidden="true"
              >
                {step.number}
              </span>

              <div className="flex-1 text-center md:text-left">
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-tinta mb-2.5 text-balance">
                  {step.title}
                </h3>
                <p className="text-tinta/65 leading-relaxed max-w-md mx-auto md:mx-0">
                  {step.description}
                </p>
              </div>

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
