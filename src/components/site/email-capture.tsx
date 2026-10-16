"use client"

import { ArrowRightIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

// Lleva el correo al formulario de contacto y lo enfoca para completar la solicitud.
export function EmailCapture() {
  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const email = String(new FormData(event.currentTarget).get("email") ?? "")
    const field = document.getElementById("email") as HTMLInputElement | null
    if (field) field.value = email
    document.getElementById("contacto")?.scrollIntoView({ behavior: "smooth" })
    document.getElementById("nombre")?.focus({ preventScroll: true })
  }

  return (
    <form onSubmit={onSubmit} className="flex w-full max-w-lg flex-col gap-2 sm:flex-row">
      <label htmlFor="hero-email" className="sr-only">
        Correo de trabajo
      </label>
      <Input
        id="hero-email"
        name="email"
        type="email"
        autoComplete="email"
        placeholder="tu@empresa.com"
        className="h-12 flex-1 bg-background/90"
      />
      <Button type="submit" size="xl">
        Diagnóstico gratuito
        <ArrowRightIcon data-icon="inline-end" />
      </Button>
    </form>
  )
}
