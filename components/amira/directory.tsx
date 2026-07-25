import { BadgeCheck, Video, ShieldCheck, Lock, Sparkles } from "lucide-react"

const listings = [
  { area: "Psicología clínica", focus: "Ansiedad y estrés" },
  { area: "Psicología", focus: "Bienestar y hábitos" },
  { area: "Acompañamiento terapéutico", focus: "Procesos de cambio" },
]

const guarantees = [
  {
    icon: BadgeCheck,
    text: "Matrícula verificada antes de aparecer en el directorio.",
  },
  {
    icon: ShieldCheck,
    text: "Solicitar un turno no vincula tu cuenta con la del profesional.",
  },
  {
    icon: Lock,
    text: "Tus conversaciones y registros en Amira no se comparten.",
  },
]

export function Directory() {
  return (
    <section
      id="directorio"
      className="relative py-24 md:py-32 bg-teal-mist overflow-hidden"
    >
      <div
        data-parallax="12"
        className="blob-slow absolute -bottom-32 -right-32 w-[28rem] h-[28rem] rounded-full bg-teal-light/60 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-16 items-center">
          {/* Copy */}
          <div>
            <span
              data-reveal
              className="inline-flex items-center gap-2 bg-white text-teal-dark font-semibold text-sm px-4 py-2 rounded-full shadow-sm ring-1 ring-teal/15"
            >
              <Video className="w-4 h-4 text-teal" />
              Atención 100% online
            </span>

            <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-semibold text-navy leading-tight text-balance">
              <span data-split>Cuando quieras dar el paso,</span>{" "}
              <span data-split className="accent-italic text-teal-dark">
                el siguiente ya está acá.
              </span>
            </h2>

            <p
              data-reveal
              data-delay="0.1"
              className="mt-6 text-lg sm:text-xl text-navy/65 leading-relaxed text-pretty"
            >
              Un directorio de profesionales de la salud mental con matrícula
              verificada. Explorá perfiles por enfoque y coordiná un turno cuando
              vos quieras — sin esperas, sin derivaciones incómodas.
            </p>

            <div data-stagger className="mt-9 space-y-4">
              {guarantees.map((item) => (
                <div key={item.text} className="flex items-start gap-3.5">
                  <span className="w-9 h-9 shrink-0 rounded-xl bg-white shadow-sm ring-1 ring-teal/10 flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-teal" />
                  </span>
                  <p className="text-navy/75 leading-relaxed pt-1.5">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Directory preview */}
          <div data-reveal="scale" data-parallax="5">
            <div className="bg-white/60 backdrop-blur-sm rounded-[2rem] p-5 sm:p-6 ring-1 ring-teal/10 shadow-xl shadow-teal/5">
              <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-teal-dark/60 px-2 pb-4">
                <Sparkles className="w-3.5 h-3.5" />
                Vista del directorio
              </p>

              <div className="space-y-3">
                {listings.map((item) => (
                  <div
                    key={item.area + item.focus}
                    className="group flex items-center gap-4 bg-white rounded-3xl p-4 shadow-sm ring-1 ring-teal/5 transition-all duration-300 hover:shadow-md"
                  >
                    {/* Abstract avatar — the directory is illustrated, not populated */}
                    <span
                      className="w-12 h-12 shrink-0 rounded-2xl bg-gradient-to-br from-teal-light to-teal-mist ring-1 ring-teal/10 flex items-center justify-center"
                      aria-hidden="true"
                    >
                      <span className="w-4 h-4 rounded-full bg-teal/30" />
                    </span>

                    <div className="min-w-0 flex-1">
                      <p className="font-serif font-semibold text-navy leading-snug">
                        {item.area}
                      </p>
                      <p className="text-sm text-muted-foreground truncate">
                        {item.focus}
                      </p>
                    </div>

                    <span className="hidden sm:inline-flex shrink-0 items-center gap-1.5 bg-teal-light text-teal-dark text-xs font-semibold px-2.5 py-1 rounded-full">
                      <BadgeCheck className="w-3.5 h-3.5" />
                      Verificado
                    </span>
                  </div>
                ))}
              </div>

              <p className="text-xs text-navy/40 leading-relaxed px-2 pt-4">
                Ejemplo ilustrativo de cómo se ven los perfiles. Los profesionales
                reales se muestran dentro de la app.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
