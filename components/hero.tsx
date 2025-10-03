"use client"

import { motion } from "framer-motion"
import LiquidChrome from "@/components/liquid-chrome"

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div className="absolute inset-0 pointer-events-auto">
        <LiquidChrome baseColor={[0.05, 0.05, 0.1]} speed={0.3} amplitude={0.6} interactive={true} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/10 to-background/50 gradient-animate pointer-events-none" />

      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-6xl md:text-8xl lg:text-9xl font-bold text-center text-balance leading-none mb-6"
        >
          CREATIVE
          <br />
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
          >
            DESIGNER
          </motion.span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-lg md:text-xl text-muted-foreground text-center max-w-2xl text-balance"
        >
          Crafting immersive digital experiences with stunning visuals and innovative design
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-12"
        >
          <a
            href="#work"
            className="px-8 py-4 bg-primary text-primary-foreground rounded-full font-semibold hover:scale-105 transition-transform duration-300 inline-block glow-effect"
          >
            View My Work
          </a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2"
        >
          <motion.div
            animate={{ y: [0, 16, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="w-1.5 h-3 bg-primary rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
