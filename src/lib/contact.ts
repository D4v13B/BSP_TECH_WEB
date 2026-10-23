export const contact = {
  phone: "+507 6837-5569",
  phoneHref: "tel:+50768375569",
  whatsappNumber: "50768375569",
  whatsappHref: "https://wa.me/50768375569",
  email: "david.bustamante1.contacto@gmail.com",
}

export const diagnosisMessage =
  "Hola BSP Tech Solutions, me gustaría agendar un diagnóstico gratuito para mi empresa."

export function whatsappUrl(text = diagnosisMessage) {
  return `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(text)}`
}
