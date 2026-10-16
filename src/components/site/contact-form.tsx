"use client"

import { useState } from "react"

import { Button } from "@/components/ui/button"
import { Field, FieldError, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { whatsappUrl } from "@/lib/contact"
import { WhatsAppIcon } from "@/components/site/whatsapp-icon"

const interests = [
  { label: "Selecciona una opción", value: null },
  { label: "CuadraPOS", value: "CuadraPOS" },
  { label: "CuadraERP", value: "CuadraERP" },
  { label: "WMS con RFID", value: "WMS con RFID" },
  { label: "Facturación electrónica", value: "Facturación electrónica" },
  { label: "Integración de sistemas", value: "Integración de sistemas" },
  { label: "Infraestructura y nube", value: "Infraestructura y nube" },
  { label: "Desarrollo a la medida", value: "Desarrollo a la medida" },
  { label: "Otro", value: "Otro" },
]

type Errors = Partial<Record<"nombre" | "empresa" | "email" | "mensaje", string>>

function validate(data: FormData): Errors {
  const errors: Errors = {}
  if (!String(data.get("nombre") ?? "").trim()) errors.nombre = "Escribe tu nombre."
  if (!String(data.get("empresa") ?? "").trim()) errors.empresa = "Escribe el nombre de tu empresa."
  const email = String(data.get("email") ?? "").trim()
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
    errors.email = "Revisa el correo: falta algo como nombre@empresa.com."
  if (String(data.get("mensaje") ?? "").trim().length < 10)
    errors.mensaje = "Cuéntanos un poco más (al menos 10 caracteres)."
  return errors
}

function buildMessage(data: FormData) {
  const field = (name: string) => String(data.get(name) ?? "").trim()
  const lines = [
    "Hola BSP Tech Solutions, quiero agendar un diagnóstico gratuito.",
    "",
    `Nombre: ${field("nombre")}`,
    `Empresa: ${field("empresa")}`,
  ]
  if (field("email")) lines.push(`Correo: ${field("email")}`)
  if (field("interes")) lines.push(`Me interesa: ${field("interes")}`)
  lines.push("", field("mensaje"))
  return lines.join("\n")
}

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({})
  const [sentUrl, setSentUrl] = useState<string | null>(null)

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const found = validate(data)
    setErrors(found)
    if (Object.keys(found).length > 0) return

    const url = whatsappUrl(buildMessage(data))
    window.open(url, "_blank", "noopener,noreferrer")
    setSentUrl(url)
  }

  if (sentUrl) {
    return (
      <div role="status" className="flex flex-col items-start gap-4 rounded-lg bg-background p-8 text-foreground">
        <WhatsAppIcon className="size-8 text-whatsapp" />
        <h3 className="text-title font-normal">Abrimos WhatsApp con tu mensaje</h3>
        <p className="text-muted-foreground">
          Envíalo desde WhatsApp y te responderemos por ahí. Si no se abrió, usa el botón.
        </p>
        <div className="flex flex-wrap gap-2">
          <Button size="xl" render={<a href={sentUrl} target="_blank" rel="noopener noreferrer" />} nativeButton={false}>
            <WhatsAppIcon data-icon="inline-start" />
            Abrir WhatsApp
          </Button>
          <Button size="xl" variant="secondary" onClick={() => setSentUrl(null)}>
            Editar mensaje
          </Button>
        </div>
      </div>
    )
  }

  return (
    <form noValidate onSubmit={onSubmit} className="rounded-lg bg-background p-6 text-foreground shadow-feature sm:p-8">
      <FieldGroup>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field data-invalid={!!errors.nombre || undefined}>
            <FieldLabel htmlFor="nombre">Nombre</FieldLabel>
            <Input id="nombre" name="nombre" autoComplete="name" aria-invalid={!!errors.nombre || undefined} />
            <FieldError>{errors.nombre}</FieldError>
          </Field>
          <Field data-invalid={!!errors.empresa || undefined}>
            <FieldLabel htmlFor="empresa">Empresa</FieldLabel>
            <Input id="empresa" name="empresa" autoComplete="organization" aria-invalid={!!errors.empresa || undefined} />
            <FieldError>{errors.empresa}</FieldError>
          </Field>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          <Field data-invalid={!!errors.email || undefined}>
            <FieldLabel htmlFor="email">Correo (opcional)</FieldLabel>
            <Input id="email" name="email" type="email" autoComplete="email" aria-invalid={!!errors.email || undefined} />
            <FieldError>{errors.email}</FieldError>
          </Field>
          <Field>
            <FieldLabel htmlFor="interes">¿Qué te interesa?</FieldLabel>
            <Select items={interests} name="interes">
              <SelectTrigger id="interes" className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {interests.map((item) => (
                    <SelectItem key={item.label} value={item.value}>
                      {item.label}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </Field>
        </div>
        <Field data-invalid={!!errors.mensaje || undefined}>
          <FieldLabel htmlFor="mensaje">¿Cómo opera hoy tu empresa?</FieldLabel>
          <Textarea
            id="mensaje"
            name="mensaje"
            rows={4}
            placeholder="Ej.: tenemos 3 sucursales, facturamos en Excel y queremos conectar el inventario con SAP."
            aria-invalid={!!errors.mensaje || undefined}
          />
          <FieldError>{errors.mensaje}</FieldError>
        </Field>
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button type="submit" size="xl" className="w-full sm:w-auto">
            <WhatsAppIcon data-icon="inline-start" />
            Enviar por WhatsApp
          </Button>
          <p className="text-sm text-muted-foreground">Se abrirá WhatsApp con tu mensaje listo para enviar.</p>
        </div>
      </FieldGroup>
    </form>
  )
}
