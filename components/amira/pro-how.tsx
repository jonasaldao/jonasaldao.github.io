import { ShieldCheck, Lock, Video } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Creá y verificá tu perfil.",
    description: "Completá tu profesión y tu enfoque, y validá tu matrícula.",
  },
  {
    number: "02",
    title: "Configurá tu atención online.",
    description:
      "Definí disponibilidad, duración de sesión y tu enlace de videollamada.",
  },
  {
    number: "03",
    title: "Empezá a recibir turnos.",
    description:
      "Publicás tu perfil en el directorio y gestionás solicitudes, sesiones y cobros.",
  },
]

const trust = [
  { icon: ShieldCheck, label: "Matrícula verificada" },
  { icon: Lock, label: "Datos separados de la app de usuarios" },
  { icon: Video, label: "Atención exclusivamente online" },
]

export function ProHow() {
  return (
    <>
      <section
        id="como-funciona"
        className="relative py-24 md:py-32 bg-arena overflow-hidden"
      >
        <div
          className="blob-slow absolute -bottom-40 -left-32 w-[28rem] h-[28rem] rounded-full bg-menta/70 blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy text-center mb-16 md:mb-20 text-balance">
            <span data-split>Empezar te lleva</span>{" "}
            <span data-split className="accent-italic text-verde-profundo">
              una tarde.
            </span>
          </h2>

          <div className="relative">
            {/* Curvy connecting path — desktop only */}
            <svg
              className="hidden md:block absolute top-10 left-[15%] right-[15%] w-[70%] h-16 text-verde/30"
              viewBox="0 0 1000 60"
              fill="none"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <path
                d="M0 30 C 165 -10, 335 70, 500 30 S 835 70, 1000 30"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeDasharray="8 10"
                strokeLinecap="round"
              />
            </svg>

            <div data-stagger className="grid sm:grid-cols-3 gap-10 md:gap-6">
              {steps.map((step, i) => (
                <div
                  key={step.number}
                  className={`group relative flex flex-col items-center text-center ${
                    i === 1 ? "md:translate-y-10" : ""
                  }`}
                >
                  <div className="relative z-10 w-20 h-20 rounded-full bg-white shadow-md ring-1 ring-verde/15 flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg">
                    <span className="font-serif italic text-verde text-2xl font-semibold">
                      {step.number}
                    </span>
                  </div>

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
        </div>
      </section>

      {/* Privacy boundary — the separation is the product promise, not a footnote */}
      <section className="py-20 md:py-24 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            data-reveal="scale"
            className="relative rounded-[2rem] bg-tinta grain overflow-hidden px-6 py-12 sm:px-12 md:py-14"
          >
            <div
              className="aurora absolute -top-24 right-0 w-[24rem] h-[24rem] rounded-full bg-verde/25 blur-[100px] pointer-events-none"
              aria-hidden="true"
            />

            <div className="relative flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-14">
              <div className="max-w-md">
                <h2 className="text-2xl sm:text-3xl font-semibold text-white text-balance">
                  Confianza y{" "}
                  <span className="accent-italic text-menta">
                    privacidad.
                  </span>
                </h2>
                <p className="mt-4 text-white/70 leading-relaxed text-pretty">
                  La plataforma profesional no accede a las conversaciones ni a
                  los registros emocionales de la app de usuarios. Lo que tu
                  paciente elige compartir con vos, lo comparte de forma
                  explícita.
                </p>
              </div>

              <ul className="grid gap-3 sm:grid-cols-3 lg:flex-1">
                {trust.map((item) => (
                  <li
                    key={item.label}
                    className="flex flex-col gap-3 rounded-2xl bg-white/[0.07] ring-1 ring-white/12 px-5 py-5"
                  >
                    <item.icon className="w-5 h-5 shrink-0 text-menta" />
                    <span className="text-sm font-medium text-white/90 leading-snug">
                      {item.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
