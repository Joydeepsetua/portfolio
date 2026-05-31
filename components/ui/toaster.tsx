"use client"

import { useToast } from "@/hooks/use-toast"
import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
} from "@/components/ui/toast"

export function Toaster({ viewportClassName }: { viewportClassName?: string }) {
  const { toasts } = useToast()

  return (
    <ToastProvider duration={3500}>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props} className="p-4 pr-9">
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
        )
      })}
      {/* viewportClassName lets the phone view position toasts inside its frame;
          omitting it falls back to the default fixed (desktop) position. */}
      <ToastViewport className={viewportClassName} />
    </ToastProvider>
  )
}
