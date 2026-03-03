import type { Metadata } from "next"
import "./globals.css"
import { ThemeProvider } from "@/components/layout/theme-provider"
import { LanguageProvider } from "@/lib/language-context"

export const metadata: Metadata = {
  title: "Cristhian Altamirano Montes | Full Stack Developer",
  description:
    "Portafolio profesional de Cristhian Altamirano Montes, Desarrollador Full Stack especializado en Next.js, React, NestJS y TypeScript. Estudiante de Ingeniería en Sistemas, UNA Costa Rica.",
  keywords: [
    "Cristhian Altamirano",
    "Full Stack Developer",
    "Next.js",
    "React",
    "TypeScript",
    "NestJS",
    "Costa Rica",
    "Portafolio",
  ],
  authors: [{ name: "Cristhian Altamirano Montes" }],
  creator: "Cristhian Altamirano Montes",
  openGraph: {
    type: "website",
    locale: "es_CR",
    title: "Cristhian Altamirano Montes | Full Stack Developer",
    description:
      "Desarrollador Full Stack especializado en Next.js, React, NestJS y TypeScript.",
    siteName: "Cristhian Altamirano Portfolio",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          storageKey="portfolio-theme"
        >
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
