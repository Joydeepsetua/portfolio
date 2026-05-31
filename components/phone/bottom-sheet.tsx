"use client"

import type React from "react"
import { AnimatePresence, motion, type PanInfo } from "framer-motion"

interface BottomSheetProps {
  open: boolean
  onClose: () => void
  children: React.ReactNode
}

/**
 * iOS/Android style bottom sheet that slides up from the bottom of the phone,
 * dims the screen behind it, and can be flicked down to dismiss.
 * Rendered absolutely so it stays within the phone frame.
 */
export function BottomSheet({ open, onClose, children }: BottomSheetProps) {
  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.y > 120 || info.velocity.y > 500) {
      onClose()
    }
  }

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="absolute inset-0 z-30 bg-black/50 backdrop-blur-[1px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />
          <motion.div
            className="absolute inset-x-0 bottom-0 z-40 max-h-[85%] overflow-hidden rounded-t-3xl border-t border-cyan-500/20 bg-card shadow-2xl"
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 32 }}
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={{ top: 0, bottom: 0.6 }}
            onDragEnd={handleDragEnd}
          >
            <div className="flex justify-center pt-3 pb-1">
              <div className="h-1.5 w-10 rounded-full bg-muted-foreground/40" />
            </div>
            <div className="max-h-[calc(85vh-2rem)] overflow-y-auto no-scrollbar px-5 pb-6">
              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
