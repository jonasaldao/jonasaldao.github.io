import { Button } from "@/components/ui/button"
import { Check, ArrowDown } from "lucide-react"
import { AuroraCanvas } from "./aurora-canvas"

const trustSignals = [
  "Sin tarjeta de crédito",
  "30 días gratis",
  "Supervisión clínica real",
]

const marqueeItems = [
  "Acompañamiento emocional",
  "Disponible 24/7",
  "Respaldado por profesionales",
  "Tu espacio cuando lo necesitás",
]

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink grain">
      {/* WebGL aurora background (falls back to the ink bg if no WebGL) */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <AuroraCanvas className="absolute inset-0" />
        <div className="blob absolute -bottom-52 left-1/4 w-[30rem] h-[30rem] rounded-full bg-coral/10 blur-[110px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-14 lg:gap-8 items-center">
          {/* Copy */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl sm:text-6xl md:text-7xl xl:text-[5.25rem] font-semibold text-white leading-[1.04] text-balance">
              <span data-split="chars" data-delay="0.1" className="block">
                Tu espacio
              </span>
              <span
                data-split="chars"
                data-delay="0.35"
                className="block accent-italic text-teal-light"
              >
                cuando lo necesitás.
              </span>
            </h1>

            <p
              className="hero-rise mt-7 text-lg sm:text-xl text-white/70 max-w-xl mx-auto lg:mx-0 text-pretty leading-relaxed"
              style={{ "--rise-delay": "0.8s" } as React.CSSProperties}
            >
              Acompañamiento emocional disponible 24/7, respaldado por
              profesionales de la salud.
            </p>

            <div
              className="hero-rise mt-10 flex flex-col sm:flex-row items-center lg:items-start lg:justify-start justify-center gap-5"
              style={{ "--rise-delay": "0.95s" } as React.CSSProperties}
            >
              <Button
                asChild
                size="lg"
                data-magnetic
                className="bg-teal hover:bg-teal-light hover:text-teal-dark text-white rounded-full px-9 py-7 text-lg font-semibold shadow-xl shadow-teal/30 transition-colors duration-300"
              >
                <a href="#pricing">Probá Amira gratis por 30 días</a>
              </Button>

              <a
                href="#como-funciona"
                className="group inline-flex items-center gap-2 text-white/80 hover:text-white transition-colors text-sm font-medium py-3"
              >
                Conocer cómo funciona
                <ArrowDown
                  size={15}
                  className="transition-transform group-hover:translate-y-1"
                />
              </a>
            </div>

            {/* Trust Signals */}
            <div
              className="hero-rise mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-x-6 gap-y-3 text-white/60 text-sm"
              style={{ "--rise-delay": "1.1s" } as React.CSSProperties}
            >
              {trustSignals.map((signal) => (
                <span key={signal} className="flex items-center gap-2">
                  <Check size={15} className="text-teal-light" />
                  {signal}
                </span>
              ))}
            </div>
          </div>

          {/* Visual */}
          <div
            data-parallax="7"
            className="hero-rise relative mx-auto w-full max-w-md lg:max-w-none"
            style={{ "--rise-delay": "0.6s" } as React.CSSProperties}
          >
            {/* Breathing rings */}
            <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
              <div className="breathe absolute w-[115%] aspect-square rounded-full border border-white/10" />
              <div
                className="breathe absolute w-[135%] aspect-square rounded-full border border-white/5"
                style={{ animationDelay: "1.4s" }}
              />
            </div>

            <div className="blob-mask relative overflow-hidden shadow-2xl shadow-ink ring-1 ring-white/15">
              <img
                src="/images/hero-young-person.png"
                alt="Joven sonriendo mientras usa su celular, estudiando o trabajando"
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-dark/40 via-transparent to-transparent" />
            </div>

            {/* Floating chat bubble */}
            <div className="float-gentle absolute -left-4 sm:-left-10 top-8 bg-white rounded-2xl rounded-bl-sm shadow-xl px-5 py-3.5">
              <p className="text-sm font-medium text-navy">¿Cómo estás hoy?</p>
              <div className="mt-1.5 flex gap-1" aria-hidden="true">
                <span className="typing-dot w-1.5 h-1.5 rounded-full bg-teal" />
                <span className="typing-dot w-1.5 h-1.5 rounded-full bg-teal" />
                <span className="typing-dot w-1.5 h-1.5 rounded-full bg-teal" />
              </div>
            </div>

            {/* Floating trust badge */}
            <div
              className="float-gentle-alt absolute -right-2 sm:-right-8 bottom-10 bg-teal-light text-teal-dark rounded-full shadow-lg px-4 py-2.5 flex items-center gap-2"
              style={{ "--float-tilt": "2deg" } as React.CSSProperties}
            >
              <Check size={15} />
              <span className="text-sm font-semibold">Supervisión clínica real</span>
            </div>
          </div>
        </div>
      </div>

      {/* Marquee ribbon (velocity-reactive, driven by GSAP) */}
      <div className="relative border-t border-white/10 bg-white/[0.03] py-4 overflow-hidden">
        <div className="marquee-track flex w-max items-center gap-10 whitespace-nowrap will-change-transform">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map(
            (item, i) => (
              <span
                key={i}
                className="flex items-center gap-10 text-sm tracking-wide uppercase text-teal-light/70"
              >
                {item}
                <span className="text-coral/70" aria-hidden="true">✦</span>
              </span>
            )
          )}
        </div>
      </div>
    </section>
  )
}
