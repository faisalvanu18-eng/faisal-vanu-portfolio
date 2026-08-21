import { motion } from "framer-motion";
import type { SkillCategory } from "@/types";
import { skillIconMap } from "@/lib/icons";
import Chip from "@/components/Chip";

interface SkillCategoryCardProps {
  category: SkillCategory;
  index: number;
}

export default function SkillCategoryCard({ category, index }: SkillCategoryCardProps) {
  const Icon = skillIconMap[category.icon];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className="group panel relative overflow-hidden rounded-2xl p-6 transition-colors duration-300 hover:border-cyan/30 hover:shadow-glow"
    >
      <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-gradient-to-br from-cyan/0 to-violet/0 opacity-0 blur-2xl transition-opacity duration-300 group-hover:from-cyan/20 group-hover:to-violet/20 group-hover:opacity-100" />

      <div className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-cyan transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:scale-105">
        {Icon && <Icon className="h-5 w-5" strokeWidth={1.75} />}
      </div>

      <h3 className="relative mt-4 font-display text-base font-semibold text-ink-100">{category.title}</h3>

      <div className="relative mt-4 flex flex-wrap gap-2">
        {category.items.map((item) => (
          <Chip key={item}>{item}</Chip>
        ))}
      </div>
    </motion.div>
  );
}
