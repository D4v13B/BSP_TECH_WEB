import Image from "next/image"
import { ArrowRightIcon, CloudIcon, ContainerIcon, MailIcon, MessageCircleIcon, ShieldCheckIcon } from "lucide-react"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ContactForm } from "@/components/site/contact-form"
import { Header } from "@/components/site/header"
import { LogoLockup } from "@/components/site/logo"
import { Products } from "@/components/site/products"
import { WhatsAppButton } from "@/components/site/whatsapp-button"
import { contact } from "@/lib/contact"
import { benefits, customDevelopment, faqs, services, solutions, steps } from "@/lib/content"
import { siteDescription, siteName, siteUrl } from "@/lib/site"

const integrations = [
  { name: "ERP y CRM", items: ["SAP Business One", "Zoho CRM", "CuadraERP"] },
  { name: "Microsoft 365", items: ["Outlook", "Teams", "SharePoint"] },
  { name: "Conectores", items: ["REST API", "Webhooks", "OData"] },
]

const infrastructure = [
  { icon: CloudIcon, title: "Dónde corre", text: "AWS, Azure o tus propios servidores Linux." },
  { icon: ContainerIcon, title: "Cómo se despliega", text: "Contenedores Docker, Kubernetes y CI/CD." },
  { icon: ShieldCheckIcon, title: "Cómo se cuida", text: "Monitoreo 24/7, respaldos y virtualización." },
]

const serviceGroups: { name: string; items: { title: string; text: string; id?: string }[] }[] = [
  {
    name: "Desarrollo",
    items: [
      { title: "Software a la medida", text: "Aplicaciones web, móviles y sistemas empresariales." },
      { title: "SaaS multiempresa", text: "Plataformas que sirven a muchos clientes a la vez." },
      { title: "Modernización", text: "Migración y evolución de sistemas existentes." },
    ],
  },
  {
    name: "Arquitectura y cumplimiento",
    items: [
      { id: "facturacion", title: "Facturación electrónica", text: "Implementación y conexión de la facturación electrónica con tus sistemas." },
      { title: "Arquitectura de soluciones", text: "Sistemas diseñados para crecer contigo." },
    ],
  },
  {
    name: "Automatización y soporte",
    items: [
      { title: "Automatización e IA", text: "Procesos repetitivos que se resuelven solos." },
      { title: "Mantenimiento y soporte", text: "Tus sistemas disponibles de forma continua." },
      { title: "Consultoría tecnológica", text: "Análisis de tu operación y plan de mejora." },
    ],
  },
]

const footerColumns = [
  {
    name: "Servicios",
    links: [...services.map((service) => ({ label: service.name, href: service.href })), { label: customDevelopment.name, href: customDevelopment.href }],
  },
  {
    name: "BSP",
    links: [
      { label: "Inicio", href: "#inicio" },
      { label: "Beneficios", href: "#beneficios" },
      { label: "Proyectos", href: "#proyectos" },
      { label: "Contacto", href: "#contacto" },
    ],
  },
  {
    name: "Contacto",
    links: [
      { label: "Cómo empezar", href: "#contacto" },
      { label: "Formulario de diagnóstico", href: "#diagnostico" },
      { label: "WhatsApp", href: contact.whatsappHref },
      { label: contact.email, href: `mailto:${contact.email}` },
    ],
  },
]

