"use client"

import { useEffect, useState } from "react"
import { Smartphone, Monitor } from "lucide-react"
import { PhoneApp } from "@/components/phone/phone-app"
import { DesktopView } from "@/components/desktop-view"
import { cn } from "@/lib/utils"

type View = "mobile" | "desktop"

export function ViewSwitcher() {
  // null until mounted: the server can't know the screen size, so it renders
  // both views and CSS shows the right one (no flash, both crawlable). After
  // mount we pick one — desktop on md+ screens, mobile otherwise.
  const [view, setView] = useState<View | null>(null)

  useEffect(() => {
    setView(window.matchMedia("(min-width: 768px)").matches ? "desktop" : "mobile")
  }, [])

  return (
    <>
      {view === null ? (
        <>
          <div className="md:hidden">
            <PhoneApp />
          </div>
          <div className="hidden md:block">
            <DesktopView />
          </div>
        </>
      ) : view === "mobile" ? (
        <PhoneApp />
      ) : (
        <DesktopView />
      )}

      {/* View toggle — shown only on tablet/desktop (hidden on small phones) */}
      <div className="fixed right-4 top-4 z-[70] hidden items-center gap-1 rounded-full border border-border/60 bg-background/80 p-1 shadow-lg backdrop-blur md:flex">
        <button
          type="button"
          onClick={() => setView("mobile")}
          aria-label="Mobile view"
          aria-pressed={view === "mobile"}
          className={cn(
            "flex h-8 items-center gap-1.5 rounded-full px-3 text-xs font-medium transition-colors",
            view === "mobile"
              ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          <Smartphone className="h-4 w-4" />
          Mobile
        </button>
        <button
          type="button"
          onClick={() => setView("desktop")}
          aria-label="Desktop view"
          aria-pressed={view === "desktop"}
          className={cn(
            "flex h-8 items-center gap-1.5 rounded-full px-3 text-xs font-medium transition-colors",
            view === "desktop"
              ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          <Monitor className="h-4 w-4" />
          Desktop
        </button>
      </div>
    </>
  )
}
