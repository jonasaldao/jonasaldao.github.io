import { Button } from "@/components/ui/button"
import { Check, Star } from "lucide-react"

const freeFeatures = [
  "Check-in emocional diario",
  "Diario emocional guiado",
  "Caja de herramientas de emergencia",
  "Contenido psicoeducativo",
  "Acceso al directorio de psicólogos",
]

const premiumFeatures = [
  "Todo lo incluido en la prueba gratuita",
  "IA conversacional ilimitada con supervisión clínica",
  "Seguimiento longitudinal completo",
  "Contenido psicoeducativo personalizado",
  "Micro-ejercicios situacionales",
  "Notificaciones personalizadas",
  "Sugerencia activa de derivación a psicólogo/a",
]

export function Pricing() {
  return (
    <section id="pricing" className="relative bg-ink py-24 md:py-32 overflow-hidden grain">
      {/* Aurora */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="aurora absolute -top-32 right-1/4 w-[32rem] h-[32rem] rounded-full bg-teal/25 blur-[110px]" />
        <div className="blob absolute -bottom-40 -left-24 w-[26rem] h-[26rem] rounded-full bg-teal-dark/40 blur-[100px]" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white mb-4 text-balance">
            <span data-split>Probá Amira</span>{" "}
            <span data-split className="accent-italic text-teal-light">
              gratis durante 30 días.
            </span>
          </h2>
          <p data-reveal data-delay="0.1" className="text-white/60 text-lg">
            Sin tarjeta de crédito. Sin compromiso.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 items-start">
          {/* Free Plan — glass card */}
          <div
            data-reveal
            className="bg-white/[0.06] backdrop-blur-md rounded-[2rem] p-7 sm:p-9 ring-1 ring-white/15"
          >
            <div className="mb-7">
              <span className="inline-block bg-teal-light/15 text-teal-light font-semibold text-xs uppercase tracking-widest px-3 py-1.5 rounded-full">
                Gratis · 30 días
              </span>
              <h3 className="font-serif text-3xl font-semibold text-white mt-4">
                Prueba gratuita
              </h3>
            </div>

            <div className="space-y-3.5 mb-9">
              {freeFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-teal-light flex-shrink-0 mt-0.5" />
                  <span className="text-white/75">{feature}</span>
                </div>
              ))}
            </div>

            <Button
              asChild
              className="w-full bg-white/10 hover:bg-white/20 text-white ring-1 ring-white/25 rounded-full py-6 text-lg font-semibold transition-all duration-300"
            >
              <a href="#signup">Empezar gratis</a>
            </Button>

            <p className="text-center text-white/45 text-sm mt-4">
              Sin tarjeta de crédito requerida.
            </p>
          </div>

          {/* Premium Plan — elevated white card */}
          <div
            data-reveal
            data-delay="0.15"
            className="relative bg-white rounded-[2rem] p-7 sm:p-9 shadow-2xl shadow-teal/20 md:-mt-6"
          >
            {/* Popular Badge */}
            <div className="absolute -top-4 right-8">
              <span className="bg-coral text-white px-4 py-1.5 rounded-full text-sm font-semibold flex items-center gap-1.5 shadow-lg shadow-coral/30">
                <Star className="w-4 h-4" fill="currentColor" />
                MÁS POPULAR
              </span>
            </div>

            <div className="mb-7">
              <span className="font-serif accent-italic text-4xl text-teal-dark">
                USD 12
                <span className="text-lg not-italic font-sans font-normal text-muted-foreground">
                  {" "}/mes
                </span>
              </span>
              <h3 className="font-serif text-3xl font-semibold text-navy mt-3">
                Plan Amira
              </h3>
            </div>

            <div className="space-y-3.5 mb-9">
              {premiumFeatures.map((feature, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className="w-5 h-5 shrink-0 rounded-full bg-teal-light flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-teal-dark" />
                  </span>
                  <span className="text-navy/80">{feature}</span>
                </div>
              ))}
            </div>

            <Button
              asChild
              data-magnetic
              className="w-full bg-teal-dark hover:bg-teal text-white rounded-full py-6 text-lg font-semibold shadow-lg shadow-teal/25 transition-colors duration-300"
            >
              <a href="#signup">Comenzar con el plan</a>
            </Button>
          </div>
        </div>

        <p
          data-reveal
          className="text-center text-white/45 text-sm mt-12"
        >
          Las consultas con psicólogos/as son independientes de la suscripción, al
          honorario del profesional.
        </p>
      </div>
    </section>
  )
}
