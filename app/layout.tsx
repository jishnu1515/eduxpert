import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Header } from "@/components/header"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CareerX - Your Career Development Platform",
  description: "Find career opportunities, courses, and educational resources to advance your career.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} textured-background`}>
        <Header />
        {children}
      </body>
    </html>
  )
}



import './globals.css'