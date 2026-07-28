import type { Metadata } from "next"
import { LandingFX } from "@/components/amira/landing-fx"
import { Navbar } from "@/components/amira/navbar"
import { ProHero } from "@/components/amira/pro-hero"
import { ProValue } from "@/components/amira/pro-value"
import { ProHow } from "@/components/amira/pro-how"
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
}

const proLinks = [
  { href: "#beneficios", label: "Beneficios" },
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#plan-pro", label: "Plan" },
  { href: "/", label: "Amira para vos" },
]

export default function ProfesionalesPage() {
  return (
    <div className="min-h-screen">
      {/* Same GSAP + Lenis choreography as the landing */}
      <LandingFX />
      <Navbar links={proLinks} homeHref="/" />

      <ProHero />
      <ProValue />
      <ProHow />
      <ProPricing />

      <Footer subpage />
    </div>
  )
}
