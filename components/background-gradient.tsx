"use client"

import { useEffect, useRef } from "react"

export function BackgroundGradient() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const colors = ["#39cbf9", "#0099cc", "#66d9ff"]
    const particles: Particle[] = []
    const particleCount = 15

    // Pre-render a soft radial blob to an offscreen canvas once, then reuse it
    // every frame via drawImage — far cheaper than createRadialGradient per frame.
    const createSprite = (size: number, color: string) => {
      const sprite = document.createElement("canvas")
      sprite.width = size * 2
      sprite.height = size * 2
      const sctx = sprite.getContext("2d")
      if (sctx) {
        const gradient = sctx.createRadialGradient(size, size, 0, size, size, size)
        gradient.addColorStop(0, color + "33") // 20% opacity
        gradient.addColorStop(1, color + "00") // 0% opacity
        sctx.fillStyle = gradient
        sctx.beginPath()
        sctx.arc(size, size, size, 0, Math.PI * 2)
        sctx.fill()
      }
      return sprite
    }

    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
      sprite: HTMLCanvasElement

      constructor() {
        this.x = Math.random() * canvas.width
        this.y = Math.random() * canvas.height
        this.size = Math.random() * 100 + 50
        this.speedX = Math.random() * 0.2 - 0.1
        this.speedY = Math.random() * 0.2 - 0.1
        this.color = colors[Math.floor(Math.random() * colors.length)]
        this.sprite = createSprite(this.size, this.color)
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        if (this.x > canvas.width + this.size) {
          this.x = 0 - this.size
        } else if (this.x < 0 - this.size) {
          this.x = canvas.width + this.size
        }

        if (this.y > canvas.height + this.size) {
          this.y = 0 - this.size
        } else if (this.y < 0 - this.size) {
          this.y = canvas.height + this.size
        }
      }

      draw() {
        ctx.drawImage(this.sprite, this.x - this.size, this.y - this.size)
      }
    }

    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle())
    }

    let rafId = 0

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (const particle of particles) {
        particle.update()
        particle.draw()
      }

      rafId = requestAnimationFrame(animate)
    }

    // Pause the loop while the tab is hidden to save CPU/battery.
    const handleVisibility = () => {
      if (document.hidden) {
        cancelAnimationFrame(rafId)
      } else {
        rafId = requestAnimationFrame(animate)
      }
    }

    animate()

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    window.addEventListener("resize", handleResize)
    document.addEventListener("visibilitychange", handleVisibility)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener("resize", handleResize)
      document.removeEventListener("visibilitychange", handleVisibility)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full -z-10 opacity-20" />
}
