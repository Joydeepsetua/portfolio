"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

interface Bubble {
  id: number
  x: number
  y: number
  size: number
  duration: number
  delay: number
}

export function BubbleEffect() {
  const [bubbles, setBubbles] = useState<Bubble[]>([])

  useEffect(() => {
    // Generate initial bubbles
    const initialBubbles = Array.from({ length: 15 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 60 + 20,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
    }))

    setBubbles(initialBubbles)

    // Regenerate bubbles periodically
    const interval = setInterval(() => {
      setBubbles((prev) => {
        const newBubble = {
          id: Date.now(),
          x: Math.random() * 100,
          y: 110, // Start from below
          size: Math.random() * 60 + 20,
          duration: Math.random() * 10 + 10,
          delay: 0,
        }

        // Remove one old bubble and add a new one
        return [...prev.slice(1), newBubble]
      })
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className="absolute rounded-full bg-gradient-to-br from-cyan-300/20 to-cyan-500/10"
          style={{
            left: `${bubble.x}%`,
            bottom: `${bubble.y - 110}%`,
            width: bubble.size,
            height: bubble.size,
          }}
          initial={{ y: 0, opacity: 0 }}
          animate={{
            y: -window.innerHeight * 1.5,
            opacity: [0, 0.5, 0.2, 0],
            scale: [1, 1.2, 0.8, 1.1, 0.9, 1],
          }}
          transition={{
            duration: bubble.duration,
            delay: bubble.delay,
            repeat: Number.POSITIVE_INFINITY,
            repeatDelay: Math.random() * 5 + 5,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}

