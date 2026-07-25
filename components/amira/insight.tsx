export function Insight() {
  return (
    <section className="py-24 md:py-32 bg-white overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy mb-8 text-balance">
          <span data-split>El lugar</span>{" "}
          <span data-split className="accent-italic text-teal-dark">
            que faltaba.
          </span>
        </h2>

        <p
          data-reveal
          className="text-xl sm:text-2xl text-navy/70 leading-relaxed text-balance"
        >
          Entre sentirte bien y pedir ayuda profesional hay un punto intermedio
          que también importa. Ahí vive Amira.
        </p>
      </div>
    </section>
  )
}
