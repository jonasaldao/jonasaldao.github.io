"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "¿Amira reemplaza a un psicólogo?",
    answer:
      "No. Amira es la capa de continuidad entre sesiones — un espacio de acompañamiento cotidiano. Cuando lo necesitás, te conecta con psicólogos verificados.",
  },
  {
    question: "¿Necesito estar haciendo terapia para usar Amira?",
    answer:
      "No. Podés usar Amira independientemente de si estás en tratamiento o no. Muchos usuarios la usan como primer paso antes de iniciar terapia.",
  },
  {
    question: "¿Quién supervisa la IA?",
    answer:
      "Una cohorte de psicólogos clínicos revisa los flujos de conversación, valida las respuestas ante señales de riesgo y define el marco clínico de la plataforma. No es un chatbot genérico.",
  },
  {
    question: "¿Mis conversaciones son privadas?",
    answer:
      "Sí. Tus datos están encriptados y protegidos. No se comparten con terceros. La privacidad es un principio de diseño, no una función de marketing.",
  },
  {
    question: "¿Cuánto cuesta?",
    answer:
      "Los primeros 30 días son completamente gratuitos, sin tarjeta de crédito. Después podés continuar con el plan Amira por USD 12/mes.",
  },
]

export function FAQ() {
  return (
    <section className="py-24 md:py-32 bg-teal-mist">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2
          data-reveal
          className="text-3xl sm:text-4xl md:text-5xl font-semibold text-navy text-center mb-14 text-balance"
        >
          Preguntas <span className="accent-italic text-teal-dark">frecuentes</span>
        </h2>

        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              data-reveal
              data-delay={`${index * 0.07}`}
              className="bg-white rounded-2xl px-6 border-none shadow-sm ring-1 ring-teal/10 transition-shadow hover:shadow-md data-[state=open]:shadow-md"
            >
              <AccordionTrigger className="text-left text-lg font-semibold text-navy hover:text-teal-dark py-6 hover:no-underline gap-4">
                <span className="flex items-baseline gap-4">
                  <span className="font-serif italic text-teal/50 text-base shrink-0">
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
