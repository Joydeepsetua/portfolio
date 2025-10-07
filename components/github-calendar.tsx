"use client"

import { AnimatedSection } from "@/components/animated-section"
import { Badge } from "@/components/ui/badge"
import { Calendar, Github } from "lucide-react"
import GitHubCalendar from 'react-github-calendar';

export function GitHubCalendarSection() {
  return (
    <section id="github-calendar" className="py-16 md:py-24 bg-gradient-to-b from-muted/10 via-background to-muted/30 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="absolute top-10 left-10 w-20 h-20 bg-cyan-500/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl"></div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <AnimatedSection className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Badge
              variant="outline"
              className="px-3 py-1 text-sm bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-500 border-cyan-500/20"
            >
              <Github className="w-4 h-4 mr-2" />
              GitHub Activity
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-600">
              My Coding Journey
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Track my coding activity and contributions over time
            </p>
          </div>
        </AnimatedSection>
        
        <div className="mx-auto max-w-5xl py-12">
          <AnimatedSection delay={0.2}>
            <div className="bg-card/60 backdrop-blur-sm rounded-xl border border-cyan-500/20 p-8 shadow-xl relative overflow-hidden">
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 rounded-xl"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-6">
                  <Calendar className="h-5 w-5 text-cyan-500" />
                  <h3 className="text-xl font-semibold">GitHub Contribution Calendar</h3>
                </div>
                
                <div className="relative">
                  <GitHubCalendar 
                    username="joydeepsetua"
                    theme={{
                      dark: ['#161b22', '#25d2f0' ]
                    }}
                    style={{
                      maxWidth: '100%',
                      margin: '0 auto'
                    }}
                  />
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
