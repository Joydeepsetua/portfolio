"use client"

import Link from "next/link"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { MY_EMAIL, MY_GITHUB_URL, MY_LINKEDIN_URL, MY_TWITTER_URL } from "@/lib/constants"

export function Footer() {
  return (
    <footer className="border-t bg-background/80 backdrop-blur-sm">
      <div className="container px-4 py-8 md:px-6 md:py-12">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex flex-col items-center gap-2 md:items-start">
            <Link
              href="/"
              className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-600"
            >
              Joydeep Setua
            </Link>
            <p className="text-center text-sm text-muted-foreground md:text-left">
              Always learning, always building things that help people.
            </p>
          </div>
          <div className="flex gap-4">
            <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="text-cyan-500 hover:text-cyan-400 hover:bg-cyan-500/10"
              >
                <Link href={MY_GITHUB_URL} target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="text-cyan-500 hover:text-cyan-400 hover:bg-cyan-500/10"
              >
                <Link href={MY_LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="text-cyan-500 hover:text-cyan-400 hover:bg-cyan-500/10"
              >
                <Link href={MY_TWITTER_URL} target="_blank" rel="noopener noreferrer">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ y: -5 }} transition={{ duration: 0.2 }}>
              <Button
                variant="ghost"
                size="icon"
                asChild
                className="text-cyan-500 hover:text-cyan-400 hover:bg-cyan-500/10"
              >
                <Link href={`mailto:${MY_EMAIL}`}>
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
        <div className="mt-8 border-t border-border/40 pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Joydeep Setua. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

