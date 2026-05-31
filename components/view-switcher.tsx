"use client"

import { useState } from "react"
import { Smartphone, Monitor } from "lucide-react"
import { PhoneApp } from "@/components/phone/phone-app"
import { DesktopView } from "@/components/desktop-view"
import { cn } from "@/lib/utils"

type View = "mobile" | "desktop"

export function ViewSwitcher() {
  const [view, setView] = useState<View>("mobile")

  return (
    <>
      {view === "mobile" ? <PhoneApp /> : <DesktopView />}

      {/* View toggle — shown only on tablet/desktop (hidden on small phones) */}
      <div className="fixed right-4 top-4 z-[70] hidden items-center gap-1 rounded-full border border-border/60 bg-background/80 p-1 shadow-lg backdrop-blur md:flex">
        <button
          type="button"
          onClick={() => setView("mobile")}
          aria-label="Mobile view"
          aria-pressed={view === "mobile"}
          className={cn(
            "flex h-8 w-8 items-center justify-center rounded-full transition-colors",
            view === "mobile"
              ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          <Smartphone className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => setView("desktop")}
          aria-label="Desktop view"
          aria-pressed={view === "desktop"}
          className={cn(
            "flex h-8 w-8 items-center justify-center rounded-full transition-colors",
            view === "desktop"
              ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          <Monitor className="h-4 w-4" />
        </button>
      </div>
    </>
  )
}
