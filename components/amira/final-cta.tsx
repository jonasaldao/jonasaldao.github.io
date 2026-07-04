import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

export function FinalCTA() {
  return (
    <section className="relative py-28 md:py-40 overflow-hidden bg-gradient-to-br from-teal-dark via-teal to-teal-dark grain">
      {/* Aurora blobs */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="aurora absolute -top-32 left-1/4 w-[30rem] h-[30rem] rounded-full bg-teal-light/25 blur-[100px]" />
        <div className="blob-slow absolute -bottom-40 right-1/4 w-[26rem] h-[26rem] rounded-full bg-ink/40 blur-[90px]" />
      </div>

      {/* Breathing rings behind headline */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
        <div className="breathe w-[36rem] h-[36rem] rounded-full border border-white/10" />
        <div
          className="breathe absolute w-[26rem] h-[26rem] rounded-full border border-white/15"
          style={{ animationDelay: "1.6s" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-tight mb-12 text-balance">
          <span data-split="chars">Tu espacio</span>{" "}
          <span data-split="chars" className="accent-italic text-teal-light">
            te está esperando.
          </span>
        </h2>

        <div data-reveal data-delay="0.15">
          <Button
            asChild
            size="lg"
            data-magnetic
            className="bg-white hover:bg-teal-light text-teal-dark rounded-full px-10 py-7 text-lg font-semibold shadow-2xl shadow-ink/30 transition-colors duration-300"
          >
            <a href="#pricing">Probá Amira gratis por 30 días</a>
          </Button>
        </div>

        <div
          data-reveal
          data-delay="0.3"
          className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-white/75 text-sm"
        >
          <span className="flex items-center gap-2">
            <Check size={16} className="text-teal-light" />
            Sin tarjeta de crédito
          </span>
          <span className="flex items-center gap-2">
            <Check size={16} className="text-teal-light" />
            Cancelá cuando quieras
          </span>
        </div>
      </div>
    </section>
  )
}
