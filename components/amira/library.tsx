import { PlayCircle, Headphones, BookOpen, Clock } from "lucide-react"

const featured = [
  {
    icon: PlayCircle,
    format: "Video",
    title: "Cómo empezar a registrar tus emociones",
    description:
      "Por qué nombrar lo que sentís cambia la forma en que lo atravesás.",
    duration: "3 min",
  },
  {
    icon: Headphones,
    format: "Audio",
    title: "Una pausa guiada para bajar el ritmo",
    description:
      "Tres minutos de respiración para cuando el día se te viene encima.",
    duration: "4 min",
  },
  {
    icon: BookOpen,
    format: "Lectura",
    title: "Poner en palabras lo que sentimos",
    description:
      "Qué pasa en tu cabeza cuando lográs traducir una sensación difusa.",
    duration: "5 min",
  },
]

const topics = [
  "Ansiedad",
  "Sueño",
  "Vínculos",
  "Autoestima",
  "Estrés académico",
  "Hábitos",
]

export function Library() {
  return (
    <section
      id="biblioteca"
      className="relative py-24 md:py-32 bg-white overflow-hidden"
    >
      <div
        data-parallax="10"
        className="blob absolute -top-24 -left-32 w-[26rem] h-[26rem] rounded-full bg-arena blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy text-balance">
            <span data-split>Contenido que te acompaña</span>{" "}
            <span data-split className="accent-italic text-verde-profundo">
              en formato corto.
            </span>
          </h2>
          <p
            data-reveal
            data-delay="0.1"
            className="mt-6 text-lg sm:text-xl text-navy/65 leading-relaxed text-pretty"
          >
            Videos, audios y lecturas breves sobre bienestar emocional, escritos
            y revisados por profesionales de la salud. Para leer en la fila del
            colectivo, no para agendar una tarde entera.
          </p>
        </div>

        {/* Featured pieces */}
        <div data-stagger className="grid sm:grid-cols-3 gap-5 md:gap-6">
          {featured.map((item) => (
            <article
              key={item.title}
              className="group flex flex-col bg-white rounded-[2rem] p-7 ring-1 ring-verde/10 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg"
            >
              <span className="inline-flex w-fit items-center gap-2 bg-menta text-verde-profundo font-semibold text-xs uppercase tracking-widest px-3 py-1.5 rounded-full">
                <item.icon className="w-3.5 h-3.5" />
                {item.format}
              </span>

              <h3 className="mt-5 font-serif text-xl font-semibold text-navy leading-snug text-balance">
                {item.title}
              </h3>
              <p className="mt-2.5 text-muted-foreground leading-relaxed flex-1">
                {item.description}
              </p>

              <p className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-verde-profundo/70">
                <Clock className="w-4 h-4" />
                {item.duration}
              </p>

              <div className="mt-4 h-1 w-10 rounded-full bg-verde/25 transition-all duration-500 group-hover:w-20 group-hover:bg-verde" />
            </article>
          ))}
        </div>

        {/* Topics */}
        <div
          data-reveal
          data-delay="0.15"
          className="mt-12 flex flex-wrap items-center gap-3"
        >
          <span className="text-sm font-medium text-navy/45 mr-1">
            También sobre
          </span>
          {topics.map((topic) => (
            <span
              key={topic}
              className="bg-sand text-navy/70 text-sm font-medium px-4 py-2 rounded-full ring-1 ring-navy/5"
            >
              {topic}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
