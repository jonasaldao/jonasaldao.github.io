import type { Metadata } from "next"
import { LandingFX } from "@/components/amira/landing-fx"
import { Navbar } from "@/components/amira/navbar"
import { ProHero } from "@/components/amira/pro-hero"
import { ProTrustStrip } from "@/components/amira/pro-trust-strip"
import { ProValue } from "@/components/amira/pro-value"
import { ProBeforeAfter } from "@/components/amira/pro-before-after"
import { ProHow } from "@/components/amira/pro-how"
import { ProBetaNotice } from "@/components/amira/pro-beta-notice"
import { ProFAQ } from "@/components/amira/pro-faq"
import { ProPricing } from "@/components/amira/pro-pricing"
import { Footer } from "@/components/amira/footer"

export const metadata: Metadata = {
  title: "Amira para profesionales — Menos gestión, más tiempo para tu práctica",
  description:
    "Perfil verificado en el directorio, agenda, turnos, recordatorios y cobros desde un solo lugar.",
  keywords: [
    "psicólogos",
    "gestión de consultorio",
    "agenda online",
    "bienestar emocional",
  ],
  alternates: { canonical: "/profesionales" },
}

const proLinks = [
  { href: "#beneficios", label: "Beneficios" },
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#preguntas-frecuentes", label: "Preguntas frecuentes" },
  { href: "#plan-pro", label: "Sumate" },
  { href: "/", label: "Amira para vos" },
]

export default function ProfesionalesPage() {
  return (
    <div className="min-h-screen">
      {/* Same GSAP + Lenis choreography as the landing */}
      <LandingFX />
      <Navbar links={proLinks} homeHref="/" />

      <ProHero />
      <ProTrustStrip />
      <ProValue />
      <ProBeforeAfter />
      <ProHow />
      <ProBetaNotice />
      <ProFAQ />
      <ProPricing />

      <Footer subpage />
    </div>
  )
}
