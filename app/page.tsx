"use client"

import { LandingFX } from "@/components/amira/landing-fx"
import { Navbar } from "@/components/amira/navbar"
import { Hero } from "@/components/amira/hero"
import { Problem } from "@/components/amira/problem"
import { Identification } from "@/components/amira/identification"
import { Insight } from "@/components/amira/insight"
import { Presentation } from "@/components/amira/presentation"
import { Features } from "@/components/amira/features"
import { Library } from "@/components/amira/library"
import { Directory } from "@/components/amira/directory"
import { Differentiator } from "@/components/amira/differentiator"
import { HowItWorks } from "@/components/amira/how-it-works"
import { Privacy } from "@/components/amira/privacy"
import { Pricing } from "@/components/amira/pricing"
import { ProfessionalsTeaser } from "@/components/amira/professionals-teaser"
import { FAQ } from "@/components/amira/faq"
import { FinalCTA } from "@/components/amira/final-cta"
import { Footer } from "@/components/amira/footer"

export default function AmiraLandingPage() {
  return (
    <div className="min-h-screen">
      {/* GSAP + Lenis choreography (scroll progress bar, reveals, pin, parallax) */}
      <LandingFX />
      <Navbar />

      {/* Block 1 - Hero */}
      <Hero />

      {/* Block 2 - El Problema */}
      <Problem />

      {/* Block 3 - Identificación */}
      <Identification />

      {/* Block 4 - El Insight Central */}
      <Insight />

      {/* Block 5 - Presentación de Amira */}
      <Presentation />

      {/* Block 6 - Cómo te Ayuda */}
      <Features />

      {/* Block 7 - Biblioteca de bienestar */}
      <Library />

      {/* Block 8 - Directorio de profesionales.
          Sits right before the Differentiator: the directory is the bridge that
          "no reemplaza a un profesional, lo acerca" is talking about. */}
      <Directory />

      {/* Block 9 - El Diferencial + límites de la IA */}
      <Differentiator />

      {/* Block 10 - Cómo Funciona */}
      <HowItWorks />

      {/* Block 11 - Privacidad */}
      <Privacy />

      {/* Block 12 - Pricing */}
      <Pricing />

      {/* Block 13 - Teaser profesionales (funnel completo en /profesionales) */}
      <ProfessionalsTeaser />

      {/* Block 14 - FAQs */}
      <FAQ />

      {/* Block 15 - CTA Final */}
      <FinalCTA />

      {/* Footer */}
      <Footer />
    </div>
  )
}
