"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "¿Puedo usar Amira si trabajo de forma independiente?",
    answer:
      "Sí. Amira está pensada para profesionales que manejan su propia práctica, no para centros o instituciones.",
  },
  {
    question: "¿Cómo me registro?",
    answer:
      "Dejás tus datos, verificamos tu matrícula y te avisamos cuando puedas configurar tu perfil. Durante la beta el acceso es sin cargo.",
  },
  {
    question: "¿Tengo que migrar mi agenda actual?",
    answer:
      "No. Definís tu disponibilidad desde cero en unos minutos. Lo que ya tenés agendado seguí manejándolo como hasta ahora.",
  },
  {
    question: "¿Cómo hago las consultas online?",
    answer:
      "Con la herramienta que ya usás. Guardás el enlace de tu sala y aparece junto con el turno, para vos y para tu consultante.",
  },
  {
    question: "¿Cómo se protegen los datos?",
    answer:
      "Los datos viajan y se almacenan cifrados, con acceso restringido. Amira Profesionales gestiona la información administrativa de tus turnos: contacto, fecha, modalidad y estado del cobro. El contenido de tu práctica y su resguardo quedan bajo tu responsabilidad profesional.",
  },
  {
    question: "¿Hay soporte si tengo un problema?",
    answer: "Sí, por mail. Durante la beta el equipo responde directamente.",
  },
]

export function ProFAQ() {
  return (
    <section
      id="preguntas-frecuentes"
      tabIndex={-1}
      className="py-16 md:py-24 bg-arena scroll-mt-28 focus:outline-none"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          data-reveal
          className="text-3xl sm:text-4xl md:text-5xl font-semibold text-tinta text-center mb-14 text-balance"
        >
          Preguntas <span className="accent-italic text-verde-profundo">frecuentes</span>
        </h2>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              data-reveal
              data-delay={`${index * 0.05}`}
              className="bg-white rounded-2xl px-6 border-none shadow-sm ring-1 ring-verde/10 transition-shadow hover:shadow-md data-[state=open]:shadow-md"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-tinta hover:text-verde-profundo py-6 hover:no-underline gap-4">
                <span className="flex items-baseline gap-4">
                  <span className="font-serif italic text-verde/50 text-base shrink-0">
                    0{index + 1}
                  </span>
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6 pl-9">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
