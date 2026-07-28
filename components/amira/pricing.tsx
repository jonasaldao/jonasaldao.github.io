import Link from "next/link"
import { Check, ArrowRight } from "lucide-react"
import { WaitlistForm } from "./waitlist-form"

const freeFeatures = [
  "Chat con IA limitado",
  "Check-in emocional diario",
  "Caja de herramientas útiles",
  "Contenido psicoeducativo",
  "Acceso al directorio de profesionales",
]

const premiumFeatures = [
  "Todo lo incluido en la prueba gratuita",
  "IA conversacional ilimitada con supervisión clínica",
  "Seguimiento longitudinal completo y más personalizado",
  "Contenido psicoeducativo adaptado a tu proceso, no genérico",
  "Micro-ejercicios situacionales",
  "Notificaciones personalizadas",
  "Sugerencia activa de derivación a psicólogo/a",
]

export function Pricing() {
  return (
    <section id="pricing" className="relative bg-tinta py-16 md:py-24 overflow-hidden grain">
      {/* Aurora */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="aurora absolute -top-32 right-1/4 w-[32rem] h-[32rem] rounded-full bg-verde/25 blur-[110px]" />
        <div className="blob absolute -bottom-40 -left-24 w-[26rem] h-[26rem] rounded-full bg-verde-profundo/40 blur-[100px]" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
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

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-start">
          {/* Free Plan — glass card */}
          <div
            data-reveal
            className="bg-white/[0.06] backdrop-blur-md rounded-[2rem] p-7 sm:p-9 ring-1 ring-white/15"
          >
            <div className="mb-7">
              <span className="inline-block bg-menta/15 text-menta font-semibold text-xs uppercase tracking-widest px-3 py-1.5 rounded-full">
                En la beta
              </span>
              <h3 className="font-serif text-3xl font-semibold text-white mt-4">
                Acceso gratuito
              </h3>
            </div>

            <div className="space-y-3.5">
              {freeFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-menta flex-shrink-0 mt-0.5" />
                  <span className="text-white/75">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Premium Plan — elevated white card */}
          <div
            data-reveal
            data-delay="0.15"
            className="relative bg-white rounded-[2rem] p-7 sm:p-9 shadow-2xl shadow-verde/20 md:-mt-6"
          >
            <div className="mb-7">
              <span className="inline-block bg-arena text-verde-profundo font-semibold text-xs uppercase tracking-widest px-3 py-1.5 rounded-full">
                Cuando salga de beta
              </span>
              <h3 className="font-serif text-3xl font-semibold text-navy mt-4">
                Plan Amira
              </h3>
            </div>

            <div className="space-y-3.5">
              {premiumFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="w-5 h-5 shrink-0 rounded-full bg-menta flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-verde-profundo" />
                  </span>
                  <span className="text-navy/80">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-md mx-auto mt-10">
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
