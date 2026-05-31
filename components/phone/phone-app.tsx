"use client"

import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Loader2, Github, ExternalLink } from "lucide-react"

import { StatusBar } from "@/components/phone/status-bar"
import { TabBar } from "@/components/phone/tab-bar"
import { SplashScreen } from "@/components/phone/splash-screen"
import { ScreenSkeleton, HomeSkeleton } from "@/components/phone/screen-skeleton"
import { BottomSheet } from "@/components/phone/bottom-sheet"
import { Toaster } from "@/components/ui/toaster"
import { type TabId } from "@/components/phone/tabs"
import { HomeScreen } from "@/components/phone/screens/home-screen"
import { ProjectsScreen } from "@/components/phone/screens/projects-screen"
import { SkillsScreen } from "@/components/phone/screens/skills-screen"
import { ContactScreen } from "@/components/phone/screens/contact-screen"
import { Badge } from "@/components/ui/badge"
import { type Project } from "@/lib/data"

const PULL_TRIGGER = 55

export function PhoneApp() {
  const [booting, setBooting] = useState(true)
  const [activeTab, setActiveTab] = useState<TabId>("home")
  // Starts true so the skeleton (not the real screen) sits behind the splash —
  // avoids a one-frame flash of real content as the splash fades out.
  const [loading, setLoading] = useState(true)
  const [refreshKey, setRefreshKey] = useState(0)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)

  // Pull-to-refresh
  const scrollRef = useRef<HTMLDivElement>(null)
  const startY = useRef(0)
  const pulling = useRef(false)
  const [pull, setPull] = useState(0)
  const [isPulling, setIsPulling] = useState(false)
  const [refreshing, setRefreshing] = useState(false)

  // Boot splash on every load
  useEffect(() => {
    const id = setTimeout(() => setBooting(false), 1800)
    return () => clearTimeout(id)
  }, [])

  // Skeleton only on the first load (right after the splash) — not on tab switches
  useEffect(() => {
    if (booting) return
    setLoading(true)
    const id = setTimeout(() => setLoading(false), 500)
    return () => clearTimeout(id)
  }, [booting])

  // Reset scroll position when switching tabs (no skeleton)
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: 0 })
  }, [activeTab])

  const triggerRefresh = () => {
    setRefreshing(true)
    setLoading(true)
    setRefreshKey((k) => k + 1)
    scrollRef.current?.scrollTo({ top: 0 })
    setTimeout(() => {
      setRefreshing(false)
      setLoading(false)
    }, 900)
  }

  const onPointerDown = (e: React.PointerEvent) => {
    if (refreshing || (scrollRef.current?.scrollTop ?? 0) > 0) return
    startY.current = e.clientY
    pulling.current = true
  }

  const onPointerMove = (e: React.PointerEvent) => {
    if (!pulling.current) return
    const dy = e.clientY - startY.current
    if (dy <= 0) {
      pulling.current = false
      setIsPulling(false)
      setPull(0)
      return
    }
    setIsPulling(true)
    setPull(Math.min(dy * 0.4, 90))
  }

  const endPull = () => {
    if (!pulling.current) return
    pulling.current = false
    setIsPulling(false)
    if (pull > PULL_TRIGGER) triggerRefresh()
    setPull(0)
  }

  const renderScreen = () => {
    switch (activeTab) {
      case "home":
        return <HomeScreen onNavigate={setActiveTab} />
      case "projects":
        return <ProjectsScreen onOpenProject={setSelectedProject} />
      case "skills":
        return <SkillsScreen />
      case "contact":
        return <ContactScreen />
    }
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center overflow-hidden p-0 sm:p-6">
      <div className="relative flex h-[100dvh] w-full max-w-[430px] flex-col overflow-hidden bg-background sm:h-[860px] sm:max-h-[calc(100dvh-3rem)] sm:w-[400px] sm:rounded-[2.75rem] sm:border-[12px] sm:border-zinc-900 sm:shadow-2xl sm:shadow-cyan-500/10">
        {/* Dynamic Island with camera lens — iPhone 14/15 style (desktop bezel only) */}
        <div className="absolute left-1/2 top-2 z-30 hidden h-7 w-24 -translate-x-1/2 items-center justify-end rounded-full bg-black shadow-inner sm:flex">
          {/* Camera lens */}
          <span className="mr-2.5 flex h-3.5 w-3.5 items-center justify-center rounded-full bg-zinc-800 ring-1 ring-zinc-700">
            <span className="h-2 w-2 rounded-full bg-gradient-to-br from-cyan-600/80 to-blue-900">
              <span className="block h-0.5 w-0.5 translate-x-[1px] translate-y-[1px] rounded-full bg-cyan-200/70" />
            </span>
          </span>
        </div>

        <StatusBar />

        {/* Scrollable screen area with pull-to-refresh */}
        <div
          ref={scrollRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endPull}
          onPointerLeave={endPull}
          className="relative flex-1 overflow-y-auto overscroll-contain no-scrollbar"
        >
          {/* Pull indicator */}
          <div
            className="pointer-events-none absolute left-1/2 top-2 z-10 -translate-x-1/2"
            style={{ opacity: Math.min(pull / PULL_TRIGGER, 1) }}
          >
            <motion.div animate={{ rotate: refreshing ? 360 : pull * 3 }} transition={{ ease: "linear", duration: refreshing ? 0.8 : 0, repeat: refreshing ? Number.POSITIVE_INFINITY : 0 }}>
              <Loader2 className="h-5 w-5 text-cyan-400" />
            </motion.div>
          </div>

          <div
            className="flex min-h-full flex-col"
            style={{
              transform: `translateY(${pull}px)`,
              transition: isPulling ? "none" : "transform 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          >
            <AnimatePresence mode="wait">
              {loading ? (
                <motion.div key="skeleton" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                  {activeTab === "home" ? <HomeSkeleton /> : <ScreenSkeleton />}
                </motion.div>
              ) : (
                <motion.div
                  key={`${activeTab}-${refreshKey}`}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="flex flex-1 flex-col"
                >
                  {renderScreen()}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        <TabBar active={activeTab} onChange={setActiveTab} />

        {/* Project detail bottom sheet */}
        <BottomSheet open={!!selectedProject} onClose={() => setSelectedProject(null)}>
          {selectedProject && (
            <div className="space-y-3">
              <div className="relative aspect-video w-full overflow-hidden rounded-2xl">
                <Image src={selectedProject.image} alt={selectedProject.title} fill sizes="380px" className="object-cover" />
              </div>
              <h3 className="text-lg font-bold text-gradient-primary">{selectedProject.title}</h3>
              <div className="flex flex-wrap gap-1.5">
                {selectedProject.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-[11px]">
                    {tag}
                  </Badge>
                ))}
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">{selectedProject.description}</p>
              <div className="flex gap-2 pt-1">
                <motion.a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileTap={{ scale: 0.96 }}
                  className="flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-cyan-500/30 py-2.5 text-sm font-semibold text-cyan-400"
                >
                  <Github className="h-4 w-4" /> Code
                </motion.a>
                <motion.a
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileTap={{ scale: 0.96 }}
                  className="flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 py-2.5 text-sm font-semibold text-white"
                >
                  <ExternalLink className="h-4 w-4" /> Live Demo
                </motion.a>
              </div>
            </div>
          )}
        </BottomSheet>

        {/* Toasts — rendered inside the phone so they appear within the frame */}
        <Toaster viewportClassName="absolute left-1/2 right-auto top-14 z-[100] flex w-[88%] max-w-none -translate-x-1/2 flex-col gap-2" />

        {/* Boot splash */}
        <AnimatePresence>{booting && <SplashScreen />}</AnimatePresence>
      </div>
    </div>
  )
}
