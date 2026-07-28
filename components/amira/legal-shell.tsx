import Link from "next/link"
import { ArrowLeft, FileText } from "lucide-react"
import { Navbar } from "./navbar"
import { Footer } from "./footer"

/**
 * Shared chrome for the legal pages. These sit on a light background, so the
 * navbar is pinned to its solid variant and its links point back at the
 * landing rather than at same-page anchors.
 */
export function LegalShell({
  title,
  accent,
  updatedAt,
  children,
}: {
  title: string
  accent: string
  updatedAt: string
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-off-white flex flex-col">
      <Navbar
        solid
        homeHref="/"
        links={[
          { href: "/#como-funciona", label: "Cómo funciona" },
          { href: "/#que-podes-hacer", label: "Qué podés hacer" },
          { href: "/#directorio", label: "Directorio" },
          { href: "/profesionales", label: "Para profesionales" },
        ]}
      />

      <main className="flex-1 pt-32 pb-24 md:pt-40">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-navy/50 hover:text-verde-profundo transition-colors"
          >
            <ArrowLeft size={15} />
            Volver al inicio
          </Link>

          <h1 className="mt-6 text-4xl sm:text-5xl font-semibold text-navy leading-tight text-balance">
            {title}{" "}
            <span className="accent-italic text-verde-profundo">{accent}</span>
          </h1>

          <p className="mt-4 text-sm text-navy/45">
            Última actualización: {updatedAt}
          </p>

          {/* Draft notice — these pages are not yet reviewed by counsel. */}
          <div className="mt-8 flex items-start gap-3 rounded-2xl bg-arena ring-1 ring-verde/15 p-5">
            <FileText className="w-5 h-5 shrink-0 mt-0.5 text-verde-profundo" />
            <p className="text-sm leading-relaxed text-verde-profundo">
              Este documento es un borrador preliminar y todavía no fue revisado
              por asesoría legal. Describe cómo funciona Amira hoy, pero no
              constituye el texto definitivo.
            </p>
          </div>

          <div className="legal-prose mt-12">{children}</div>
        </div>
      </main>

      <Footer subpage />
    </div>
  )
}

/** Section heading + body, styled consistently across both legal pages. */
export function LegalSection({
  n,
  title,
  children,
}: {
  n: string
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="mb-12">
      <h2 className="flex items-baseline gap-4 text-2xl font-semibold text-navy mb-4">
        <span className="font-serif italic text-verde/50 text-lg shrink-0">
          {n}
        </span>
        <span className="text-balance">{title}</span>
      </h2>
      <div className="pl-0 sm:pl-9 space-y-4 text-navy/70 leading-relaxed">
        {children}
      </div>
    </section>
  )
}
