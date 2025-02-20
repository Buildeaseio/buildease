import { GeistSans } from "geist/font/sans"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

import Footer from "@/components/ui/Footer"
import { NavBar } from "@/components/ui/Navbar"
import { siteConfig } from "./siteConfig"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL("https://buildease.io"),
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: ["Marketing", "Database", "Software"],
  authors: [
    {
      name: "Chris",
      url: "",
    },
  ],
  creator: "buildease",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    creator: "@buildease",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <title>Buildease</title>
      </head>
      <body
        className={`${GeistSans.className} min-h-screen overflow-x-hidden scroll-auto bg-gray-50 antialiased selection:bg-orange-100 selection:text-orange-600`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
