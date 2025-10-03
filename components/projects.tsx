"use client"

import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Github } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { AnimatedCard } from "@/components/animated-card"
import { motion } from "framer-motion"

const projects = [
  {
    title: "E-Commerce Mobile App",
    description: "A full-featured e-commerce mobile application built with React Native and Firebase.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["React Native", "Firebase", "Redux", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Social Networking App",
    description: "A social networking platform with real-time chat, posts, and user profiles.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["React Native", "Socket.io", "Node.js", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Fitness Tracking App",
    description: "A fitness tracking application with workout plans, progress tracking, and nutrition guidance.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["React Native", "TypeScript", "GraphQL", "Realm"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Weather App",
    description: "A weather application with location-based forecasts, alerts, and interactive maps.",
    image: "/placeholder.svg?height=300&width=500",
    tags: ["React Native", "OpenWeatherAPI", "Geolocation", "Maps"],
    liveUrl: "#",
    githubUrl: "#",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-16 md:py-24 bg-[#171c22]">
      <div className="container px-4 md:px-6">
        <AnimatedSection className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Badge
              variant="outline"
              className="px-3 py-1 text-sm bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-500 border-cyan-500/20"
            >
              My Work
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-600">
              Featured Projects
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              A selection of my recent work and personal projects
            </p>
          </div>
        </AnimatedSection>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2">
          {projects.map((project, index) => (
            <AnimatedCard
              key={index}
              className="overflow-hidden border-none bg-background/80 shadow-md backdrop-blur-sm"
              delay={index * 0.1}
            >
              <motion.div
                className="aspect-video overflow-hidden"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-300"
                />
              </motion.div>
              <CardHeader>
                <CardTitle className="text-gradient-primary">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge
                      key={tagIndex}
                      variant="secondary"
                      className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10"
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button
                  variant="outline"
                  size="sm"
                  asChild
                  className="border-cyan-500/20 hover:border-cyan-500/40 hover:bg-cyan-500/5 transition-all duration-300"
                >
                  <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4 text-cyan-500" />
                    Code
                  </Link>
                </Button>
                <Button
                  size="sm"
                  asChild
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
                >
                  <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Link>
                </Button>
              </CardFooter>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  )
}

