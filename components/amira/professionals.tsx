import { Button } from "@/components/ui/button"
import { Check, Calendar, Settings, Bell, Users } from "lucide-react"

const features = [
  {
    icon: Calendar,
    title: "Seguimiento continuo entre sesiones",
    description:
      "Tus pacientes hacen check-ins diarios. Llegás a cada sesión con contexto real de cómo estuvo su semana.",
  },
  {
    icon: Settings,
    title: "Gestión integrada de tu práctica",
    description:
      "Agenda, cobros automatizados y perfil verificado en el directorio de Amira — todo en un solo lugar.",
  },
  {
    icon: Bell,
    title: "Alertas clínicas en tiempo real",
    description:
      "La IA detecta señales de riesgo y te notifica de inmediato. Protocolo de escalada definido desde el día 1.",
  },
  {
    icon: Users,
    title: "Visibilidad y nuevos pacientes",
    description:
      "Aparecé en el directorio verificado de Amira. Recibí derivaciones de jóvenes que buscan acompañamiento.",
  },
]

const painPoints = [
  { emoji: "📋", text: "Notas post-sesión dispersas entre papel y WhatsApp" },
  { emoji: "📅", text: "Horas no remuneradas coordinando agenda y cobros" },
  { emoji: "💬", text: "Sin visibilidad de cómo está tu paciente entre consultas" },
]

const planFeatures = [
  "Perfil verificado en directorio público de Amira",
  "Gestión de agenda, turnos y recordatorios automáticos",
  "Cobros digitalizados",
]

export function Professionals() {
  return (
    <section id="profesionales" className="relative py-24 md:py-32 bg-white overflow-hidden">
      <div
        className="blob absolute top-20 -right-40 w-[26rem] h-[26rem] rounded-full bg-teal-mist blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section eyebrow */}
        <div data-reveal className="text-center mb-8">
          <span className="inline-block bg-teal-light text-teal-dark font-semibold text-sm uppercase tracking-widest px-4 py-2 rounded-full">
            Para profesionales de la salud
          </span>
        </div>

        <h3
          data-reveal
          className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy text-center mb-3 text-balance"
        >
          Más que una herramienta.
        </h3>
        <h4
          data-reveal
          data-delay="0.1"
          className="font-serif accent-italic text-2xl sm:text-3xl text-teal-dark text-center mb-5"
        >
          Menos gestión. Más tiempo para tus pacientes.
        </h4>

        <p
          data-reveal
          data-delay="0.15"
          className="text-center text-muted-foreground text-lg max-w-xl mx-auto mb-16"
        >
          Amira se encarga del trabajo operativo para que vos te concentrés en lo
          que importa.
        </p>

        {/* Pain Points */}
        <div data-stagger className="grid md:grid-cols-3 gap-5 mb-14">
          {painPoints.map((point, i) => (
            <div
              key={i}
              style={
                { transform: `rotate(${i % 2 === 0 ? -1 : 1.2}deg)` } as React.CSSProperties
              }
              className="bg-sand rounded-3xl p-6 flex items-start gap-4 ring-1 ring-navy/5"
            >
              <span className="text-3xl" aria-hidden="true">
                {point.emoji}
              </span>
              <p className="text-navy/70 leading-relaxed">{point.text}</p>
            </div>
          ))}
        </div>

        {/* Features Grid */}
        <div data-stagger className="grid sm:grid-cols-2 gap-5 md:gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-3xl p-7 ring-1 ring-teal/10 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="w-12 h-12 bg-teal-light rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                <feature.icon className="w-6 h-6 text-teal-dark" />
              </div>
              <h3 className="font-serif font-semibold text-navy text-xl mb-2.5">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Pricing Card */}
        <div data-reveal="scale" className="max-w-md mx-auto">
          <div className="relative rounded-[2rem] p-[2px] bg-gradient-to-br from-teal via-teal-light to-coral/60 shadow-xl shadow-teal/15">
            <div className="bg-white rounded-[calc(2rem-2px)] p-7 md:p-9">
              <h3 className="font-serif text-2xl font-semibold text-navy mb-2">
                Suscripción profesional
              </h3>
              <p className="font-serif accent-italic text-4xl text-teal-dark mb-7">
                USD 20
                <span className="text-lg not-italic font-sans font-normal text-muted-foreground">
                  /mes
                </span>
              </p>

              <div className="space-y-3.5 mb-8">
                {planFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" />
                    <span className="text-navy/75">{feature}</span>
                  </div>
                ))}
              </div>

              <Button
                asChild
                data-magnetic
                className="w-full bg-teal-dark hover:bg-teal text-white rounded-full py-6 text-lg font-semibold transition-colors duration-300"
              >
                <a href="#signup-pro">Quiero conocer más</a>
              </Button>

              <p className="text-center text-muted-foreground text-sm mt-4">
                Primeros 3 meses gratuitos para profesionales que se sumen a la
                beta.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
