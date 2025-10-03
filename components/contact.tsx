"use client"

import { motion } from "framer-motion"
import ProfileCard from "@/components/profile-card"
import "@/components/ProfileCard.css"

export default function Contact() {
  const handleContactClick = () => {
  // Redirect to LinkedIn profile in a new tab
  window.open("https://www.linkedin.com/in/adnane-naouri-b3125945/", "_blank", "noopener,noreferrer")
  }

  return (
    <section id="contact" className="py-32 px-6 bg-gradient-to-b from-background to-accent/20">
      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
            Let's Create
            <br />
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Together</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground text-pretty leading-relaxed">
            Have a project in mind? Let's discuss how we can bring your vision to life.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-center justify-center mb-16"
        >
          <ProfileCard
            name="Adnane Naouri"
            title="Designer _ WE"
            handle="horusdesige"
            status="Available for work"
            contactText="Contact Me"
            avatarUrl="/photo.jpg"
            miniAvatarUrl="/photo.jpg"
            showUserInfo={true}
            enableTilt={true}
            enableMobileTilt={false}
            onContactClick={handleContactClick}
          />
        </motion.div>

        <footer className="mt-16 text-center text-sm text-muted-foreground">
          <p>© 2025 Creative Designer. All rights reserved.</p>
        </footer>
      </div>
    </section>
  )
}
