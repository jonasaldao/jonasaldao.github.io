import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-ink py-14 grain">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Tagline */}
          <div className="text-center md:text-left">
            <span className="flex items-center justify-center md:justify-start gap-2">
              <span className="font-serif italic text-white text-3xl font-semibold">
                Amira
              </span>
            </span>
            <p className="text-[#5EEAD4] text-sm mt-2">
              Tu espacio cuando lo necesitás.
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6">
            <a
              href="#como-funciona"
              className="text-white/60 hover:text-teal-light text-sm transition-colors"
            >
              Cómo funciona
            </a>
            <a
              href="#profesionales"
              className="text-white/60 hover:text-teal-light text-sm transition-colors"
            >
              Para profesionales
            </a>
            <a
              href="#privacidad"
              className="text-white/60 hover:text-teal-light text-sm transition-colors"
            >
              Privacidad
            </a>
            <a
              href="#terminos"
              className="text-white/60 hover:text-teal-light text-sm transition-colors"
            >
              Términos
            </a>
          </nav>

          {/* CTA */}
          <Button
            asChild
            variant="outline"
            className="border-teal/50 bg-transparent text-white hover:bg-teal hover:text-white hover:border-teal rounded-full transition-all duration-300"
          >
            <a href="#pricing">Empezar gratis</a>
          </Button>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-[#94A3B8] text-sm text-center mb-4 max-w-2xl mx-auto">
            Amira no es un servicio de emergencias. Si estás en crisis, contactá a
            un profesional o servicio de salud mental de tu país.
          </p>
          <p className="text-[#64748B] text-sm text-center">
            © 2026 Amira. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
