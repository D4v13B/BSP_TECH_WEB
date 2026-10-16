import type { ComponentProps } from "react"

import { Button } from "@/components/ui/button"
import { resolveCta, type CtaId, type CtaLocation } from "@/lib/ctas"

type CTAButtonProps = {
  action: CtaId
  location: CtaLocation
} & Pick<ComponentProps<typeof Button>, "size" | "variant" | "className">

export function CTAButton({ action: id, location, size = "xl", variant, className }: CTAButtonProps) {
  const { action, label, anchorProps } = resolveCta(id, location)
  const Icon = action.icon
  const opensWhatsApp = action.type === "whatsapp"

  return (
    <Button
      size={size}
      variant={variant ?? action.variant}
      className={className}
      render={<a {...anchorProps} />}
      nativeButton={false}
    >
      {Icon && opensWhatsApp && <Icon data-icon="inline-start" aria-hidden />}
      {label}
      {Icon && !opensWhatsApp && <Icon data-icon="inline-end" aria-hidden />}
    </Button>
  )
}
