"use client"

/** Generic shimmering placeholder for the Projects / Skills / Contact screens. */
export function ScreenSkeleton() {
  return (
    <div className="space-y-5 p-5">
      <div className="mx-auto h-5 w-40 skeleton-shimmer rounded-md" />
      <div className="mx-auto h-3 w-52 skeleton-shimmer rounded-md" />
      <div className="skeleton-shimmer h-40 w-full rounded-2xl" />
      <div className="space-y-3">
        <div className="skeleton-shimmer h-20 w-full rounded-2xl" />
        <div className="skeleton-shimmer h-20 w-full rounded-2xl" />
        <div className="skeleton-shimmer h-20 w-full rounded-2xl" />
      </div>
    </div>
  )
}

/** Home placeholder — mirrors the real Home layout (profile, CTAs, socials, sections). */
export function HomeSkeleton() {
  return (
    <div className="space-y-8 px-5 pb-8 pt-4">
      {/* Profile header — pic left, name/designation right */}
      <div>
        <div className="flex items-center gap-4">
          <div className="skeleton-shimmer h-20 w-20 shrink-0 rounded-full" />
          <div className="flex-1 space-y-2">
            <div className="skeleton-shimmer h-5 w-40 rounded-md" />
            <div className="skeleton-shimmer h-3 w-28 rounded-md" />
            <div className="skeleton-shimmer h-3 w-32 rounded-md" />
          </div>
        </div>
        <div className="mt-3 space-y-2">
          <div className="skeleton-shimmer h-3 w-full rounded-md" />
          <div className="skeleton-shimmer h-3 w-11/12 rounded-md" />
          <div className="skeleton-shimmer h-3 w-3/4 rounded-md" />
        </div>
        {/* CTAs */}
        <div className="mt-4 flex w-full gap-2">
          <div className="skeleton-shimmer h-10 flex-1 rounded-xl" />
          <div className="skeleton-shimmer h-10 flex-1 rounded-xl" />
        </div>
        {/* Socials */}
        <div className="mt-4 flex gap-3">
          <div className="skeleton-shimmer h-10 w-10 rounded-full" />
          <div className="skeleton-shimmer h-10 w-10 rounded-full" />
          <div className="skeleton-shimmer h-10 w-10 rounded-full" />
        </div>
      </div>

      {/* GitHub activity */}
      <div className="space-y-3">
        <div className="skeleton-shimmer h-4 w-32 rounded-md" />
        <div className="skeleton-shimmer h-28 w-full rounded-2xl" />
      </div>

      {/* Experience cards */}
      <div className="space-y-3">
        <div className="skeleton-shimmer h-4 w-28 rounded-md" />
        {[0, 1].map((i) => (
          <div key={i} className="space-y-3 rounded-2xl border border-border/60 bg-muted/40 p-4">
            <div className="flex items-start gap-3">
              <div className="skeleton-shimmer h-10 w-10 rounded-lg" />
              <div className="flex-1 space-y-2">
                <div className="skeleton-shimmer h-3.5 w-2/3 rounded-md" />
                <div className="skeleton-shimmer h-3 w-1/2 rounded-md" />
              </div>
            </div>
            <div className="skeleton-shimmer h-3 w-full rounded-md" />
            <div className="skeleton-shimmer h-3 w-5/6 rounded-md" />
          </div>
        ))}
      </div>
    </div>
  )
}
