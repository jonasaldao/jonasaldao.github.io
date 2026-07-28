const identificationCards = [
  "No sé si mi problema es tan grave como para hacer terapia",
  "No quiero preocupar a los demás con lo que me pasa",
  "Necesito hablar con alguien, pero no sé por dónde empezar",
  "Cuando me siento mal es justo cuando menos ayuda encuentro",
]

export function Identification() {
  return (
    <section id="identificacion" className="relative bg-arena py-16 md:py-24 overflow-hidden">
      <div
        data-parallax="12"
        className="blob absolute -top-32 right-0 w-96 h-96 rounded-full bg-menta/60 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy text-center mb-10 md:mb-14 text-balance">
          <span data-split>Si alguna vez sentiste esto,</span>{" "}
          <span data-split className="accent-italic text-verde-profundo">
            Amira fue pensada para vos.
          </span>
        </h2>

        <div data-stagger className="grid sm:grid-cols-2 gap-8 md:gap-10 max-w-4xl mx-auto">
          {identificationCards.map((quote, index) => (
            <div
              key={index}
              data-tilt
              className="group relative bg-white rounded-3xl shadow-md hover:shadow-xl p-8 pt-12 transition-shadow duration-300"
            >
              <span
                className="absolute top-2 left-6 font-serif text-7xl leading-none text-menta select-none"
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <p className="relative font-serif italic text-xl text-[#0F3D3E] leading-relaxed">
                {quote}
              </p>
              <div className="mt-5 h-1 w-10 rounded-full bg-verde/30 transition-all duration-500 group-hover:w-20 group-hover:bg-verde" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
