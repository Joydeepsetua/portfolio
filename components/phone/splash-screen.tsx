"use client"

import { motion } from "framer-motion"
import { Comforter_Brush } from "next/font/google"

const brush = Comforter_Brush({ weight: "400", subsets: ["latin"], display: "swap" })

/**
 * App boot splash — the `< Joydeep Setua />` brush-script logo (same as the old
 * header), tagline and an indeterminate progress bar. The fade-out is driven by
 * the parent via AnimatePresence.
 */
export function SplashScreen() {
  return (
    <motion.div
      className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-background"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.05 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <motion.span
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 200, damping: 15 }}
        className={`${brush.className} bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-600 bg-clip-text px-6 text-center text-4xl font-bold text-transparent drop-shadow-[0_0_25px_rgba(57,203,249,0.25)]`}
      >
        {`< Joydeep Setua />`}
      </motion.span>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
        className="mt-3 text-xs tracking-wide text-muted-foreground"
      >
        Mobile Developer
      </motion.p>

      <div className="absolute bottom-16 h-1 w-40 overflow-hidden rounded-full bg-muted">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
        />
      </div>
    </motion.div>
  )
}
