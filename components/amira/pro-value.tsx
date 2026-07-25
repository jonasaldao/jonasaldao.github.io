import { Activity, CalendarClock, Bell, BadgeCheck } from "lucide-react"

const painPoints = [
  {
    before: "Notas post-sesión dispersas entre papel y WhatsApp",
    after: "Todo el historial de tu paciente en un solo lugar",
  },
  {
    before: "Horas no remuneradas coordinando agenda y cobros",
    after: "Agenda, turnos y cobros automatizados",
  },
  {
    before: "Sin visibilidad de cómo está tu paciente entre consultas",
    after: "Contexto real de su semana, antes de cada sesión",
  },
]

const features = [
  {
    icon: Activity,
    title: "Seguimiento continuo entre sesiones",
    description:
      "Tus pacientes hacen check-ins diarios. Llegás a cada sesión con contexto real de cómo estuvo su semana, no con un “¿cómo venís?” a ciegas.",
  },
  {
    icon: CalendarClock,
    title: "Agenda, turnos y cobros",
    description:
      "Definí tu disponibilidad una vez. Solicitudes, reprogramaciones, videollamadas y estado de pagos se ordenan solos.",
  },
  {
    icon: Bell,
    title: "Alertas clínicas en tiempo real",
    description:
      "La IA detecta señales de riesgo en las conversaciones de tus pacientes y te notifica. Protocolo de escalada definido desde el día uno.",
  },
  {
    icon: BadgeCheck,
    title: "Perfil verificado en el directorio",
    description:
      "Aparecé en el directorio público de Amira con tu matrícula validada y recibí solicitudes de turno de personas que ya están buscando ayuda.",
  },
]

export function ProValue() {
  return (
    <section
      id="beneficios"
      className="relative py-24 md:py-32 bg-sand overflow-hidden"
    >
      <div
        data-parallax="10"
        className="blob absolute top-10 -right-40 w-[26rem] h-[26rem] rounded-full bg-teal-mist blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy leading-tight text-balance">
            <span data-split>Sostener una práctica online</span>{" "}
            <span data-split className="accent-italic text-teal-dark">
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

        {/* Before → after */}
        <div data-stagger className="grid md:grid-cols-3 gap-5 mb-16">
          {painPoints.map((point) => (
            <div
              key={point.before}
              className="bg-white rounded-3xl p-6 ring-1 ring-navy/5 shadow-sm"
            >
              <p className="text-navy/45 text-sm leading-relaxed line-through decoration-navy/20">
                {point.before}
              </p>
              <p className="mt-4 text-teal-dark font-medium leading-relaxed">
                {point.after}
              </p>
            </div>
          ))}
        </div>

        {/* Features */}
        <div data-stagger className="grid sm:grid-cols-2 gap-5 md:gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group bg-white rounded-[2rem] p-7 md:p-8 ring-1 ring-teal/10 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg"
            >
              <div className="w-14 h-14 bg-teal-light rounded-2xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                <feature.icon className="w-6 h-6 text-teal-dark" />
              </div>
              <h3 className="font-serif font-semibold text-navy text-xl mb-2.5 text-balance">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
