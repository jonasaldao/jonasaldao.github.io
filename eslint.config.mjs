import nextConfig from "eslint-config-next"

export default [
  { ignores: [".next/**", "out/**", "next-env.d.ts"] },
  ...nextConfig,
]
