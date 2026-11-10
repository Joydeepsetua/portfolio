"use client"

import { useState, useEffect } from "react"

interface TypingEffectProps {
  text: string
  speed?: number
  className?: string
}

export function TypingEffect({ text, speed = 100, className = "" }: TypingEffectProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (count >= text.length) return
    const timeout = setTimeout(() => setCount((c) => c + 1), speed)
    return () => clearTimeout(timeout)
  }, [count, speed, text.length])

  const isComplete = count >= text.length

  // The full text is always in the DOM (untyped part is invisible) so crawlers
  // read the complete heading and the layout doesn't shift while typing.
  return (
    <span className={className}>
      {text.slice(0, count)}
      {!isComplete && (
        <span
          aria-hidden="true"
          className="-mr-[3px] inline-block h-[0.9em] w-[3px] animate-pulse bg-cyan-400 align-middle"
        />
      )}
      <span className="invisible">{text.slice(count)}</span>
    </span>
  )
}
