"use client"

import type React from "react"
import { motion } from "framer-motion"

interface TapScaleProps {
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

/**
 * Wraps content with a native-app style "haptic" press feedback —
 * a quick scale-down on tap that springs back on release.
 */
export function TapScale({ children, className = "", onClick }: TapScaleProps) {
  return (
    <motion.div
      className={className}
      onClick={onClick}
      whileTap={{ scale: 0.94 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.div>
  )
}
