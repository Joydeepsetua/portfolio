"use client"

import { useEffect, useState } from "react"
import { Signal, Wifi, BatteryFull } from "lucide-react"

/**
 * Faux mobile OS status bar — live clock plus signal / wifi / battery glyphs.
 * The clock is rendered only after mount to avoid an SSR hydration mismatch.
 */
export function StatusBar() {
  const [time, setTime] = useState<string>("")

  useEffect(() => {
    const update = () => {
      const now = new Date()
      setTime(
        now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit", hour12: false }),
      )
    }
    update()
    const id = setInterval(update, 30_000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="flex items-center justify-between px-7 pt-2 pb-1 text-xs font-semibold text-foreground select-none">
      <span className="tabular-nums tracking-wide">{time || "9:41"}</span>
      <div className="flex items-center gap-1.5">
        <Signal className="h-3.5 w-3.5" />
        <Wifi className="h-3.5 w-3.5" />
        <BatteryFull className="h-4 w-4 text-cyan-400" />
      </div>
    </div>
  )
}