// Datos estructurados para Google: la empresa y sus preguntas frecuentes.
const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteName,
    url: siteUrl,
    logo: `${siteUrl}/img/logo-bsp-full.png`,
    description: siteDescription,
    email: contact.email,
    telephone: contact.phone,
    areaServed: { "@type": "Country", name: "Panamá" },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: contact.phone,
      contactType: "sales",
      availableLanguage: "Spanish",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  },
]

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
      <Header />
      <main className="flex-1">
        {/* ===== Inicio: qué hacemos y qué problema resolvemos ===== */}
        <section id="inicio" className="relative isolate overflow-hidden bg-[image:var(--hero-wash)] pt-24 pb-8 sm:pt-28 sm:pb-10 md:pt-32 md:pb-12 lg:pt-36 lg:pb-14">
          <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center gap-6 px-4 text-center sm:px-6 md:gap-7 lg:px-8 xl:px-10">
            <h1 className="max-w-4xl text-heading-sm font-normal sm:text-heading md:text-heading-lg lg:text-hero">
              Conectamos y potenciamos tu operación con tecnología.
            </h1>
            <p className="max-w-2xl text-body-lg text-foreground/75">
              Cuando las ventas, el inventario y la administración viven en sistemas separados, tu equipo pierde
              tiempo copiando datos y decide con información a destiempo.
            </p>
          </div>
          <div className="mx-auto mt-6 w-full max-w-[1440px] px-4 sm:mt-8 sm:px-6 md:mt-10 lg:mt-12 lg:px-8 xl:px-10">
            <div className="hero-reveal relative aspect-[4/3] overflow-hidden rounded-lg bg-navy shadow-feature sm:aspect-[1983/793]">
              <Image
                src="/img/ecosistema-bsp.png"
                alt="Ecosistema BSP: punto de venta CuadraPOS, terminal de almacén, panel ERP, servidores en la nube e integraciones"
                fill
                priority
                sizes="(min-width: 1440px) 1360px, 100vw"
                className="object-cover object-[62%_center] sm:object-center"
              />
            </div>
          </div>
          <ul className="mx-auto mt-6 grid w-full max-w-[1440px] gap-x-8 gap-y-6 px-4 sm:mt-8 sm:gap-y-8 sm:px-6 md:mt-10 md:grid-cols-3 lg:px-8 xl:px-10">
            {solutions.map((solution) => (
              <li key={solution.title} className="flex flex-col gap-2 border-t pt-5">
                <h2 className="text-title font-normal">{solution.title}</h2>
                <p className="text-muted-foreground">{solution.text}</p>
              </li>
            ))}
          </ul>
          <div aria-hidden className="absolute inset-x-0 bottom-0 -z-10 h-1/4 bg-background" />
        </section>

        {/* ===== Servicios: qué soluciones ofrecemos ===== */}
        {/* Pilares por color: índice de servicios */}
        <section id="servicios" className="mx-auto w-full max-w-[1440px] px-4 py-8 sm:px-6 sm:py-10 md:py-12 lg:px-8 lg:py-14 xl:px-10">
          <div className="flex flex-col gap-5">
            <h2 className="text-heading-sm font-normal md:text-heading">Seis piezas, un mismo proveedor</h2>
            <p className="text-body-lg text-muted-foreground">
              Elige el punto de entrada según lo que necesitas resolver hoy. Puedes empezar con una solución puntual,
              conectar tus sistemas actuales o pedir{" "}
              <a href={customDevelopment.href} className="text-foreground underline hover:text-brand">
                desarrollo a la medida
              </a>
              .
            </p>
          </div>
          <ul className="mt-6 grid gap-3 sm:mt-8 sm:grid-cols-2 md:mt-8 lg:grid-cols-3">
            {services.map((pillar) => (
              <li key={pillar.name}>
                <a
                  href={pillar.href}
                  className={`group flex h-full flex-col justify-between gap-3 rounded-lg sm:min-h-48 sm:gap-6 px-5 py-5 transition-transform duration-300 ease-out hover:-translate-y-1 focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:ring-offset-2 focus-visible:outline-none ${pillar.tile}`}
                >
                  <span className="text-title font-normal">{pillar.name}</span>
                  <span className="flex flex-col gap-4 text-[0.95rem]">
                    <span>{pillar.text}</span>
                    <ArrowRightIcon
                      className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                      aria-hidden
                    />
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <div id="integraciones" className="mt-6 rounded-lg bg-navy p-6 text-navy-foreground sm:mt-8 sm:p-8 md:mt-10">
            <div className="flex flex-col gap-4">
              <h3 className="text-subheading font-normal">Integraciones</h3>
              <p className="text-body-lg text-navy-muted">
                Conectamos CuadraPOS, CuadraERP y el WMS con los sistemas que ya usas. Una venta, un despacho o un
                asiento actualizan el resto del flujo sin capturar el dato otra vez.
              </p>
            </div>
            <dl className="mt-6 grid gap-x-8 gap-y-6 sm:grid-cols-3">
              {integrations.map((group) => (
                <div key={group.name} className="flex flex-col gap-2 border-t border-navy-border pt-4">
                  <dt className="text-sm text-navy-muted">{group.name}</dt>
                  {group.items.map((item) => (
                    <dd key={item}>{item}</dd>
                  ))}
                </div>
              ))}
            </dl>
          </div>
        </section>

        <Products />

        {/* Infraestructura */}
        <section id="infraestructura" className="mx-auto w-full max-w-[1440px] px-4 py-8 sm:px-6 sm:py-10 md:py-12 lg:px-8 lg:py-14 xl:px-10">
          <div className="flex flex-col gap-5">
            <h3 className="text-subheading font-normal">
              Infraestructura y nube, a cargo del mismo equipo
            </h3>
            <p className="text-body-lg text-muted-foreground">
              Diseñamos el entorno donde corre tu operación y nos encargamos de mantenerlo disponible.
            </p>
          </div>
          <div className="mt-6 grid gap-3 sm:mt-8 md:mt-8 lg:grid-cols-12">
            <div className="relative aspect-[16/9] overflow-hidden rounded-lg bg-navy lg:col-span-7 lg:aspect-auto lg:min-h-[340px]">
              <Image
                src="/img/infraestructura.png"
                alt="Ingeniero de BSP trabajando frente a racks de servidores en un centro de datos"
                fill
                sizes="(min-width: 1024px) 680px, 100vw"
                className="object-cover object-left"
              />
            </div>
            <ul className="flex flex-col justify-center gap-8 rounded-lg bg-pillar-infra p-6 text-white sm:p-8 lg:col-span-5">
              {infrastructure.map((item) => (
                <li key={item.title} className="flex gap-4">
                  <item.icon className="mt-1 size-5 shrink-0 text-brand-light" aria-hidden />
                  <div className="flex flex-col gap-1">
                    <span className="text-title font-normal">{item.title}</span>
                    <span className="text-navy-muted">{item.text}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Desarrollo a la medida */}
        <section id="desarrollo" className="bg-wash">
          <div className="mx-auto w-full max-w-[1440px] px-4 py-8 sm:px-6 sm:py-10 md:py-12 lg:px-8 lg:py-14 xl:px-10">
            <div className="flex flex-col gap-5">
              <h3 className="text-subheading font-normal">
                Desarrollo, integración y automatización a la medida
              </h3>
              <p className="text-body-lg text-muted-foreground">
                Cuando el flujo de trabajo tiene reglas propias, diseñamos la pieza que falta y la dejamos operando.
              </p>
            </div>
            <div className="mt-6 grid gap-3 sm:mt-8 md:mt-8 md:grid-cols-3">
              {serviceGroups.map((group) => (
                <div key={group.name} className="flex flex-col gap-6 rounded-lg bg-background px-5 py-6 shadow-hairline">
                  <h3 className="text-title font-normal">{group.name}</h3>
                  <ul className="flex flex-col gap-5">
                    {group.items.map((item) => (
                      <li key={item.title} id={item.id} className="flex flex-col gap-1 border-t pt-4">
                        <span className="font-medium">{item.title}</span>
                        <span className="text-[0.95rem] text-muted-foreground">{item.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== Beneficios: por qué trabajar con BSP ===== */}
        <section id="beneficios" className="mx-auto w-full max-w-[1440px] px-4 py-8 sm:px-6 sm:py-10 md:py-12 lg:px-8 lg:py-14 xl:px-10">
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-12 lg:gap-10">
            <div className="flex flex-col gap-5 lg:sticky lg:top-28 lg:col-span-4 lg:self-start">
              <h2 className="text-heading-sm font-normal md:text-heading">Por qué trabajar con BSP</h2>
              <p className="text-body-lg text-muted-foreground">
                Menos coordinación entre proveedores y más continuidad para tu operación diaria.
              </p>
            </div>
            <ul className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:col-span-8">
              {benefits.map((benefit) => (
                <li key={benefit.title} className="flex flex-col gap-2 border-t pt-5">
                  <h3 className="text-title font-normal">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ===== Proyectos: qué demuestra nuestra capacidad ===== */}
        <section id="proyectos" className="bg-navy text-navy-foreground">
          <div className="mx-auto w-full max-w-[1440px] px-4 py-8 sm:px-6 sm:py-10 md:py-12 lg:px-8 lg:py-14 xl:px-10">
            <div className="flex flex-col gap-5">
              <h2 className="text-heading-sm font-normal md:text-heading">
                Proyectos
              </h2>
              <p className="text-body-lg text-navy-muted">
                Los casos de clientes se publicarán aquí.
              </p>
            </div>
          </div>
        </section>

        {/* ===== Contacto: cómo empezar a trabajar con BSP ===== */}
        {/* Cómo empezar */}
        <section id="contacto" className="mx-auto w-full max-w-[1440px] px-4 py-8 sm:px-6 sm:py-10 md:py-12 lg:px-8 lg:py-14 xl:px-10">
          <div className="flex flex-col gap-5">
            <h2 className="text-heading-sm font-normal md:text-heading">Cómo empezar</h2>
            <p className="text-body-lg text-muted-foreground">
              Una conversación inicial nos da el contexto para proponerte el camino más corto.
            </p>
          </div>
          <ol className="mt-6 grid gap-3 sm:mt-8 md:mt-8 md:grid-cols-3">
            {steps.map((step, index) => (
              <li key={step.title} className="flex flex-col gap-6 rounded-lg bg-wash p-6 sm:p-8">
                <span aria-hidden className="text-heading-lg font-normal text-brand">
                  {index + 1}
                </span>
                <div className="flex flex-col gap-2">
                  <h3 className="text-title font-normal">{step.title}</h3>
                  <p className="text-muted-foreground">{step.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        {/* Preguntas frecuentes */}
        <section id="preguntas" className="bg-wash">
          <div className="mx-auto grid w-full max-w-[1440px] gap-6 px-4 py-8 sm:gap-6 sm:px-6 sm:py-10 md:py-12 lg:grid-cols-12 lg:gap-8 lg:px-8 lg:py-14 xl:px-10">
            <div className="flex flex-col gap-5 lg:col-span-4">
              <h3 className="text-subheading font-normal">Preguntas frecuentes</h3>
              <p className="text-body-lg text-muted-foreground">
                Si tu caso no aparece aquí, descríbelo en el formulario de diagnóstico.
              </p>
            </div>
            <Accordion className="rounded-lg bg-background px-5 shadow-hairline sm:px-8 lg:col-span-8">
              {faqs.map((faq) => (
                <AccordionItem key={faq.question} value={faq.question}>
                  <AccordionTrigger className="py-5 text-base font-medium hover:no-underline sm:text-lg sm:font-normal">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-5 text-base text-muted-foreground">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Contacto */}
        <section id="diagnostico" className="bg-navy text-navy-foreground">
          <div className="mx-auto grid w-full max-w-[1440px] gap-6 px-4 py-8 sm:gap-6 sm:px-6 sm:py-10 md:py-12 lg:grid-cols-12 lg:gap-8 lg:px-8 lg:py-14 xl:px-10">
            <div className="flex flex-col gap-5 lg:col-span-5">
              <h3 className="text-subheading font-normal">Pide tu diagnóstico gratuito</h3>
              <p className="text-body-lg text-navy-muted">
                Describe el proceso, las herramientas actuales y el resultado que necesitas. Con eso preparamos el
                siguiente paso.
              </p>
              <div className="mt-4 flex flex-col gap-4">
                <dl className="flex flex-col gap-3 text-navy-muted">
                  <div className="flex gap-3">
                    <MessageCircleIcon className="mt-1 size-4 shrink-0" aria-hidden />
                    <dt className="sr-only">WhatsApp</dt>
                    <dd>
                      <a href={contact.whatsappHref} target="_blank" rel="noopener noreferrer" className="text-navy-foreground hover:underline">
                        {contact.phone}
                      </a>
                    </dd>
                  </div>
                  <div className="flex gap-3">
                    <MailIcon className="mt-1 size-4 shrink-0" aria-hidden />
                    <dt className="sr-only">Correo</dt>
                    <dd className="min-w-0">
                      <a href={`mailto:${contact.email}`} className="break-all text-navy-foreground hover:underline">
                        {contact.email}
                      </a>
                    </dd>
                  </div>
                </dl>
              </div>
            </div>
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-navy-deep text-navy-foreground">
        <div className="mx-auto flex w-full max-w-[1440px] flex-col items-center px-4 pt-12 pb-10 text-center sm:px-6 sm:pt-14 sm:pb-12 md:pt-16 md:pb-14 lg:px-8 lg:pt-20 lg:pb-16 xl:px-10">
          <p className="text-heading-sm leading-[0.9] font-black tracking-[-0.03em] uppercase sm:text-heading-lg md:text-hero lg:text-display">
            Conecta tu
            <br />
            <span className="text-[var(--brand-on-dark)]">operación</span>
          </p>
        </div>
        <div className="mx-auto grid w-full max-w-[1440px] gap-8 border-t border-navy-border px-4 py-8 sm:px-6 sm:py-10 md:grid-cols-12 md:gap-10 md:py-12 lg:px-8 xl:px-10">
          <div className="md:col-span-4">
            <LogoLockup inverted className="h-28" />
          </div>
          {footerColumns.map((column) => (
            <nav key={column.name} aria-label={column.name} className="flex flex-col gap-3 text-sm md:col-span-2 last:md:col-span-4">
              <span className="text-navy-muted">{column.name}</span>
              {column.links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="break-all hover:underline"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          ))}
        </div>
        <div className="mx-auto w-full max-w-[1440px] border-t border-navy-border px-4 py-5 text-sm text-navy-muted sm:px-6 lg:px-8 xl:px-10">
          © 2026 BSP Tech Solutions
        </div>
      </footer>
      <WhatsAppButton />
    </>
  )
}
