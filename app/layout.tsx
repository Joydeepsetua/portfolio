import type React from "react"
import "@/app/globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { Header } from "@/components/header"
import { BackgroundGradient } from "@/components/background-gradient"
import { MouseCursor } from "@/components/mouse-cursor"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Joydeep Setua | React Native Developer",
  description: "Portfolio of Joydeep Setua, a React Native Developer",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <BackgroundGradient />
          <MouseCursor />
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'