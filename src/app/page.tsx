import Image from "next/image"
import { ArrowRightIcon, CloudIcon, ContainerIcon, MailIcon, PhoneIcon, ShieldCheckIcon } from "lucide-react"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ContactForm } from "@/components/site/contact-form"
import { CTAButton } from "@/components/site/cta-button"
import { Header } from "@/components/site/header"
import { LogoLockup } from "@/components/site/logo"
import { Products } from "@/components/site/products"
import { WhatsAppButton } from "@/components/site/whatsapp-button"
import { contact } from "@/lib/contact"
import { benefits, customDevelopment, faqs, operatingContext, services, solutions, steps } from "@/lib/content"
import { siteDescription, siteName, siteUrl } from "@/lib/site"

const integrationGroups = [
  { name: "ERP y CRM", items: ["SAP Business One", "Zoho CRM", "CuadraERP"] },
  { name: "Productividad", items: ["Microsoft 365", "Outlook", "Teams", "SharePoint"] },
  { name: "Nube", items: ["AWS", "Azure"] },
  { name: "Bases de datos", items: ["PostgreSQL", "MySQL"] },
  { name: "Conectores", items: ["REST API", "Webhooks", "OData", "Tus sistemas actuales"] },
]

const integrationOutcomes = [
  "Una venta en tienda descuenta el inventario del ERP",
  "Los clientes del CRM llegan al punto de venta",
  "Un solo dato para ventas, inventario y finanzas",
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
    name: "Integración",
    items: [
      { title: "Integración de sistemas", text: "SAP, Microsoft 365, APIs y servicios de terceros." },
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
      { label: "Qué hacemos", href: "#que-hacemos" },
      { label: "Beneficios", href: "#beneficios" },
      { label: "Experiencia", href: "#experiencia" },
      { label: "Preguntas frecuentes", href: "#preguntas" },
    ],
  },
  {
    name: "Contacto",
    links: [
      { label: "Cómo empezar", href: "#como-empezar" },
      { label: "Formulario de diagnóstico", href: "#contacto" },
      { label: contact.phone, href: contact.phoneHref },
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
        {/* Hero */}
        <section id="inicio" className="relative isolate overflow-hidden bg-[image:var(--hero-wash)] pt-36 md:pt-44">
          <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-7 px-4 text-center sm:px-6">
            <h1 className="max-w-4xl text-heading-sm font-normal sm:text-heading md:text-heading-lg lg:text-hero">
              Conectamos y potenciamos tu operación con tecnología.
            </h1>
            <p className="max-w-2xl text-body-lg text-foreground/75">
              Desarrollamos CuadraPOS, CuadraERP y tecnología RFID, los integramos con SAP Business One, Microsoft 365
              y tus sistemas actuales, y gestionamos la infraestructura que hace que todo funcione.
            </p>
            <div className="flex flex-col gap-2 sm:flex-row">
              <CTAButton action="demo" location="hero" />
              <CTAButton action="soluciones" location="hero" className="bg-background/90" />
            </div>
          </div>
          <div className="mx-auto mt-16 w-full max-w-[1200px] px-4 sm:px-6 md:mt-20">
            <div className="hero-reveal relative aspect-[4/3] overflow-hidden rounded-lg bg-navy shadow-feature sm:aspect-[1983/793]">
              <Image
                src="/img/ecosistema-bsp.png"
                alt="Ecosistema BSP: punto de venta CuadraPOS, terminal de almacén, panel ERP, servidores en la nube e integraciones"
                fill
                priority
                sizes="(min-width: 1200px) 1152px, 100vw"
                className="object-cover object-[62%_center] sm:object-center"
              />
            </div>
          </div>
          <div aria-hidden className="absolute inset-x-0 bottom-0 -z-10 h-1/4 bg-background" />
        </section>

        {/* Qué hacemos */}
        <section id="que-hacemos" className="mx-auto w-full max-w-[1200px] px-4 pt-24 sm:px-6 md:pt-28">
          <div className="grid gap-5 xl:grid-cols-12 xl:gap-10">
            <h2 className="text-heading-sm font-normal md:text-heading-lg xl:col-span-4">Qué hacemos</h2>
            <div className="flex max-w-3xl flex-col gap-5 xl:col-span-8 xl:max-w-none xl:pt-2">
              <p className="text-body-lg">
                Cuando las ventas, el inventario y la administración viven en sistemas separados, tu equipo pierde
                tiempo copiando datos y decide con información a destiempo.
              </p>
              <p className="text-body-lg text-muted-foreground">
                Desarrollamos soluciones propias para la gestión de tu negocio: CuadraPOS para el punto de venta,
                CuadraERP para la administración y tecnología RFID para el control de inventario y activos. Las
                integramos con SAP Business One, Microsoft 365 y los sistemas que ya utilizas, y administramos la
                infraestructura que las sostiene para que tu equipo se enfoque en operar, no en resolver problemas
                técnicos.
              </p>
            </div>
          </div>
          <ul className="mt-12 grid gap-x-8 gap-y-8 md:grid-cols-3">
            {solutions.map((solution) => (
              <li key={solution.title} className="flex flex-col gap-2 border-t pt-5">
                <h3 className="text-title font-normal">{solution.title}</h3>
                <p className="text-muted-foreground">{solution.text}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* ===== Servicios: qué soluciones ofrecemos ===== */}
        {/* Pilares por color: índice de servicios */}
        <section id="servicios" className="mx-auto w-full max-w-[1200px] px-4 py-24 sm:px-6 md:py-28">
          <div className="flex max-w-3xl flex-col gap-5">
            <h2 className="text-heading-sm font-normal md:text-heading">Seis piezas, un mismo proveedor</h2>
            <p className="text-body-lg text-muted-foreground">
              Productos propios, integración, facturación electrónica e infraestructura. Usa una pieza o combínalas, y
              si tu operación necesita algo que no existe,{" "}
              <a href={customDevelopment.href} className="text-foreground underline hover:text-brand">
                lo desarrollamos a la medida
              </a>
              .
            </p>
          </div>
          <ul className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
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
        </section>

        <Products />

        {/* Integraciones */}
        <section id="integraciones" className="bg-navy text-navy-foreground">
          <div className="mx-auto w-full max-w-[1200px] px-4 py-24 sm:px-6 md:py-32">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
              <div className="flex flex-col gap-5 lg:col-span-7">
                <h2 className="text-heading-sm font-normal md:text-heading-lg">
                  No reemplazamos lo que ya funciona, lo conectamos.
                </h2>
                <p className="text-body-lg text-navy-muted">
                  Si ya trabajas con SAP Business One, Microsoft 365 o Zoho CRM, conectamos CuadraPOS, CuadraERP
                  y el WMS a ellos mediante APIs, Webhooks y OData.
                </p>
              </div>
              <ul className="flex flex-col gap-3 lg:col-span-5">
                {integrationOutcomes.map((outcome) => (
                  <li key={outcome} className="flex gap-3">
                    <ArrowRightIcon className="mt-1 size-4 shrink-0 text-brand-light" aria-hidden />
                    {outcome}
                  </li>
                ))}
              </ul>
            </div>

            <div className="relative mt-14 aspect-[4/3] overflow-hidden rounded-lg sm:aspect-[1320/941]">
              <Image
                src="/img/integraciones.png"
                alt="Mapa de integraciones de BSP con SAP Business One, Microsoft 365, Zoho CRM, CuadraERP, CuadraPOS, AWS y Azure"
                fill
                sizes="(min-width: 1200px) 1152px, 100vw"
                className="object-cover object-[40%_center] sm:object-left"
              />
            </div>

            <dl className="mt-14 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-5">
              {integrationGroups.map((group) => (
                <div key={group.name} className="flex flex-col gap-3 border-t border-navy-border pt-4">
                  <dt className="text-sm text-navy-muted">{group.name}</dt>
                  {group.items.map((item) => (
                    <dd key={item}>{item}</dd>
                  ))}
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Infraestructura */}
        <section id="infraestructura" className="mx-auto w-full max-w-[1200px] px-4 py-24 sm:px-6 md:py-32">
          <div className="flex max-w-3xl flex-col gap-5">
            <h2 className="text-heading-sm font-normal md:text-heading-lg">
              Infraestructura y nube, a cargo del mismo equipo
            </h2>
            <p className="text-body-lg text-muted-foreground">
              El software que te entregamos corre sobre servidores que diseñamos, monitoreamos y respaldamos.
            </p>
          </div>
          <div className="mt-12 grid gap-3 lg:grid-cols-12">
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-navy lg:col-span-7 lg:aspect-auto lg:min-h-[420px]">
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
          <div className="mx-auto w-full max-w-[1200px] px-4 py-24 sm:px-6 md:py-32">
            <div className="flex max-w-3xl flex-col gap-5">
              <h2 className="text-heading-sm font-normal md:text-heading-lg">
                Desarrollo, integración y automatización a la medida
              </h2>
              <p className="text-body-lg text-muted-foreground">
                Cuando un producto estándar no alcanza, construimos lo que tu operación necesita.
              </p>
            </div>
            <div className="mt-12 grid gap-3 md:grid-cols-3">
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
        <section id="beneficios" className="mx-auto w-full max-w-[1200px] px-4 py-24 sm:px-6 md:py-32">
          <div className="grid gap-12 lg:grid-cols-12">
            <div className="flex flex-col gap-5 lg:sticky lg:top-28 lg:col-span-4 lg:self-start">
              <h2 className="text-heading-sm font-normal md:text-heading">Por qué trabajar con BSP</h2>
              <p className="text-body-lg text-muted-foreground">
                Un proveedor que entrega el software, lo conecta con lo que ya usas y lo mantiene funcionando.
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

        {/* ===== Experiencia: qué demuestra nuestra capacidad ===== */}
        <section id="experiencia" className="bg-navy text-navy-foreground">
          <div className="mx-auto w-full max-w-[1200px] px-4 py-24 sm:px-6 md:py-32">
            <div className="flex max-w-3xl flex-col gap-5">
              <h2 className="text-heading-sm font-normal md:text-heading-lg">
                Software propio, construido y mantenido por nuestro equipo
              </h2>
              <p className="text-body-lg text-navy-muted">
                CuadraPOS, CuadraERP y el WMS con RFID son productos que diseñamos, desarrollamos y mantenemos para
                el trabajo diario: conectados al hardware de la tienda, a las terminales del almacén y a la gestión de
                la oficina.
              </p>
            </div>
            <div className="mt-14 grid gap-x-8 gap-y-12 md:grid-cols-3">
              {operatingContext.map((context) => (
                <div key={context.place} className="flex flex-col gap-5 border-t border-navy-border pt-5">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-title font-normal">{context.place}</h3>
                    <a
                      href={context.href}
                      className="group inline-flex w-fit items-center gap-2 text-navy-muted hover:text-navy-foreground focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
                    >
                      {context.product}
                      <ArrowRightIcon
                        className="size-4 text-brand-light transition-transform duration-300 ease-out group-hover:translate-x-1"
                        aria-hidden
                      />
                    </a>
                  </div>
                  <ul className="flex flex-col gap-3">
                    {context.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== Contacto: cómo empezar a trabajar con BSP ===== */}
        {/* Cómo empezar */}
        <section id="como-empezar" className="mx-auto w-full max-w-[1200px] px-4 py-24 sm:px-6 md:py-32">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="flex flex-col gap-5 lg:col-span-7">
              <h2 className="text-heading-sm font-normal md:text-heading-lg">Cómo empezar</h2>
              <p className="text-body-lg text-muted-foreground">
                Tres pasos, con el mismo equipo de principio a fin.
              </p>
            </div>
            <div className="lg:col-span-5 lg:justify-self-end">
              <CTAButton action="demo" location="como-empezar" />
            </div>
          </div>
          <ol className="mt-14 grid gap-3 md:grid-cols-3">
            {steps.map((step, index) => (
              <li key={step.title} className="flex flex-col gap-10 rounded-lg bg-wash p-6 sm:p-8">
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
          <div className="mx-auto grid w-full max-w-[1200px] gap-12 px-4 py-24 sm:px-6 md:py-32 lg:grid-cols-12">
            <div className="flex flex-col gap-5 lg:col-span-4">
              <h2 className="text-heading-sm font-normal md:text-heading">Preguntas frecuentes</h2>
              <p className="text-body-lg text-muted-foreground">
                ¿No encuentras tu respuesta? Te contestamos por WhatsApp.
              </p>
              <div>
                <CTAButton action="pregunta" location="preguntas" />
              </div>
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
        <section id="contacto" className="bg-navy text-navy-foreground">
          <div className="mx-auto grid w-full max-w-[1200px] gap-12 px-4 py-24 sm:px-6 md:py-32 lg:grid-cols-12">
            <div className="flex flex-col gap-5 lg:col-span-5">
              <h2 className="text-heading-sm font-normal md:text-heading">Pide tu diagnóstico gratuito</h2>
              <p className="text-body-lg text-navy-muted">
                Cuéntanos cómo opera tu empresa. Revisamos tus procesos sin costo y te mostramos cómo se verían en
                CuadraPOS, CuadraERP o el WMS, y qué haría falta integrar.
              </p>
              <div className="mt-4 flex flex-col gap-4">
                <dl className="flex flex-col gap-3 text-navy-muted">
                  <div className="flex gap-3">
                    <PhoneIcon className="mt-1 size-4 shrink-0" aria-hidden />
                    <dt className="sr-only">Teléfono</dt>
                    <dd>
                      <a href={contact.phoneHref} className="text-navy-foreground hover:underline">
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
        <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-10 px-4 pt-24 pb-16 text-center sm:px-6">
          <p className="text-heading leading-[0.85] font-black tracking-[-0.03em] uppercase sm:text-hero md:text-display">
            Conecta tu
            <br />
            <span className="text-[var(--brand-on-dark)]">operación</span>
          </p>
          <CTAButton action="pregunta" location="footer" className="border-transparent text-foreground" />
        </div>
        <div className="mx-auto grid w-full max-w-[1200px] gap-10 border-t border-navy-border px-4 py-14 sm:px-6 md:grid-cols-12">
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
        <div className="mx-auto w-full max-w-[1200px] border-t border-navy-border px-4 py-6 text-sm text-navy-muted sm:px-6">
          © 2026 BSP Tech Solutions
        </div>
      </footer>
      <WhatsAppButton />
    </>
  )
}
