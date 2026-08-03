const moods = [
  { label: "Me está costando", dot: "bg-navy/45" },
  { label: "Más o menos", dot: "bg-verde/50" },
  { label: "Bien", dot: "bg-verde" },
  { label: "Muy bien", dot: "bg-coral" },
]

/**
 * Purely decorative preview of the check-in — not a real control. It used to
 * be a functional radiogroup (native radio inputs), but a marketing page
 * that looks clickable and goes nowhere reads as broken, so it's back to a
 * plain visual, same as the other "interface fragment" mockups elsewhere on
 * the page (chat bubbles, professional card, etc).
 *
 * Labels stay adverbs/phrases ("Bien", "Más o menos"), not adjectives, so
 * none of them need gender agreement ("cansado/a"), and none is marked as
 * selected — it's the prompt, not a filled-in example.
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
  return (
    <div className={className} aria-hidden="true">
      <p className={legendClassName}>{legend}</p>

      <div className={`grid grid-cols-2 ${compact ? "gap-1.5" : "gap-2.5"}`}>
        {moods.map((mood) => (
          <div
            key={mood.label}
            className={`flex flex-col items-center justify-center text-center rounded-2xl ring-1 ring-verde/10 bg-arena ${
              compact ? "gap-1 py-2.5 px-1.5" : "gap-2 py-4 px-2"
            }`}
          >
            <span
              className={`rounded-full ${mood.dot} ${compact ? "w-2.5 h-2.5" : "w-5 h-5"}`}
            />
            <span
              className={`font-medium leading-tight text-navy/75 ${
                compact ? "text-[10px]" : "text-sm"
              }`}
            >
              {mood.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
