"use client"

import type React from "react"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, MapPin, Phone } from "lucide-react"
import { AnimatedSection } from "@/components/animated-section"
import { AnimatedCard } from "@/components/animated-card"
import { motion } from "framer-motion"
import { MY_EMAIL, MY_LOCATION, MY_PHONE } from "@/lib/constants"

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend or email service
    console.log("Form submitted:", formData)
    // Reset form after submission
    setFormData({ name: "", email: "", subject: "", message: "" })
    alert("Thank you for your message! I'll get back to you soon.")
  }

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container px-4 md:px-6">
        <AnimatedSection className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Badge
              variant="outline"
              className="px-3 py-1 text-sm bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-500 border-cyan-500/20"
            >
              Get In Touch
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-600">
              Contact Me
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              Have a project in mind or want to discuss opportunities? Reach out to me!
            </p>
          </div>
        </AnimatedSection>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 lg:grid-cols-2">
          <div className="space-y-6">
            <AnimatedCard className="border-none bg-muted/80 shadow-sm backdrop-blur-sm" delay={0.1}>
              <CardContent className="p-6 flex items-center gap-4">
                <motion.div
                  className="rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 p-3"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Mail className="h-6 w-6 text-cyan-500" />
                </motion.div>
                <div>
                  <h3 className="font-semibold">Email</h3>
                  <p className="text-muted-foreground">{MY_EMAIL}</p>
                </div>
              </CardContent>
            </AnimatedCard>
            <AnimatedCard className="border-none bg-muted/80 shadow-sm backdrop-blur-sm" delay={0.2}>
              <CardContent className="p-6 flex items-center gap-4">
                <motion.div
                  className="rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 p-3"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Phone className="h-6 w-6 text-cyan-500" />
                </motion.div>
                <div>
                  <h3 className="font-semibold">Phone</h3>
                  <p className="text-muted-foreground">{MY_PHONE}</p>
                </div>
              </CardContent>
            </AnimatedCard>
            <AnimatedCard className="border-none bg-muted/80 shadow-sm backdrop-blur-sm" delay={0.3}>
              <CardContent className="p-6 flex items-center gap-4">
                <motion.div
                  className="rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 p-3"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <MapPin className="h-6 w-6 text-cyan-500" />
                </motion.div>
                <div>
                  <h3 className="font-semibold">Location</h3>
                  <p className="text-muted-foreground">{MY_LOCATION}</p>
                </div>
              </CardContent>
            </AnimatedCard>
          </div>
          <AnimatedCard className="border-none bg-background/80 shadow-md backdrop-blur-sm" delay={0.4}>
            <CardHeader>
              <CardTitle className="text-gradient-primary">Send a Message</CardTitle>
              <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Input
                      id="name"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="border-cyan-500/20 focus:border-cyan-500/40 bg-background/50 backdrop-blur-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="border-cyan-500/20 focus:border-cyan-500/40 bg-background/50 backdrop-blur-sm"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="Subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="border-cyan-500/20 focus:border-cyan-500/40 bg-background/50 backdrop-blur-sm"
                  />
                </div>
                <div className="space-y-2">
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="min-h-[150px] border-cyan-500/20 focus:border-cyan-500/40 bg-background/50 backdrop-blur-sm"
                  />
                </div>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
                  >
                    Send Message
                  </Button>
                </motion.div>
              </form>
            </CardContent>
          </AnimatedCard>
        </div>
      </div>
    </section>
  )
}

