export function Insight() {
  return (
    <section id="propuesta" className="relative bg-white py-20 md:py-28 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Copy */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-6 text-balance">
              <span data-split>Un espacio para hacer una pausa</span>{" "}
              <span data-split className="accent-italic text-verde-profundo">
                y empezar a entenderte.
              </span>
            </h2>

            <p
              data-reveal
              className="text-lg sm:text-xl text-navy/65 leading-relaxed max-w-xl mx-auto lg:mx-0 text-balance"
            >
              Amira te acompaña a registrar cómo te sentís, ordenar lo que te
              pasa y encontrar recursos de bienestar que puedas incorporar a
              tu ritmo.
            </p>
          </div>

          {/* Visual — scattered thoughts settling into a calm center */}
          <div
            data-reveal="scale"
            data-parallax="5"
            className="relative flex items-center justify-center h-64 sm:h-80"
            aria-hidden="true"
          >
            <div
              className="float-gentle-alt absolute top-4 left-6 w-10 h-10 rounded-full bg-coral/25 blur-sm"
            />
            <div
              className="float-gentle absolute bottom-8 left-2 w-7 h-7 rounded-full bg-verde/30 blur-sm"
              style={{ animationDelay: "0.8s" }}
            />
            <div
              className="float-gentle-alt absolute top-10 right-4 w-8 h-8 rounded-full bg-menta blur-sm"
              style={{ animationDelay: "1.6s" }}
            />
            <div
              className="float-gentle absolute bottom-4 right-8 w-6 h-6 rounded-full bg-coral/20 blur-sm"
            />

            <div className="absolute flex items-center justify-center">
              <div className="breathe absolute w-44 h-44 sm:w-48 sm:h-48 rounded-full border border-verde/20" />
              <div
                className="breathe absolute w-32 h-32 sm:w-36 sm:h-36 rounded-full border border-verde/15"
                style={{ animationDelay: "1s" }}
              />
            </div>

            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-gradient-to-br from-verde to-verde-profundo shadow-xl shadow-verde/20 flex items-center justify-center">
              <span className="w-3 h-3 rounded-full bg-menta" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
