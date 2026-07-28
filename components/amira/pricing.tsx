import Link from "next/link"
import { Check, ArrowRight } from "lucide-react"
import { WaitlistForm } from "./waitlist-form"

const features = [
  "Check-in emocional diario y tu historial personal",
  "Conversación con IA para reflexionar, disponible cuando la necesites",
  "Ejercicios y contenidos educativos de bienestar",
  "Acceso al directorio de profesionales",
]

export function Pricing() {
  return (
    <section id="pricing" className="relative bg-tinta py-16 md:py-24 overflow-hidden grain">
      {/* Aurora */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="aurora absolute -top-32 right-1/4 w-[32rem] h-[32rem] rounded-full bg-verde/25 blur-[110px]" />
        <div className="blob absolute -bottom-40 -left-24 w-[26rem] h-[26rem] rounded-full bg-verde-profundo/40 blur-[100px]" />
      </div>

      <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-4 text-balance">
            <span data-split>Tu espacio</span>{" "}
            <span data-split className="accent-italic text-menta">
              te está esperando.
            </span>
          </h2>
          <p data-reveal data-delay="0.1" className="text-white/60 text-lg">
            Estamos en fase beta. Sin tarjeta de crédito. Sin compromiso.
          </p>
        </div>

        <div className="max-w-md mx-auto bg-white/[0.06] backdrop-blur-md rounded-[2rem] p-7 sm:p-9 ring-1 ring-white/15">
          <span className="inline-block bg-menta/15 text-menta font-semibold text-xs uppercase tracking-widest px-3 py-1.5 rounded-full">
            En la beta
          </span>
          <h3 className="font-serif text-2xl font-semibold text-white mt-4 mb-6">
            Qué incluye
          </h3>

          <div className="space-y-3.5">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-menta flex-shrink-0 mt-0.5" />
                <span className="text-white/80">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-md mx-auto mt-6">
          <WaitlistForm variant="usuarios" id="signup" />
        </div>

        <p
          data-reveal
          className="text-center text-white/45 text-sm mt-12"
        >
          Las consultas con psicólogos/as que coordines por el directorio son
          independientes de Amira y se abonan al profesional.
        </p>

        <p data-reveal className="text-center mt-6">
          <Link
            href="/profesionales"
            className="inline-flex items-center gap-1.5 text-menta/80 hover:text-menta text-sm font-medium transition-colors"
          >
            ¿Trabajás en salud mental? Conocé Amira para profesionales
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </p>
      </div>
    </section>
  )
}
