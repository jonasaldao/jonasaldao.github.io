import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Mail, Clock } from "lucide-react"
import { Navbar } from "@/components/amira/navbar"
import { Footer } from "@/components/amira/footer"
import { ArrepentimientoForm } from "@/components/amira/arrepentimiento-form"

export const metadata: Metadata = {
  title: "Botón de arrepentimiento — Amira",
  description:
    "Ejercé tu derecho de arrepentimiento sobre una contratación en Amira, sin costo y sin necesidad de crear una cuenta.",
  alternates: { canonical: "/arrepentimiento" },
}

const proLinks = [
  { href: "/#como-funciona", label: "Cómo funciona" },
  { href: "/#que-podes-hacer", label: "Qué podés hacer" },
  { href: "/#directorio", label: "Directorio" },
  { href: "/profesionales", label: "Para profesionales" },
]

export default function ArrepentimientoPage() {
  return (
    <div className="min-h-screen bg-off-white flex flex-col">
      <Navbar solid homeHref="/" links={proLinks} />

      <main className="flex-1 pt-32 pb-24 md:pt-40">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-navy/50 hover:text-verde-profundo transition-colors"
          >
            <ArrowLeft size={15} />
            Volver al inicio
          </Link>

          <h1 className="mt-6 text-4xl sm:text-5xl font-semibold text-navy leading-tight text-balance">
            Botón de <span className="accent-italic text-verde-profundo">arrepentimiento.</span>
          </h1>

          <p className="mt-4 text-lg text-navy/65 leading-relaxed">
            Si contrataste algo en Amira, tenés 10 días corridos desde ese
            momento para arrepentirte, sin costo y sin dar explicaciones. No
            hace falta crear una cuenta ni iniciar sesión para usar este
            formulario.
          </p>

          <div className="mt-8 flex items-start gap-3 rounded-2xl bg-arena ring-1 ring-verde/15 p-5">
            <Clock
              className="w-5 h-5 shrink-0 mt-0.5 text-verde-profundo"
              aria-hidden="true"
            />
            <p className="text-sm text-navy/75 leading-relaxed">
              Dentro de las 24 horas de recibida tu solicitud te enviamos, por
              el mismo medio, un código de identificación de tu
              arrepentimiento.
            </p>
          </div>

          <div className="mt-10">
            <ArrepentimientoForm id="form-arrepentimiento" />
          </div>

          <div className="mt-8 bg-white rounded-2xl p-5 ring-1 ring-verde/10 shadow-sm">
            <p className="font-serif font-semibold text-navy leading-snug">
              También podés escribirnos directamente
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Si preferís no usar el formulario, mandanos un email con los
              mismos datos.
            </p>
            <a
              href="mailto:soporte@amira.ar"
              className="mt-2 inline-flex items-center gap-2 text-verde-profundo font-semibold hover:text-verde transition-colors"
            >
              <Mail className="w-4 h-4" aria-hidden="true" />
              soporte@amira.ar
            </a>
          </div>
        </div>
      </main>

      <Footer subpage />
    </div>
  )
}
