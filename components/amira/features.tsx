import { BarChart3, MessageCircle, Leaf, UserCheck } from "lucide-react"

export function Features() {
  return (
    <section className="py-24 md:py-32 bg-sand overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy text-center mb-16 md:mb-20 text-balance">
          <span data-split>Un espacio que te acompaña</span>{" "}
          <span data-split className="accent-italic text-verde-profundo">
            todos los días.
          </span>
        </h2>

        {/* Bento grid */}
        <div data-stagger className="grid md:grid-cols-3 gap-5 md:gap-6">
          {/* Flagship card — IA, spans 2 columns */}
          <div className="group md:col-span-2 relative bg-tinta text-white rounded-[2rem] p-8 md:p-10 overflow-hidden transition-transform duration-300 hover:-translate-y-1.5">
            <div
              className="aurora absolute -top-24 -right-24 w-72 h-72 rounded-full bg-verde/40 blur-3xl"
              aria-hidden="true"
            />
            <div className="relative">
              <div className="w-14 h-14 bg-verde rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
                <MessageCircle className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl font-semibold mb-3">
                IA disponible <span className="accent-italic text-menta">cuando la necesitás</span>
              </h3>
              <p className="text-white/70 text-lg leading-relaxed max-w-lg">
                Accedé a acompañamiento emocional en cualquier momento. Supervisado
                por profesionales de la salud.
              </p>
            </div>
          </div>

          {/* Check-ins */}
          <div className="group bg-white rounded-[2rem] p-8 shadow-sm ring-1 ring-verde/10 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg">
            <div className="w-14 h-14 bg-menta rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
              <BarChart3 className="w-7 h-7 text-verde-profundo" />
            </div>
            <h3 className="font-serif text-2xl font-semibold text-navy mb-3">
              Check-ins emocionales
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Entendé cómo te sentís día a día. Observá tu evolución en el tiempo y
              empezá a conocerte mejor.
            </p>
          </div>

          {/* Herramientas */}
          <div className="group bg-menta/70 rounded-[2rem] p-8 ring-1 ring-verde/15 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg">
            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
              <Leaf className="w-7 h-7 text-verde" />
            </div>
            <h3 className="font-serif text-2xl font-semibold text-verde-profundo mb-3">
              Herramientas para el momento exacto
            </h3>
            <p className="text-verde-profundo/75 leading-relaxed">
              Respiración guiada, micro-ejercicios, caja de herramientas útiles.
            </p>
          </div>

          {/* Profesionales — spans 2 columns */}
          <div className="group md:col-span-2 bg-white rounded-[2rem] p-8 md:p-10 shadow-sm ring-1 ring-verde/10 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg flex flex-col sm:flex-row sm:items-center gap-6">
            <div className="w-14 h-14 shrink-0 bg-coral/10 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
              <UserCheck className="w-7 h-7 text-coral" />
            </div>
            <div>
              <h3 className="font-serif text-2xl md:text-3xl font-semibold text-navy mb-3">
                Acceso a profesionales
              </h3>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Cuando estés listo o cuando quieras, conectá con psicólogos u
                otros profesionales verificados a través de la plataforma.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
