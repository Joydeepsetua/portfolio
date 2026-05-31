"use client"

import { motion } from "framer-motion"
import { Database, Layout, Smartphone, Layers, Terminal, Server, type LucideIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const skillCategories: { title: string; icon: LucideIcon; skills: string[] }[] = [
  { title: "Mobile Development", icon: Smartphone, skills: ["React Native", "Xcode", "Android", "Expo", "Redux Toolkit"] },
  { title: "Frontend", icon: Layout, skills: ["Next.js", "React.js", "Medusa.js", "JavaScript", "TypeScript", "Redux"] },
  { title: "Backend", icon: Server, skills: ["Node.js", "Express", "Restful APIs", "Socket.IO", "Webhooks", "Cron Jobs"] },
  { title: "Database", icon: Database, skills: ["MySql", "MongoDB", "Firebase", "SQLite", "Google Sheet"] },
  { title: "Services", icon: Layers, skills: ["Push Notifications", "Payment Gateway", "Zoom SDK", "AdMob", "Deep Linking"] },
  { title: "Deployment & Tools", icon: Terminal, skills: ["App Store", "Play Store", "AWS", "S3", "Git"] },
]

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
