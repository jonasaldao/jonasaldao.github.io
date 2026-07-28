const weights = [
  "El examen que no podés dejar de pensar.",
  "La pelea que no se pudo resolver.",
  "La sobrecarga que se acumula sin que nadie lo vea.",
  "La sensación de tener demasiado encima.",
]

/**
 * The lines do a plain staggered reveal as they enter (see landing-fx.tsx).
 * No pinning — the section scrolls past like any other.
 */
export function Problem() {
  return (
    <section
      id="problema"
      className="relative bg-sand overflow-hidden"
    >
      {/* Oversized ghost quote mark */}
      <span
        data-parallax="10"
        className="absolute -top-10 left-4 sm:left-10 font-serif text-[16rem] sm:text-[22rem] leading-none text-verde/[0.07] select-none pointer-events-none"
        aria-hidden="true"
      >
        &ldquo;
      </span>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 w-full">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold text-navy leading-[1.12] text-balance">
          <span data-split>Hay momentos que pesan.</span>{" "}
          <span data-split className="accent-italic text-verde-profundo">
            Y que merecen un lugar donde procesarlos.
          </span>
        </h2>

        <div className="mt-14 md:mt-16 space-y-6 md:space-y-7">
          {weights.map((line) => (
            <p
              key={line}
              className="problem-line not-italic font-serif text-xl sm:text-2xl md:text-3xl text-navy leading-snug border-l-2 border-verde/25 pl-6"
            >
              {line}
            </p>
          ))}
        </div>

        <div className="problem-closing mt-14 md:mt-16 max-w-2xl">
          <p className="text-xl sm:text-2xl text-navy/70 leading-relaxed">
            A veces no sabés bien qué necesitás.
          </p>
          <p className="mt-4 font-serif accent-italic text-2xl sm:text-3xl text-verde-profundo leading-snug">
            Pero sí sabés que no querés cargarlo en soledad.
          </p>
        </div>
      </div>
    </section>
  )
}
