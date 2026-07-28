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
    question: "¿Y si ya estoy haciendo terapia?",
    answer:
      "Amira no interfiere. Podés usarla entre consultas para registrar cómo venís y ordenar lo que quieras llevar.",
  },
  {
    question: "¿Necesito saber qué me pasa para empezar?",
    answer: "No. Podés empezar sin tener nada claro; para eso está el espacio.",
  },
  {
    question: "¿Qué pasa si estoy atravesando un momento difícil?",
    answer: (
      <>
        Amira no es un servicio de emergencias. Si estás en una situación de
        riesgo, entrá a{" "}
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
]

export function FAQ() {
  return (
    <section className="py-16 md:py-24 bg-arena">
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
              data-delay={`${index * 0.07}`}
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
