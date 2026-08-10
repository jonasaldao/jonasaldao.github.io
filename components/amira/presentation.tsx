import {
  BarChart3,
  MessageCircle,
  Leaf,
  UserCheck,
  BadgeCheck,
  Wifi,
  BatteryFull,
  Send,
} from "lucide-react"
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
          className="grid sm:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 gap-5 items-start lg:items-stretch"
        >
          {/* Block 1 — Check-in (large, wide) */}
          <div className="group sm:col-span-2 lg:col-span-2 lg:row-span-1 lg:h-full bg-white/[0.06] backdrop-blur-md rounded-[2rem] p-7 sm:p-9 ring-1 ring-white/12 transition-all duration-300 hover:bg-white/[0.09] hover:ring-white/20">
            <div className="flex flex-col md:flex-row md:items-start gap-7">
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

              {/* Interface fragment — plain mood scale, no score or interpretation.
                  md:mt-[4.25rem] matches the icon (3rem) + its bottom margin
                  (mt-5, 1.25rem) so the card's top lines up with the heading
                  instead of the icon above it. */}
              <div
                className="shrink-0 w-full md:w-60 md:mt-[4.25rem] bg-white/95 rounded-2xl p-4 shadow-lg transition-transform duration-300 group-hover:-translate-y-1"
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
          <div className="group lg:col-span-1 lg:row-span-2 lg:h-full bg-white/[0.06] backdrop-blur-md rounded-[2rem] p-7 sm:p-9 ring-1 ring-white/12 transition-all duration-300 hover:bg-white/[0.09] hover:ring-white/20 flex flex-col">
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

            {/* Interface fragment — a complete phone screen, not a cropped
                sliver: notch, status bar, app header, full chat thread and
                an input bar, so it reads as "the app, open" rather than a
                screenshot that ran out of room. At lg the card is stretched
                to match the two stacked cards beside it (see h-full above);
                this wrapper is flex-1 + items-center so the phone centers in
                whatever slack that leaves instead of sitting flush at top. */}
            <div
              aria-hidden="true"
              className="mt-7 flex-1 flex items-center justify-center transition-transform duration-300 group-hover:-translate-y-1"
            >
              <div className="w-36 sm:w-40 lg:w-44 bg-tinta rounded-[1.5rem] p-2 shadow-xl ring-1 ring-white/15">
                <div className="relative bg-arena rounded-xl overflow-hidden flex flex-col">
                  {/* Notch */}
                  <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-9 h-2.5 bg-black/50 rounded-full z-10" />

                  {/* Status bar */}
                  <div className="flex items-center justify-between px-4 pt-3 pb-1 text-tinta/50">
                    <span className="text-[8px] font-medium">21:40</span>
                    <div className="flex items-center gap-1">
                      <span className="flex items-end gap-[1.5px]" aria-hidden="true">
                        <span className="w-[2px] h-[3px] bg-tinta/50 rounded-[1px]" />
                        <span className="w-[2px] h-[4px] bg-tinta/50 rounded-[1px]" />
                        <span className="w-[2px] h-[5px] bg-tinta/50 rounded-[1px]" />
                        <span className="w-[2px] h-[6px] bg-tinta/50 rounded-[1px]" />
                      </span>
                      <Wifi className="w-2.5 h-2.5" />
                      <BatteryFull className="w-3.5 h-3 text-tinta/50" />
                    </div>
                  </div>

                  {/* App header */}
                  <div className="bg-gradient-to-r from-verde-profundo to-verde h-7 flex items-center justify-center mt-1">
                    <img
                      src="/amira-logo-blanco.png"
                      alt=""
                      className="h-3 w-auto object-contain"
                    />
                  </div>

                  {/* Chat thread */}
                  <div className="p-2.5 space-y-2">
                    <div className="flex justify-start">
                      <div className="bg-white text-tinta rounded-xl rounded-tl-sm px-2.5 py-1.5 max-w-[85%] shadow-sm text-[10px] leading-snug">
                        Hola, ¿cómo venís hoy?
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <div className="bg-verde-profundo text-white rounded-xl rounded-tr-sm px-2.5 py-1.5 max-w-[85%] shadow-sm text-[10px] leading-snug">
                        Con mucho encima por el examen
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <div className="bg-white text-tinta rounded-xl rounded-tl-sm px-2.5 py-1.5 max-w-[85%] shadow-sm text-[10px] leading-snug">
                        Tiene sentido. ¿Querés que lo ordenemos de a poco,
                        una cosa a la vez?
                      </div>
                    </div>
                  </div>

                  {/* Input bar */}
                  <div className="px-2.5 pb-2 pt-1">
                    <div className="flex items-center gap-1.5 bg-white rounded-full px-3 py-1.5 ring-1 ring-verde/10">
                      <span className="flex-1 text-[9px] text-muted-foreground truncate">
                        Escribí lo que quieras...
                      </span>
                      <Send className="w-3 h-3 text-verde shrink-0" />
                    </div>
                  </div>

                  {/* Home indicator */}
                  <div className="flex justify-center pb-1.5">
                    <div className="w-8 h-1 rounded-full bg-tinta/20" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Block 3 — Herramientas (complementary) */}
          <div className="group lg:col-span-1 lg:row-span-1 lg:h-full bg-white/[0.06] backdrop-blur-md rounded-[2rem] p-6 sm:p-7 ring-1 ring-white/12 transition-all duration-300 hover:bg-white/[0.09] hover:ring-white/20">
            <span className="w-11 h-11 rounded-2xl bg-verde/25 ring-1 ring-menta/20 flex items-center justify-center">
              <Leaf className="w-5 h-5 text-menta" />
            </span>
            <h3 className="font-serif text-xl font-semibold text-white mt-4 mb-2 text-balance">
              Explorá herramientas breves
            </h3>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Ejercicios breves para tu día a día. Elegí el que más te sirva
              hoy.
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
          <div className="group lg:col-span-1 lg:row-span-1 lg:h-full bg-white/[0.06] backdrop-blur-md rounded-[2rem] p-6 sm:p-7 ring-1 ring-white/12 transition-all duration-300 hover:bg-white/[0.09] hover:ring-white/20">
            <span className="w-11 h-11 rounded-2xl bg-verde/25 ring-1 ring-menta/20 flex items-center justify-center">
              <UserCheck className="w-5 h-5 text-menta" />
            </span>
            <h3 className="font-serif text-xl font-semibold text-white mt-4 mb-2 text-balance">
              Encontrá profesionales
            </h3>
            <p className="text-white/70 text-sm leading-relaxed mb-4">
              Explorá el directorio de profesionales y coordiná un turno
              cuando quieras.
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
