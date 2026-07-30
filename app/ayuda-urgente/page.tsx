import type { Metadata } from "next"
import { Phone, ShieldAlert } from "lucide-react"
import { Navbar } from "@/components/amira/navbar"
import { Footer } from "@/components/amira/footer"
import { ayudaUrgente } from "@/content/ayuda-urgente"

export const metadata: Metadata = {
  title: "Ayuda urgente — Amira",
  description:
    "Recursos de ayuda para situaciones de crisis o riesgo inmediato en salud mental en Argentina.",
  alternates: { canonical: "/ayuda-urgente" },
}

const MESES = [
  "enero", "febrero", "marzo", "abril", "mayo", "junio",
  "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre",
]

function formatearFecha(iso: string) {
  const [year, month, day] = iso.split("-").map(Number)
  return `${day} de ${MESES[month - 1]} de ${year}`
}

const proLinks = [
  { href: "/#como-funciona", label: "Cómo funciona" },
  { href: "/#que-podes-hacer", label: "Qué podés hacer" },
  { href: "/#directorio", label: "Directorio" },
  { href: "/profesionales", label: "Para profesionales" },
]

export default function AyudaUrgentePage() {
  return (
    <div className="min-h-screen bg-off-white flex flex-col">
      <Navbar solid homeHref="/" links={proLinks} />

      <main className="flex-1 pt-32 pb-24 md:pt-40">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-5xl font-semibold text-navy leading-tight text-balance">
            Ayuda <span className="accent-italic text-verde-profundo">urgente.</span>
          </h1>

          <div className="mt-6 flex items-start gap-3 rounded-2xl bg-arena ring-1 ring-verde/15 p-5">
            <ShieldAlert
              className="w-5 h-5 shrink-0 mt-0.5 text-verde-profundo"
              aria-hidden="true"
            />
            <p className="text-navy/75 leading-relaxed">
              Amira no es un servicio de emergencias y las conversaciones no se
              leen en tiempo real. Si estás en peligro inmediato o en una
              situación de riesgo, comunicate con alguno de estos recursos o
              con una persona de confianza que pueda acompañarte ahora.
            </p>
          </div>

          <div className="mt-10 space-y-4">
            {ayudaUrgente.recursos.map((recurso) => (
              <div
                key={recurso.nombre + recurso.numero}
                className="bg-white rounded-2xl p-5 ring-1 ring-verde/10 shadow-sm"
              >
                <p className="font-serif font-semibold text-navy leading-snug">
                  {recurso.nombre}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  {recurso.alcance}
                </p>
                <a
                  href={`tel:${recurso.numero.replace(/[^\d]/g, "")}`}
                  className="mt-2 inline-flex items-center gap-2 text-verde-profundo font-semibold hover:text-verde transition-colors"
                >
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  {recurso.numero}
                </a>
              </div>
            ))}
          </div>

          <p className="mt-10 text-sm text-muted-foreground">
            Recursos verificados al {formatearFecha(ayudaUrgente.verificadoAl)}.
            Se revisan cada {ayudaUrgente.revalidarCada}.
          </p>
        </div>
      </main>

      <Footer subpage />
    </div>
  )
}
