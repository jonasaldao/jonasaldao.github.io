"use client"

import { useEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useGSAP } from "@gsap/react"
import Lenis from "lenis"

gsap.registerPlugin(useGSAP, ScrollTrigger)

if (typeof window !== "undefined" && process.env.NODE_ENV !== "production") {
  // Dev-only: lets us inspect animations from the browser console
  ;(window as unknown as { gsap: typeof gsap }).gsap = gsap
}

/**
 * Splits an element's plain text into per-word (or per-char) spans.
 * The element must contain only text (no nested markup). The original text is
 * preserved for assistive tech via aria-label on the element.
 */
function splitText(el: HTMLElement, mode: "words" | "chars"): HTMLElement[] {
  const text = el.textContent ?? ""
  el.setAttribute("aria-label", text)
  const frag = document.createDocumentFragment()
  const units: HTMLElement[] = []
  const words = text.split(/\s+/).filter(Boolean)
  words.forEach((word, i) => {
    const w = document.createElement("span")
    w.setAttribute("aria-hidden", "true")
    w.style.display = "inline-block"
    if (mode === "chars") {
      for (const ch of word) {
        const c = document.createElement("span")
        c.textContent = ch
        c.style.display = "inline-block"
        units.push(c)
        w.appendChild(c)
      }
    } else {
      w.textContent = word
      units.push(w)
    }
    frag.appendChild(w)
    if (i < words.length - 1) frag.append(document.createTextNode(" "))
  })
  el.replaceChildren(frag)
  return units
}

/**
 * All GSAP choreography for the landing page. Renders the scroll progress bar;
 * everything else hooks into data attributes:
 *
 *   data-split="words|chars"  headline reveal (plain-text elements only)
 *   data-reveal[="left|right|scale"] [data-delay]  generic entrance
 *   data-reveal-line          vertical line draws itself
 *   data-parallax="8"         scrubbed parallax (yPercent ±value)
 *   data-stagger              container whose children stagger in
 *   data-chat                 chat container, messages pop sequentially
 *   data-magnetic             magnetic hover (fine pointers only)
 *   data-tilt                 3D tilt on hover (fine pointers only)
 *
 * No-JS / reduced-motion safe: initial states are applied by gsap.from — if it
 * never runs, everything stays visible.
 */
