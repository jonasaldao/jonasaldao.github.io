export function Presentation() {
  return (
    <section className="relative bg-ink py-24 md:py-32 overflow-hidden grain">
      {/* Aurora */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="aurora absolute top-0 left-1/4 w-[34rem] h-[34rem] rounded-full bg-teal/25 blur-[110px]" />
        <div className="blob-slow absolute -bottom-40 right-0 w-[28rem] h-[28rem] rounded-full bg-teal-dark/40 blur-[100px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Copy */}
          <div className="text-center lg:text-left">
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-white mb-7">
              <span data-split="chars">Conocé</span>{" "}
              <span data-split="chars" className="accent-italic text-teal-light">
                Amira
              </span>
            </h2>

            <p
              data-reveal
              className="text-white/70 text-lg sm:text-xl leading-relaxed max-w-xl mx-auto lg:mx-0"
            >
              Una plataforma de acompañamiento emocional diseñada para ayudarte a
              transitar los momentos difíciles con herramientas prácticas,
              seguimiento personalizado y respaldo profesional.
            </p>
          </div>

          {/* Phone Mockup */}
          <div data-reveal="scale" data-parallax="5" className="flex justify-center">
            <div className="relative float-gentle" style={{ "--float-tilt": "2deg" } as React.CSSProperties}>
              {/* Phone Frame */}
              <div className="w-72 sm:w-80 bg-navy rounded-[3rem] p-3 shadow-2xl ring-1 ring-white/20">
                {/* Screen */}
                <div className="bg-teal-mist rounded-[2.4rem] overflow-hidden">
                  {/* Status Bar */}
                  <div className="bg-gradient-to-r from-teal-dark to-teal h-12 flex items-center justify-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="breathe absolute inline-flex h-full w-full rounded-full bg-teal-light" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
                    </span>
                    <span className="text-white text-sm font-serif italic font-medium">
                      Amira
                    </span>
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
                      <div className="bg-teal text-white rounded-2xl rounded-tr-sm px-4 py-3 max-w-[85%] shadow-sm">
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
                        <span className="typing-dot w-2 h-2 rounded-full bg-teal" />
                        <span className="typing-dot w-2 h-2 rounded-full bg-teal" />
                        <span className="typing-dot w-2 h-2 rounded-full bg-teal" />
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
                className="absolute -inset-8 bg-teal/25 rounded-[4rem] blur-2xl -z-10"
                aria-hidden="true"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
