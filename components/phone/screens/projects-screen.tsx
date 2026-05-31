"use client"

import Image from "next/image"
import { useState } from "react"
import { AnimatePresence, motion, type PanInfo } from "framer-motion"
import { ChevronLeft, ChevronRight, Hand } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { projects, type Project } from "@/lib/data"

const SWIPE_THRESHOLD = 80

const cardVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 220 : -220, opacity: 0, scale: 0.9 }),
  center: { x: 0, opacity: 1, scale: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -220 : 220, opacity: 0, scale: 0.9 }),
}

export function ProjectsScreen({ onOpenProject }: { onOpenProject: (p: Project) => void }) {
  const [[index, direction], setState] = useState<[number, number]>([0, 0])

  const paginate = (dir: number) => {
    setState(([prev]) => {
      const next = (prev + dir + projects.length) % projects.length
      return [next, dir]
    })
  }

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -SWIPE_THRESHOLD || info.velocity.x < -400) paginate(1)
    else if (info.offset.x > SWIPE_THRESHOLD || info.velocity.x > 400) paginate(-1)
  }

  const project = projects[index]

  return (
    <div className="flex h-full flex-col px-5 pb-4 pt-4">
      <div>
        <h2 className="bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-600 bg-clip-text text-xl font-bold text-transparent">
          Projects
        </h2>
        <div className="mt-1 flex justify-center">
          <Badge
            variant="outline"
            className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-500 border-cyan-500/20"
          >
            My Work
          </Badge>
        </div>
        <p className="mt-1 flex items-center justify-center gap-1.5 text-xs text-muted-foreground">
          <Hand className="h-3 w-3" /> Swipe to browse · tap for details
        </p>
      </div>

      {/* Swipe deck */}
      <div className="relative mt-5 min-h-[360px] flex-1">
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={index}
            custom={direction}
            variants={cardVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={0.6}
            onDragEnd={handleDragEnd}
            onClick={() => onOpenProject(project)}
            className="absolute inset-x-0 top-0 cursor-grab overflow-hidden rounded-3xl border border-border/60 bg-card shadow-xl active:cursor-grabbing"
          >
            <div className="relative aspect-video w-full bg-muted/40">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="380px"
                className="object-cover"
                draggable={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent" />
            </div>
            <div className="space-y-2 p-4">
              <h3 className="text-lg font-bold text-gradient-primary">{project.title}</h3>
              <p className="line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tags.slice(0, 4).map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-[10px]"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
              <p className="pt-1 text-center text-[10px] font-medium text-cyan-400">Tap for details ↑</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls */}
      <div className="mt-4 flex items-center justify-between">
        <button
          type="button"
          onClick={() => paginate(-1)}
          aria-label="Previous project"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-400 active:scale-90"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <div className="flex gap-1.5">
          {projects.map((p, i) => (
            <span
              key={p.title}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-5 bg-cyan-400" : "w-1.5 bg-muted-foreground/40"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => paginate(1)}
          aria-label="Next project"
          className="flex h-9 w-9 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-400 active:scale-90"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}
