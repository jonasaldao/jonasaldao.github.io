import type { Metadata } from "next"
import { LegalShell, LegalSection } from "@/components/amira/legal-shell"

export const metadata: Metadata = {
  title: "Términos de uso para profesionales — Amira",
  description:
    "Condiciones de uso de Amira Profesionales: verificación de matrícula, independencia de la práctica y separación de datos respecto de la app de usuarios.",
  alternates: { canonical: "/terminos/profesionales" },
  // Borrador sin revisión legal — no indexar hasta su aprobación.
  robots: { index: false, follow: true },
}

export default function TerminosProfesionalesPage() {
  return (
    <LegalShell
      title="Términos de uso"
      accent="para profesionales."
      updatedAt="julio de 2026"
    >
      <LegalSection n="01" title="Qué es Amira Profesionales — y qué no es">
        <p>
          Amira Profesionales es una herramienta administrativa para
          profesionales de la salud mental: perfil verificado en el
          directorio público, agenda, turnos, recordatorios y seguimiento de
          cobros.
        </p>
        <p className="font-medium text-navy">
          En esta primera versión, Amira Profesionales no es un sistema de
          historia clínica ni una herramienta de supervisión: no otorga
          acceso a conversaciones, check-ins, alertas, resúmenes ni
          historiales de las personas usuarias de la app de Amira.
        </p>
        <p>
          Amira no interviene en el encuadre clínico de tu práctica ni te
          asigna casos: cada solicitud de turno la evalúas y aceptás vos.
        </p>
      </LegalSection>

      <LegalSection n="02" title="Quién puede sumarse al directorio">
        <p>
          El directorio está dirigido a profesionales de la salud mental
          matriculados, mayores de 18 años, que ofrecen atención
          exclusivamente online.
        </p>
        <p>
          Tu cuenta es personal e intransferible. Sos responsable de la
          exactitud de los datos de tu perfil y de mantener tus credenciales
          de acceso seguras.
        </p>
      </LegalSection>

      <LegalSection n="03" title="Verificación de matrícula">
        <p>
          Verificamos tu matrícula antes de publicar tu perfil en el
          directorio. Sos responsable de mantener tu matrícula vigente y de
          informarnos cualquier cambio en tu situación de habilitación
          profesional.
        </p>
        <p>
          Podemos suspender o dar de baja un perfil cuya matrícula no pueda
          verificarse o cuya vigencia no pueda confirmarse.
        </p>
      </LegalSection>

      <LegalSection n="04" title="Independencia de tu práctica profesional">
        <p className="font-medium text-navy">
          La relación profesional que establezcas con cada persona que te
          contacte a través del directorio es independiente de Amira. Sos
          responsable de tu práctica, de tu encuadre clínico y del
          cumplimiento de las normas de tu jurisdicción.
        </p>
        <p>
          Amira no participa de la consulta, no define tu abordaje clínico y
          no supervisa tu ejercicio profesional.
        </p>
      </LegalSection>

      <LegalSection n="05" title="Separación de datos con la app de usuarios">
        <p>
          La plataforma profesional no accede a las conversaciones ni a los
          registros emocionales de la app de usuarios. Lo que una persona
          usuaria decide compartir con vos al coordinar o realizar una
          consulta, lo comparte de forma explícita y por fuera de Amira.
        </p>
        <p>
          Solicitar un turno a través del directorio no vincula la cuenta de
          la persona usuaria con la tuya. Ver la{" "}
          <a
            href="/privacidad"
            className="text-verde-profundo font-medium underline underline-offset-4 hover:text-verde transition-colors"
          >
            política de privacidad
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection n="06" title="Cobros y honorarios">
        <p>
          Definís y cobrás tus honorarios directamente. Amira no toma parte de
          la sesión ni de lo que cobrás por ella.
        </p>
        <p>
          Durante la etapa de beta, el acceso a Amira Profesionales es sin
          cargo. El modelo de suscripción y sus condiciones se comunicarán
          antes de su entrada en vigencia, y en ningún caso se aplicarán de
          forma retroactiva a quienes participen de la beta.
        </p>
        <p className="font-medium text-navy">
          [PENDIENTE_REVISION_LEGAL: definir las cláusulas de renovación,
          cancelación y cambio de precio de la suscripción profesional una
          vez que exista un modelo de precios confirmado — hoy el sitio solo
          comunica “precio a confirmar antes del lanzamiento”.]
        </p>
      </LegalSection>

      <LegalSection n="07" title="Uso responsable de la plataforma">
        <p>Al usar Amira Profesionales te comprometés a no:</p>
        <ul className="space-y-2.5 list-none">
          {[
            "Usar la plataforma para fines ilícitos o para dañar a terceros.",
            "Publicar información falsa sobre tu identidad, matrícula o especialidad.",
            "Intentar acceder a cuentas, datos o sistemas que no te pertenecen.",
            "Extraer de forma automatizada el contenido o los datos de la plataforma.",
          ].map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span
                className="mt-2.5 w-1.5 h-1.5 shrink-0 rounded-full bg-verde"
                aria-hidden="true"
              />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p>
          Podemos suspender o cerrar cuentas que incumplan estos términos o
          que pongan en riesgo a las personas usuarias.
        </p>
      </LegalSection>

      <LegalSection n="08" title="Cambios en estos términos">
        <p>
          Podemos actualizar estos términos para reflejar cambios en la
          plataforma o en la normativa aplicable. Si el cambio es sustancial,
          te lo comunicamos con antelación razonable antes de que entre en
          vigencia.
        </p>
      </LegalSection>

      <LegalSection n="09" title="Contacto">
        <p>
          Ante cualquier duda sobre estos términos, escribinos a{" "}
          <a
            href="mailto:hola@amira.app"
            className="text-verde-profundo font-medium underline underline-offset-4 hover:text-verde transition-colors"
          >
            hola@amira.app
          </a>{" "}
          o visitá{" "}
          <a
            href="/contacto"
            className="text-verde-profundo font-medium underline underline-offset-4 hover:text-verde transition-colors"
          >
            la página de contacto
          </a>
          .
        </p>
      </LegalSection>
    </LegalShell>
  )
}
