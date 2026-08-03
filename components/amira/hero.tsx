import { Button } from "@/components/ui/button"
import { Check, ArrowDown } from "lucide-react"
import { AuroraCanvas } from "./aurora-canvas"

const trustSignals = [
  "Para mayores de 18 años",
  "No reemplaza la terapia",
  "No es un servicio de emergencias",
]

const marqueeItems = [
  "Acompañamiento emocional",
  "Accedé cuando quieras",
  "Diseñada y auditada por profesionales de la salud mental",
  "Tu espacio cuando lo necesitás",
]

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-tinta grain">
      {/* WebGL aurora background (falls back to the tinta bg if no WebGL) */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <AuroraCanvas className="absolute inset-0" />
        <div className="blob absolute -bottom-52 left-1/4 w-[30rem] h-[30rem] rounded-full bg-coral/10 blur-[110px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-14 lg:gap-8 items-center">
          {/* Copy */}
          <div className="text-center lg:text-left">
            <span
              className="hero-rise inline-block bg-white/10 text-menta font-semibold text-xs uppercase tracking-widest px-4 py-2 rounded-full ring-1 ring-white/15"
              style={{ "--rise-delay": "0.05s" } as React.CSSProperties}
            >
              Tu espacio, cuando lo necesitás
            </span>

            <h1 className="mt-7 text-5xl sm:text-6xl md:text-7xl xl:text-[5.25rem] font-semibold text-white leading-[1.04] text-balance">
              <span data-split="chars" data-delay="0.1" className="block">
                Una nueva forma de cuidar
              </span>
              <span
                data-split="chars"
                data-delay="0.35"
                className="block accent-italic text-menta"
              >
                tu bienestar emocional
              </span>
            </h1>

            <p
              className="hero-rise mt-7 text-sm sm:text-base text-white/70 max-w-xl mx-auto lg:mx-0 text-pretty leading-relaxed"
              style={{ "--rise-delay": "0.8s" } as React.CSSProperties}
            >
              Un espacio digital para registrar cómo te sentís, conversar,
              encontrar herramientas para tu día a día y acercarte a
              profesionales cuando quieras dar ese paso.
            </p>

            <div
              className="hero-rise mt-10 flex flex-col sm:flex-row items-center lg:items-start lg:justify-start justify-center gap-5"
              style={{ "--rise-delay": "0.95s" } as React.CSSProperties}
            >
              <Button
                asChild
                size="lg"
                data-magnetic
                className="bg-verde-profundo hover:bg-menta hover:text-verde-profundo text-white rounded-full px-9 py-7 text-lg font-semibold shadow-xl shadow-verde/30 transition-colors duration-300"
              >
                <a href="#como-funciona">Descubrí cómo funciona</a>
              </Button>

              <a
                href="#que-podes-hacer"
                className="group inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors text-sm font-medium py-3"
              >
                Conocé qué ofrece Amira
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
                  <Check size={15} className="text-menta" />
                  {signal}
                </span>
              ))}
            </div>
          </div>

          {/* Visual — a single focal point, kept modest in size on purpose */}
          <div
            data-parallax="7"
            className="hero-rise relative mx-auto w-full max-w-[13rem] sm:max-w-xs lg:max-w-sm"
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

            <div className="blob-mask relative overflow-hidden shadow-2xl shadow-tinta ring-1 ring-white/15">
              <img
                src="/images/hero-young-person.webp"
                alt="Persona usando su celular en un momento tranquilo"
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-verde-profundo/40 via-transparent to-transparent" />
            </div>

            {/* Floating chat bubble — embedded inside the image, bottom-right */}
            <div className="float-gentle absolute z-10 right-3 bottom-4 sm:right-4 sm:bottom-5 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl px-3.5 py-2.5 max-w-[8.5rem] sm:max-w-[9.5rem]">
              <p className="text-xs font-medium text-navy">¿Cómo estás hoy?</p>
              <div className="mt-1 flex gap-1" aria-hidden="true">
                <span className="typing-dot w-1 h-1 rounded-full bg-verde" />
                <span className="typing-dot w-1 h-1 rounded-full bg-verde" />
                <span className="typing-dot w-1 h-1 rounded-full bg-verde" />
              </div>
            </div>

            {/* Glow */}
            <div
              className="absolute -inset-8 bg-verde/20 rounded-[3rem] blur-2xl -z-10"
              aria-hidden="true"
            />
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
                className="flex items-center gap-10 text-sm tracking-wide uppercase text-menta/70"
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
