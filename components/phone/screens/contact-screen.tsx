"use client"

import type React from "react"
import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, MapPin, Phone, Loader2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MY_EMAIL, MY_LOCATION, MY_PHONE } from "@/lib/constants"
import { useToast } from "@/hooks/use-toast"

const contactInfo = [
  { icon: Mail, label: "Email", value: MY_EMAIL },
  { icon: Phone, label: "Phone", value: MY_PHONE },
  { icon: MapPin, label: "Location", value: MY_LOCATION },
]

export function ContactScreen() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" })
  const [errors, setErrors] = useState<{ [k: string]: string }>({})
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: "" }))
  }

  const validate = () => {
    const next: { [k: string]: string } = {}
    if (!formData.name.trim()) next.name = "Name is required"
    if (!formData.email.trim()) next.email = "Email is required"
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) next.email = "Enter a valid email"
    if (!formData.subject.trim()) next.subject = "Subject is required"
    if (!formData.message.trim()) next.message = "Message is required"
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validate()) return
    setIsLoading(true)
    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })
      if (response.ok) {
        setFormData({ name: "", email: "", subject: "", message: "" })
        toast({
          title: "Message Sent!",
          description: "Thank you for your message. I'll get back to you soon.",
          variant: "success",
        })
      } else {
        toast({ title: "Error", description: "Failed to send message. Please try again later.", variant: "destructive" })
      }
    } catch (error) {
      console.error("Error sending email:", error)
      toast({ title: "Error", description: "Something went wrong. Please try again later.", variant: "destructive" })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-4 px-5 pb-8 pt-4">
      <div>
        <h2 className="bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-600 bg-clip-text text-xl font-bold text-transparent">
          Contact
        </h2>
        <div className="mt-1 flex justify-center">
          <Badge
            variant="outline"
            className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-500 border-cyan-500/20"
          >
            Get In Touch
          </Badge>
        </div>
        <p className="mt-1 text-center text-xs text-muted-foreground">Have a project in mind? Reach out!</p>
      </div>

      {/* Contact info */}
      <div className="space-y-2.5">
        {contactInfo.map((info) => (
          <div key={info.label} className="flex items-center gap-3 rounded-2xl border border-border/60 bg-muted/40 p-3">
            <div className="rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 p-2.5">
              <info.icon className="h-4 w-4 text-cyan-500" />
            </div>
            <div className="min-w-0">
              <p className="text-xs font-semibold">{info.label}</p>
              <p className="truncate text-xs text-muted-foreground">{info.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} noValidate className="space-y-3 rounded-2xl border border-border/60 bg-card/60 p-4">
        <div>
          <label htmlFor="name" className="mb-1 block text-xs font-medium">
            Name <span className="text-red-500">*</span>
          </label>
          <Input
            id="name"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            className={`bg-background/50 ${errors.name ? "border-red-500/60 focus-visible:ring-red-500/30" : "border-cyan-500/20"}`}
          />
          {errors.name && <p className="mt-1 text-xs text-red-500">* {errors.name}</p>}
        </div>

        <div>
          <label htmlFor="email" className="mb-1 block text-xs font-medium">
            Email <span className="text-red-500">*</span>
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            className={`bg-background/50 ${errors.email ? "border-red-500/60 focus-visible:ring-red-500/30" : "border-cyan-500/20"}`}
          />
          {errors.email && <p className="mt-1 text-xs text-red-500">* {errors.email}</p>}
        </div>

        <div>
          <label htmlFor="subject" className="mb-1 block text-xs font-medium">
            Subject <span className="text-red-500">*</span>
          </label>
          <Input
            id="subject"
            name="subject"
            placeholder="Subject"
            value={formData.subject}
            onChange={handleChange}
            className={`bg-background/50 ${errors.subject ? "border-red-500/60 focus-visible:ring-red-500/30" : "border-cyan-500/20"}`}
          />
          {errors.subject && <p className="mt-1 text-xs text-red-500">* {errors.subject}</p>}
        </div>

        <div>
          <label htmlFor="message" className="mb-1 block text-xs font-medium">
            Message <span className="text-red-500">*</span>
          </label>
          <Textarea
            id="message"
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className={`min-h-[110px] bg-background/50 ${errors.message ? "border-red-500/60 focus-visible:ring-red-500/30" : "border-cyan-500/20"}`}
          />
          {errors.message && <p className="mt-1 text-xs text-red-500">* {errors.message}</p>}
        </div>
        <motion.button
          type="submit"
          disabled={isLoading}
          whileTap={{ scale: 0.97 }}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 py-2.5 text-sm font-semibold text-white disabled:opacity-50"
        >
          {isLoading ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" /> Sending...
            </>
          ) : (
            "Send Message"
          )}
        </motion.button>
      </form>
    </div>
  )
}
