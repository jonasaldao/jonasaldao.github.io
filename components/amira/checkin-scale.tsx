"use client"

import { useId, useState } from "react"
import { Check } from "lucide-react"

const moods = [
  { label: "Me está costando", dot: "bg-navy/45" },
  { label: "Más o menos", dot: "bg-verde/50" },
  { label: "Bien", dot: "bg-verde" },
  { label: "Muy bien", dot: "bg-coral" },
]

/**
 * The check-in scale shown across Hero, Presentation and HowItWorks — a real
 * radiogroup (native <input type="radio">), not a decorative mockup:
 *  - Native radios give keyboard support (Tab into the group, arrow keys
 *    between options) for free, instead of hand-rolling the ARIA radio
 *    pattern's roving-tabindex behavior.
 *  - <fieldset>/<legend> ties the visible question to the group for
 *    assistive tech, more robustly than aria-labelledby across screen readers.
 *  - Selection starts unset — no defaultChecked anywhere — and "selected"
 *    changes background + text color + icon shape, not just the dot's hue,
 *    so it isn't conveyed by color alone.
 *  - Labels are adverbs/phrases ("Bien", "Más o menos"), not adjectives, so
 *    none of them need gender agreement ("cansado/a").
 *  - The selected look is driven by React state mirroring the native
 *    input's onChange (the input itself stays uncontrolled — no `checked`
 *    prop). This project's Tailwind build generates `has-[:checked]:*`
 *    rules but doesn't apply them reliably as a parent-selector cascade, so
 *    state-driven classes are used for that instead of relying on :has().
 *    Focus-visible still uses the confirmed-working peer-* sibling variant.
 */
export function CheckinScale({
  legend,
  legendClassName = "text-sm font-medium text-navy/70 mb-3",
  compact = false,
  className = "",
}: {
  legend: string
  legendClassName?: string
  compact?: boolean
  className?: string
}) {
  const name = useId()
  const [selected, setSelected] = useState<string | null>(null)

  return (
    <fieldset className={`min-w-0 border-0 p-0 m-0 ${className}`}>
      <legend className={legendClassName}>{legend}</legend>

      <div className={`grid grid-cols-2 ${compact ? "gap-1.5" : "gap-2.5"}`}>
        {moods.map((mood) => {
          const isSelected = selected === mood.label
          return (
            <label
              key={mood.label}
              className={`relative flex flex-col items-center justify-center text-center rounded-2xl ring-1 cursor-pointer transition-colors duration-200 ${
                compact ? "gap-1 py-2.5 px-1.5" : "gap-2 py-4 px-2"
              } ${
                isSelected
                  ? "bg-verde-profundo ring-verde-profundo hover:bg-verde-activo"
                  : "bg-arena ring-verde/10 hover:bg-menta/60 hover:ring-verde/30"
              }`}
            >
              <input
                type="radio"
                name={name}
                value={mood.label}
                onChange={() => setSelected(mood.label)}
                className="sr-only peer"
              />

              {/* Focus ring overlay — sibling-based so it can use the
                  confirmed-working peer-focus-visible variant instead of
                  has-[:focus-visible] on this label. */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 rounded-2xl ring-0 peer-focus-visible:ring-2 peer-focus-visible:ring-offset-2 peer-focus-visible:ring-verde-profundo"
              />

              <span
                aria-hidden="true"
                className={`rounded-full flex items-center justify-center ${
                  compact ? "w-2.5 h-2.5" : "w-5 h-5"
                } ${isSelected ? "bg-white" : mood.dot}`}
              >
                {isSelected && (
                  <Check
                    aria-hidden="true"
                    className={`text-verde-profundo ${compact ? "w-2 h-2" : "w-3 h-3"}`}
                  />
                )}
              </span>

              <span
                className={`font-medium leading-tight ${compact ? "text-[10px]" : "text-sm"} ${
                  isSelected ? "text-white" : "text-navy/75"
                }`}
              >
                {mood.label}
              </span>
            </label>
          )
        })}
      </div>
    </fieldset>
  )
}
