import { Button } from "@/components/ui/button"
import { Check } from "lucide-react"

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
              <span data-split className="accent-italic text-teal-dark">
                todo incluido.
              </span>
            </h2>
            <p
              data-reveal
              data-delay="0.1"
              className="mt-5 text-lg text-navy/60"
            >
              Sin comisión por sesión. Sin costo por paciente.
            </p>
          </div>

          <div data-reveal="scale" className="max-w-md mx-auto">
            <div className="relative rounded-[2rem] p-[2px] bg-gradient-to-br from-teal via-teal-light to-coral/60 shadow-xl shadow-teal/15">
              <div className="bg-white rounded-[calc(2rem-2px)] p-7 md:p-9">
                <h3 className="font-serif text-2xl font-semibold text-navy mb-2">
                  Suscripción profesional
                </h3>
                <p className="font-serif accent-italic text-4xl text-teal-dark mb-7">
                  USD 20
                  <span className="text-lg not-italic font-sans font-normal text-muted-foreground">
                    /mes
                  </span>
                </p>

                <div className="space-y-3.5 mb-8">
                  {planFeatures.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <span className="w-5 h-5 shrink-0 rounded-full bg-teal-light flex items-center justify-center mt-0.5">
                        <Check className="w-3 h-3 text-teal-dark" />
                      </span>
                      <span className="text-navy/75">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  asChild
                  data-magnetic
                  className="w-full bg-teal-dark hover:bg-teal text-white rounded-full py-6 text-lg font-semibold transition-colors duration-300"
                >
                  <a href="#signup-pro">Quiero sumarme a la beta</a>
                </Button>

                <p className="text-center text-muted-foreground text-sm mt-4">
                  Primeros 3 meses gratuitos para profesionales que se sumen a la
                  beta.
                </p>
              </div>
            </div>
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
      <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-br from-teal-dark via-teal to-teal-dark grain">
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <div className="aurora absolute -top-32 left-1/4 w-[30rem] h-[30rem] rounded-full bg-teal-light/25 blur-[100px]" />
          <div className="blob-slow absolute -bottom-40 right-1/4 w-[26rem] h-[26rem] rounded-full bg-ink/40 blur-[90px]" />
        </div>

        <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white leading-tight mb-8 text-balance">
            <span data-split="chars">Tu próxima sesión,</span>{" "}
            <span data-split="chars" className="accent-italic text-teal-light">
              con más contexto.
            </span>
          </h2>

          <div data-reveal data-delay="0.15">
            <Button
              asChild
              size="lg"
              data-magnetic
              className="bg-white hover:bg-teal-light text-teal-dark rounded-full px-10 py-7 text-lg font-semibold shadow-2xl shadow-ink/30 transition-colors duration-300"
            >
              <a href="#signup-pro">Crear mi perfil profesional</a>
            </Button>
          </div>

          <p className="mt-7 text-white/70 text-sm">
            3 meses gratis · Sin permanencia
          </p>
        </div>
      </section>
    </>
  )
}
