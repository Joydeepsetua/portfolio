"use client"

import { Badge } from "@/components/ui/badge"
import { CardContent } from "@/components/ui/card"
import { Database, Layout, Smartphone, Layers, Terminal, Server } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { AnimatedCard } from "@/components/animated-card"
import { motion } from "framer-motion"

const skillCategories = [
  {
    title: "Mobile Development",
    icon: <Smartphone className="h-8 w-8 text-cyan-500" />,
    skills: ["React Native", "Xcode", "Android", "Expo", "Redux Toolkit"],
  },
  {
    title: "Frontend",
    icon: <Layout className="h-8 w-8 text-cyan-500" />,
    skills: ["Next.js", "React.js", "Medusa.js", "JavaScript", "TypeScript", "Redux"],
  },
  {
    title: "Backend",
    icon: <Server className="h-8 w-8 text-cyan-500" />,
    skills: ["Node.js", "Express", "Restful APIs", "Socket.IO", "Webhooks", "Cron Jobs"],
  },
  {
    title: "Database",
    icon: <Database className="h-8 w-8 text-cyan-500" />,
    skills: ["MySql","MongoDB", "Firebase", "SQLite", "Google Sheet"],
  },
  {
    title: "Services",
    icon: <Layers className="h-8 w-8 text-cyan-500" />,
    skills: ["Push Notifications", "Payment Gateway", "Zoom SDK", "AdMob", "Deep Linking"],
  },
  {
    title: "Deployment & Tools",
    icon: <Terminal className="h-8 w-8 text-cyan-500" />,
    skills: ["App Store", "Play Store", "AWS", "S3", "Git" ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <AnimatedSection className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Badge
              variant="outline"
              className="px-3 py-1 text-sm bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-500 border-cyan-500/20"
            >
              My Skills
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-600">
              Technical Expertise
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              A comprehensive set of skills I've developed over the years
            </p>
          </div>
        </AnimatedSection>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => (
            <AnimatedCard
              key={index}
              className="border-none bg-muted/80 shadow-sm backdrop-blur-sm hover:bg-background/50"
              delay={index * 0.1}
            >
              <CardContent className="p-6">
                <div className="mb-4 flex items-center gap-2">
                  <motion.div
                    animate={{ rotate: [0, 10, 0, -10, 0] }}
                    transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
                  >
                    {category.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div key={skillIndex} whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 hover:from-cyan-500/20 hover:to-blue-500/20 transition-all duration-300"
                      >
                        {skill}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  )
}

