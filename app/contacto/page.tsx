import type { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Mail, ShieldAlert } from "lucide-react"
import { Navbar } from "@/components/amira/navbar"
import { Footer } from "@/components/amira/footer"

export const metadata: Metadata = {
  title: "Contacto — Amira",
  description: "Cómo escribirle al equipo de Amira por email.",
  alternates: { canonical: "/contacto" },
}

const proLinks = [
  { href: "/#como-funciona", label: "Cómo funciona" },
  { href: "/#que-podes-hacer", label: "Qué podés hacer" },
  { href: "/#directorio", label: "Directorio" },
  { href: "/profesionales", label: "Para profesionales" },
]

const channels = [
  {
    label: "Consultas generales",
    email: "hola@amira.app",
    description: "Preguntas sobre Amira, la beta o el directorio de profesionales.",
  },
  {
    label: "Privacidad y datos",
    email: "privacidad@amira.app",
    description: "Ejercer tus derechos sobre tus datos o consultar la política de privacidad.",
  },
]

export default function ContactoPage() {
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
            Contacto<span className="accent-italic text-verde-profundo">.</span>
          </h1>

          <p className="mt-4 text-lg text-navy/65 leading-relaxed">
            ¿Tenés una pregunta o querés escribirnos por otro motivo? Podés
            hacerlo directamente por email.
          </p>

          <div className="mt-10 space-y-4">
            {channels.map((c) => (
              <div
                key={c.email}
                className="bg-white rounded-2xl p-5 ring-1 ring-verde/10 shadow-sm"
              >
                <p className="font-serif font-semibold text-navy leading-snug">
                  {c.label}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  {c.description}
                </p>
                <a
                  href={`mailto:${c.email}`}
                  className="mt-2 inline-flex items-center gap-2 text-verde-profundo font-semibold hover:text-verde transition-colors"
                >
                  <Mail className="w-4 h-4" aria-hidden="true" />
                  {c.email}
                </a>
              </div>
            ))}
          </div>

          <div className="mt-8 flex items-start gap-3 rounded-2xl bg-arena ring-1 ring-verde/15 p-5">
            <ShieldAlert
              className="w-5 h-5 shrink-0 mt-0.5 text-verde-profundo"
              aria-hidden="true"
            />
            <p className="text-sm text-navy/75 leading-relaxed">
              Si estás en una situación de urgencia, no uses este contacto:
              mirá los recursos en{" "}
              <Link
                href="/ayuda-urgente"
                className="text-verde-profundo underline underline-offset-2 hover:text-verde transition-colors"
              >
                Ayuda urgente
              </Link>
              .
            </p>
          </div>
        </div>
      </main>

      <Footer subpage />
    </div>
  )
}
