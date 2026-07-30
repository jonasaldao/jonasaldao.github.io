"use client"

import { useEffect } from "react"
import Link from "next/link"

/**
 * `/terminos` split into `/terminos/usuarios` and `/terminos/profesionales`.
 * Static export (`output: 'export'`) has no server, so `next.config.mjs`
 * redirects aren't available here — this sends people on automatically and
 * gives everyone else (no-JS, crawlers) a visible link to follow instead.
 */
export default function TerminosRedirectPage() {
  useEffect(() => {
    window.location.replace("/terminos/usuarios")
  }, [])

  return (
    <div className="min-h-screen flex items-center justify-center bg-off-white px-4 text-center">
      <p className="text-navy/70">
        Estos términos ahora viven en{" "}
        <Link
          href="/terminos/usuarios"
          className="text-verde-profundo font-medium underline underline-offset-4 hover:text-verde transition-colors"
        >
          /terminos/usuarios
        </Link>
        . Si no fuiste redirigido, hacé clic en el enlace.
      </p>
    </div>
  )
}
