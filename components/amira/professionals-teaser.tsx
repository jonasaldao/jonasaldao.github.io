import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CalendarClock, Activity, BadgeCheck } from "lucide-react"

const highlights = [
  { icon: CalendarClock, label: "Agenda, turnos y cobros" },
  { icon: Activity, label: "Contexto entre sesiones" },
  { icon: BadgeCheck, label: "Perfil verificado" },
]

/**
 * Landing-side teaser only. The professional funnel lives at /profesionales —
 * a psychologist shouldn't have to scroll a pitch written for someone else.
 */
export function ProfessionalsTeaser() {
  return (
    <section
      id="profesionales"
      className="relative py-24 md:py-32 bg-white overflow-hidden"
    >
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          data-reveal="scale"
          className="relative rounded-[2rem] bg-tinta grain overflow-hidden px-6 py-12 sm:px-12 md:py-14"
        >
          <div
            className="aurora absolute -top-32 -right-16 w-[28rem] h-[28rem] rounded-full bg-verde/25 blur-[100px] pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative flex flex-col lg:flex-row lg:items-center gap-10 lg:gap-14">
            <div className="max-w-xl">
              <span className="inline-block bg-white/10 text-menta font-semibold text-xs uppercase tracking-widest px-4 py-2 rounded-full ring-1 ring-white/15">
                Para profesionales de la salud
              </span>

              <h2 className="mt-6 text-2xl sm:text-3xl md:text-4xl font-semibold text-white leading-tight text-balance">
                ¿Trabajás en salud mental?{" "}
                <span className="accent-italic text-menta">
                  Amira también es para vos.
                </span>
              </h2>

              <p className="mt-5 text-white/70 leading-relaxed text-pretty">
                Organizá agenda, turnos, sesiones y cobros desde un solo lugar — y
                llegá a cada consulta sabiendo cómo estuvo la semana de tu
                paciente.
              </p>

              <ul className="mt-7 flex flex-wrap gap-3">
                {highlights.map((item) => (
                  <li
                    key={item.label}
                    className="inline-flex items-center gap-2 rounded-full bg-white/[0.07] ring-1 ring-white/12 px-4 py-2 text-sm font-medium text-white/85"
                  >
                    <item.icon className="w-4 h-4 text-menta" />
                    {item.label}
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:ml-auto shrink-0">
              <Button
                asChild
                size="lg"
                data-magnetic
                className="bg-white hover:bg-menta text-verde-profundo rounded-full px-8 py-7 text-base font-semibold shadow-xl shadow-tinta/30 transition-colors duration-300"
              >
                <Link href="/profesionales" className="inline-flex items-center gap-2">
                  Conocer Amira para profesionales
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>

              <p className="mt-4 text-center text-white/45 text-sm">
                3 meses gratis en la beta
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
