import type { Metadata } from 'next'
import { Inter, Fraunces } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({
  subsets: ["latin"],
  variable: '--font-inter',
})

const fraunces = Fraunces({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: '--font-fraunces',
})

export const metadata: Metadata = {
  title: 'Amira - Tu espacio cuando lo necesitás',
  description: 'Acompañamiento emocional disponible 24/7, respaldado por profesionales de la salud. La plataforma de bienestar emocional para jóvenes en Latinoamérica.',
  keywords: ['bienestar emocional', 'salud mental', 'acompañamiento', 'psicología', 'IA', 'terapia'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es-AR" className="bg-[#F8FFFE]">
      <body className={`${inter.variable} ${fraunces.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
