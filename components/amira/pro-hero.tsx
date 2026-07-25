import { Button } from "@/components/ui/button"
import { CalendarDays, Video, CreditCard, ArrowDown } from "lucide-react"
import { AuroraCanvas } from "./aurora-canvas"

const highlights = [
  {
    icon: CalendarDays,
    title: "Agenda automatizada",
    description:
      "Definí tu disponibilidad una vez. La plataforma ordena el resto.",
  },
  {
    icon: Video,
    title: "Turnos y sesiones online",
    description:
      "Solicitudes, reprogramaciones y videollamadas en un mismo lugar.",
  },
  {
    icon: CreditCard,
    title: "Cobros organizados",
    description: "Seguí lo cobrado y lo pendiente, con comprobantes claros.",
  },
]

export function ProHero() {
  return (
    <section className="relative overflow-hidden bg-ink grain">
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <AuroraCanvas className="absolute inset-0" />
        <div className="blob absolute -bottom-52 right-1/4 w-[30rem] h-[30rem] rounded-full bg-coral/10 blur-[110px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-14 lg:gap-12 items-center">
          {/* Copy */}
          <div className="text-center lg:text-left">
            <span
              className="hero-rise inline-block bg-white/10 text-teal-light font-semibold text-xs uppercase tracking-widest px-4 py-2 rounded-full ring-1 ring-white/15"
              style={{ "--rise-delay": "0.05s" } as React.CSSProperties}
            >
              Amira para profesionales
            </span>

            <h1 className="mt-7 text-4xl sm:text-5xl md:text-6xl xl:text-[4.25rem] font-semibold text-white leading-[1.06] text-balance">
              <span data-split="chars" data-delay="0.1" className="block">
                Menos gestión.
              </span>
              <span
                data-split="chars"
                data-delay="0.35"
                className="block accent-italic text-teal-light"
              >
                Más tiempo para tus pacientes.
              </span>
            </h1>

            <p
              className="hero-rise mt-7 text-lg sm:text-xl text-white/70 max-w-xl mx-auto lg:mx-0 text-pretty leading-relaxed"
              style={{ "--rise-delay": "0.8s" } as React.CSSProperties}
            >
              Agenda, turnos, sesiones y cobros desde un solo lugar — y contexto
              real de cómo estuvo tu paciente entre consultas.
            </p>

            <div
              className="hero-rise mt-10 flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-5"
              style={{ "--rise-delay": "0.95s" } as React.CSSProperties}
            >
              <Button
                asChild
                size="lg"
                data-magnetic
                className="bg-teal hover:bg-teal-light hover:text-teal-dark text-white rounded-full px-9 py-7 text-lg font-semibold shadow-xl shadow-teal/30 transition-colors duration-300"
              >
                <a href="#plan-pro">Sumarme a la beta</a>
              </Button>
              <a
                href="#beneficios"
                className="group inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm font-medium py-3"
              >
                Ver cómo funciona
                <ArrowDown
                  size={15}
                  className="transition-transform group-hover:translate-y-0.5"
                />
              </a>
            </div>

            <p
              className="hero-rise mt-7 text-sm text-white/45"
              style={{ "--rise-delay": "1.05s" } as React.CSSProperties}
            >
              Atención exclusivamente online · Matrícula verificada
            </p>
          </div>

          {/* Highlights */}
          <div data-stagger className="space-y-3.5">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 bg-white/[0.06] backdrop-blur-md rounded-3xl p-5 sm:p-6 ring-1 ring-white/12"
              >
                <span className="w-12 h-12 shrink-0 rounded-2xl bg-teal/25 ring-1 ring-teal-light/20 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-teal-light" />
                </span>
                <div>
                  <p className="font-serif text-lg font-semibold text-white">
                    {item.title}
                  </p>
                  <p className="mt-1 text-sm text-white/60 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
