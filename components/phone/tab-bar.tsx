"use client"

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { TABS, type TabId } from "@/components/phone/tabs"

interface TabBarProps {
  active: TabId
  onChange: (id: TabId) => void
}

/** Native-style bottom tab bar with an animated active pill. */
export function TabBar({ active, onChange }: TabBarProps) {
  return (
    <nav className="relative z-20 flex shrink-0 items-stretch justify-around border-t border-border/60 bg-background/80 px-2 pt-2 pb-3 backdrop-blur-xl">
      {TABS.map((tab) => {
        const isActive = tab.id === active
        const Icon = tab.icon
        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onChange(tab.id)}
            className="flex flex-1 flex-col items-center gap-1 py-1"
            aria-label={tab.label}
            aria-current={isActive ? "page" : undefined}
          >
            {/* Icon area — the active pill stays confined behind the icon only */}
            <div className="relative flex h-8 w-12 items-center justify-center">
              {isActive && (
                <motion.span
                  layoutId="tab-pill"
                  className="absolute inset-0 rounded-2xl bg-cyan-500/15"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
              <motion.div
                animate={{ scale: isActive ? 1.1 : 1 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
                className="relative"
              >
                <Icon
                  className={cn(
                    "h-5 w-5 transition-colors",
                    isActive ? "text-cyan-400" : "text-muted-foreground",
                  )}
                />
              </motion.div>
            </div>
            <span
              className={cn(
                "text-[10px] font-medium transition-colors",
                isActive ? "text-cyan-400" : "text-muted-foreground",
              )}
            >
              {tab.label}
            </span>
          </button>
        )
      })}
    </nav>
  )
}
