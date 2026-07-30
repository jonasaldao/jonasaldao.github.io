"use client"

import Link from "next/link"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "¿Los profesionales pueden ver mis conversaciones?",
    answer:
      "No. El directorio es independiente del chat y del check-in: los profesionales no acceden a tus conversaciones ni a tus registros en ningún momento.",
  },
  {
    question: "¿Qué incluye la fase beta?",
    answer:
      "Check-in emocional, conversación con la IA, herramientas de bienestar y acceso al directorio de profesionales, sin cargo mientras dure esta etapa.",
  },
  {
    question: "¿Qué hago si necesito ayuda urgente?",
    answer: (
      <>
        Amira no es un servicio de emergencias. Si estás en una situación de
        riesgo, contactá a los servicios de emergencia de tu zona o entrá a{" "}
        <Link
          href="/ayuda-urgente"
          className="text-verde-profundo underline underline-offset-2 hover:text-verde transition-colors"
        >
          Ayuda urgente
        </Link>{" "}
        para ver los recursos disponibles.
      </>
    ),
  },
  {
    question: "¿Amira tiene costo?",
    answer:
      "Durante la beta, el acceso es sin cargo. El modelo de precios todavía no está definido y se va a comunicar con anticipación antes de aplicarse.",
  },
  {
    question: "¿Cómo puedo eliminar mi cuenta y mis datos?",
    answer: (
      <>
        Podés pedirlo escribiendo a{" "}
        <a
          href="mailto:privacidad@amira.app"
          className="text-verde-profundo underline underline-offset-2 hover:text-verde transition-colors"
        >
          privacidad@amira.app
        </a>
        . Eliminamos tu cuenta y los datos asociados.
      </>
    ),
  },
]

export function FAQ() {
  return (
    <section
      id="preguntas-frecuentes"
      tabIndex={-1}
      className="py-16 md:py-24 bg-arena scroll-mt-28 focus:outline-none"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          data-reveal
          className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy text-center mb-14 text-balance"
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
              <AccordionTrigger className="text-left text-lg font-semibold text-navy hover:text-verde-profundo py-6 hover:no-underline gap-4">
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
