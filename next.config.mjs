/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // Origins the dev server accepts requests from. Testing on a phone means
  // loading the site over the LAN, and anything not listed here gets its dev
  // assets and HMR socket blocked — the HTML still renders, so the page looks
  // fine while nothing hydrates: the navbar never turns solid, the menu button
  // does nothing. Wildcards cover the usual private ranges so a new DHCP lease
  // doesn't break device testing again. Dev only; the static export ignores it.
  allowedDevOrigins: [
    'localhost',
    '127.0.0.1',
    '192.168.*.*',
    '10.*.*.*',
    '172.16.*.*',
    '*.local',
  ],
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
