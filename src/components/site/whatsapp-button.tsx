import { resolveCta } from "@/lib/ctas"
import { WhatsAppIcon } from "@/components/site/whatsapp-icon"

export function WhatsAppButton() {
  const { anchorProps } = resolveCta("pregunta", "flotante")

  return (
    <a
      {...anchorProps}
      className="fixed right-4 bottom-4 z-40 flex size-14 items-center justify-center rounded-full bg-whatsapp text-white hover:bg-whatsapp-strong shadow-feature transition-transform duration-300 ease-out focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none sm:right-6 sm:bottom-6"
    >
      <WhatsAppIcon className="size-7" />
    </a>
  )
}
