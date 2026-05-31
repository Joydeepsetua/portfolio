"use client"

import Image from "next/image"
import { useState } from "react"
import { motion } from "framer-motion"
import GitHubCalendar from "react-github-calendar"
import {
  Download,
  Github,
  Linkedin,
  Twitter,
  Loader2,
  Briefcase,
  GraduationCap,
  Trophy,
  MapPin,
} from "lucide-react"
import { TypingEffect } from "@/components/typing-effect"
import { TapScale } from "@/components/phone/tap-scale"
import { Badge } from "@/components/ui/badge"
import { experiences, education, achievements } from "@/lib/data"
import {
  CV_URL,
  MY_BIO,
  MY_GITHUB_URL,
  MY_LINKEDIN_URL,
  MY_TWITTER_URL,
  MY_LOCATION,
} from "@/lib/constants"

const socials = [
  { icon: Github, url: MY_GITHUB_URL, label: "GitHub" },
  { icon: Linkedin, url: MY_LINKEDIN_URL, label: "LinkedIn" },
  { icon: Twitter, url: MY_TWITTER_URL, label: "Twitter" },
]

function SectionTitle({ icon: Icon, children }: { icon: typeof Briefcase; children: React.ReactNode }) {
  return (
    <div className="mb-3 flex items-center gap-2">
      <div className="rounded-full bg-cyan-500/10 p-1.5">
        <Icon className="h-4 w-4 text-cyan-500" />
      </div>
      <h3 className="text-base font-bold text-gradient-primary">{children}</h3>
    </div>
  )
}

export function HomeScreen({ onNavigate }: { onNavigate: (tab: "contact") => void }) {
  const [downloading, setDownloading] = useState(false)

  const handleDownload = () => {
    setDownloading(true)
    try {
      const link = document.createElement("a")
      link.href = CV_URL
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    } finally {
      setTimeout(() => setDownloading(false), 2000)
    }
  }

  return (
    <div className="space-y-8 px-5 pb-8 pt-4">
      {/* Profile header */}
      <div>
        <div className="flex items-center gap-4">
          <motion.div
            className="relative h-20 w-20 shrink-0 rounded-full border-2 border-cyan-500/30 p-1"
            animate={{
              boxShadow: [
                "0 0 0px rgba(57,203,249,0.3)",
                "0 0 24px rgba(57,203,249,0.35)",
                "0 0 0px rgba(57,203,249,0.3)",
              ],
            }}
            transition={{ duration: 4, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          >
            <div className="relative h-full w-full overflow-hidden rounded-full">
              <Image
                src="/joydeepsetua.jpg"
                alt="Joydeep Setua"
                fill
                sizes="80px"
                priority
                className="object-cover"
              />
            </div>
          </motion.div>

          <div className="min-w-0 flex-1">
            <h1 className="text-xl font-bold">
              <TypingEffect text="Joydeep Setua" speed={120} />
            </h1>
            <p className="text-sm font-medium text-gradient-primary">Sr. Software Developer</p>
            <p className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
              <MapPin className="h-3 w-3 shrink-0" /> {MY_LOCATION}
            </p>
          </div>
        </div>

        <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{MY_BIO}</p>

        {/* CTAs */}
        <div className="mt-4 flex w-full gap-2">
          <TapScale className="flex-1" onClick={() => onNavigate("contact")}>
            <div className="cursor-pointer rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 py-2.5 text-center text-sm font-semibold text-white">
              Hire Me
            </div>
          </TapScale>
          <TapScale className="flex-1" onClick={handleDownload}>
            <div className="flex cursor-pointer items-center justify-center gap-1.5 rounded-xl border border-cyan-500/30 py-2.5 text-center text-sm font-semibold text-cyan-400">
              {downloading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Download className="h-4 w-4" />
              )}
              {downloading ? "..." : "CV"}
            </div>
          </TapScale>
        </div>

        {/* Socials */}
        <div className="mt-4 flex justify-center gap-3">
          {socials.map((s) => (
            <TapScale key={s.label}>
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/10 text-cyan-400"
              >
                <s.icon className="h-5 w-5" />
              </a>
            </TapScale>
          ))}
        </div>
      </div>

      {/* GitHub activity */}
      <div>
        <SectionTitle icon={Github}>GitHub Activity</SectionTitle>
        <div className="overflow-x-auto rounded-2xl border border-cyan-500/20 bg-card/60 p-4 no-scrollbar">
          <GitHubCalendar username="joydeepsetua" theme={{ dark: ["#161b22", "#25d2f0"] }} blockSize={9} />
        </div>
      </div>

      {/* Experience */}
      <div>
        <SectionTitle icon={Briefcase}>Experience</SectionTitle>
        <div className="space-y-3">
          {experiences.map((exp) => (
            <div key={exp.company} className="rounded-2xl border border-border/60 bg-muted/40 p-4">
              <div className="flex items-start gap-3">
                <a
                  href={exp.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative h-12 w-12 shrink-0 overflow-hidden rounded-md bg-muted"
                >
                  <Image src={exp.logo} alt={exp.company} fill sizes="48px" className="object-fill" />
                </a>
                <div className="min-w-0 flex-1">
                  <h4 className="text-sm font-bold leading-tight">{exp.title}</h4>
                  <p className="text-xs text-cyan-400">{exp.company}</p>
                  <p className="text-[10px] text-muted-foreground">{exp.period}</p>
                </div>
              </div>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Education */}
      <div>
        <SectionTitle icon={GraduationCap}>Education</SectionTitle>
        <div className="space-y-3">
          {education.map((edu) => (
            <div key={edu.institution} className="rounded-2xl border border-border/60 bg-muted/40 p-4">
              <div className="flex items-start gap-3">
                <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-lg bg-white">
                  <Image src={edu.logo} alt={edu.institution} fill sizes="40px" className="object-contain p-1" />
                </div>
                <div className="min-w-0 flex-1">
                  <h4 className="text-sm font-bold leading-tight">{edu.degree}</h4>
                  <p className="text-xs text-cyan-400">{edu.institution}</p>
                  <p className="text-[10px] text-muted-foreground">{edu.period}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div>
        <SectionTitle icon={Trophy}>Achievements</SectionTitle>
        <div className="space-y-3">
          {achievements.map((a) => (
            <div key={a.title} className="rounded-2xl border border-border/60 bg-muted/40 p-4">
              <div className="flex items-center justify-between">
                <h4 className="text-sm font-bold">{a.title}</h4>
                <Badge variant="secondary" className="bg-cyan-500/10 text-cyan-400">
                  {a.year}
                </Badge>
              </div>
              <p className="text-xs text-cyan-400">{a.organization}</p>
              <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{a.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
