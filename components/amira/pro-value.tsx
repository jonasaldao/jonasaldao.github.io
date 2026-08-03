import { CalendarClock, CreditCard, BadgeCheck } from "lucide-react"
import { AgendaMockup, CobrosMockup, ProfileCard } from "./pro-mockups"

export function ProValue() {
  return (
    <section
      id="beneficios"
      className="relative py-16 md:py-24 bg-sand overflow-hidden"
    >
      <div
        data-parallax="10"
        className="blob absolute top-10 -right-40 w-[26rem] h-[26rem] rounded-full bg-arena blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-tinta leading-tight text-balance">
            <span data-split>La parte administrativa</span>{" "}
            <span data-split className="accent-italic text-verde-profundo">
              no debería ser un segundo trabajo.
            </span>
          </h2>
          <p
            data-reveal
            data-delay="0.1"
            className="mt-6 text-lg sm:text-xl text-tinta/65 leading-relaxed text-pretty"
          >
            Agenda en un lado, cobros en otro, recordatorios a mano y una
            planilla para saber quién pagó. Amira reúne todo eso en un solo
            lugar.
          </p>
        </div>

        {/* Editorial bento — agenda gets top billing (the biggest pain
            point), cobros and perfil are still substantial but secondary.
            Two independent columns instead of a CSS Grid row-span: a
            row-span cell forces the OTHER cells in its rows to stretch to
            match its total height (grid items default to align-items:
            stretch), which is what was leaving huge empty gaps inside the
            shorter agenda/cobros cards. Each column here sizes to its own
            content instead. */}
        <div data-stagger className="grid lg:grid-cols-3 gap-5 items-start">
          {/* Left column — Pilar 1 (Agenda) + Pilar 2 (Cobros), stacked */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            <div className="bg-white rounded-[2rem] p-7 sm:p-9 ring-1 ring-verde/10 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center gap-7">
                <div className="flex-1">
                  <span className="w-12 h-12 rounded-2xl bg-menta flex items-center justify-center">
                    <CalendarClock className="w-6 h-6 text-verde-profundo" />
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-tinta mt-5 mb-2.5 text-balance">
                    Una agenda que se maneja sola
                  </h3>
                  <p className="text-tinta/65 leading-relaxed">
                    Definís tu disponibilidad una vez. Las personas reservan
                    solas y los recordatorios salen automáticamente. Estamos
                    trabajando en la sincronización con Google Calendar y en
                    los recordatorios por mail y WhatsApp.
                  </p>
                </div>
                <div className="shrink-0">
                  <AgendaMockup />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-[2rem] p-7 sm:p-9 ring-1 ring-verde/10 shadow-sm">
              <div className="flex flex-col md:flex-row md:items-center gap-7">
                <div className="flex-1">
                  <span className="w-12 h-12 rounded-2xl bg-menta flex items-center justify-center">
                    <CreditCard className="w-6 h-6 text-verde-profundo" />
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-tinta mt-5 mb-2.5 text-balance">
                    Cobros ordenados
                  </h3>
                  <p className="text-tinta/65 leading-relaxed">
                    Quién pagó, quién debe y desde cuándo, sin planillas.
                    Estamos integrando links de pago por consulta y el
                    detalle listo para facturar.
                  </p>
                </div>
                <div className="shrink-0">
                  <CobrosMockup />
                </div>
              </div>
            </div>
          </div>

          {/* Right column — Pilar 3 (Perfil), sized to its own content */}
          <div className="bg-white rounded-[2rem] p-7 ring-1 ring-verde/10 shadow-sm flex flex-col">
            <span className="w-12 h-12 rounded-2xl bg-menta flex items-center justify-center">
              <BadgeCheck className="w-6 h-6 text-verde-profundo" />
            </span>
            <h3 className="font-serif text-2xl font-semibold text-tinta mt-5 mb-2.5 text-balance">
              Perfil verificado en el directorio
            </h3>
            <p className="text-tinta/65 leading-relaxed mb-6">
              Un perfil público con tu matrícula validada, para que nuevas
              personas te encuentren.
            </p>
            <ProfileCard />
          </div>
        </div>
      </div>
    </section>
  )
}
