import type { MetadataRoute } from 'next'

// Required by `output: 'export'` — metadata routes are treated as dynamic
// handlers otherwise and the build refuses to emit them.
export const dynamic = 'force-static'

/**
 * Makes the site installable, which is the only way Chrome on desktop will
 * tint its window: in a normal tab it leaves the chrome neutral and ignores
 * theme-color, applying it solely to installed app windows.
 *
 * theme_color paints that window's title bar; background_color is what the
 * launch screen shows before the first paint, so it matches the hero rather
 * than the page background to avoid a white flash.
 */
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Amira — Tu espacio cuando lo necesitás',
    short_name: 'Amira',
    description:
      'Plataforma digital de bienestar emocional para personas mayores de 18 años. Registrá cómo te sentís, conversá con una IA de acompañamiento y accedé a herramientas de bienestar.',
    lang: 'es-AR',
    start_url: '/',
    scope: '/',
    display: 'standalone',
    orientation: 'portrait',
    theme_color: '#075E52',
    background_color: '#17312D',
    categories: ['health', 'lifestyle', 'medical'],
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
      // Padded to sit inside the 80% safe circle Android crops to.
      {
        src: '/icon-512-maskable.png',
        sizes: '512x512',
        type: 'image/png',
        purpose: 'maskable',
      },
    ],
  }
}
