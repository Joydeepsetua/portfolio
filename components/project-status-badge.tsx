import { cn } from "@/lib/utils"
import { PROJECT_STATUS_LABEL, type ProjectStatus } from "@/lib/data"

const DOT_COLOR: Record<ProjectStatus, string> = {
  "in-progress": "bg-blue-400",
  "in-review": "bg-amber-400",
  "in-testing": "bg-purple-400",
  live: "bg-emerald-400",
  "coming-soon": "bg-cyan-400",
}

/** Non-clickable pill shown in place of the live button when a project has no live link yet. */
export function ProjectStatusBadge({ status, className }: { status: ProjectStatus; className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex cursor-default items-center justify-center gap-1.5 rounded-xl border border-dashed border-cyan-500/30 bg-cyan-500/5 font-semibold text-muted-foreground",
        className,
      )}
    >
      <span className="relative flex h-2 w-2">
        <span className={cn("absolute inline-flex h-full w-full animate-ping rounded-full opacity-60", DOT_COLOR[status])} />
        <span className={cn("relative inline-flex h-2 w-2 rounded-full", DOT_COLOR[status])} />
      </span>
      {PROJECT_STATUS_LABEL[status]}
    </span>
  )
}
