"use client"

import Footer from "@/layouts/Footer"
import Navbar from "@/layouts/Navbar"
import "@/styles/globals.css"
import { Poppins, Inter, Manrope } from "@next/font/google"
import { AnimatePresence } from "framer-motion"
import { useRouter } from "next/router"
import { ThemeProvider } from "@/components/theme-provider"

export const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
})

export const inter = Inter({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const manrope = Manrope({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-manrope",
})

export default function App({ Component, pageProps }) {
  const router = useRouter()

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
      <AnimatePresence mode="wait">
        <div className="bg-white dark:bg-black">
          <main
            className={`${poppins.variable} ${manrope.variable} ${inter.variable} font-poppins max-w-[2550px] w-full mx-auto`}
          >
            <Navbar />
            <Component key={router.asPath} {...pageProps} />
          </main>
          <Footer />
        </div>
      </AnimatePresence>
    </ThemeProvider>
  )
}
