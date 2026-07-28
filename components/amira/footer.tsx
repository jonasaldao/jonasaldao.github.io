import Link from "next/link"
import { Button } from "@/components/ui/button"

/**
 * `subpage` prefixes the in-page anchors with "/" so they navigate back to the
 * landing. On the landing itself the bare "#..." form is required — Lenis only
 * intercepts `a[href^="#"]`, and a "/#..." href would trigger a full reload.
 */
export function Footer({ subpage = false }: { subpage?: boolean } = {}) {
  const p = subpage ? "/" : ""

  const navLinks = [
    { href: `${p}#como-funciona`, label: "Cómo funciona" },
    { href: `${p}#que-podes-hacer`, label: "Qué podés hacer" },
    { href: `${p}#directorio`, label: "Directorio" },
    { href: `${p}#privacidad`, label: "Privacidad" },
  ]

  return (
    <footer className="bg-tinta py-14 grain">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <img
              src="/amira-logo-blanco.png"
              alt="Amira"
              className="h-9 w-auto mx-auto md:mx-0"
            />
            <p className="text-[#5EEAD4] text-sm mt-2">
              Tu espacio cuando lo necesitás.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/60 hover:text-menta text-sm transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Link
              href="/profesionales"
              className="text-white/60 hover:text-menta text-sm transition-colors"
            >
              Para profesionales
            </Link>
          </nav>

          {/* CTA */}
          <Button
            asChild
            variant="outline"
            className="border-verde/50 bg-transparent text-white hover:bg-verde-activo hover:text-white hover:border-verde-activo rounded-full transition-all duration-300"
          >
            <a href={`${p}#pricing`}>Empezar gratis</a>
          </Button>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10 space-y-5">
          {/* What Amira is — and is not */}
          <p className="text-[#94A3B8] text-sm text-center leading-relaxed max-w-3xl mx-auto">
            Amira es una plataforma de acompañamiento emocional asistida por
            inteligencia artificial, con supervisión de profesionales de la salud.
            No es un profesional de la salud ni reemplaza a uno, no realiza
            diagnósticos y está disponible para personas mayores de 18 años.
          </p>

          {/* Crisis notice */}
          <p className="text-[#94A3B8] text-sm text-center leading-relaxed max-w-2xl mx-auto">
            Amira no es un servicio de emergencias. Si estás en crisis o en peligro
            inmediato, contactá a los servicios de emergencia de tu localidad o a
            una persona de confianza.
          </p>

          {/* Legal */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 pt-1">
            <Link
              href="/terminos"
              className="text-white/50 hover:text-menta text-sm transition-colors"
            >
              Términos
            </Link>
            <Link
              href="/privacidad"
              className="text-white/50 hover:text-menta text-sm transition-colors"
            >
              Política de privacidad
            </Link>
          </div>

          <p className="text-[#64748B] text-sm text-center">
            © 2026 Amira. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
