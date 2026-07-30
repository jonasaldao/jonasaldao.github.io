import Link from "next/link"

/**
 * `subpage` prefixes the in-page anchors with "/" so they navigate back to the
 * landing. On the landing itself the bare "#..." form is required — Lenis only
 * intercepts `a[href^="#"]`, and a "/#..." href would trigger a full reload.
 */
export function Footer({ subpage = false }: { subpage?: boolean } = {}) {
  const p = subpage ? "/" : ""
  const year = new Date().getFullYear()

  const groups: { title: string; links: { href: string; label: string }[] }[] = [
    {
      title: "Producto",
      links: [
        { href: "/", label: "Inicio" },
        { href: `${p}#como-funciona`, label: "Cómo funciona" },
        { href: `${p}#que-podes-hacer`, label: "Herramientas" },
        { href: `${p}#directorio`, label: "Directorio de profesionales" },
        { href: `${p}#pricing`, label: "Registro de interés" },
      ],
    },
    {
      title: "Para profesionales",
      links: [{ href: "/profesionales", label: "Amira para profesionales" }],
    },
    {
      title: "Información y ayuda",
      links: [
        { href: `${p}#preguntas-frecuentes`, label: "Preguntas frecuentes" },
        { href: "/ayuda-urgente", label: "Ayuda urgente" },
        { href: "/contacto", label: "Contacto" },
      ],
    },
    {
      title: "Legal",
      links: [
        { href: "/privacidad", label: "Política de Privacidad" },
        { href: "/terminos/usuarios", label: "Términos de Uso para usuarios" },
        { href: "/terminos/profesionales", label: "Términos para profesionales" },
      ],
    },
  ]

  return (
    <footer className="bg-tinta py-16 grain">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.2fr_repeat(4,1fr)] gap-10 lg:gap-8">
          {/* Brand */}
          <div className="text-center sm:text-left sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block">
              <img
                src="/amira-logo-blanco.png"
                alt="Amira"
                className="h-9 w-auto mx-auto sm:mx-0"
              />
            </Link>
            <p className="text-white/50 text-sm mt-3 leading-relaxed max-w-[18rem] mx-auto sm:mx-0">
              Una plataforma digital para acompañar el bienestar emocional.
            </p>
          </div>

          {groups.map((group) => (
            <nav
              key={group.title}
              aria-label={group.title}
              className="text-center sm:text-left"
            >
              <p className="text-menta text-xs font-semibold uppercase tracking-widest mb-4">
                {group.title}
              </p>
              <ul className="space-y-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-white/60 hover:text-menta text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Bottom bar — the one safety notice kept sitewide; the fuller
            explanation lives in Confianza, FAQ, and the informational pages. */}
        <div className="mt-14 pt-8 border-t border-white/10 space-y-4">
          <p className="text-[#94A3B8] text-sm text-center leading-relaxed max-w-2xl mx-auto">
            Amira no es un servicio de emergencias. Si estás en crisis o en
            peligro inmediato, contactá a los servicios de emergencia de tu
            localidad, a una persona de confianza, o entrá a{" "}
            <Link
              href="/ayuda-urgente"
              className="text-menta hover:text-white underline underline-offset-2 transition-colors"
            >
              Ayuda urgente
            </Link>
            .
          </p>

          <p className="text-[#64748B] text-sm text-center">
            © {year} Amira. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
