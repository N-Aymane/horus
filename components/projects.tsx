"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Projects() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const projects = [
    {
      title: "Brand Refresh",
      category: "Branding",
      description: "Complete visual identity redesign for a tech startup",
      gradient: "from-blue-500 via-indigo-500 to-purple-500",
    },
    {
      title: "Motion Reel",
      category: "Animation",
      description: "Dynamic motion graphics for product launch",
      gradient: "from-pink-500 via-rose-500 to-orange-500",
    },
    {
      title: "3D Experience",
      category: "3D Design",
      description: "Immersive 3D product visualization",
      gradient: "from-teal-500 via-cyan-500 to-blue-500",
    },
    {
      title: "UI/UX Design",
      category: "Interface",
      description: "Modern dashboard design with micro-interactions",
      gradient: "from-indigo-500 via-purple-500 to-pink-500",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="work" className="py-32 px-6">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
            Selected
            <br />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Work</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl text-pretty leading-relaxed">
            A curated collection of projects showcasing creativity, innovation, and attention to detail.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card
                className="group relative overflow-hidden bg-card border-border/50 hover:border-primary/50 transition-all duration-700 cursor-pointer"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 0.15 : 0 }}
                  transition={{ duration: 0.5 }}
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient}`}
                />

                <div className="relative p-8 h-80 flex flex-col justify-between">
                  <div>
                    <motion.span
                      initial={{ opacity: 0.7 }}
                      animate={{ opacity: hoveredIndex === index ? 1 : 0.7 }}
                      className="text-sm text-primary font-semibold mb-2 block"
                    >
                      {project.category}
                    </motion.span>

                    <motion.h3
                      animate={{
                        scale: hoveredIndex === index ? 1.05 : 1,
                      }}
                      transition={{ duration: 0.3 }}
                      className="text-3xl font-bold mb-4"
                    >
                      {project.title}
                    </motion.h3>

                    <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                  </div>

                  <AnimatePresence>
                    {hoveredIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Button
                          variant="outline"
                          className="rounded-full bg-transparent border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                        >
                          View Project →
                        </Button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <div
                  className={`absolute top-4 right-4 w-32 h-32 bg-gradient-to-br ${project.gradient} opacity-20 morph-blob`}
                />
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
