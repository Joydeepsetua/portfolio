import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { GitHubCalendarSection } from "@/components/github-calendar"
import { About } from "@/components/about"
import { Skills } from "@/components/skills"
import { Projects } from "@/components/projects"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Toaster } from "@/components/ui/toaster"

/** The original full-width website layout, shown when "Desktop" view is selected. */
export function DesktopView() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <Hero />
      <GitHubCalendarSection />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <Toaster />
    </div>
  )
}
