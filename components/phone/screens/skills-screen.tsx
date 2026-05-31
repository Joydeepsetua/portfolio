"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { skillCategories } from "@/lib/data"

export function SkillsScreen() {
  return (
    <div className="space-y-4 px-5 pb-8 pt-4">
      <div>
        <h2 className="bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-600 bg-clip-text text-xl font-bold text-transparent">
            Skills
        </h2>
        <div className="mt-1 flex justify-center">
          <Badge
            variant="outline"
            className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-500 border-cyan-500/20"
          >
            Technical Expertise
          </Badge>
        </div>
        <p className="mt-1 text-center text-xs text-muted-foreground">A set of skills I&apos;ve built over the years</p>
      </div>

      <div className="space-y-3">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.06 }}
            className="rounded-2xl border border-border/60 bg-muted/40 p-4"
          >
            <div className="mb-3 flex items-center gap-2">
              <div className="rounded-full bg-cyan-500/10 p-1.5">
                <category.icon className="h-5 w-5 text-cyan-500" />
              </div>
              <h3 className="text-sm font-bold">{category.title}</h3>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {category.skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-[11px]"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
