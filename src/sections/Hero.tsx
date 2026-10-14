import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown, Github } from "lucide-react";
import { profile } from "@/data/profile";
import MagneticButton from "@/components/MagneticButton";
import HeroVisual from "@/sections/HeroVisual";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() {
  const reducedMotion = useReducedMotion();

  return (
    <section
      id="home"
      className="relative flex min-h-[100svh] items-center overflow-hidden px-4 pb-20 pt-32 sm:px-6 lg:px-8"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-1 items-center gap-16 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div
            variants={item}
            className="glass-soft mb-6 inline-flex items-center gap-2 rounded-full px-4 py-1.5"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="font-mono text-xs text-ink-300">Open to Software Development &amp; AI/ML Opportunities</span>
          </motion.div>

          <motion.h1 variants={item} className="font-display text-4xl font-semibold leading-[1.1] text-ink-100 sm:text-5xl lg:text-[3.4rem]">
            Hi, I&apos;m Faisal Vanu.
          </motion.h1>

          <motion.p variants={item} className="mt-3 font-display text-2xl font-medium text-ink-300 sm:text-3xl">
            <span className="text-gradient">Software Developer</span>
            <span className="mx-2 text-ink-500">·</span>
            AI/ML Enthusiast
          </motion.p>

          <motion.p variants={item} className="mt-6 max-w-xl text-base leading-relaxed text-ink-300">
            {profile.heroSupportingText}
          </motion.p>

          <motion.div variants={item} className="mt-9 flex flex-wrap items-center gap-4">
            <MagneticButton href="#projects" variant="primary">
              View My Work
            </MagneticButton>
            <MagneticButton href="#contact" variant="secondary">
              Contact Me
            </MagneticButton>
            <MagneticButton href={profile.github} external variant="ghost">
              <Github className="h-4 w-4" strokeWidth={2} />
              GitHub
            </MagneticButton>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <HeroVisual />
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-ink-500 transition-colors hover:text-cyan sm:flex"
      >
        <span className="font-mono text-[11px] uppercase tracking-[0.28em]">Scroll to explore</span>
        <motion.span
          animate={reducedMotion ? undefined : { y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="h-4 w-4" />
        </motion.span>
      </motion.a>
    </section>
  );
}
