import { X, Check, ArrowRight, ArrowDown } from "lucide-react"

const beforeItems = [
  "Guardarte todo.",
  "Esperar a sentirte peor.",
  "No saber qué hacer con lo que sentís.",
]

const afterItems = [
  "Tener un espacio propio.",
  "Entender mejor tus emociones.",
  "Contar con herramientas cuando las necesitás.",
  "Saber cuándo es momento de pedir más ayuda.",
]

export function Transformation() {
  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy text-center mb-16 md:mb-20 text-balance">
          <span data-split className="block">La diferencia no es hablar más.</span>
          <span data-split className="accent-italic text-teal-dark block mt-2">
            Es sentirte acompañado.
          </span>
        </h2>

        <div className="relative grid md:grid-cols-[1fr_auto_1.05fr] gap-8 md:gap-6 items-center">
          {/* Before — muted, slightly tilted paper */}
          <div
            data-reveal
            style={{ transform: "rotate(-1.5deg)" } as React.CSSProperties}
            className="bg-sand rounded-3xl p-8 ring-1 ring-navy/5"
          >
            <h3 className="font-serif text-muted-foreground font-semibold text-xl mb-6">
              Antes
            </h3>
            <div className="space-y-4">
              {beforeItems.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <X className="w-5 h-5 text-[#94A3B8] flex-shrink-0" />
                  <span className="text-muted-foreground text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Arrow */}
          <div data-reveal="scale" data-delay="0.25" className="flex justify-center">
            <span className="w-14 h-14 rounded-full bg-teal-light flex items-center justify-center text-teal-dark shadow-md">
              <ArrowRight className="hidden md:block w-6 h-6" />
              <ArrowDown className="md:hidden w-6 h-6" />
            </span>
          </div>

          {/* After — elevated gradient card */}
          <div
            data-reveal
            data-delay="0.15"
            className="relative bg-gradient-to-br from-teal to-teal-dark rounded-3xl p-8 md:p-10 shadow-2xl shadow-teal/30 md:scale-[1.04]"
          >
            <div
              className="aurora absolute -top-16 -right-16 w-48 h-48 rounded-full bg-teal-light/25 blur-2xl pointer-events-none"
              aria-hidden="true"
            />
            <h3 className="relative font-serif accent-italic text-white font-semibold text-2xl mb-6">
              Con Amira
            </h3>
            <div className="relative space-y-4">
              {afterItems.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <span className="w-6 h-6 shrink-0 rounded-full bg-white/15 flex items-center justify-center">
                    <Check className="w-3.5 h-3.5 text-teal-light" />
                  </span>
                  <span className="text-white text-lg">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
