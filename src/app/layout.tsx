import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

import { siteDescription, siteName, siteTitle, siteUrl } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  applicationName: siteName,
  keywords: [
    "software empresarial Panamá",
    "punto de venta Panamá",
    "sistema POS Panamá",
    "ERP Panamá",
    "facturación electrónica Panamá",
    "WMS RFID",
    "integración SAP Business One",
    "desarrollo de software a la medida Panamá",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_PA",
    url: "/",
    siteName,
    title: siteTitle,
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es-PA"
      className={`${geistSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
