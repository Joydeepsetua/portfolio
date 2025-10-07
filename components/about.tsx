"use client"

import { Badge } from "@/components/ui/badge"
import { AnimatedSection } from "@/components/animated-section"
import { motion } from "framer-motion"
import { Briefcase, GraduationCap, Trophy } from "lucide-react"

const experiences = [
  {
    title: "Software Developer",
    company: "Sthanave Technologies",
    website: 'https://sthanave.com/',
    logo: "/company/sthanave.png?height=60&width=60",
    period: "Dec 2022 - Present",
    description:
      "Experienced in building cross-platform apps using React Native with Redux Toolkit, Zoom SDK integration, and performance optimization. Skilled in deploying apps to the Play Store and App Store. On the backend, I develop scalable APIs using Node.js with MongoDB/MySQL, implement clustering, and enable real-time features with Socket.IO.",
  },
  {

    title: 'Staff Software Engineer',
    company: "iDeliver Technologies LLC",
    website: 'https://www.ideliver-inc.com/',
    logo: "/company/ideliver.png?height=60&width=60",
    period: "Sep 2022 - Nov 2022",
    description: "Worked on automating websites using scripting with LoadRunner and UFT tools. Automated over 4 websites for performance testing using LoadRunner. Automated more than 2 websites using UFT for functional testing.",
    },
]

const education = [
  {
    degree: "Diploma in Computer Science Engineering",
    institution: "UPU Govt. Polytechnic collage, Durg (CSVTU)",
    logo: "/upu_govt_poly.png?height=60&width=60",
    period: "2019 - 2022",
    description:
      "Completed a Diploma in Computer Science Engineering with 9.08 CPI(Cumulative Performance Index) in Apr-May 2022. Built strong CS fundamentals and worked on projects using various technologies.",
  },
  {
    degree: "Higher Secondary Education",
    institution: "Govt. Higher Secondary School Jarway",
    logo: "/cgbse_logo.png?height=60&width=60",
    period: "MAR 2019",
    description:
      "Completed higher secondary education with science and mathematics. Participated in various extracurricular activities and competitions.",
  },
]

const achievements = [
  {
    title: "Excellence in Leadership",
    organization: "Sthanave Technologies",
    year: "2023",
    description:
      "Honored to be awarded the Excellence in Leadership Award by Sthanave Technologies for outstanding leadership and impact.",
  },
  {
    title: "Campus Ambassador",
    organization: "IIT Kharagpur",
    year: "2022",
    description: "Certified as a Campus Ambassador at UPU Govt. Polytechnic Durg by IIT Kharagpur.",
  }
]

export function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-[#171c22]">
      <div className="container px-4 md:px-6">
        <AnimatedSection className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <Badge
              variant="outline"
              className="px-3 py-1 text-sm bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-500 border-cyan-500/20"
            >
              About Me
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-cyan-500 to-blue-600">
              Who I Am
            </h2>
            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
              A passionate developer who loves learning new technologies every day
            </p>
          </div>
        </AnimatedSection>

        <div className="mx-auto max-w-5xl py-12">
          <AnimatedSection className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-cyan-500/10 p-2 rounded-full">
                <Briefcase className="h-6 w-6 text-cyan-500" />
              </div>
              <h3 className="text-2xl font-bold text-gradient-primary">Experience</h3>
            </div>

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="relative"
                >
                  <div className="flex flex-col sm:flex-row gap-4 items-start">
                    <a className="w-12 h-12 sm:w-16 sm:h-16 rounded-md overflow-hidden bg-muted flex-shrink-0 cursor-pointer mx-auto sm:mx-0" href={exp.website} target="_blank">
                      <img
                        src={exp.logo || "/placeholder.svg"}
                        alt={exp.company}
                        className="w-full h-full object-fill"
                      />
                    </a>
                    <div className="flex-1 text-center sm:text-left">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                        <a className="cursor-pointer" href={exp.website} target="_blank">
                          <h4 className="text-lg sm:text-xl font-bold">{exp.title}</h4>
                          <p className="text-muted-foreground text-sm sm:text-base">{exp.company}</p>
                        </a>
                        <span className="text-sm text-cyan-500 mt-1 sm:mt-0">{exp.period}</span>
                      </div>
                      <p className="text-muted-foreground text-sm sm:text-base">{exp.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection className="mb-16">
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-cyan-500/10 p-2 rounded-full">
                <GraduationCap className="h-6 w-6 text-cyan-500" />
              </div>
              <h3 className="text-2xl font-bold text-gradient-primary">Education</h3>
            </div>

            <div className="space-y-12">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div className="flex flex-col sm:flex-row gap-4 items-start">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-md overflow-hidden bg-muted flex-shrink-0 mx-auto sm:mx-0">
                      <img
                        src={edu.logo || "/placeholder.svg"}
                        alt={edu.institution}
                        className="w-full h-full object-cover bg-white"
                      />
                    </div>
                    <div className="flex-1 text-center sm:text-left">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                        <div>
                          <h4 className="text-lg sm:text-xl font-bold">{edu.degree}</h4>
                          <p className="text-muted-foreground text-sm sm:text-base">{edu.institution}</p>
                        </div>
                        <span className="text-sm text-cyan-500 mt-1 sm:mt-0">{edu.period}</span>
                      </div>
                      <p className="text-muted-foreground text-sm sm:text-base">{edu.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-cyan-500/10 p-2 rounded-full">
                <Trophy className="h-6 w-6 text-cyan-500" />
              </div>
              <h3 className="text-2xl font-bold text-gradient-primary">Achievements</h3>
            </div>

            <div className="space-y-12">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <div className="text-center sm:text-left">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                      <div>
                        <h4 className="text-lg sm:text-xl font-bold">{achievement.title}</h4>
                        <p className="text-muted-foreground text-sm sm:text-base">{achievement.organization}</p>
                      </div>
                      <span className="text-sm text-cyan-500 mt-1 sm:mt-0">{achievement.year}</span>
                    </div>
                    <p className="text-muted-foreground text-sm sm:text-base">{achievement.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}

