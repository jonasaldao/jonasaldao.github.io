import { BarChart3, MessageCircle, Leaf, UserCheck } from "lucide-react"

const capabilities = [
  {
    icon: BarChart3,
    title: "Hacé un check-in",
    description: "Registrá cómo te sentís y llevá un historial personal.",
  },
  {
    icon: MessageCircle,
    title: "Conversá con Amira",
    description:
      "Un espacio de reflexión, sin diagnósticos ni indicaciones médicas.",
  },
  {
    icon: Leaf,
    title: "Encontrá herramientas",
    description:
      "Ejercicios breves y contenidos educativos sobre bienestar, hábitos y autocuidado.",
  },
  {
    icon: UserCheck,
    title: "Accedé al directorio",
    description:
      "Conectá con profesionales de la salud mental verificados, cuando quieras dar ese paso.",
  },
]

export function Presentation() {
  return (
    <section
      id="que-podes-hacer"
      className="relative bg-tinta py-16 md:py-24 overflow-hidden grain"
    >
      {/* Aurora */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="aurora absolute top-0 left-1/4 w-[34rem] h-[34rem] rounded-full bg-verde/25 blur-[110px]" />
        <div className="blob-slow absolute -bottom-40 right-0 w-[28rem] h-[28rem] rounded-full bg-verde-profundo/40 blur-[100px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Copy + cards */}
          <div>
            <div className="text-center lg:text-left">
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white mb-5 text-balance">
                <span data-split="chars">Qué</span>{" "}
                <span data-split="chars" className="accent-italic text-menta">
                  podés hacer.
                </span>
              </h2>

              <p
                data-reveal
                className="text-white/70 text-lg sm:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0"
              >
                Formas simples de empezar, disponibles cuando las
                necesites.
              </p>
            </div>

            <div data-stagger className="mt-9 space-y-4">
              {capabilities.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-4 bg-white/[0.06] backdrop-blur-md rounded-3xl p-5 sm:p-6 ring-1 ring-white/12"
                >
                  <span className="w-12 h-12 shrink-0 rounded-2xl bg-verde/25 ring-1 ring-menta/20 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-menta" />
                  </span>
                  <div>
                    <p className="font-serif text-lg font-semibold text-white">
                      {item.title}
                    </p>
                    <p className="mt-1 text-sm text-white/70 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Phone Mockup */}
          <div data-reveal="scale" data-parallax="5" className="flex justify-center">
            <div className="relative float-gentle">
              {/* Phone Frame */}
              <div className="w-72 sm:w-80 bg-navy rounded-[3rem] p-3 shadow-2xl ring-1 ring-white/20">
                {/* Screen */}
                <div className="bg-arena rounded-[2.4rem] overflow-hidden">
                  {/* Status Bar */}
                  <div className="bg-gradient-to-r from-verde-profundo to-verde h-12 flex items-center justify-center">
                    <img
                      src="/amira-logo-blanco.png"
                      alt="Amira"
                      className="h-5 w-auto object-contain"
                    />
                  </div>

                  {/* Chat Interface — messages pop in sequence (data-chat) */}
                  <div data-chat className="p-4 space-y-4 min-h-[300px]">
                    {/* AI Message */}
                    <div className="flex justify-start">
                      <div className="bg-white text-navy rounded-2xl rounded-tl-sm px-4 py-3 max-w-[85%] shadow-sm">
                        <p className="text-sm">¿Cómo estás hoy?</p>
                      </div>
                    </div>

                    {/* User Message */}
                    <div className="flex justify-end">
                      <div className="bg-verde-profundo text-white rounded-2xl rounded-tr-sm px-4 py-3 max-w-[85%] shadow-sm">
                        <p className="text-sm">
                          Con mucha ansiedad por el examen de mañana
                        </p>
                      </div>
                    </div>

                    {/* AI Response */}
                    <div className="flex justify-start">
                      <div className="bg-white text-navy rounded-2xl rounded-tl-sm px-4 py-3 max-w-[85%] shadow-sm">
                        <p className="text-sm">
                          Entiendo, es normal sentirse así. ¿Querés que trabajemos
                          juntos en algunas técnicas que pueden ayudarte?
                        </p>
                      </div>
                    </div>

                    {/* Typing indicator */}
                    <div className="flex justify-start">
                      <div className="bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm flex gap-1.5 items-center">
                        <span className="typing-dot w-2 h-2 rounded-full bg-verde" />
                        <span className="typing-dot w-2 h-2 rounded-full bg-verde" />
                        <span className="typing-dot w-2 h-2 rounded-full bg-verde" />
                      </div>
                    </div>
                  </div>

                  {/* Input Area */}
                  <div className="p-3 bg-white border-t border-border">
                    <div className="bg-muted rounded-full px-4 py-2.5 text-sm text-muted-foreground">
                      Escribí tu mensaje...
                    </div>
                  </div>
                </div>
              </div>

              {/* Glow Effect */}
              <div
                className="absolute -inset-8 bg-verde/25 rounded-[4rem] blur-2xl -z-10"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
