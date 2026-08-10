"use client"

import { useState, type FormEvent } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle2, Loader2, Clock } from "lucide-react"

/**
 * Formspree endpoint — crear el formulario en formspree.io (plan gratuito) y
 * reemplazar este ID antes de `pnpm run deploy`. Hasta entonces la
 * integración se trata como "no configurada": no se intenta el envío y se
 * muestra un estado de desarrollo en vez de simular éxito o un error genérico.
 */
const ENDPOINT = "https://formspree.io/f/PENDIENTE_FORMSPREE_ID"

const isConfigured = !ENDPOINT.includes("PENDIENTE")

type Status = "idle" | "submitting" | "success" | "error" | "not-configured"

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export function ArrepentimientoForm({ id }: { id?: string }) {
  const [status, setStatus] = useState<Status>("idle")
  const [errors, setErrors] = useState<Record<string, string>>({})

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (status === "submitting") return // prevent duplicate submits

    const form = e.currentTarget
    const data = new FormData(form)

    const nextErrors: Record<string, string> = {}
    const nombre = String(data.get("nombre") || "").trim()
    const email = String(data.get("email") || "").trim()
    const documento = String(data.get("documento") || "").trim()
    const contratacion = String(data.get("contratacion") || "").trim()

    if (!nombre) nextErrors.nombre = "Contanos tu nombre y apellido."
    if (!email) nextErrors.email = "Ingresá tu email."
    else if (!EMAIL_RE.test(email)) nextErrors.email = "Ingresá un email válido."
    if (!documento) nextErrors.documento = "Ingresá tu número de documento."
    if (!contratacion) nextErrors.contratacion = "Contanos qué contrataste y cuándo."

    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    if (!isConfigured) {
      setStatus("not-configured")
      return
    }

    setStatus("submitting")
    try {
      const res = await fetch(ENDPOINT, {
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
          Recibimos tu solicitud.
        </p>
        <p className="text-sm text-muted-foreground max-w-sm">
          Te vamos a enviar el código de identificación de tu arrepentimiento
          dentro de las próximas 24 horas, al mismo email con el que la
          hiciste.
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
        Solicitar el arrepentimiento
      </h3>
      <p className="text-muted-foreground text-sm mb-6">
        No necesitás crear una cuenta ni iniciar sesión. Completá tus datos y
        listo.
      </p>

      <div className="space-y-4">
        <div>
          <Label htmlFor="arrepentimiento-nombre">Nombre y apellido</Label>
          <Input
            id="arrepentimiento-nombre"
            name="nombre"
            autoComplete="name"
            aria-invalid={!!errors.nombre || undefined}
            aria-describedby={describedBy("nombre", "arrepentimiento-nombre-error")}
            className="mt-1.5"
          />
          {fieldError("nombre", "arrepentimiento-nombre-error")}
        </div>

        <div>
          <Label htmlFor="arrepentimiento-email">Email</Label>
          <Input
            id="arrepentimiento-email"
            name="email"
            type="email"
            autoComplete="email"
            aria-invalid={!!errors.email || undefined}
            aria-describedby={describedBy("email", "arrepentimiento-email-error")}
            className="mt-1.5"
          />
          {fieldError("email", "arrepentimiento-email-error")}
        </div>

        <div>
          <Label htmlFor="arrepentimiento-documento">Número de documento</Label>
          <Input
            id="arrepentimiento-documento"
            name="documento"
            inputMode="numeric"
            autoComplete="off"
            aria-invalid={!!errors.documento || undefined}
            aria-describedby={describedBy("documento", "arrepentimiento-documento-error")}
            className="mt-1.5"
          />
          {fieldError("documento", "arrepentimiento-documento-error")}
        </div>

        <div>
          <Label htmlFor="arrepentimiento-contratacion">
            Contanos qué contrataste y cuándo
          </Label>
          <Textarea
            id="arrepentimiento-contratacion"
            name="contratacion"
            placeholder="Por ejemplo: fecha aproximada de la contratación, el plan o servicio, y cualquier dato que ayude a identificarla."
            aria-invalid={!!errors.contratacion || undefined}
            aria-describedby={describedBy("contratacion", "arrepentimiento-contratacion-error")}
            className="mt-1.5"
          />
          {fieldError("contratacion", "arrepentimiento-contratacion-error")}
        </div>
      </div>

      <Button
        type="submit"
        disabled={status === "submitting"}
        data-magnetic
        className="w-full mt-7 bg-verde-profundo hover:bg-verde-activo text-white rounded-full py-6 text-lg font-semibold shadow-lg shadow-verde/25 transition-colors duration-300"
      >
        {status === "submitting" && <Loader2 className="w-4 h-4 mr-2 animate-spin" aria-hidden="true" />}
        Enviar solicitud
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
