"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { CheckIcon } from "lucide-react"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CTAButton } from "@/components/site/cta-button"
import type { CtaLocation } from "@/lib/ctas"

const products = [
  {
    id: "pos",
    tab: "CuadraPOS",
    tile: "bg-pillar-pos",
    title: "CuadraPOS",
    summary: "Punto de venta para tiendas y cadenas: cobra rápido, factura y mantén el inventario al día en cada sucursal.",
    image: "/img/cuadrapos.png",
    alt: "Cajera escaneando un producto con CuadraPOS en una tienda, con impresora de tickets y terminal de pago",
    features: [
      "Ventas y facturación",
      "Inventario en tiempo real",
      "Efectivo, tarjeta y otros métodos de pago",
      "Operación multisucursal",
      "Gestión de precios",
      "Reportes y análisis",
    ],
  },
  {
    id: "erp",
    tab: "CuadraERP",
    tile: "bg-pillar-erp",
    title: "CuadraERP",
    summary: "La administración completa de tu empresa en un solo sistema, desde las compras hasta los recursos humanos.",
    image: "/img/desarrollo.png",
    alt: "Equipo de BSP revisando la arquitectura de CuadraERP, con el panel de ventas y compras en una laptop",
    features: [
      "Ventas y compras",
      "Inventario",
      "Finanzas",
      "Clientes y proveedores",
      "Recursos humanos",
      "Proyectos y reportes",
    ],
  },
  {
    id: "wms",
    tab: "WMS con RFID",
    tile: "bg-pillar-wms",
    title: "WMS con RFID",
    summary: "Control de almacén con terminales móviles: cada caja se recibe, ubica y despacha con lectura de códigos y RFID.",
    image: "/img/wms-rfid.png",
    alt: "Operario de almacén leyendo etiquetas RFID con una terminal móvil junto al panel WMS de inventario",
    features: [
      "Recepciones y despachos",
      "Transferencias y conteos",
      "Códigos de barras 1D y 2D",
      "RFID UHF de lectura rápida",
      "Ubicaciones y trazabilidad",
      "Impresión de etiquetas RFID",
    ],
  },
]

const hashPrefix = "#producto-"

export function Products() {
  const [tab, setTab] = useState(products[0].id)

  // Los enlaces del navbar (#producto-pos, …) abren la pestaña correspondiente.
  useEffect(() => {
    const syncFromHash = () => {
      const id = window.location.hash.slice(hashPrefix.length)
      if (window.location.hash.startsWith(hashPrefix) && products.some((product) => product.id === id)) setTab(id)
    }
    syncFromHash()
    window.addEventListener("hashchange", syncFromHash)
    return () => window.removeEventListener("hashchange", syncFromHash)
  }, [])

  return (
    <section id="productos" className="relative bg-wash">
      {products.map((product) => (
        <span key={product.id} id={`producto-${product.id}`} className="absolute top-0" aria-hidden />
      ))}
      <div className="mx-auto w-full max-w-[1200px] px-4 py-24 sm:px-6 md:py-28">
        <div className="flex max-w-3xl flex-col gap-5">
          <h2 className="text-heading-sm font-normal md:text-heading-lg">
            Software propio para vender, administrar y mover inventario
          </h2>
          <p className="text-body-lg text-muted-foreground">
            Tres productos que comparten datos desde el primer día. Usa uno o los tres.
          </p>
        </div>

        <Tabs value={tab} onValueChange={(value) => setTab(String(value))} className="mt-12 gap-6">
          <TabsList className="h-auto w-full flex-wrap justify-start gap-1 bg-transparent p-0 sm:w-fit sm:rounded-[10px] sm:bg-secondary sm:p-1">
            {products.map((product) => (
              <TabsTrigger key={product.id} value={product.id} className="h-10 flex-none rounded-[8px] px-4 text-base font-normal">
                {product.tab}
              </TabsTrigger>
            ))}
          </TabsList>

          {products.map((product) => (
            <TabsContent
              key={product.id}
              value={product.id}
              className="grid gap-3 text-base data-[hidden]:hidden lg:grid-cols-12 animate-in fade-in-0 slide-in-from-bottom-2 duration-500"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-navy lg:col-span-7 lg:aspect-auto lg:min-h-[440px]">
                <Image
                  src={product.image}
                  alt={product.alt}
                  fill
                  sizes="(min-width: 1024px) 680px, 100vw"
                  className="object-cover"
                />
              </div>
              <div className={`flex flex-col justify-between gap-8 rounded-lg p-6 sm:p-8 lg:col-span-5 ${product.tile}`}>
                <div className="flex flex-col gap-3">
                  <h3 className="text-subheading font-normal">{product.title}</h3>
                  <p className="text-foreground/75">{product.summary}</p>
                </div>
                <ul className="flex flex-col gap-3">
                  {product.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <CheckIcon className="mt-1 size-4 shrink-0" aria-hidden />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div>
                  <CTAButton action="demo" location={`producto-${product.id}` as CtaLocation} />
                </div>
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
