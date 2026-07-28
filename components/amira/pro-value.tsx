import { CalendarClock, CreditCard, BadgeCheck, ShieldAlert } from "lucide-react"

const benefits = [
  {
    icon: CalendarClock,
    title: "Agenda más simple",
    description:
      "Definí tu disponibilidad, organizá turnos y automatizá recordatorios.",
  },
  {
    icon: CreditCard,
    title: "Cobros organizados",
    description:
      "Consultá el estado de los pagos y reducí el seguimiento manual.",
  },
  {
    icon: BadgeCheck,
    title: "Perfil verificado",
    description:
      "Creá un perfil profesional verificado para que nuevas personas puedan encontrarte.",
  },
]

export function ProValue() {
  return (
    <section
      id="beneficios"
      className="relative py-16 md:py-24 bg-sand overflow-hidden"
    >
      <div
        data-parallax="10"
        className="blob absolute top-10 -right-40 w-[26rem] h-[26rem] rounded-full bg-arena blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy leading-tight text-balance">
            <span data-split>Sostener una práctica online</span>{" "}
            <span data-split className="accent-italic text-verde-profundo">
              no debería ser un segundo trabajo.
            </span>
          </h2>
          <p
            data-reveal
            data-delay="0.1"
            className="mt-6 text-lg sm:text-xl text-navy/65 leading-relaxed text-pretty"
          >
            Amira se encarga del trabajo operativo para que vos te concentres en
            lo que importa.
          </p>
        </div>

        {/* Benefits */}
        <div data-stagger className="grid sm:grid-cols-3 gap-5 md:gap-6">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="group bg-white rounded-[2rem] p-7 md:p-8 ring-1 ring-verde/10 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg"
            >
              <div className="w-14 h-14 bg-menta rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                <benefit.icon className="w-6 h-6 text-verde-profundo" />
              </div>
              <h3 className="font-serif font-semibold text-navy text-xl mb-2.5 text-balance">
                {benefit.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Scope notice — prominent, not fine print */}
        <div
          data-reveal
          className="mt-10 md:mt-12 flex flex-col sm:flex-row items-start gap-5 bg-white rounded-[2rem] p-7 md:p-8 ring-2 ring-verde-profundo/20 shadow-sm"
        >
          <span className="w-12 h-12 shrink-0 rounded-2xl bg-verde-profundo/10 flex items-center justify-center">
            <ShieldAlert className="w-6 h-6 text-verde-profundo" />
          </span>
          <p className="text-lg text-navy/80 leading-relaxed">
            <strong className="text-navy font-semibold">
              En esta primera versión, Amira Profesionales es una herramienta
              administrativa.
            </strong>{" "}
            Los profesionales no acceden a conversaciones, check-ins, alertas,
            resúmenes ni historiales de las personas usuarias.
          </p>
        </div>
      </div>
    </section>
  )
}
