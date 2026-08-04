import type { Metadata, Viewport } from 'next'
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

/**
 * Tints the browser chrome — the address bar on Chrome for Android, the status
 * bar area on iOS Safari and any installed PWA.
 *
 * verde-profundo is the brand token nearest what the hero actually renders at
 * the top of the viewport (measured around #124E43, where the aurora sits over
 * tinta), so the bar reads as part of the page on the two views that open dark.
 * The legal and contact pages open light instead; they carry a branded bar
 * rather than a seamless one, which is the usual trade for a single value.
 */
/**
 * Both schemes are declared on purpose. Chrome for Android picks the entry
 * whose media query matches, and with only an unscoped value it will fall back
 * to its own dark toolbar when the browser is themed dark — which reads as the
 * tag doing nothing at all. The dark entry uses tinta, the hero's own base.
 */
export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#075E52' },
    { media: '(prefers-color-scheme: dark)', color: '#17312D' },
  ],
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
