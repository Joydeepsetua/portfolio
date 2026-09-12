"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Github, ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { projects, type Project } from "@/lib/data"

export function ProjectsScreen({ onOpenProject }: { onOpenProject: (p: Project) => void }) {
  return (
    <div className="space-y-4 px-5 pb-8 pt-4">
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
        <p className="mt-1 text-center text-xs text-muted-foreground">
          {projects.length} projects · tap a card for details
        </p>
      </div>

      <div className="space-y-4">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.07 }}
            whileTap={{ scale: 0.975 }}
            onClick={() => onOpenProject(project)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault()
                onOpenProject(project)
              }
            }}
            className="group cursor-pointer overflow-hidden rounded-3xl border border-border/60 bg-card shadow-lg shadow-black/5 transition-colors active:border-cyan-500/40"
          >
            {/* Cover */}
            <div className="relative aspect-[16/10] w-full bg-muted/40">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="380px"
                className="object-cover"
                draggable={false}
              />
              {/* Fade the image into the card body */}
              <div className="absolute inset-0 bg-gradient-to-t from-card via-card/25 to-transparent" />

              {/* Index chip */}
              <span className="absolute left-3 top-3 rounded-full bg-black/45 px-2.5 py-1 text-[10px] font-bold tabular-nums text-white backdrop-blur-sm">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>

            {/* Body */}
            <div className="space-y-2.5 p-4 pt-3">
              <h3 className="text-base font-bold leading-tight text-gradient-primary">
                {project.title}
              </h3>
              <p className="line-clamp-2 text-xs leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-1.5">
                {project.tags.slice(0, 3).map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-[10px]"
                  >
                    {tag}
                  </Badge>
                ))}
                {project.tags.length > 3 && (
                  <Badge variant="secondary" className="bg-muted/60 text-[10px] text-muted-foreground">
                    +{project.tags.length - 3}
                  </Badge>
                )}
              </div>

              {/* Quick actions — don't bubble to the card's detail sheet */}
              <div className="flex items-center gap-2 border-t border-border/50 pt-3">
                {project.githubUrl && (
                  <motion.a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    whileTap={{ scale: 0.94 }}
                    className="flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-cyan-500/30 py-2 text-[11px] font-semibold text-cyan-400"
                  >
                    <Github className="h-3.5 w-3.5" /> Code
                  </motion.a>
                )}
                {project.liveUrl && (
                  <motion.a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    whileTap={{ scale: 0.94 }}
                    className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 py-2 text-[11px] font-semibold text-white"
                  >
                    <ExternalLink className="h-3.5 w-3.5" /> Live
                  </motion.a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  )
}
