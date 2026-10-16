import { Building2Icon, PlugIcon, ReceiptTextIcon, ServerIcon, StoreIcon, WarehouseIcon } from "lucide-react"

export const solutions = [
  {
    title: "Desarrollamos",
    text: "Construimos sistemas para vender, administrar y mover inventario.",
  },
  {
    title: "Integramos",
    text: "Conectamos áreas y herramientas para evitar la doble captura.",
  },
  {
    title: "Gestionamos",
    text: "Acompañamos el arranque y cuidamos la continuidad diaria.",
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
    text: "Si algo falla, sabes a quién llamar. No pierdes tiempo coordinando varios proveedores.",
  },
  {
    title: "Menos trabajo manual",
    text: "Tu equipo trabaja en el sistema, no alrededor de hojas y capturas repetidas.",
  },
  {
    title: "Creces a tu ritmo",
    text: "Empieza con un producto y suma los demás cuando tu operación lo pida, sin migrar ni volver a capturar datos.",
  },
  {
    title: "Decides con datos al día",
    text: "Ves la operación a tiempo para corregir antes de que el problema crezca.",
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
    text: "Nos cuentas el flujo actual, los sistemas involucrados y el punto que quieres resolver.",
  },
  {
    title: "Propuesta e implementación",
    text: "Definimos la solución, la configuramos, la conectamos con lo que ya usas y la ponemos en marcha.",
  },
  {
    title: "Soporte continuo",
    text: "Después del arranque seguimos pendientes de disponibilidad, respaldos y ajustes operativos.",
  },
]

export const faqs = [
  {
    question: "¿El diagnóstico tiene algún costo?",
    answer:
      "No. Es gratuito y sin compromiso. Sirve para entender tu operación antes de proponer una solución.",
  },
  {
    question: "¿Tengo que contratar los tres productos?",
    answer:
      "No. Puedes empezar con el frente que más presión tenga y sumar otros módulos cuando el negocio lo pida.",
  },
  {
    question: "¿Puedo emitir facturación electrónica?",
    answer:
      "Sí. La implementamos dentro del flujo de venta o administración que corresponda a tu operación.",
  },
  {
    question: "Ya uso SAP Business One o Microsoft 365. ¿Debo dejarlos?",
    answer:
      "No. Si una herramienta ya funciona, la conectamos al flujo nuevo en lugar de reemplazarla.",
  },
  {
    question: "¿Sirve para empresas con varias sucursales?",
    answer:
      "Sí. CuadraPOS está pensado para operación multisucursal: ventas, precios e inventario de cada sucursal centralizados en un solo sistema.",
  },
  {
    question: "¿Dónde se guarda la información de mi empresa?",
    answer:
      "Depende de tus requisitos. Puede ser nube o servidores propios; lo definimos en la propuesta técnica.",
  },
  {
    question: "¿Desarrollan software a la medida?",
    answer:
      "Sí. Lo hacemos cuando el proceso tiene reglas propias que un producto estándar no cubre bien.",
  },
  {
    question: "¿Qué pasa después de la implementación?",
    answer:
      "Seguimos disponibles para soporte, ajustes y continuidad operativa después del arranque.",
  },
]
