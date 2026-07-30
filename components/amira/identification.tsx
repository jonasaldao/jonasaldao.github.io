export function Identification() {
  return (
    <section id="identificacion" className="relative bg-arena py-20 md:py-28 overflow-hidden">
      <div
        data-parallax="12"
        className="blob absolute -top-24 right-0 w-80 h-80 rounded-full bg-menta/60 blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        data-parallax="8"
        className="blob-slow absolute -bottom-24 -left-16 w-72 h-72 rounded-full bg-coral/10 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-7 text-balance">
          <span data-split>No siempre es fácil</span>{" "}
          <span data-split className="accent-italic text-verde-profundo">
            poner en palabras lo que nos pasa.
          </span>
        </h2>

        <p
          data-reveal
          className="text-lg sm:text-xl text-navy/65 leading-relaxed text-balance"
        >
          Entre el estudio, el trabajo, los vínculos y todo lo que intentamos
          sostener, a veces necesitamos hacer una pausa. Pero no siempre
          sabemos por dónde empezar ni tenemos a alguien disponible en ese
          momento.
        </p>
      </div>
    </section>
  )
}
