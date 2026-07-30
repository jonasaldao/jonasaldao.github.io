import Link from "next/link"
import { Stethoscope, Lock, HeartHandshake } from "lucide-react"

const principles = [
  {
    icon: Stethoscope,
    title: "Diseñada con profesionales",
    description:
      "Profesionales de salud mental participan en el diseño y la evaluación de calidad y seguridad.",
  },
  {
    icon: Lock,
    title: "Tu información, protegida",
    description:
      "Amira aplica controles de acceso y privacidad para proteger la información personal.",
  },
  {
    icon: HeartHandshake,
    title: "Complementa, no reemplaza",
    description:
      "Amira es una herramienta de bienestar y no sustituye la atención de un profesional.",
  },
]

export function Differentiator() {
  return (
    <section
      id="confianza"
      tabIndex={-1}
      className="py-16 md:py-24 bg-arena overflow-hidden scroll-mt-28 focus:outline-none"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Boxed as its own dark panel so "confianza" reads as a distinct,
            self-contained block rather than blending into the surrounding
            light sections. */}
        <div className="relative bg-tinta rounded-[2.5rem] p-8 sm:p-12 md:p-16 overflow-hidden grain shadow-2xl shadow-verde/10">
          <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
            <div className="aurora absolute -top-24 right-0 w-80 h-80 rounded-full bg-verde/25 blur-[100px]" />
            <div className="blob-slow absolute -bottom-24 -left-16 w-72 h-72 rounded-full bg-verde-profundo/30 blur-[100px]" />
          </div>

          <div className="relative text-center max-w-xl mx-auto mb-12">
            <h2
              data-reveal
              className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white text-balance"
            >
              <span data-split>Tecnología con</span>{" "}
              <span data-split className="accent-italic text-menta">
                límites claros.
              </span>
            </h2>
          </div>

          <div data-stagger className="relative grid sm:grid-cols-3 gap-5">
            {principles.map((item) => (
              <div
                key={item.title}
                className="bg-white/[0.06] backdrop-blur-md rounded-3xl p-6 ring-1 ring-white/12"
              >
                <span className="w-11 h-11 rounded-2xl bg-verde/25 ring-1 ring-menta/20 flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-menta" />
                </span>
                <h3 className="font-serif text-lg font-semibold text-white mt-4 mb-2">
                  {item.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Visible but not dominant — smaller, muted, below the fold of this block */}
          <p
            data-reveal
            className="relative text-center text-white/45 text-sm mt-10 max-w-lg mx-auto leading-relaxed"
          >
            Amira no es un servicio de emergencias. Si necesitás ayuda
            urgente, comunicate con los servicios de emergencia de tu zona o
            consultá{" "}
            <Link
              href="/ayuda-urgente"
              className="text-menta hover:text-white underline underline-offset-2 transition-colors"
            >
              Ayuda urgente
            </Link>
            .
          </p>
        </div>
      </div>
    </section>
  )
}
