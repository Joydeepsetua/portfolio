import type React from "react"
import "@/app/globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { BackgroundGradient } from "@/components/background-gradient"
import { SITE_DESCRIPTION, SITE_TITLE, SITE_URL } from "@/lib/constants"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  applicationName: "Joydeep Setua",
  authors: [{ name: "Joydeep Setua", url: SITE_URL }],
  creator: "Joydeep Setua",
  keywords: [
    "Joydeep Setua",
    "Senior Software Developer",
    "Mobile Developer",
    "Android Developer",
    "React Native Developer",
    "Mobile App Developer Durg",
    "React Native Developer Raipur",
    "Durg",
    "Raipur",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: SITE_URL,
    siteName: "Joydeep Setua",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    locale: "en_IN",
    firstName: "Joydeep",
    lastName: "Setua",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    creator: "@joydeepsetua",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-IN" className="dark">
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <BackgroundGradient />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
