import type { Metadata } from "next"
import { LegalShell, LegalSection } from "@/components/amira/legal-shell"

export const metadata: Metadata = {
  title: "Términos de uso — Amira",
  description:
    "Condiciones de uso de Amira: qué es y qué no es la plataforma, quién puede usarla, cómo funciona el directorio de profesionales y la suscripción.",
}

export default function TerminosPage() {
  return (
    <LegalShell title="Términos" accent="de uso." updatedAt="julio de 2026">
      <LegalSection n="01" title="Qué es Amira — y qué no es">
        <p>
          Amira es una plataforma de acompañamiento emocional cotidiano. Combina
          una inteligencia artificial conversacional, herramientas prácticas,
          contenido psicoeducativo y un directorio de profesionales de la salud
          mental con atención online.
        </p>
        <p className="font-medium text-navy">
          Amira no es un profesional de la salud y no reemplaza a uno. No realiza
          diagnósticos, no indica tratamientos ni medicación, y no constituye una
          prestación médica ni psicológica.
        </p>
        <p>
          El acompañamiento que ofrece la plataforma se apoya en criterios
          revisados por profesionales de la salud, pero las respuestas de la IA se
          generan de forma automática y pueden contener errores.
        </p>
      </LegalSection>

      <LegalSection n="02" title="Quién puede usar Amira">
        <p>
          Amira está disponible para personas mayores de 18 años. Al crear una
          cuenta declarás tener al menos esa edad y capacidad para aceptar estos
          términos.
        </p>
        <p>
          Tu cuenta es personal e intransferible. Sos responsable de la actividad
          que ocurra en ella y de mantener tus credenciales de acceso seguras.
        </p>
      </LegalSection>

      <LegalSection n="03" title="Amira no es un servicio de emergencias">
        <p className="font-medium text-navy">
          Si estás en peligro inmediato, o si pensás en lastimarte o lastimar a
          otra persona, no uses Amira: comunicate con los servicios de emergencia
          de tu localidad o con una persona de confianza que pueda acompañarte
          ahora.
        </p>
        <p>
          La plataforma no ofrece atención en tiempo real por parte de una persona
          humana, no monitorea las conversaciones de forma continua y no puede
          intervenir en una situación de crisis.
        </p>
      </LegalSection>

      <LegalSection n="04" title="Directorio de profesionales">
        <p>
          El directorio reúne profesionales de la salud mental cuya matrícula
          verificamos antes de publicarlos, y que atienden exclusivamente de forma
          online.
        </p>
        <p>
          La relación profesional que inicies con cualquiera de ellos es
          independiente de Amira. Cada profesional es responsable de su práctica,
          de su encuadre clínico y del cumplimiento de las normas de su
          jurisdicción.
        </p>
        <p>
          Las consultas se abonan al honorario del profesional y no están incluidas
          en la suscripción a Amira.
        </p>
        <p>
          Solicitar un turno a través del directorio no vincula tu cuenta de Amira
          con la del profesional ni le da acceso a tus conversaciones o registros.
          Ver la{" "}
          <a
            href="/privacidad"
            className="text-teal-dark font-medium underline underline-offset-4 hover:text-teal transition-colors"
          >
            política de privacidad
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection n="05" title="Suscripción, prueba gratuita y cancelación">
        <p>
          Podés probar Amira sin cargo durante 30 días, sin tarjeta de crédito.
          Finalizada la prueba, el acceso completo requiere una suscripción paga.
        </p>
        <p>
          La suscripción se renueva de forma periódica hasta que la canceles. Podés
          cancelarla en cualquier momento desde tu cuenta; la cancelación tiene
          efecto al final del período ya abonado.
        </p>
        <p>
          Los precios pueden cambiar. Si eso ocurre, te avisamos antes de que el
          cambio te afecte.
        </p>
      </LegalSection>

      <LegalSection n="06" title="Uso responsable de la plataforma">
        <p>Al usar Amira te comprometés a no:</p>
        <ul className="space-y-2.5 list-none">
          {[
            "Usar la plataforma para fines ilícitos o para dañar a terceros.",
            "Suplantar la identidad de otra persona o de un profesional.",
            "Intentar acceder a cuentas, datos o sistemas que no te pertenecen.",
            "Extraer de forma automatizada el contenido o los datos de la plataforma.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span
                className="mt-2.5 w-1.5 h-1.5 shrink-0 rounded-full bg-teal"
                aria-hidden="true"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p>
          Podemos suspender o cerrar cuentas que incumplan estos términos o que
          pongan en riesgo a otras personas usuarias.
        </p>
      </LegalSection>

      <LegalSection n="07" title="Contenido y propiedad intelectual">
        <p>
          El contenido de la plataforma —textos, ejercicios, materiales
          psicoeducativos, marca y diseño— pertenece a Amira o a quienes nos
          licencian ese material, y es para tu uso personal.
        </p>
        <p>
          Lo que vos escribís en la plataforma sigue siendo tuyo. No lo publicamos
          ni lo comercializamos.
        </p>
      </LegalSection>

      <LegalSection n="08" title="Cambios en estos términos">
        <p>
          Podemos actualizar estos términos para reflejar cambios en la plataforma
          o en la normativa aplicable. Si el cambio es sustancial, te lo
          comunicamos con antelación razonable antes de que entre en vigencia.
        </p>
      </LegalSection>

      <LegalSection n="09" title="Contacto">
        <p>
          Ante cualquier duda sobre estos términos, escribinos a{" "}
          <a
            href="mailto:hola@amira.app"
            className="text-teal-dark font-medium underline underline-offset-4 hover:text-teal transition-colors"
          >
            hola@amira.app
          </a>
          .
        </p>
      </LegalSection>
    </LegalShell>
  )
}
