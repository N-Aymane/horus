"use client"

import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"

export default function About() {
  const skills = [
    { title: "Visual Design", description: "Creating stunning interfaces with attention to detail", icon: "🎨" },
    { title: "Motion Design", description: "Bringing designs to life with smooth animations", icon: "✨" },
    { title: "3D Graphics", description: "Crafting immersive 3D experiences and visuals", icon: "🎭" },
    { title: "Brand Identity", description: "Building cohesive brand systems and guidelines", icon: "🎯" },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section id="about" className="py-32 px-6 bg-gradient-to-b from-background to-accent/20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
            Designing the
            <br />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Future</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl text-pretty leading-relaxed">
            I'm a graphic designer passionate about creating memorable digital experiences. With expertise in visual
            design, motion graphics, and 3D art, I transform ideas into stunning realities.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {skills.map((skill, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="group p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-500 hover:shadow-lg hover:shadow-primary/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">
                  <div className="text-4xl mb-4">{skill.icon}</div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                    {skill.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{skill.description}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
