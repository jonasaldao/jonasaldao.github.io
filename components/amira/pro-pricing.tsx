import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"
import { WaitlistForm } from "./waitlist-form"

const planFeatures = [
  "Perfil verificado en el directorio público de Amira",
  "Agenda, turnos, reprogramaciones y recordatorios automáticos",
  "Sesiones online y seguimiento de cobros",
  "Contexto de tus pacientes entre sesiones",
  "Alertas ante señales de riesgo, con protocolo de escalada",
]

export function ProPricing() {
  return (
    <>
      <section
        id="plan-pro"
        className="relative py-24 md:py-32 bg-sand overflow-hidden"
      >
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy text-balance">
              <span data-split>Un plan,</span>{" "}
              <span data-split className="accent-italic text-verde-profundo">
                todo incluido.
              </span>
            </h2>
            <p
              data-reveal
              data-delay="0.1"
              className="mt-5 text-lg text-navy/60"
            >
              Estamos en fase beta. Primeros 3 meses gratuitos al lanzar.
            </p>
          </div>

          <div data-reveal="scale" className="max-w-md mx-auto">
            <div className="relative rounded-[2rem] p-[2px] bg-gradient-to-br from-verde via-menta to-coral/60 shadow-xl shadow-verde/15">
              <div className="bg-white rounded-[calc(2rem-2px)] p-7 md:p-9">
                <h3 className="font-serif text-2xl font-semibold text-navy mb-2">
                  Suscripción profesional
                </h3>
                <p className="text-muted-foreground mb-7">
                  Precio a confirmar antes del lanzamiento.
                </p>

                <div className="space-y-3.5 mb-8">
                  {planFeatures.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <span className="w-5 h-5 shrink-0 rounded-full bg-menta flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-verde-profundo" />
                      </span>
                      <span className="text-navy/75">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-md mx-auto mt-6">
            <WaitlistForm variant="profesionales" id="signup-pro" />
          </div>

          <p
            data-reveal
            className="text-center text-navy/45 text-sm mt-12 max-w-lg mx-auto leading-relaxed"
          >
            Los honorarios de tus consultas los definís vos y los cobrás
            íntegramente. Amira no toma parte de la sesión.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-verde-profundo via-verde to-verde-profundo grain">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="aurora absolute -top-32 left-1/4 w-[30rem] h-[30rem] rounded-full bg-menta/25 blur-[100px]" />
          <div className="blob-slow absolute -bottom-40 right-1/4 w-[26rem] h-[26rem] rounded-full bg-tinta/40 blur-[90px]" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight mb-8 text-balance">
            <span data-split="chars">Tu próxima sesión,</span>{" "}
            <span data-split="chars" className="accent-italic text-menta">
              con más contexto.
            </span>
          </h2>

          <div data-reveal data-delay="0.15">
            <Button
              asChild
              size="lg"
              data-magnetic
              className="bg-white hover:bg-menta text-verde-profundo rounded-full px-10 py-7 text-lg font-semibold shadow-2xl shadow-tinta/30 transition-colors duration-300"
            >
              <a href="#signup-pro">Sumarme a la beta</a>
            </Button>
          </div>

          <p className="mt-7 text-white/70 text-sm">
            3 meses gratis al lanzar · Sin permanencia
          </p>
        </div>
      </section>
    </>
  )
}
