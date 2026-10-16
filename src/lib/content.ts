import { Building2Icon, PlugIcon, ReceiptTextIcon, ServerIcon, StoreIcon, WarehouseIcon } from "lucide-react"

export const solutions = [
  {
    title: "Desarrollamos",
    text: "CuadraPOS, CuadraERP y soluciones RFID hechas para la operación real.",
  },
  {
    title: "Integramos",
    text: "SAP Business One, Microsoft 365 y tus sistemas actuales en un solo flujo de información.",
  },
  {
    title: "Gestionamos",
    text: "Infraestructura, soporte y continuidad para que todo funcione.",
  },
]

// Índice único de servicios: tarjetas de colores, desplegable del navbar y footer leen de aquí.
// `tile` fija el color del pilar (ver DESIGN.md, Pillar Role Rule).
export const services = [
  {
    name: "CuadraPOS",
    text: "Punto de venta y facturación para tiendas y sucursales.",
    href: "#producto-pos",
    tile: "bg-pillar-pos text-foreground",
    icon: StoreIcon,
  },
  {
    name: "CuadraERP",
    text: "Compras, inventario, finanzas y recursos humanos.",
    href: "#producto-erp",
    tile: "bg-pillar-erp text-foreground",
    icon: Building2Icon,
  },
  {
    name: "WMS con RFID",
    text: "Recepción, ubicación y despacho con lectura RFID.",
    href: "#producto-wms",
    tile: "bg-pillar-wms text-foreground",
    icon: WarehouseIcon,
  },
  {
    name: "Integraciones",
    text: "SAP Business One, Microsoft 365, Zoho CRM y APIs.",
    href: "#integraciones",
    tile: "bg-pillar-int text-white",
    icon: PlugIcon,
  },
  {
    name: "Facturación electrónica",
    text: "Emite facturas electrónicas desde CuadraPOS y CuadraERP.",
    href: "#facturacion",
    tile: "bg-pillar-fe text-foreground shadow-hairline",
    icon: ReceiptTextIcon,
  },
  {
    name: "Infraestructura",
    text: "Nube, servidores, monitoreo y respaldo.",
    href: "#infraestructura",
    tile: "bg-pillar-infra text-white",
    icon: ServerIcon,
  },
]

export const customDevelopment = { name: "Desarrollo a la medida", href: "#desarrollo" }

export const benefits = [
  {
    title: "Un solo responsable",
    text: "Si algo falla, no hay proveedores culpándose entre sí: el software, la integración y los servidores son del mismo equipo.",
  },
  {
    title: "Menos trabajo manual",
    text: "La información pasa sola entre ventas, inventario y finanzas, y tu equipo deja de copiarla de un sistema a otro.",
  },
  {
    title: "Creces a tu ritmo",
    text: "Empieza con un producto y suma los demás cuando tu operación lo pida, sin migrar ni volver a capturar datos.",
  },
  {
    title: "Decides con datos al día",
    text: "Ventas, inventario y finanzas leen la misma información, así los reportes reflejan lo que pasa hoy en cada sucursal.",
  },
]

// Dónde trabaja el software de BSP, según el contexto operativo de PRODUCT.md.
export const operatingContext = [
  {
    place: "En la tienda",
    product: "CuadraPOS",
    href: "#producto-pos",
    items: ["Lector de código de barras", "Impresora de tickets", "Gaveta de dinero", "Terminal de pago", "Display para el cliente"],
  },
  {
    place: "En el almacén",
    product: "WMS con RFID",
    href: "#producto-wms",
    items: ["Terminales móviles robustas", "Lectores RFID UHF", "Códigos 1D y 2D", "Transferencias y conteos"],
  },
  {
    place: "En la oficina",
    product: "CuadraERP",
    href: "#producto-erp",
    items: ["Dashboards de ventas y compras", "Inventario de todas las sucursales", "Clientes y proveedores", "Finanzas y recursos humanos"],
  },
]

export const steps = [
  {
    title: "Diagnóstico gratuito",
    text: "Conversamos sobre cómo opera tu empresa hoy, qué sistemas usas y qué quieres resolver. Sin costo y sin compromiso.",
  },
  {
    title: "Propuesta e implementación",
    text: "Te proponemos la combinación justa de productos, integraciones e infraestructura. La configuramos, la conectamos con lo que ya usas y la ponemos en marcha.",
  },
  {
    title: "Soporte continuo",
    text: "Monitoreamos, respaldamos y mantenemos tus sistemas para que tu operación no se detenga.",
  },
]

export const faqs = [
  {
    question: "¿El diagnóstico tiene algún costo?",
    answer:
      "No. El diagnóstico es gratuito y sin compromiso. Escríbenos por WhatsApp, revisamos cómo opera tu empresa y te decimos qué solución tiene sentido para ti.",
  },
  {
    question: "¿Tengo que contratar los tres productos?",
    answer:
      "No. Puedes usar solo CuadraPOS, solo CuadraERP, solo el WMS o combinarlos. Comparten datos desde el primer día, así que puedes empezar con uno y sumar los demás cuando lo necesites.",
  },
  {
    question: "¿Puedo emitir facturación electrónica?",
    answer:
      "Sí. La facturación electrónica se emite desde CuadraPOS y CuadraERP, y también la implementamos y conectamos con los sistemas que ya usas.",
  },
  {
    question: "Ya uso SAP Business One o Microsoft 365. ¿Debo dejarlos?",
    answer:
      "No. Integramos nuestros productos con SAP Business One, Microsoft 365, Zoho CRM y otras herramientas mediante APIs, Webhooks y OData, para que la información fluya entre ellos sin reemplazar lo que ya funciona.",
  },
  {
    question: "¿Sirve para empresas con varias sucursales?",
    answer:
      "Sí. CuadraPOS está pensado para operación multisucursal: ventas, precios e inventario de cada sucursal centralizados en un solo sistema.",
  },
  {
    question: "¿Dónde se guarda la información de mi empresa?",
    answer:
      "Donde mejor te convenga: en la nube (AWS o Azure) o en tus propios servidores. En ambos casos nos encargamos del monitoreo y los respaldos.",
  },
  {
    question: "¿Desarrollan software a la medida?",
    answer:
      "Sí. Cuando un producto estándar no alcanza, desarrollamos aplicaciones web, móviles y sistemas empresariales a la medida, y modernizamos sistemas existentes.",
  },
  {
    question: "¿Qué pasa después de la implementación?",
    answer:
      "Seguimos contigo. Ofrecemos mantenimiento, soporte, monitoreo 24/7 y respaldos para que tus sistemas estén disponibles de forma continua.",
  },
]
