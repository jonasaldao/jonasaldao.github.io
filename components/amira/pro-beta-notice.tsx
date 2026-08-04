import { Hammer } from "lucide-react"

/**
 * Visible, not fine print — the section is what makes it okay for the rest
 * of the page to describe things in progress ("estamos construyendo...").
 */
export function ProBetaNotice() {
  return (
    // Opaque on purpose. This was bg-menta/40, which let the body colour show
    // through — fine while the body was near-white, but the body now carries
    // verde-profundo so Safari 26 has something to tint its toolbar with, and
    // a translucent panel over it turned dark green. #EEFCF8 is exactly what
    // menta at 40% resolved to over the old background.
    <section className="py-14 md:py-16 bg-[#EEFCF8] overflow-hidden">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span
          data-reveal
          className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white ring-1 ring-verde/15 shadow-sm mb-5"
        >
          <Hammer className="w-5 h-5 text-verde-profundo" aria-hidden="true" />
        </span>
        <p
          data-reveal
          data-delay="0.1"
          className="text-lg sm:text-xl text-tinta/80 leading-relaxed font-medium text-balance"
        >
          Amira Profesionales está en construcción. Los profesionales que se
          sumen a la beta van a tener acceso sin cargo y participan de la
          definición de las herramientas.
        </p>
      </div>
    </section>
  )
}
