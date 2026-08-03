import { Button } from "@/components/ui/button"
import { BadgeCheck, Video, Sparkles, Lock, ArrowRight } from "lucide-react"

const listings = [
  {
    nombre: "Lic. Camila Ferreyra",
    disciplina: "Psicología",
    enfoque: "Enfoque cognitivo-conductual",
    especialidad: "Manejo del estrés",
  },
  {
    nombre: "Lic. Tomás Aguirre",
    disciplina: "Psicología",
    enfoque: "Enfoque cognitivo-conductual",
    especialidad: "Vínculos y parejas",
  },
  {
    nombre: "Lic. Julieta Bianchi",
    disciplina: "Psicología",
    enfoque: "Enfoque cognitivo-conductual",
    especialidad: "Hábitos y descanso",
  },
  {
    nombre: "Dr. Nicolás Bertone",
    disciplina: "Psiquiatría",
    enfoque: "Adultos",
    especialidad: "Primera consulta y controles",
  },
]

const guarantees = [
  {
    icon: Video,
    text: "Atención online, desde donde estés.",
  },
  {
    icon: Sparkles,
    text: "Elegís por enfoque y especialidad, sin derivaciones de por medio.",
  },
  {
    icon: BadgeCheck,
    text: "Coordinás el turno directo, a tu ritmo.",
  },
]

export function Directory() {
  return (
    <section
      id="directorio"
      tabIndex={-1}
      className="relative py-16 md:py-24 bg-arena overflow-hidden scroll-mt-28 focus:outline-none"
    >
      <div
        data-parallax="12"
        className="blob-slow absolute -bottom-32 -right-32 w-[28rem] h-[28rem] rounded-full bg-menta/60 blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-16 items-center">
          {/* Copy */}
          <div>
            <span
              data-reveal
              className="inline-flex items-center gap-2 bg-white text-verde-profundo font-semibold text-sm px-4 py-2 rounded-full shadow-sm ring-1 ring-verde/15"
            >
              <Video className="w-4 h-4 text-verde" />
              Atención 100% online
            </span>

            <h2 className="mt-6 text-3xl sm:text-4xl md:text-5xl font-semibold text-navy leading-tight text-balance">
              <span data-split>Si querés dar otro paso,</span>{" "}
              <span data-split className="accent-italic text-verde-profundo">
                también podés encontrar profesionales.
              </span>
            </h2>

            <p
              data-reveal
              data-delay="0.1"
              className="mt-6 text-lg sm:text-xl text-navy/65 leading-relaxed text-pretty"
            >
              Explorá perfiles de profesionales independientes, conocé su
              enfoque y disponibilidad, y elegí con quién comunicarte.
            </p>

            <div data-stagger className="mt-9 space-y-4">
              {guarantees.map((item) => (
                <div key={item.text} className="flex items-start gap-3.5">
                  <span className="w-9 h-9 shrink-0 rounded-xl bg-white shadow-sm ring-1 ring-verde/10 flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-verde" />
                  </span>
                  <p className="text-navy/75 leading-relaxed pt-1.5">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            {/* Privacy clarification — kept distinct from the guarantees above,
                since it's a boundary claim, not a convenience feature. */}
            <div
              data-reveal
              className="mt-7 flex items-start gap-3 bg-white/70 rounded-2xl px-4 py-3.5 ring-1 ring-verde/10"
            >
              <Lock className="w-4 h-4 text-verde mt-0.5 shrink-0" />
              <p className="text-sm text-navy/70 leading-relaxed">
                Nada de lo que registrás en Amira se comparte sin que vos lo
                decidas.
              </p>
            </div>

            <div data-reveal className="mt-8">
              <Button
                asChild
                size="lg"
                className="bg-verde-profundo hover:bg-verde-activo text-white rounded-full px-8 py-6 text-base font-semibold shadow-lg shadow-verde/15 transition-colors duration-300"
              >
                <a href="#pricing" className="inline-flex items-center gap-2">
                  Explorar el directorio
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Directory preview */}
          <div data-reveal="scale" data-parallax="5">
            <div className="bg-white/60 backdrop-blur-sm rounded-[2rem] p-5 sm:p-6 ring-1 ring-verde/10 shadow-xl shadow-verde/5">
              <div className="px-2 pb-4">
                <p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-verde-profundo/60">
                  <Sparkles className="w-3.5 h-3.5" />
                  Vista del directorio
                </p>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  Perfiles de ejemplo. Los profesionales reales, con su
                  matrícula verificada, se muestran dentro de la app.
                </p>
              </div>

              <div className="space-y-3">
                {listings.map((item) => (
                  <div
                    key={item.nombre}
                    className="group flex items-center gap-4 bg-white rounded-3xl p-4 shadow-sm ring-1 ring-verde/5 transition-all duration-300 hover:shadow-md"
                  >
                    {/* Abstract avatar — the directory is illustrated, not populated */}
                    <span
                      className="w-12 h-12 shrink-0 rounded-2xl bg-gradient-to-br from-menta to-arena ring-1 ring-verde/10 flex items-center justify-center"
                      aria-hidden="true"
                    >
                      <span className="w-4 h-4 rounded-full bg-verde/30" />
                    </span>

                    <div className="min-w-0 flex-1">
                      <p className="font-serif font-semibold text-navy leading-snug">
                        {item.nombre}
                      </p>
                      <p className="text-sm text-verde-profundo/80 font-medium mt-0.5">
                        {item.disciplina} · {item.enfoque}
                      </p>
                      <p className="text-sm text-muted-foreground mt-0.5">
                        {item.especialidad}
                      </p>
                    </div>

                    <span className="hidden sm:inline-flex shrink-0 items-center gap-1.5 bg-menta text-verde-profundo text-xs font-semibold px-2.5 py-1 rounded-full">
                      <BadgeCheck className="w-3.5 h-3.5" />
                      Verificado
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
