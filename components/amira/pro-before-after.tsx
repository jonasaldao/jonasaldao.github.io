import { Check } from "lucide-react"

const hoy = [
  "La agenda en el teléfono, los cobros en una planilla.",
  "Recordar a mano quién tiene turno y quién no pagó.",
  "Tres herramientas distintas que no se hablan entre sí.",
]

const conAmira = [
  "Una sola agenda, que tus consultantes manejan solos.",
  "Recordatorios automáticos, sin que hagas nada.",
  "El estado de cada cobro, a la vista.",
]

export function ProBeforeAfter() {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          data-reveal
          className="text-3xl sm:text-4xl md:text-5xl font-semibold text-tinta text-center mb-14 text-balance"
        >
          Antes y <span className="accent-italic text-verde-profundo">después de Amira.</span>
        </h2>

        <div data-stagger className="grid md:grid-cols-2 gap-6">
          <div className="bg-arena rounded-[2rem] p-7 md:p-8 ring-1 ring-verde/10">
            <p className="text-xs font-semibold text-tinta/50 uppercase tracking-widest mb-5">
              Hoy
            </p>
            <ul className="space-y-3.5">
              {hoy.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className="mt-2 w-1.5 h-1.5 shrink-0 rounded-full bg-tinta/30"
                    aria-hidden="true"
                  />
                  <span className="text-tinta/70 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-tinta grain rounded-[2rem] p-7 md:p-8 ring-1 ring-white/10">
            <p className="text-xs font-semibold text-menta uppercase tracking-widest mb-5">
              Con Amira
            </p>
            <ul className="space-y-3.5">
              {conAmira.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-menta shrink-0 mt-0.5" aria-hidden="true" />
                  <span className="text-white/85 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
