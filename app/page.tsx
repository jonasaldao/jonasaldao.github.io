"use client"

import { LandingFX } from "@/components/amira/landing-fx"
import { Navbar } from "@/components/amira/navbar"
import { Hero } from "@/components/amira/hero"
import { Identification } from "@/components/amira/identification"
import { Presentation } from "@/components/amira/presentation"
import { Directory } from "@/components/amira/directory"
import { Differentiator } from "@/components/amira/differentiator"
import { HowItWorks } from "@/components/amira/how-it-works"
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

      {/* Block 2 - Identificación */}
      <Identification />

      {/* Block 3 - Qué podés hacer */}
      <Presentation />

      {/* Block 4 - Cómo Funciona */}
      <HowItWorks />

      {/* Block 5 - Directorio de profesionales.
          Sits right before the Differentiator: the directory is the bridge that
          "no reemplaza a un profesional, lo acerca" is talking about. */}
      <Directory />

      {/* Block 6 - Confianza y límites */}
      <Differentiator />

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
