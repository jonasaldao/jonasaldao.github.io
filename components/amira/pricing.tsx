import { BarChart3, MessageCircle, Leaf, UserCheck } from "lucide-react"
import { WaitlistForm } from "./waitlist-form"

const trialFeatures = [
  { icon: BarChart3, text: "El check-in emocional." },
  { icon: MessageCircle, text: "El chat de acompañamiento." },
  { icon: Leaf, text: "Las herramientas y contenidos de bienestar." },
  { icon: UserCheck, text: "El directorio de profesionales." },
]

export function Pricing() {
  return (
    <section
      id="pricing"
      tabIndex={-1}
      className="relative bg-tinta py-16 md:py-24 overflow-hidden grain scroll-mt-28 focus:outline-none"
    >
      {/* Aurora */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="aurora absolute -top-32 right-1/4 w-[32rem] h-[32rem] rounded-full bg-verde/25 blur-[110px]" />
        <div className="blob absolute -bottom-40 -left-24 w-[26rem] h-[26rem] rounded-full bg-coral/10 blur-[100px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[1fr_0.95fr] gap-12 lg:gap-16 items-start">
          {/* Left — explanation, in plain language */}
          <div className="text-center lg:text-left">
            <span className="inline-block bg-white/10 text-menta font-semibold text-xs uppercase tracking-widest px-4 py-2 rounded-full ring-1 ring-white/15">
              Primera experiencia Amira
            </span>

            <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-semibold text-white text-balance">
              <span data-split>Sé de las primeras</span>{" "}
              <span data-split className="accent-italic text-menta">
                personas en probar Amira.
              </span>
            </h2>

            <p
              data-reveal
              className="mt-5 text-white/70 text-lg leading-relaxed max-w-lg mx-auto lg:mx-0"
            >
              Ya podés crear tu cuenta y empezar a usar Amira. Tu experiencia
              nos va a ayudar a seguir mejorando la plataforma.
            </p>

            {/* What you can try */}
            <div className="mt-8 bg-white/[0.06] backdrop-blur-md rounded-3xl p-6 sm:p-7 ring-1 ring-white/12 text-left">
              <p className="text-xs font-semibold text-menta uppercase tracking-widest mb-4">
                Durante esta etapa podés probar:
              </p>
              <ul className="space-y-3">
                {trialFeatures.map((f) => (
                  <li key={f.text} className="flex items-center gap-3">
                    <span className="w-8 h-8 shrink-0 rounded-xl bg-verde/25 ring-1 ring-menta/20 flex items-center justify-center">
                      <f.icon className="w-4 h-4 text-menta" />
                    </span>
                    <span className="text-white/85">{f.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p
              data-reveal
              className="mt-6 text-white/50 text-sm leading-relaxed max-w-lg mx-auto lg:mx-0"
            >
              Un email, confirmás que sos mayor de 18, y ya estás adentro.
            </p>
          </div>

          {/* Right — sign-up form */}
          <div data-reveal="scale">
            <WaitlistForm variant="usuarios" id="signup" />
          </div>
        </div>

        <p data-reveal className="text-center text-white/40 text-sm mt-12 max-w-xl mx-auto">
          Las consultas con psicólogos/as que coordines por el directorio son
          independientes de Amira y se abonan al profesional.
        </p>
      </div>
    </section>
  )
}
