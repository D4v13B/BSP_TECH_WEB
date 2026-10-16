import type { LucideIcon } from "lucide-react"

import { services } from "@/lib/content"

export type NavLink = {
  label: string
  // Ancla de esta página ("#seccion") o ruta de la app ("/blog").
  href: string
  description?: string
  icon?: LucideIcon
}

export type NavItem = NavLink & {
  // Si tiene hijos se muestra como desplegable; `href` queda como enlace "Ver todo".
  children?: NavLink[]
}

export const navItems: NavItem[] = [
  {
    label: "Servicios",
    href: "#servicios",
    children: services.map((service) => ({
      label: service.name,
      href: service.href,
      description: service.text,
      icon: service.icon,
    })),
  },
  { label: "Beneficios", href: "#beneficios" },
  { label: "Proyectos", href: "#proyectos" },
  { label: "Contacto", href: "#contacto" },
]

export function isNavLinkActive(href: string, pathname: string) {
  if (href.startsWith("#")) return false
  return href === "/" ? pathname === "/" : pathname === href || pathname.startsWith(`${href}/`)
}
