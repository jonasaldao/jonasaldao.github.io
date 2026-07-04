"use client"

import { useEffect, useState } from "react"
import { LogIn } from "lucide-react"
import { Button } from "@/components/ui/button"

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

export function Navbar() {
  const scrolled = useScrolledPast(24)

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
                ? "bg-white/75 backdrop-blur-xl shadow-lg shadow-teal/5 ring-1 ring-teal/10"
                : "bg-white/0 shadow-none ring-1 ring-teal/0"
              }`}
          />

          <div className="relative z-10 flex items-center justify-between h-full px-4 sm:px-6">
            {/* Logo */}
            <a href="#" className="flex items-center gap-2 group">
              <span
                className={`font-serif italic font-semibold text-2xl tracking-tight transition-colors duration-500 ${scrolled ? "text-teal-dark" : "text-white"
                  }`}
              >
                Amira
              </span>
            </a>

            {/* Login (single green CTA) */}
            <Button
              asChild
              className={`rounded-full px-6 transition-colors duration-500 ${scrolled
                  ? "bg-teal-dark hover:bg-teal text-white"
                  : "bg-white/20 hover:bg-white/30 text-white ring-1 ring-white/40"
                }`}
            >
              <a href="" className="inline-flex items-center gap-2">
                <LogIn size={16} />
                Iniciar sesión
              </a>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
