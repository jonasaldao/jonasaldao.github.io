import { BarChart3, MessageCircle, Leaf, UserCheck, BadgeCheck } from "lucide-react"
import { CheckinScale } from "./checkin-scale"

const toolTopics = ["Estudio", "Vínculos", "Descanso", "Estrés"]

export function Presentation() {
  return (
    <section
      id="que-podes-hacer"
      tabIndex={-1}
      className="relative bg-tinta py-16 md:py-24 overflow-hidden grain scroll-mt-28 focus:outline-none"
    >
      {/* Aurora */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="aurora absolute top-0 left-1/4 w-[34rem] h-[34rem] rounded-full bg-verde/25 blur-[110px]" />
        <div className="blob-slow absolute -bottom-40 right-0 w-[28rem] h-[28rem] rounded-full bg-verde-profundo/40 blur-[100px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white mb-5 text-balance">
            <span data-split="chars">Distintas formas de</span>{" "}
            <span data-split="chars" className="accent-italic text-menta">
              acompañarte.
            </span>
          </h2>
          <p data-reveal className="text-white/70 text-lg sm:text-xl leading-relaxed text-balance">
            No todos los días necesitamos lo mismo. En Amira podés elegir
            cómo empezar.
          </p>
        </div>

        {/* Editorial bento — two larger primary blocks, two smaller complementary ones */}
        <div
          data-stagger
          className="grid sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-5"
        >
          {/* Block 1 — Check-in (large, wide) */}
          <div className="group sm:col-span-2 lg:col-span-2 lg:row-span-1 bg-white/[0.06] backdrop-blur-md rounded-[2rem] p-7 sm:p-9 ring-1 ring-white/12 transition-all duration-300 hover:bg-white/[0.09] hover:ring-white/20">
            <div className="flex flex-col md:flex-row md:items-center gap-7">
              <div className="flex-1">
                <span className="w-12 h-12 rounded-2xl bg-verde/25 ring-1 ring-menta/20 flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-menta" />
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-white mt-5 mb-2.5 text-balance">
                  Registrá cómo te sentís
                </h3>
                <p className="text-white/70 leading-relaxed max-w-sm">
                  Completá un check-in breve para reconocer cómo estás y
                  llevar un registro personal de tus emociones.
                </p>
              </div>

              {/* Interface fragment — plain mood scale, no score or interpretation */}
              <div
                className="shrink-0 w-full md:w-60 bg-white/95 rounded-2xl p-4 shadow-lg transition-transform duration-300 group-hover:-translate-y-1"
              >
                <CheckinScale
                  compact
                  legend="Check-in de hoy"
                  legendClassName="text-xs font-semibold text-navy/50 uppercase tracking-wide mb-3"
                />
              </div>
            </div>
          </div>

          {/* Block 2 — Conversá (large, tall) */}
          <div className="group lg:col-span-1 lg:row-span-2 bg-white/[0.06] backdrop-blur-md rounded-[2rem] p-7 sm:p-9 ring-1 ring-white/12 transition-all duration-300 hover:bg-white/[0.09] hover:ring-white/20 flex flex-col">
            <span className="w-12 h-12 rounded-2xl bg-verde/25 ring-1 ring-menta/20 flex items-center justify-center">
              <MessageCircle className="w-6 h-6 text-menta" />
            </span>
            <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-white mt-5 mb-2.5 text-balance">
              Conversá y reflexioná a tu ritmo
            </h3>
            <p className="text-white/70 leading-relaxed">
              Encontrá un espacio de conversación y reflexión con una IA
              diseñada para acompañarte con empatía y límites claros.
            </p>

            {/* Interface fragment — cropped chat exchange */}
            <div
              aria-hidden="true"
              className="mt-7 space-y-3 transition-transform duration-300 group-hover:-translate-y-1"
            >
              <div className="flex justify-start">
                <div className="bg-white text-navy rounded-2xl rounded-tl-sm px-4 py-3 max-w-[85%] shadow-sm text-sm">
                  ¿Cómo estás hoy?
                </div>
              </div>
              <div className="flex justify-end">
                <div className="bg-verde-profundo text-white rounded-2xl rounded-tr-sm px-4 py-3 max-w-[85%] shadow-sm text-sm">
                  Con mucho encima por el examen de mañana
                </div>
              </div>
              <div className="flex justify-start">
                <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm flex gap-1.5 items-center">
                  <span className="typing-dot w-1.5 h-1.5 rounded-full bg-verde" />
                  <span className="typing-dot w-1.5 h-1.5 rounded-full bg-verde" />
                  <span className="typing-dot w-1.5 h-1.5 rounded-full bg-verde" />
                </div>
              </div>
            </div>
          </div>

          {/* Block 3 — Herramientas (complementary) */}
          <div className="group lg:col-span-1 lg:row-span-1 bg-white/[0.06] backdrop-blur-md rounded-[2rem] p-6 sm:p-7 ring-1 ring-white/12 transition-all duration-300 hover:bg-white/[0.09] hover:ring-white/20">
            <span className="w-11 h-11 rounded-2xl bg-verde/25 ring-1 ring-menta/20 flex items-center justify-center">
              <Leaf className="w-5 h-5 text-menta" />
            </span>
            <h3 className="font-serif text-xl font-semibold text-white mt-4 mb-2 text-balance">
              Explorá herramientas breves
            </h3>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Accedé a contenidos y ejercicios sobre estudio, trabajo,
              vínculos, descanso, estrés y autocuidado.
            </p>

            <div aria-hidden="true" className="flex flex-wrap gap-1.5">
              {toolTopics.map((topic) => (
                <span
                  key={topic}
                  className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/10 text-menta/90 ring-1 ring-white/10"
                >
                  {topic}
                </span>
              ))}
            </div>
          </div>

          {/* Block 4 — Directorio (complementary) */}
          <div className="group lg:col-span-1 lg:row-span-1 bg-white/[0.06] backdrop-blur-md rounded-[2rem] p-6 sm:p-7 ring-1 ring-white/12 transition-all duration-300 hover:bg-white/[0.09] hover:ring-white/20">
            <span className="w-11 h-11 rounded-2xl bg-verde/25 ring-1 ring-menta/20 flex items-center justify-center">
              <UserCheck className="w-5 h-5 text-menta" />
            </span>
            <h3 className="font-serif text-xl font-semibold text-white mt-4 mb-2 text-balance">
              Encontrá profesionales
            </h3>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Cuando quieras buscar acompañamiento profesional, explorá el
              directorio y coordiná un turno cuando quieras.
            </p>

            {/* Interface fragment — a single standalone professional card */}
            <div
              aria-hidden="true"
              className="flex items-center gap-3 bg-white/95 rounded-2xl p-3 shadow-lg transition-transform duration-300 group-hover:-translate-y-1"
            >
              <span
                className="w-9 h-9 shrink-0 rounded-xl bg-gradient-to-br from-menta to-arena ring-1 ring-verde/10 flex items-center justify-center"
              >
                <span className="w-3 h-3 rounded-full bg-verde/30" />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-serif font-semibold text-navy leading-tight truncate">
                  Lic. Camila Ferreyra
                </p>
                <p className="text-xs text-muted-foreground truncate">
                  Psicología · Manejo del estrés
                </p>
              </div>
              <BadgeCheck className="w-4 h-4 text-verde shrink-0" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
