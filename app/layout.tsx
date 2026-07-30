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
  metadataBase: new URL('https://www.amira.ar'),
  title: {
    default: 'Amira - Tu espacio cuando lo necesitás',
    template: '%s',
  },
  description: 'Plataforma digital de bienestar emocional para personas mayores de 18 años en Argentina. Registrá cómo te sentís, conversá con una IA de acompañamiento y accedé a herramientas de bienestar.',
  keywords: ['bienestar emocional', 'acompañamiento emocional', 'check-in emocional', 'autocuidado', 'salud mental', 'IA'],
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', sizes: '32x32', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', sizes: '32x32', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: [{ url: '/apple-icon.png' }],
  },
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
