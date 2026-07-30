import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, CalendarDays, CreditCard } from "lucide-react"

const agendaSlots = [
  { time: "10:00", label: "Turno confirmado" },
  { time: "11:30", label: "Recordatorio enviado" },
  { time: "14:00", label: "Disponible" },
]

/**
 * Full-width strip, deliberately lighter than the dark Pricing section right
 * above it so it reads as a distinct destination for professionals landing
 * here by mistake — not a footnote of the beta signup.
 */
export function ProfessionalCTA() {
  return (
    <section className="relative py-16 md:py-24 bg-menta overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Copy */}
          <div className="text-center lg:text-left">
            <span className="inline-flex items-center gap-2 bg-white text-verde-profundo font-semibold text-xs uppercase tracking-widest px-4 py-2 rounded-full shadow-sm ring-1 ring-verde/15">
              Amira para profesionales
            </span>

            <h2 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-semibold text-navy leading-tight text-balance">
              ¿Trabajás en{" "}
              <span className="accent-italic text-verde-profundo">salud mental?</span>
            </h2>

            <p className="mt-6 text-lg sm:text-xl text-navy/70 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Conocé cómo Amira puede ayudarte a simplificar la gestión de tu
              práctica, desde la agenda y los turnos hasta los recordatorios y
              cobros.
            </p>

            <div className="mt-8">
              <Button
                asChild
                size="lg"
                className="bg-verde-profundo hover:bg-verde-activo text-white rounded-full px-8 py-6 text-base font-semibold shadow-lg shadow-verde-profundo/20 transition-colors duration-300"
              >
                <Link href="/profesionales" className="inline-flex items-center gap-2">
                  Conocer Amira para profesionales
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Simple agenda/turnos/cobros illustration — no patient or
              clinical data of any kind. */}
          <div className="flex justify-center lg:justify-end">
            <div className="bg-white rounded-3xl shadow-xl shadow-verde-profundo/10 p-6 ring-1 ring-verde/10 w-full max-w-sm">
              <div className="flex items-center justify-between mb-5">
                <p className="font-serif font-semibold text-navy">Tu agenda</p>
                <CalendarDays className="w-4 h-4 text-verde" aria-hidden="true" />
              </div>
              <div className="space-y-2.5">
                {agendaSlots.map((slot) => (
                  <div
                    key={slot.time}
                    className="flex items-center gap-3 bg-arena rounded-xl px-3 py-2.5"
                  >
                    <span className="text-xs font-semibold text-verde-profundo w-12 shrink-0">
                      {slot.time}
                    </span>
                    <span className="text-xs text-navy/70">{slot.label}</span>
                  </div>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-2 text-xs text-navy/50">
                <CreditCard className="w-3.5 h-3.5 text-verde" aria-hidden="true" />
                Cobros organizados, con comprobantes claros.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
