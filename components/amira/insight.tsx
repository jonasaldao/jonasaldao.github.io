export function Insight() {
  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy text-center mb-16 md:mb-24 text-balance">
          <span data-split>Existe un espacio que hoy</span>{" "}
          <span data-split className="accent-italic text-teal-dark">
            nadie está acompañando.
          </span>
        </h2>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual Timeline */}
          <div data-reveal="left" className="flex justify-center">
            <div className="relative flex flex-col items-start py-4">
              {/* Top Node - Me siento bien */}
              <div className="flex items-center gap-5">
                <div className="w-4 h-4 rounded-full bg-[#94A3B8] shrink-0" />
                <span className="text-muted-foreground font-medium text-lg">
                  Me siento bien
                </span>
              </div>

              {/* Connecting Line (draws itself) */}
              <div className="ml-[7px] my-2 h-16 w-0.5 overflow-hidden">
                <div data-reveal-line className="h-full w-full bg-gradient-to-b from-[#E2E8F0] to-teal/50" />
              </div>

              {/* Middle Node - Malestar cotidiano */}
              <div className="flex items-center gap-5">
                <span className="relative flex h-7 w-7 shrink-0">
                  <span className="breathe absolute inline-flex h-full w-full rounded-full bg-teal-light" />
                  <span className="relative m-auto inline-flex h-4 w-4 rounded-full bg-teal" />
                </span>
                <div className="bg-teal-mist rounded-2xl px-5 py-4 shadow-sm ring-1 ring-teal/15">
                  <span className="text-navy font-serif font-semibold text-xl block">
                    Malestar cotidiano
                  </span>
                  <span className="text-teal-dark text-sm font-medium mt-0.5 flex items-center gap-1.5">
                    <span aria-hidden="true">←</span> aquí opera Amira
                  </span>
                </div>
              </div>

              {/* Connecting Line */}
              <div className="ml-[7px] my-2 h-16 w-0.5 overflow-hidden">
                <div data-reveal-line className="h-full w-full bg-gradient-to-b from-teal/50 to-[#E2E8F0]" />
              </div>

              {/* Bottom Node - Atención profesional */}
              <div className="flex items-center gap-5">
                <div className="w-4 h-4 rounded-full bg-[#94A3B8] shrink-0" />
                <span className="text-muted-foreground font-medium text-lg">
                  Atención profesional
                </span>
              </div>
            </div>
          </div>

          {/* Text Content */}
          <div data-reveal="right" className="space-y-6">
            <div className="text-xl text-navy/75 leading-relaxed space-y-5">
              <p>La mayoría de las soluciones aparecen cuando el problema ya creció.</p>
              <p className="font-serif text-3xl sm:text-4xl text-navy leading-snug">
                Amira nace para acompañarte{" "}
                <strong className="accent-italic font-medium text-coral">antes</strong>.
              </p>
              <div className="space-y-2 pt-2">
                <p>Cuando necesitás claridad.</p>
                <p>Cuando necesitás descargarte.</p>
                <p>Cuando simplemente necesitás sentirte acompañado/a.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
