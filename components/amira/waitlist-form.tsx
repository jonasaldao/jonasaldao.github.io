"use client"

import { useState, type FormEvent } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { CheckCircle2, Loader2 } from "lucide-react"

/**
 * Formspree endpoints — crear los dos formularios en formspree.io (plan
 * gratuito) y reemplazar estos IDs antes de `pnpm run deploy`. Hasta entonces
 * el envío falla con un error visible; el resto del formulario (campos,
 * validación, estados) funciona igual.
 */
const ENDPOINTS = {
  usuarios: "https://formspree.io/f/PENDIENTE_FORMSPREE_USUARIOS",
  profesionales: "https://formspree.io/f/PENDIENTE_FORMSPREE_PROFESIONALES",
} as const

type Variant = keyof typeof ENDPOINTS
type Status = "idle" | "submitting" | "success" | "error"

export function WaitlistForm({ variant, id }: { variant: Variant; id?: string }) {
  const [status, setStatus] = useState<Status>("idle")
  const [errors, setErrors] = useState<Record<string, boolean>>({})
  const [mayoria, setMayoria] = useState(false)
  const [terminos, setTerminos] = useState(false)
  const [novedades, setNovedades] = useState(false)

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)

    const nextErrors: Record<string, boolean> = {}
    if (!String(data.get("email") || "").trim()) nextErrors.email = true
    if (variant === "usuarios") {
      if (!mayoria) nextErrors.mayoria = true
      if (!terminos) nextErrors.terminos = true
    } else {
      if (!String(data.get("nombre") || "").trim()) nextErrors.nombre = true
      if (!String(data.get("profesion") || "").trim()) nextErrors.profesion = true
      if (!String(data.get("jurisdiccion") || "").trim()) nextErrors.jurisdiccion = true
      if (!String(data.get("matricula") || "").trim()) nextErrors.matricula = true
      if (!terminos) nextErrors.terminos = true
    }
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

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
          Listo, ya estás en la lista.
        </p>
        <p className="text-muted-foreground text-sm">
          Te avisamos por mail apenas puedas empezar.
        </p>
      </div>
    )
  }

  const fieldError = (key: string) =>
    errors[key] ? (
      <p className="mt-1.5 text-sm text-red-600">Este campo es obligatorio.</p>
    ) : null

  return (
    <form
      id={id}
      onSubmit={handleSubmit}
      noValidate
      className="scroll-mt-28 bg-white rounded-[2rem] p-7 sm:p-9 shadow-2xl shadow-verde/20"
    >
      <h3 className="font-serif text-2xl font-semibold text-navy mb-1">
        {variant === "usuarios" ? "Sumarme a la beta" : "Quiero sumarme a la beta"}
      </h3>
      <p className="text-muted-foreground text-sm mb-6">
        {variant === "usuarios"
          ? "Dejanos tu mail y te avisamos apenas puedas empezar."
          : "Primeros 3 meses gratuitos para profesionales que se sumen a la beta."}
      </p>

      <div className="space-y-4">
        <div>
          <Label htmlFor={`${variant}-email`}>Email</Label>
          <Input
            id={`${variant}-email`}
            name="email"
            type="email"
            autoComplete="email"
            aria-invalid={errors.email || undefined}
            className="mt-1.5"
          />
          {fieldError("email")}
        </div>

        {variant === "profesionales" && (
          <>
            <div>
              <Label htmlFor="pro-nombre">Nombre y apellido</Label>
              <Input id="pro-nombre" name="nombre" aria-invalid={errors.nombre || undefined} className="mt-1.5" />
              {fieldError("nombre")}
            </div>
            <div>
              <Label htmlFor="pro-profesion">Profesión</Label>
              <Input id="pro-profesion" name="profesion" aria-invalid={errors.profesion || undefined} className="mt-1.5" />
              {fieldError("profesion")}
            </div>
            <div>
              <Label htmlFor="pro-jurisdiccion">Jurisdicción</Label>
              <Input
                id="pro-jurisdiccion"
                name="jurisdiccion"
                placeholder="Provincia donde ejercés"
                aria-invalid={errors.jurisdiccion || undefined}
                className="mt-1.5"
              />
              {fieldError("jurisdiccion")}
            </div>
            <div>
              <Label htmlFor="pro-matricula">Matrícula</Label>
              <Input id="pro-matricula" name="matricula" aria-invalid={errors.matricula || undefined} className="mt-1.5" />
              {fieldError("matricula")}
            </div>
          </>
        )}

        {variant === "usuarios" && (
          <div className="flex items-start gap-3">
            <Checkbox
              id="mayoria"
              checked={mayoria}
              onCheckedChange={(v) => setMayoria(v === true)}
              aria-invalid={errors.mayoria || undefined}
              className="mt-0.5"
            />
            <Label htmlFor="mayoria" className="font-normal leading-snug">
              Confirmo que soy mayor de 18 años.
            </Label>
          </div>
        )}
        {variant === "usuarios" && fieldError("mayoria")}

        <div className="flex items-start gap-3">
          <Checkbox
            id={`${variant}-terminos`}
            checked={terminos}
            onCheckedChange={(v) => setTerminos(v === true)}
            aria-invalid={errors.terminos || undefined}
            className="mt-0.5"
          />
          <Label htmlFor={`${variant}-terminos`} className="font-normal leading-snug">
            Acepto los{" "}
            <Link href="/terminos" className="underline underline-offset-2 hover:text-verde-profundo">
              términos
            </Link>{" "}
            y la{" "}
            <Link href="/privacidad" className="underline underline-offset-2 hover:text-verde-profundo">
              política de privacidad
            </Link>
            .
          </Label>
        </div>
        {fieldError("terminos")}

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
        <input type="hidden" name="novedades" value={novedades ? "si" : "no"} />
      </div>

      <Button
        type="submit"
        disabled={status === "submitting"}
        data-magnetic
        className="w-full mt-7 bg-verde-profundo hover:bg-verde-activo text-white rounded-full py-6 text-lg font-semibold shadow-lg shadow-verde/25 transition-colors duration-300"
      >
        {status === "submitting" && <Loader2 className="w-4 h-4 mr-2 animate-spin" aria-hidden="true" />}
        Sumarme a la beta
      </Button>

      {status === "error" && (
        <p className="mt-4 text-sm text-red-600 text-center">
          No pudimos enviar el formulario. Probá de nuevo en un momento.
        </p>
      )}
    </form>
  )
}
