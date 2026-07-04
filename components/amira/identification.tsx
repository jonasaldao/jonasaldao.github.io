const identificationCards = [
  {
    quote: "No sé si mi problema es tan grave como para hacer terapia",
    tilt: "-1.5deg",
  },
  {
    quote: "No quiero preocupar a los demás con lo que me pasa",
    tilt: "1.2deg",
  },
  {
    quote: "Necesito hablar con alguien, pero no sé por dónde empezar",
    tilt: "1.8deg",
  },
  {
    quote: "Cuando me siento mal es justo cuando menos ayuda encuentro",
    tilt: "-1.2deg",
  },
]

export function Identification() {
  return (
    <section className="relative bg-teal-mist py-24 md:py-32 overflow-hidden">
      <div
        data-parallax="12"
        className="blob absolute -top-32 right-0 w-96 h-96 rounded-full bg-teal-light/60 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy text-center mb-16 md:mb-20 text-balance">
          <span data-split>Si alguna vez sentiste esto,</span>{" "}
          <span data-split className="accent-italic text-teal-dark">
            Amira fue pensada para vos.
          </span>
        </h2>

        <div data-stagger className="grid sm:grid-cols-2 gap-8 md:gap-10 max-w-4xl mx-auto">
          {identificationCards.map((card, index) => (
            <div
              key={index}
              data-tilt
              style={{ transform: `rotate(${card.tilt})` } as React.CSSProperties}
              className={`group relative bg-white rounded-3xl shadow-md hover:shadow-xl p-8 pt-12 transition-shadow duration-300 ${
                index % 2 === 1 ? "sm:translate-y-8" : ""
              }`}
            >
              <span
                className="absolute top-2 left-6 font-serif text-7xl leading-none text-teal-light select-none"
                aria-hidden="true"
              >
                &ldquo;
              </span>
              <p className="relative font-serif italic text-xl text-[#0F3D3E] leading-relaxed">
                {card.quote}
              </p>
              <div className="mt-5 h-1 w-10 rounded-full bg-teal/30 transition-all duration-500 group-hover:w-20 group-hover:bg-teal" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