export function LandingFX() {
  // Lenis smooth scroll, driven by the GSAP ticker
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
    if (window.matchMedia("(pointer: coarse)").matches) return // Fall back to native scrolling on touch screens

    // If Lenis fails to construct on some device, native scroll still works —
    // just log it instead of leaving the effect (and thus the click-anchor
    // handling) half-wired.
    let lenis: Lenis | undefined
    let raf: ((time: number) => void) | undefined
    let onClick: ((e: MouseEvent) => void) | undefined
    try {
      lenis = new Lenis({ duration: 1.1 })
      lenis.on("scroll", ScrollTrigger.update)
      raf = (time: number) => lenis!.raf(time * 1000)
      gsap.ticker.add(raf)
      gsap.ticker.lagSmoothing(0)

      // Anchor links through Lenis (native smooth-scroll CSS is removed)
      onClick = (e: MouseEvent) => {
        const a = (e.target as HTMLElement).closest?.('a[href^="#"]')
        if (!a) return
        const href = a.getAttribute("href")!
        if (href === "#") {
          e.preventDefault()
          lenis!.scrollTo(0)
        } else {
          const target = document.querySelector<HTMLElement>(href)
          if (!target) return
          e.preventDefault()
          // Lenis intercepts the click and animates the scroll itself, so the
          // browser's native "move focus to the target fragment" behavior
          // never runs. Move it manually once the scroll settles so keyboard
          // and screen-reader users land in the right place, not just
          // sighted mouse users.
          lenis!.scrollTo(href, {
            offset: -72,
            onComplete: () => target.focus({ preventScroll: true }),
          })
        }
      }
      document.addEventListener("click", onClick)
    } catch (err) {
      console.error("[landing-fx] Lenis failed to initialize", err)
    }

    return () => {
      if (onClick) document.removeEventListener("click", onClick)
      if (raf) gsap.ticker.remove(raf)
      lenis?.destroy()
    }
  }, [])

  useGSAP(() => {
    const mm = gsap.matchMedia()

    // Wrap every condition's callback so one throwing doesn't stop the rest
    // of this function from running the mm.add() calls that follow it.
    const safeAdd = (query: string, cb: () => void | (() => void)) => {
      mm.add(query, () => {
        try {
          return cb()
        } catch (err) {
          console.error(`[landing-fx] matchMedia "${query}" failed`, err)
        }
      })
    }

    // ---- Motion for everyone except reduced-motion users ----
    safeAdd("(prefers-reduced-motion: no-preference)", () => {
      // Scroll progress bar
      gsap.to(".fx-progress-bar", {
        scaleX: 1,
        ease: "none",
        scrollTrigger: { start: 0, end: "max", scrub: 0.3 },
      })

      // Every per-element setup below is wrapped in try/catch: one element
      // throwing (bad selector match, unexpected DOM shape, etc.) must not
      // stop the rest of this function from running — that previously took
      // down unrelated things like the marquee, which lived at the bottom of
      // this same callback.
      const safeEach = <T extends Element>(selector: string, fn: (el: T, i: number) => void) => {
        gsap.utils.toArray<T>(selector).forEach((el, i) => {
          try {
            fn(el, i)
          } catch (err) {
            console.error(`[landing-fx] "${selector}" failed for one element`, err)
          }
        })
      }

      // Split headlines
      safeEach<HTMLElement>("[data-split]", (el) => {
        const mode = el.dataset.split === "chars" ? "chars" : "words"
        const units = splitText(el, mode)
        gsap.from(units, {
          opacity: 0,
          yPercent: 70,
          rotateX: -55,
          transformPerspective: 700,
          transformOrigin: "50% 100%",
          duration: mode === "chars" ? 0.9 : 0.8,
          stagger: mode === "chars" ? 0.018 : 0.055,
          delay: parseFloat(el.dataset.delay ?? "0"),
          ease: "expo.out",
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        })
      })

      // Generic reveals
      safeEach<HTMLElement>("[data-reveal]", (el) => {
        const variant = el.getAttribute("data-reveal")
        const from: gsap.TweenVars = { opacity: 0, y: 44 }
        if (variant === "left") Object.assign(from, { x: -52, y: 0 })
        if (variant === "right") Object.assign(from, { x: 52, y: 0 })
        if (variant === "scale") Object.assign(from, { scale: 0.9, y: 0 })
        gsap.from(el, {
          ...from,
          duration: 1,
          delay: parseFloat(el.dataset.delay ?? "0"),
          ease: "power3.out",
          scrollTrigger: { trigger: el, start: "top 88%", once: true },
        })
      })

      // Self-drawing vertical lines
      safeEach<HTMLElement>("[data-reveal-line]", (el) => {
        gsap.from(el, {
          scaleY: 0,
          transformOrigin: "top center",
          duration: 1.3,
          ease: "expo.out",
          scrollTrigger: { trigger: el, start: "top 85%", once: true },
        })
      })

      // Scrubbed parallax layers (decorative only)
      safeEach<HTMLElement>("[data-parallax]", (el) => {
        const amt = parseFloat(el.dataset.parallax || "8")
        gsap.fromTo(
          el,
          { yPercent: amt },
          {
            yPercent: -amt,
            ease: "none",
            scrollTrigger: {
              trigger: el.closest("section") ?? el,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.6,
            },
          }
        )
      })

      // Grid/bento stagger (animate each child individually as it enters the viewport)
      safeEach<HTMLElement>("[data-stagger]", (grid) => {
        Array.from(grid.children).forEach((child, i) => {
          gsap.from(child, {
            opacity: 0,
            y: 30,
            scale: 0.94,
            duration: 0.65,
            delay: i * 0.05, // Smooth stagger delay when entering viewport together
            ease: "back.out(1.4)",
            scrollTrigger: {
              trigger: child,
              start: "top 88%",
              once: true,
            },
          })
        })
      })

      // Chat messages pop in sequence
      safeEach<HTMLElement>("[data-chat]", (chat) => {
        gsap.from(Array.from(chat.children), {
          opacity: 0,
          y: 16,
          scale: 0.85,
          transformOrigin: "left bottom",
          duration: 0.5,
          ease: "back.out(1.7)",
          stagger: 0.4,
          scrollTrigger: { trigger: chat, start: "top 75%", once: true },
        })
      })

    })

    // ---- "Problem" chapter lines ----
    // Plain staggered reveal at every breakpoint. This used to pin the section
    // and scrub the lines on desktop, which swallowed the scroll — the page
    // stopped advancing while the timeline played out. Removed on purpose.
    safeAdd("(prefers-reduced-motion: no-preference)", () => {
      gsap.utils
        .toArray<HTMLElement>(".problem-line, .problem-closing")
        .forEach((el) => {
          gsap.from(el, {
            opacity: 0,
            y: 28,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: { trigger: el, start: "top 90%", once: true },
          })
        })
    })

    // ---- Fine-pointer flourishes: magnetic buttons + 3D tilt cards ----
    safeAdd(
      "(pointer: fine) and (prefers-reduced-motion: no-preference)",
      () => {
        const cleanups: Array<() => void> = []

        gsap.utils.toArray<HTMLElement>("[data-magnetic]").forEach((btn) => {
          const xTo = gsap.quickTo(btn, "x", { duration: 0.4, ease: "power3" })
          const yTo = gsap.quickTo(btn, "y", { duration: 0.4, ease: "power3" })
          const move = (e: MouseEvent) => {
            const r = btn.getBoundingClientRect()
            xTo((e.clientX - r.left - r.width / 2) * 0.25)
            yTo((e.clientY - r.top - r.height / 2) * 0.35)
          }
          const leave = () => {
            xTo(0)
            yTo(0)
          }
          btn.addEventListener("mousemove", move)
          btn.addEventListener("mouseleave", leave)
          cleanups.push(() => {
            btn.removeEventListener("mousemove", move)
            btn.removeEventListener("mouseleave", leave)
          })
        })

        gsap.utils.toArray<HTMLElement>("[data-tilt]").forEach((card) => {
          const rx = gsap.quickTo(card, "rotationX", {
            duration: 0.5,
            ease: "power2",
          })
          const ry = gsap.quickTo(card, "rotationY", {
            duration: 0.5,
            ease: "power2",
          })
          gsap.set(card, { transformPerspective: 800 })
          const move = (e: MouseEvent) => {
            const r = card.getBoundingClientRect()
            const px = (e.clientX - r.left) / r.width - 0.5
            const py = (e.clientY - r.top) / r.height - 0.5
            rx(py * -8)
            ry(px * 8)
          }
          const leave = () => {
            rx(0)
            ry(0)
          }
          card.addEventListener("mousemove", move)
          card.addEventListener("mouseleave", leave)
          cleanups.push(() => {
            card.removeEventListener("mousemove", move)
            card.removeEventListener("mouseleave", leave)
          })
        })

        return () => cleanups.forEach((fn) => fn())
      }
    )

    // Recalculate pin/trigger positions once everything (fonts, images, canvas) settles
    const refresh = () => ScrollTrigger.refresh()
    if (document.readyState === "complete") {
      refresh()
    } else {
      window.addEventListener("load", refresh)
    }
    // Backup refresh to capture React hydration layout shifts
    const timer = setTimeout(refresh, 600)

    return () => {
      window.removeEventListener("load", refresh)
      clearTimeout(timer)
    }
  })

  return (
    <div className="fx-progress fixed top-0 left-0 right-0 z-[60] h-[3px] pointer-events-none">
      <div className="fx-progress-bar h-full w-full origin-left scale-x-0 bg-gradient-to-r from-verde via-menta to-coral" />
    </div>
  )
}
