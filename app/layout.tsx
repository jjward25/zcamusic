import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import AnimatedBackground from "../components/AnimatedBackground"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Zach Alexander Music",
  description: "Professional music production services",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} bg-black text-white min-h-screen flex flex-col`}>
        <AnimatedBackground />
        <div className="flex-grow">{children}</div>
      </body>
    </html>
  )
}

