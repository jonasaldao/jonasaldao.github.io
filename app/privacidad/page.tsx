import type { Metadata } from "next"
import { LegalShell, LegalSection } from "@/components/amira/legal-shell"

export const metadata: Metadata = {
  title: "Política de privacidad — Amira",
  description:
    "Cómo Amira trata tus datos: qué recolectamos, qué hacemos con tus conversaciones y registros, y por qué la plataforma profesional no accede a ellos.",
}

export default function PrivacidadPage() {
  return (
    <LegalShell
      title="Política de"
      accent="privacidad."
      updatedAt="julio de 2026"
    >
      <LegalSection n="01" title="El principio: el mínimo dato necesario">
        <p>
          Hablar de lo que sentís requiere confianza. Por eso pedimos la menor
          cantidad de datos posible, te explicamos para qué sirve cada uno y no
          usamos tu información para venderte nada ni para vendérsela a nadie.
        </p>
        <p className="font-medium text-navy">
          No vendemos tus datos personales ni los cedemos a anunciantes.
        </p>
      </LegalSection>

      <LegalSection n="02" title="Qué información tratamos">
        <ul className="space-y-4 list-none">
          {[
            {
              t: "Datos de cuenta",
              d: "Lo mínimo para identificarte y darte acceso, con permisos limitados a lo estrictamente necesario.",
            },
            {
              t: "Conversaciones con la IA",
              d: "Lo que escribís en el chat, para sostener la continuidad del acompañamiento.",
            },
            {
              t: "Check-ins y registros emocionales",
              d: "Cómo te sentís a lo largo del tiempo, para poder mostrarte tu propia evolución.",
            },
            {
              t: "Uso de la plataforma",
              d: "Datos técnicos básicos para que el servicio funcione y para detectar fallas.",
            },
          ].map((item) => (
            <li key={item.t} className="flex items-start gap-3">
              <span
                className="mt-2.5 w-1.5 h-1.5 shrink-0 rounded-full bg-verde"
                aria-hidden="true"
              />
              <span>
                <span className="font-medium text-navy">{item.t}.</span>{" "}
                {item.d}
              </span>
            </li>
          ))}
        </ul>
      </LegalSection>

      <LegalSection n="03" title="Tus conversaciones y registros son tu espacio">
        <p>
          Lo que escribís en Amira forma parte de tu espacio personal. No se
          publica, no se comparte con otras personas usuarias y no se entrega a
          terceros con fines comerciales.
        </p>
        <p>
          Vos decidís qué compartir con un profesional y cuándo. Esa decisión es
          siempre explícita y tuya.
        </p>
      </LegalSection>

      <LegalSection n="04" title="Separación con la plataforma profesional">
        <p className="font-medium text-navy">
          La plataforma que usan los profesionales no accede a tus conversaciones
          ni a tus registros emocionales.
        </p>
        <p>
          Solicitar un turno a través del directorio no vincula las cuentas ni le
          abre a nadie tu historial en Amira. El profesional recibe únicamente los
          datos necesarios para coordinar la consulta.
        </p>
      </LegalSection>

      <LegalSection n="05" title="Revisión de calidad y seguridad del servicio">
        <p>
          Los contenidos y los protocolos conversacionales de Amira son
          diseñados y auditados por profesionales de la salud mental. Esa
          participación es de diseño y control de calidad del producto: no
          implica lectura de conversaciones en tiempo real ni seguimiento
          individual de ninguna persona usuaria.
        </p>
        <p>
          Para evaluar la calidad y la seguridad del servicio revisamos
          muestras acotadas de conversaciones de forma seudonimizada, con
          acceso limitado y registrado{" "}
          <span className="font-medium text-navy">
            [PENDIENTE_REVISION_LEGAL: confirmar que el control de acceso
            limitado y el registro de accesos ya están implementados antes de
            publicar]
          </span>
          . No revisamos conversaciones individuales para evaluar a una
          persona en particular.
        </p>
      </LegalSection>

      <LegalSection n="06" title="Seguridad">
        <p>
          Tratamos tu información como dato sensible. Aplicamos cifrado en
          tránsito y en reposo, control de accesos internos y prácticas de
          seguridad orientadas a este tipo de información.
        </p>
        <p>
          Ningún sistema es infalible. Si ocurriera un incidente que afecte tus
          datos, te lo comunicamos.
        </p>
      </LegalSection>

      <LegalSection n="07" title="Tus derechos sobre tus datos">
        <p>En cualquier momento podés:</p>
        <ul className="space-y-2.5 list-none">
          {[
            "Acceder a la información que tenemos sobre vos.",
            "Corregir datos inexactos.",
            "Exportar tus registros.",
            "Eliminar tu cuenta y los datos asociados.",
            "Retirar el consentimiento que hayas dado.",
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
          Para ejercerlos, escribinos a{" "}
          <a
            href="mailto:privacidad@amira.app"
            className="text-verde-profundo font-medium underline underline-offset-4 hover:text-verde transition-colors"
          >
            privacidad@amira.app
          </a>
          .
        </p>
      </LegalSection>

      <LegalSection n="08" title="Proveedores">
        <p>
          Nos apoyamos en proveedores de infraestructura y de modelos de lenguaje
          para que la plataforma funcione. Trabajan bajo instrucción nuestra y con
          obligaciones de confidencialidad, y no pueden usar tu información para
          fines propios.
        </p>
      </LegalSection>

      <LegalSection n="09" title="Cambios y contacto">
        <p>
          Si actualizamos esta política, te avisamos antes de que el cambio te
          afecte. Ante cualquier duda, escribinos a{" "}
          <a
            href="mailto:privacidad@amira.app"
            className="text-verde-profundo font-medium underline underline-offset-4 hover:text-verde transition-colors"
          >
            privacidad@amira.app
          </a>
          .
        </p>
      </LegalSection>
    </LegalShell>
  )
}
