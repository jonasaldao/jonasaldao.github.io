import type { Metadata } from "next"
import Link from "next/link"
import { Undo2 } from "lucide-react"
import { LandingFX } from "@/components/amira/landing-fx"
import { Navbar } from "@/components/amira/navbar"
import { Hero } from "@/components/amira/hero"
import { Identification } from "@/components/amira/identification"
import { Insight } from "@/components/amira/insight"
import { Presentation } from "@/components/amira/presentation"
import { Directory } from "@/components/amira/directory"
import { Differentiator } from "@/components/amira/differentiator"
import { HowItWorks } from "@/components/amira/how-it-works"
import { Pricing } from "@/components/amira/pricing"
import { ProfessionalCTA } from "@/components/amira/professional-cta"
import { FAQ } from "@/components/amira/faq"
import { Footer } from "@/components/amira/footer"

export const metadata: Metadata = {
  title: "Amira | Una nueva forma de cuidar tu bienestar emocional",
  description:
    "Registrá cómo te sentís, conversá, explorá herramientas de bienestar y encontrá profesionales en un espacio digital pensado para personas mayores de 18 años.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Amira | Una nueva forma de cuidar tu bienestar emocional",
    description:
      "Registrá cómo te sentís, conversá, explorá herramientas de bienestar y encontrá profesionales en un espacio digital pensado para personas mayores de 18 años.",
    url: "/",
    siteName: "Amira",
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Amira | Una nueva forma de cuidar tu bienestar emocional",
    description:
      "Registrá cómo te sentís, conversá, explorá herramientas de bienestar y encontrá profesionales en un espacio digital pensado para personas mayores de 18 años.",
  },
}

export default function AmiraLandingPage() {
  return (
    <div className="min-h-screen">
      {/* GSAP + Lenis choreography (scroll progress bar, reveals, pin, parallax) */}
      <LandingFX />
      <Navbar />

      {/* Block 1 - Hero */}
      <Hero />

      {/* Block 2 - Identificación (problema) */}
      <Identification />

      {/* Block 3 - Propuesta de valor */}
      <Insight />

      {/* Block 4 - Qué podés hacer (funciones principales) */}
      <Presentation />

      {/* Block 5 - Cómo Funciona */}
      <HowItWorks />

      {/* Block 6 - Directorio de profesionales.
          Sits right before the Differentiator: the directory is the bridge that
          "no reemplaza a un profesional, lo acerca" is talking about. */}
      <Directory />

      {/* Block 7 - Confianza y límites */}
      <Differentiator />

      {/* Block 8 - FAQs */}
      <FAQ />

      {/* Block 9 - Fase beta y formulario */}
      <Pricing />

      {/* Block 10 - CTA destacado para profesionales */}
      <ProfessionalCTA />

      {/* Botón de arrepentimiento — acceso directo y destacado exigido por la
          Res. 424/2020 de la Secretaría de Comercio Interior: tiene que verse
          desde el inicio, sin registración previa. */}
      <section className="bg-off-white py-10 border-t border-navy/5">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/arrepentimiento"
            className="flex items-center justify-center gap-3 rounded-2xl bg-white ring-1 ring-verde/15 shadow-sm px-6 py-5 text-lg sm:text-xl font-semibold text-navy hover:text-verde-profundo hover:ring-verde/40 transition-colors text-center"
          >
            <Undo2 className="w-6 h-6 shrink-0 text-verde-profundo" aria-hidden="true" />
            Botón de arrepentimiento
          </Link>
        </div>
      </section>

      {/* Footer legal */}
      <Footer />
    </div>
  )
}
