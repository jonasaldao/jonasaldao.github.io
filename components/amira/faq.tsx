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
    question: "¿Con quién estoy hablando?",
    answer: (
      <>
        <p className="mb-3">
          Con Amira, una inteligencia artificial de acompañamiento emocional.
          No hay una persona del otro lado leyendo y respondiendo en el
          momento.
        </p>
        <p>
          Profesionales de la salud mental diseñaron sus protocolos y siguen
          revisando cómo responde, para ajustarla y mejorarla. Lo que se
          audita es el comportamiento de Amira, no a las personas que la
          usan.
        </p>
      </>
    ),
  },
  {
    question: "¿Me sirve si lo que me pasa no es tan grave?",
    answer:
      "No hace falta estar mal para usar Amira. Sirve para ordenar la cabeza un día complicado, registrar cómo venís, o simplemente tener un lugar donde escribirlo.",
  },
  {
    question: "¿Alguien lee lo que escribo?",
    answer:
      "Nada de lo que registrás se comparte sin que vos lo decidas. Para revisar la calidad y la seguridad del servicio, un equipo puede ver muestras acotadas de conversaciones de forma seudonimizada y con acceso limitado. Nunca en tiempo real y nunca para evaluarte a vos.",
  },
  {
    question: "¿Qué datos me piden para empezar?",
    answer:
      "Nombre, email, tu rango de edad, qué funciones te interesaría probar y la confirmación de que sos mayor de 18. Nada más que eso.",
  },
  {
    question: "¿Cuánto cuesta?",
    answer:
      "Durante la beta, nada. Cuando definamos el modelo lo vamos a avisar con tiempo, y no se va a aplicar de forma retroactiva a quienes participen de la beta.",
  },
  {
    question: "¿Y si estoy pasando un momento difícil?",
    answer: (
      <>
        Amira no es un servicio de emergencias. Si estás en una situación de
        riesgo, entrá a{" "}
        <Link
          href="/ayuda-urgente"
          className="text-verde-profundo underline underline-offset-2 hover:text-verde transition-colors"
        >
          Ayuda urgente
        </Link>
        : ahí están los recursos disponibles las 24 horas.
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
