import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionHeading({ eyebrow, title, subtitle, align = "left" }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={cn("mb-12 md:mb-16", align === "center" && "mx-auto max-w-2xl text-center")}
    >
      <span className="font-mono text-xs uppercase tracking-[0.28em] text-cyan/80">{eyebrow}</span>
      <h2 className="mt-3 text-3xl font-semibold tracking-tight text-ink-100 sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-base leading-relaxed text-ink-300">{subtitle}</p>}
    </motion.div>
  );
}
