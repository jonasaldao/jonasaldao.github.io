"use client"

import { LandingFX } from "@/components/amira/landing-fx"
import { Navbar } from "@/components/amira/navbar"
import { Hero } from "@/components/amira/hero"
import { Problem } from "@/components/amira/problem"
import { Identification } from "@/components/amira/identification"
import { Insight } from "@/components/amira/insight"
import { Presentation } from "@/components/amira/presentation"
import { Features } from "@/components/amira/features"
import { Differentiator } from "@/components/amira/differentiator"
import { HowItWorks } from "@/components/amira/how-it-works"
import { Transformation } from "@/components/amira/transformation"
import { Privacy } from "@/components/amira/privacy"
import { Pricing } from "@/components/amira/pricing"
import { Professionals } from "@/components/amira/professionals"
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

      {/* Block 7 - El Diferencial */}
      <Differentiator />

      {/* Block 8 - Cómo Funciona */}
      <HowItWorks />

      {/* Block 9 - Transformación */}
      <Transformation />

      {/* Block 10 - Privacidad */}
      <Privacy />

      {/* Block 11 - Pricing */}
      <Pricing />

      {/* Block 11B - Para Profesionales */}
      <Professionals />

      {/* Block 12 - FAQs */}
      <FAQ />

      {/* Block 13 - CTA Final */}
      <FinalCTA />

      {/* Footer */}
      <Footer />
    </div>
  )
}
