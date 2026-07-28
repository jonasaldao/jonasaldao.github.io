"use client"

import { useEffect, useState } from "react"
import { Menu } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

type NavLink = { href: string; label: string }

const defaultLinks: NavLink[] = [
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#biblioteca", label: "Biblioteca" },
  { href: "#directorio", label: "Directorio" },
  { href: "#privacidad", label: "Privacidad" },
  { href: "/profesionales", label: "Para profesionales" },
]

/**
 * Scroll state driven by two independent mechanisms so neither is a single
 * point of failure:
 *  1. A rAF poll of window.scrollY — doesn't depend on 'scroll' events firing
 *     or an IntersectionObserver being supported/accurate; can't miss an update
 *     as long as the tab is in the foreground.
 *  2. A plain 'scroll' listener that runs the same check immediately — covers
 *     the case where rAF is throttled (e.g. a backgrounded tab) but scroll
 *     events still arrive.
 */
function useScrolledPast(threshold: number) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    let raf = 0
    let last = false
    const check = () => {
      const y =
        window.scrollY ||
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        0
      const next = y > threshold
      if (next !== last) {
        last = next
        setScrolled(next)
      }
    }
    const tick = () => {
      check()
      raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    window.addEventListener("scroll", check, { passive: true })
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("scroll", check)
    }
  }, [threshold])

  return scrolled
}

/**
 * `solid` pins the bar to its scrolled (light) look — subpages sit on light
 * backgrounds, where the transparent state would render white-on-white.
 */
export function Navbar({
  solid = false,
  links = defaultLinks,
  homeHref = "#",
}: {
  solid?: boolean
  links?: NavLink[]
  homeHref?: string
} = {}) {
  const scrolled = useScrolledPast(24) || solid
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    // translateZ(0) promotes the bar to its own compositor layer up front.
    // Chrome on Android has a known bug where a `position: fixed` element
    // that gains/loses a backdrop-filter layer *while the class list changes
    // mid-scroll* fails to repaint until some unrelated event forces it — the
    // element is visually "stuck" even though its computed style is correct.
    // The fix is to never add/remove the blurred background: mount it once
    // and only ever cross-fade its opacity, which Chrome always repaints.
    <nav className="fixed top-0 left-0 right-0 z-50 [transform:translateZ(0)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative mt-3 h-16 rounded-full">
          <div
            aria-hidden="true"
            className={`absolute inset-0 rounded-full transition-all duration-500 ${scrolled
                ? "bg-white/75 backdrop-blur-xl shadow-lg shadow-verde/5 ring-1 ring-verde/10"
                : "bg-white/0 shadow-none ring-1 ring-verde/0"
              }`}
          />

          <div className="relative z-10 flex items-center justify-between h-full px-4 sm:px-6">
            {/* Logo */}
            <a href={homeHref} className="flex items-center gap-2 group">
              <span className="relative h-8 w-[104px] sm:h-9 sm:w-[118px]">
                <img
                  src="/amira-logo-blanco.png"
                  alt="Amira"
                  className={`absolute inset-0 h-full w-full object-contain object-left transition-opacity duration-500 ${scrolled ? "opacity-0" : "opacity-100"
                    }`}
                />
                <img
                  src="/amira-logo-teal.png"
                  alt="Amira"
                  className={`absolute inset-0 h-full w-full object-contain object-left transition-opacity duration-500 ${scrolled ? "opacity-100" : "opacity-0"
                    }`}
                />
              </span>
            </a>

            {/* Desktop nav links */}
            <div className="hidden md:flex items-center gap-8">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-500 ${scrolled
                      ? "text-navy/70 hover:text-verde-profundo"
                      : "text-white/80 hover:text-white"
                    }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Mobile hamburger */}
            <div className="md:hidden">
              <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
                <SheetTrigger asChild>
                  <button
                    type="button"
                    aria-label="Abrir menú"
                    className={`inline-flex items-center justify-center w-10 h-10 rounded-full transition-colors duration-500 ${scrolled
                        ? "text-verde-profundo"
                        : "text-white"
                      }`}
                  >
                    <Menu size={22} />
                  </button>
                </SheetTrigger>
                <SheetContent side="right" className="w-3/4 sm:max-w-xs">
                  <SheetTitle className="sr-only">Menú de navegación</SheetTitle>
                  <div className="flex flex-col gap-1 px-6 pt-14">
                    {links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className="py-3 text-lg font-medium text-navy hover:text-verde-profundo border-b border-navy/5"
                      >
                        {link.label}
                      </a>
                    ))}
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
