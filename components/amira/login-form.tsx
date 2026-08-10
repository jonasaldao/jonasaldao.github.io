"use client"

import { useId, useState, type FormEvent } from "react"
import { Eye, EyeOff, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

/**
 * Endpoint de ingreso. Reemplazar antes de habilitar el login real. Mientras
 * el valor contenga PENDIENTE la integración se trata como "no configurada":
 * no se intenta el envío, no se guarda nada y se muestra un estado explícito
 * en vez de simular éxito o un error genérico.
 *
 * Mismo criterio que los endpoints de WaitlistForm.
 */
const LOGIN_ENDPOINT = "PENDIENTE_ENDPOINT_LOGIN"

const isConfigured = !LOGIN_ENDPOINT.includes("PENDIENTE")

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

type Status = "idle" | "not-configured"

/**
 * El mismo formulario se monta dos veces: dentro del popover del navbar en
 * desktop y dentro del menú lateral en mobile. Los ids se derivan de useId
 * para que las dos instancias convivan sin colisionar en el DOM.
 */
export function LoginForm({ onDone }: { onDone?: () => void } = {}) {
  const uid = useId()
  const [status, setStatus] = useState<Status>("idle")
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [showPassword, setShowPassword] = useState(false)

  const emailId = `${uid}-email`
  const passwordId = `${uid}-password`

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const data = new FormData(e.currentTarget)
    const email = String(data.get("email") || "").trim()
    const password = String(data.get("password") || "")

    const nextErrors: Record<string, string> = {}
    if (!email) nextErrors.email = "Ingresá tu email."
    else if (!EMAIL_RE.test(email)) nextErrors.email = "Ingresá un email válido."
    if (!password) nextErrors.password = "Ingresá tu contraseña."

    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    if (!isConfigured) {
      setStatus("not-configured")
      return
    }

    // El envío real se cablea cuando exista el endpoint.
    onDone?.()
  }

  const fieldError = (key: string, errorId: string) =>
    errors[key] ? (
      <p id={errorId} className="mt-1.5 text-sm text-red-600">
        {errors[key]}
      </p>
    ) : null

  const describedBy = (key: string, errorId: string) =>
    errors[key] ? errorId : undefined

  return (
    <form onSubmit={handleSubmit} noValidate className="text-left">
      <div className="space-y-4">
        <div>
          <Label htmlFor={emailId}>Email</Label>
          <Input
            id={emailId}
            name="email"
            type="email"
            autoComplete="email"
            placeholder="tu@email.com"
            aria-invalid={!!errors.email || undefined}
            aria-describedby={describedBy("email", `${emailId}-error`)}
            className="mt-1.5"
          />
          {fieldError("email", `${emailId}-error`)}
        </div>

        <div>
          <Label htmlFor={passwordId}>Contraseña</Label>
          <div className="relative mt-1.5">
            <Input
              id={passwordId}
              name="password"
              type={showPassword ? "text" : "password"}
              autoComplete="current-password"
              aria-invalid={!!errors.password || undefined}
              aria-describedby={describedBy("password", `${passwordId}-error`)}
              className="pr-10"
            />
            <button
              type="button"
              onClick={() => setShowPassword((v) => !v)}
              aria-label={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
              aria-pressed={showPassword}
              className="absolute inset-y-0 right-0 flex items-center px-3 text-navy/50 hover:text-verde-profundo"
            >
              {showPassword ? (
                <EyeOff size={16} aria-hidden="true" />
              ) : (
                <Eye size={16} aria-hidden="true" />
              )}
            </button>
          </div>
          {fieldError("password", `${passwordId}-error`)}
        </div>
      </div>

      <Button type="submit" className="mt-5 w-full">
        Ingresar
      </Button>

      {status === "not-configured" && (
        <p className="mt-4 flex items-start gap-2 rounded-xl bg-arena px-4 py-3 text-sm text-navy/60">
          <Clock className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          El ingreso a cuentas todavía no está habilitado desde la web. Dejanos
          tus datos y te avisamos apenas se abra.
        </p>
      )}

      <p className="mt-4 text-sm text-navy/60">
        ¿Todavía no tenés cuenta?{" "}
        <a
          href="/#pricing"
          onClick={onDone}
          className="font-medium text-verde-profundo underline underline-offset-2"
        >
          Sumate a Amira
        </a>
      </p>
    </form>
  )
}
