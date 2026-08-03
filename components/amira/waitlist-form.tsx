"use client"

import { useState, type FormEvent } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { CheckCircle2, Loader2, Clock } from "lucide-react"

/**
 * Formspree endpoints — crear los dos formularios en formspree.io (plan
 * gratuito) y reemplazar estos IDs antes de `pnpm run deploy`. Hasta entonces
 * la integración se trata como "no configurada": no se intenta el envío y se
 * muestra un estado de desarrollo en vez de simular éxito o un error genérico.
 */
const ENDPOINTS = {
  usuarios: "https://formspree.io/f/PENDIENTE_FORMSPREE_USUARIOS",
  profesionales: "https://formspree.io/f/PENDIENTE_FORMSPREE_PROFESIONALES",
} as const

const isConfigured = (variant: Variant) => !ENDPOINTS[variant].includes("PENDIENTE")

type Variant = keyof typeof ENDPOINTS
type Status = "idle" | "submitting" | "success" | "error" | "not-configured"

const edadOptions = [
  { value: "18-20", label: "18 a 20 años" },
  { value: "21-25", label: "21 a 25 años" },
  { value: "26-34", label: "26 a 34 años" },
  { value: "35+", label: "35 años o más" },
]

const funcionesOptions = [
  "Registrar cómo me siento",
  "Conversar y ordenar lo que me pasa",
  "Explorar herramientas de bienestar",
  "Encontrar profesionales",
]

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function WaitlistForm({ variant, id }: { variant: Variant; id?: string }) {
  const [status, setStatus] = useState<Status>("idle")
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [edad, setEdad] = useState("")
  const [funciones, setFunciones] = useState<string[]>([])
  const [mayoria, setMayoria] = useState(false)
  const [privacidad, setPrivacidad] = useState(false)
  const [terminos, setTerminos] = useState(false)
  const [novedades, setNovedades] = useState(false)

  function toggleFuncion(label: string) {
    setFunciones((prev) =>
      prev.includes(label) ? prev.filter((f) => f !== label) : [...prev, label]
    )
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (status === "submitting") return // prevent duplicate submits

    const form = e.currentTarget
    const data = new FormData(form)

    const nextErrors: Record<string, string> = {}
    const email = String(data.get("email") || "").trim()
    if (!email) nextErrors.email = "Ingresá tu email."
    else if (!EMAIL_RE.test(email)) nextErrors.email = "Ingresá un email válido."

    if (variant === "usuarios") {
      if (!String(data.get("nombre") || "").trim()) nextErrors.nombre = "Contanos tu nombre."
      if (!edad) nextErrors.edad = "Elegí un rango de edad."
      if (funciones.length === 0) nextErrors.funciones = "Elegí al menos una opción."
      if (!mayoria) nextErrors.mayoria = "Tenés que confirmar que sos mayor de 18 años para continuar."
      if (!privacidad) nextErrors.privacidad = "Tenés que leer la Política de Privacidad para continuar."
    } else {
      if (!String(data.get("nombre") || "").trim()) nextErrors.nombre = "Contanos tu nombre."
      if (!String(data.get("profesion") || "").trim()) nextErrors.profesion = "Este campo es obligatorio."
      if (!String(data.get("jurisdiccion") || "").trim()) nextErrors.jurisdiccion = "Este campo es obligatorio."
      if (!String(data.get("matricula") || "").trim()) nextErrors.matricula = "Este campo es obligatorio."
      if (!terminos) nextErrors.terminos = "Tenés que aceptar los términos y la política de privacidad."
    }
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    if (variant === "usuarios") {
      data.set("edad", edad)
      funciones.forEach((f) => data.append("funciones", f))
      data.set("mayor_18", mayoria ? "si" : "no")
      data.set("leyo_privacidad", privacidad ? "si" : "no")
      data.set("novedades", novedades ? "si" : "no")
    }

    if (!isConfigured(variant)) {
      setStatus("not-configured")
      return
    }

    setStatus("submitting")
    try {
      const res = await fetch(ENDPOINTS[variant], {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      })
      if (!res.ok) throw new Error("submit failed")
      setStatus("success")
    } catch {
      setStatus("error")
    }
  }

  if (status === "success") {
    return (
      <div
        id={id}
        className="scroll-mt-28 bg-white rounded-[2rem] p-7 sm:p-9 shadow-2xl shadow-verde/20 flex flex-col items-center text-center gap-3"
      >
        <CheckCircle2 className="w-10 h-10 text-verde-profundo" aria-hidden="true" />
        <p className="font-serif text-xl font-semibold text-navy">
          Listo. Ya podés entrar.
        </p>
      </div>
    )
  }

  const fieldError = (key: string, errorId: string) =>
    errors[key] ? (
      <p id={errorId} className="mt-1.5 text-sm text-red-600">
        {errors[key]}
      </p>
    ) : null

  const describedBy = (key: string, errorId: string) => (errors[key] ? errorId : undefined)

  return (
    <form
      id={id}
      onSubmit={handleSubmit}
      noValidate
      className="scroll-mt-28 bg-white rounded-[2rem] p-7 sm:p-9 shadow-2xl shadow-verde/20"
    >
      <h3 className="font-serif text-2xl font-semibold text-navy mb-1">
        {variant === "usuarios" ? "Registrá tu interés" : "Quiero sumarme a la beta"}
      </h3>
      <p className="text-muted-foreground text-sm mb-6">
        {variant === "usuarios"
          ? "Dejanos tus datos y empezá."
          : "Acceso sin cargo mientras dure la beta. El modelo de suscripción se comunica antes de entrar en vigencia."}
      </p>

      <div className="space-y-4">
        {variant === "usuarios" && (
          <div>
            <Label htmlFor="usuarios-nombre">Nombre</Label>
            <Input
              id="usuarios-nombre"
              name="nombre"
              autoComplete="given-name"
              aria-invalid={!!errors.nombre || undefined}
              aria-describedby={describedBy("nombre", "usuarios-nombre-error")}
              className="mt-1.5"
            />
            {fieldError("nombre", "usuarios-nombre-error")}
          </div>
        )}

        <div>
          <Label htmlFor={`${variant}-email`}>Email</Label>
          <Input
            id={`${variant}-email`}
            name="email"
            type="email"
            autoComplete="email"
            aria-invalid={!!errors.email || undefined}
            aria-describedby={describedBy("email", `${variant}-email-error`)}
            className="mt-1.5"
          />
          {fieldError("email", `${variant}-email-error`)}
        </div>

        {variant === "usuarios" && (
          <div>
            <Label htmlFor="usuarios-edad">Rango de edad</Label>
            <Select value={edad} onValueChange={setEdad}>
              <SelectTrigger
                id="usuarios-edad"
                aria-invalid={!!errors.edad || undefined}
                aria-describedby={describedBy("edad", "usuarios-edad-error")}
                className="mt-1.5 w-full"
              >
                <SelectValue placeholder="Elegí un rango" />
              </SelectTrigger>
              <SelectContent>
                {edadOptions.map((o) => (
                  <SelectItem key={o.value} value={o.value}>
                    {o.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            {fieldError("edad", "usuarios-edad-error")}
          </div>
        )}

        {variant === "usuarios" && (
          <fieldset
            className="border-0 p-0 m-0"
            aria-describedby={describedBy("funciones", "usuarios-funciones-error")}
          >
            <legend className="text-sm font-medium mb-2">
              Funciones que te interesaría probar
            </legend>
            <div className="space-y-2.5">
              {funcionesOptions.map((label) => (
                <div key={label} className="flex items-start gap-3">
                  <Checkbox
                    id={`funcion-${label}`}
                    checked={funciones.includes(label)}
                    onCheckedChange={() => toggleFuncion(label)}
                    className="mt-0.5"
                  />
                  <Label htmlFor={`funcion-${label}`} className="font-normal leading-snug">
                    {label}
                  </Label>
                </div>
              ))}
            </div>
            {fieldError("funciones", "usuarios-funciones-error")}
          </fieldset>
        )}

        {variant === "profesionales" && (
          <>
            <div>
              <Label htmlFor="pro-nombre">Nombre y apellido</Label>
              <Input id="pro-nombre" name="nombre" aria-invalid={!!errors.nombre || undefined} aria-describedby={describedBy("nombre", "pro-nombre-error")} className="mt-1.5" />
              {fieldError("nombre", "pro-nombre-error")}
            </div>
            <div>
              <Label htmlFor="pro-profesion">Profesión</Label>
              <Input id="pro-profesion" name="profesion" aria-invalid={!!errors.profesion || undefined} aria-describedby={describedBy("profesion", "pro-profesion-error")} className="mt-1.5" />
              {fieldError("profesion", "pro-profesion-error")}
            </div>
            <div>
              <Label htmlFor="pro-jurisdiccion">Jurisdicción</Label>
              <Input
                id="pro-jurisdiccion"
                name="jurisdiccion"
                placeholder="Provincia donde ejercés"
                aria-invalid={!!errors.jurisdiccion || undefined}
                aria-describedby={describedBy("jurisdiccion", "pro-jurisdiccion-error")}
                className="mt-1.5"
              />
              {fieldError("jurisdiccion", "pro-jurisdiccion-error")}
            </div>
            <div>
              <Label htmlFor="pro-matricula">Matrícula</Label>
              <Input id="pro-matricula" name="matricula" aria-invalid={!!errors.matricula || undefined} aria-describedby={describedBy("matricula", "pro-matricula-error")} className="mt-1.5" />
              {fieldError("matricula", "pro-matricula-error")}
            </div>
          </>
        )}

        {variant === "usuarios" && (
          <div className="flex items-start gap-3">
            <Checkbox
              id="mayoria"
              checked={mayoria}
              onCheckedChange={(v) => setMayoria(v === true)}
              aria-invalid={!!errors.mayoria || undefined}
              aria-describedby={describedBy("mayoria", "mayoria-error")}
              className="mt-0.5"
            />
            <Label htmlFor="mayoria" className="font-normal leading-snug">
              Confirmo que soy mayor de 18 años.
            </Label>
          </div>
        )}
        {variant === "usuarios" && fieldError("mayoria", "mayoria-error")}

        {variant === "usuarios" && (
          <div className="flex items-start gap-3">
            <Checkbox
              id="privacidad"
              checked={privacidad}
              onCheckedChange={(v) => setPrivacidad(v === true)}
              aria-invalid={!!errors.privacidad || undefined}
              aria-describedby={describedBy("privacidad", "privacidad-error")}
              className="mt-0.5"
            />
            <Label htmlFor="privacidad" className="font-normal leading-snug">
              Leí la{" "}
              <Link href="/privacidad" className="underline underline-offset-2 hover:text-verde-profundo">
                Política de Privacidad
              </Link>
              .
            </Label>
          </div>
        )}
        {variant === "usuarios" && fieldError("privacidad", "privacidad-error")}

        {variant === "profesionales" && (
          <div className="flex items-start gap-3">
            <Checkbox
              id="pro-terminos"
              checked={terminos}
              onCheckedChange={(v) => setTerminos(v === true)}
              aria-invalid={!!errors.terminos || undefined}
              aria-describedby={describedBy("terminos", "pro-terminos-error")}
              className="mt-0.5"
            />
            <Label htmlFor="pro-terminos" className="font-normal leading-snug">
              Acepto los{" "}
              <Link href="/terminos/profesionales" className="underline underline-offset-2 hover:text-verde-profundo">
                términos
              </Link>{" "}
              y la{" "}
              <Link href="/privacidad" className="underline underline-offset-2 hover:text-verde-profundo">
                política de privacidad
              </Link>
              .
            </Label>
          </div>
        )}
        {variant === "profesionales" && fieldError("terminos", "pro-terminos-error")}

        {variant === "usuarios" && (
          <div className="flex items-start gap-3">
            <Checkbox
              id="novedades"
              checked={novedades}
              onCheckedChange={(v) => setNovedades(v === true)}
              className="mt-0.5"
            />
            <Label htmlFor="novedades" className="font-normal leading-snug">
              Quiero recibir novedades de Amira por email.
            </Label>
          </div>
        )}
      </div>

      <Button
        type="submit"
        disabled={status === "submitting"}
        data-magnetic
        className="w-full mt-7 bg-verde-profundo hover:bg-verde-activo text-white rounded-full py-6 text-lg font-semibold shadow-lg shadow-verde/25 transition-colors duration-300"
      >
        {status === "submitting" && <Loader2 className="w-4 h-4 mr-2 animate-spin" aria-hidden="true" />}
        {variant === "usuarios" ? "Quiero probar Amira" : "Sumarme a la beta profesional"}
      </Button>

      {status === "error" && (
        <p className="mt-4 text-sm text-red-600 text-center">
          No pudimos enviar el formulario. Probá de nuevo en un momento.
        </p>
      )}

      {status === "not-configured" && (
        <p className="mt-4 flex items-start gap-2 text-sm text-navy/60 text-left bg-arena rounded-xl px-4 py-3">
          <Clock className="w-4 h-4 shrink-0 mt-0.5" aria-hidden="true" />
          No pudimos enviar el formulario. Probá de nuevo en un momento.
        </p>
      )}
    </form>
  )
}
