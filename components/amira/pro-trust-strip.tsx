import { ShieldCheck, BadgeCheck, Video, Sparkles } from "lucide-react"

const chips = [
  { icon: ShieldCheck, label: "Matrícula verificada" },
  { icon: BadgeCheck, label: "Perfil en el directorio" },
  { icon: Video, label: "Atención online" },
  { icon: Sparkles, label: "Sin cargo durante la beta" },
]

/**
 * Thin band right under the Hero — quick trust signals, not a section: no
 * heading, no paragraph. Replaces the old ProScope block, whose two claims
 * were redundant elsewhere (see ProValue's pilares and the FAQ).
 */
export function ProTrustStrip() {
  return (
    <div className="relative bg-sand py-5 md:py-6 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          data-stagger
          className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3"
        >
          {chips.map((item) => (
            <span
              key={item.label}
              className="inline-flex items-center gap-2 bg-white text-verde-profundo font-medium text-xs sm:text-sm px-4 py-2 rounded-full ring-1 ring-verde/10 shadow-sm"
            >
              <item.icon className="w-3.5 h-3.5 shrink-0" />
              {item.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
