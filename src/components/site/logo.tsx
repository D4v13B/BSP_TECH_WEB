import Image from "next/image"

import { cn } from "@/lib/utils"

// Recortes con transparencia del logo oficial (img/Logo BSP Tech Solutions.png).
export function Logo({ className, inverted }: { className?: string; inverted?: boolean }) {
  return (
    <Image
      src={inverted ? "/img/logo-bsp-mark-white.png" : "/img/logo-bsp-mark.png"}
      alt="BSP Tech Solutions"
      width={927}
      height={341}
      priority
      className={cn("h-7 w-auto", className)}
    />
  )
}

export function LogoLockup({ className, inverted }: { className?: string; inverted?: boolean }) {
  return (
    <Image
      src={inverted ? "/img/logo-bsp-full-white.png" : "/img/logo-bsp-full.png"}
      alt="BSP Tech Solutions — Soluciones empresariales y tecnológicas"
      width={928}
      height={543}
      className={cn("h-24 w-auto", className)}
    />
  )
}
