"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Download, Github, Linkedin, Twitter, Loader2 } from "lucide-react"
import { TypingEffect } from "@/components/typing-effect"
import { AnimatedSection } from "@/components/animated-section"
import { motion } from "framer-motion"
import { BubbleEffect } from "@/components/bubble-effect"
import { CV_URL, MY_BIO, MY_GITHUB_URL, MY_LINKEDIN_URL, MY_TWITTER_URL } from "@/lib/constants"
import { useState } from "react"
import "@/styles/globals.css"

export function Hero() {
  const [loading, setLoading] = useState(false);

  const handleDownload = () => {
    setLoading(true);
    try {
      const link = document.createElement("a");
      link.href = CV_URL;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {

    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  };
  return (
    <section id="home" className="relative py-20 md:py-32 overflow-hidden h-lvh">
      <BubbleEffect />
      <div className="container px-4 md:px-6 glow">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <AnimatedSection className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-600">
                Hey, I&apos;m <TypingEffect text="Joydeep Setua" speed={150} />
              </h1>
              <p className="text-xl text-gradient-primary">Software Developer</p>
              <p className="max-w-[600px] text-muted-foreground md:text-lg">{MY_BIO}</p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row py-5">
              <Button
                asChild
                className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
              >
                <Link href="#contact">Hire Me</Link>
              </Button>
              <Button
                variant="outline"
                asChild
                disabled={loading}
                className="border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300"
                onClick={handleDownload}
              >
                <Link href={"#"} download rel="noopener noreferrer">
                  {loading ? (
                    <Loader2 className="animate-spin mr-2 h-4 w-4" />
                  ) : (
                    <Download className="mr-2 h-4 w-4" />
                  )}
                  {loading ? "Downloading..." : "Download CV"}
                </Link>
              </Button>
            </div>
            <div className="flex gap-4">
              <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                <Link href={MY_GITHUB_URL} target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-cyan-500 hover:text-cyan-400 hover:bg-cyan-500/10"
                  >
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </Link>
              </motion.div>
              <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                <Link href={MY_LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-cyan-500 hover:text-cyan-400 hover:bg-cyan-500/10"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
              </motion.div>
              <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
                <Link href={MY_TWITTER_URL} target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="text-cyan-500 hover:text-cyan-400 hover:bg-cyan-500/10"
                  >
                    <Twitter className="h-5 w-5" />
                    <span className="sr-only">Twitter</span>
                  </Button>
                </Link>
              </motion.div>
            </div>
          </AnimatedSection>
          <AnimatedSection className="flex items-center justify-center" delay={0.4}>
            <motion.div
              className="relative aspect-square  rounded-full border-4 border-cyan-500/20 w-[280px] h-[280px] md:w-[400px] md:h-[400px]"
              animate={{
                boxShadow: [
                  "0 0 20px rgba(57, 203, 249, 0.3)",
                  "0 0 60px rgba(57, 203, 249, 0.3)",
                  "0 0 20px rgba(57, 203, 249, 0.3)",
                ],
              }}
              transition={{
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                ease: "easeInOut",
              }}
            >
              <img
                alt="Joydeep Setua"
                className="object-cover"
                src="/joydeepsetua.jpg"
                style={{ borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70% ', marginLeft: 10, marginTop: 8 }}
              />
            </motion.div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

