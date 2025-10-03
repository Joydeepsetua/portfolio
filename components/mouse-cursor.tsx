"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export function MouseCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState("default")

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
    }

    window.addEventListener("mousemove", mouseMove)

    return () => {
      window.removeEventListener("mousemove", mouseMove)
    }
  }, [])

  useEffect(() => {
    const handleMouseOver = () => setCursorVariant("hover")
    const handleMouseOut = () => setCursorVariant("default")

    const interactiveElements = document.querySelectorAll('a, button, input, textarea, [role="button"]')

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseover", handleMouseOver)
      el.addEventListener("mouseout", handleMouseOut)
    })

    return () => {
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseover", handleMouseOver)
        el.removeEventListener("mouseout", handleMouseOut)
      })
    }
  }, [])

  const variants = {
    default: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      backgroundColor: "rgba(57, 203, 249, 0.2)",
      border: "2px solid rgba(57, 203, 249, 0.5)",
      scale: 1,
    },
    hover: {
      x: mousePosition.x - 8,
      y: mousePosition.y - 8,
      backgroundColor: "rgba(57, 203, 249, 0.4)",
      border: "2px solid rgba(57, 203, 249, 0.8)",
      scale: 1.5,
    },
  }

  return (
    <>
      <motion.div
        className="cursor-dot fixed top-0 left-0 w-4 h-4 rounded-full pointer-events-none z-[9999] hidden md:block"
        variants={variants}
        animate={cursorVariant}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />
      <motion.div
        className="cursor-ring fixed top-0 left-0 w-8 h-8 rounded-full border-2 border-cyan-400/20 pointer-events-none z-[9998] hidden md:block"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
        }}
        transition={{ type: "spring", stiffness: 250, damping: 20, delay: 0 }}
      />
    </>
  )
}

