import type { ComponentType, SVGProps } from "react"
import { ArrowDownIcon } from "lucide-react"

import { WhatsAppIcon } from "@/components/site/whatsapp-icon"
import { whatsappUrl } from "@/lib/contact"

// Dónde aparece cada CTA. Se envía como data-cta-location y elige el mensaje de WhatsApp.
export type CtaLocation =
  | "navbar"
  | "menu-movil"
  | "hero"
  | "producto-pos"
  | "producto-erp"
  | "producto-wms"
  | "como-empezar"
  | "preguntas"
  | "footer"
  | "flotante"

type CtaBase = {
  label: string
  // Texto alternativo por ubicación, conservando el mismo verbo de la acción.
  labels?: Partial<Record<CtaLocation, string>>
  variant: "default" | "outline" | "ghost" | "link"
  icon?: ComponentType<SVGProps<SVGSVGElement>>
}

export type CtaAction =
  | (CtaBase & {
      type: "whatsapp"
      message: string
      // Mensaje prellenado según la sección de origen.
      messages?: Partial<Record<CtaLocation, string>>
    })
  | (CtaBase & { type: "link"; href: string })
  | (CtaBase & { type: "external"; href: string })

const greeting = "Hola BSP Tech Solutions,"

export const ctas = {
  demo: {
    type: "whatsapp",
    label: "Agenda una demo",
    labels: {
      hero: "Solicita una asesoría gratuita",
      navbar: "Solicita una asesoría gratuita",
      "menu-movil": "Solicita una asesoría gratuita",
      "producto-pos": "Agenda una demo de CuadraPOS",
      "producto-erp": "Agenda una demo de CuadraERP",
      "producto-wms": "Agenda una demo del WMS",
    },
    variant: "default",
    icon: WhatsAppIcon,
    message: `${greeting} quiero agendar una demo para mi empresa.`,
    messages: {
      hero: `${greeting} quiero solicitar una asesoría gratuita para mi empresa.`,
      navbar: `${greeting} quiero solicitar una asesoría gratuita para mi empresa.`,
      "menu-movil": `${greeting} quiero solicitar una asesoría gratuita para mi empresa.`,
      "producto-pos": `${greeting} vi CuadraPOS en su web y quiero agendar una demo para mi punto de venta.`,
      "producto-erp": `${greeting} vi CuadraERP en su web y quiero agendar una demo para administrar mi empresa.`,
      "producto-wms": `${greeting} vi el WMS con RFID en su web y quiero agendar una demo para mi almacén.`,
      "como-empezar": `${greeting} leí cómo trabajan y quiero agendar una demo.`,
    },
  },
  pregunta: {
    type: "whatsapp",
    label: "Preguntar por WhatsApp",
    variant: "outline",
    icon: WhatsAppIcon,
    message: `${greeting} tengo una pregunta sobre sus servicios.`,
    messages: {
      preguntas: `${greeting} tengo una pregunta que no encontré en sus preguntas frecuentes:`,
    },
  },
  soluciones: {
    type: "link",
    label: "Conoce nuestras soluciones",
    href: "#servicios",
    variant: "outline",
    icon: ArrowDownIcon,
  },
} satisfies Record<string, CtaAction>

export type CtaId = keyof typeof ctas

export function resolveCta(id: CtaId, location: CtaLocation) {
  const action: CtaAction = ctas[id]
  const label = action.labels?.[location] ?? action.label
  const external = action.type !== "link"
  const href = action.type === "whatsapp" ? whatsappUrl(action.messages?.[location] ?? action.message) : action.href
  return {
    action,
    label,
    // Props listas para un <a>: destino, pestaña nueva si sale del sitio, aria-label y tracking.
    anchorProps: {
      href,
      ...(external && { target: "_blank", rel: "noopener noreferrer" }),
      ...(action.type === "whatsapp" && { "aria-label": `${label} (abre WhatsApp en una pestaña nueva)` }),
      "data-cta-id": id,
      "data-cta-location": location,
    },
  }
}
