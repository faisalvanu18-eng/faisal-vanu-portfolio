import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import type { Project } from "@/types";
import ProjectImage from "@/components/ProjectImage";
import Chip from "@/components/Chip";

interface ProjectCardProps {
  project: Project;
  index: number;
  onViewDetails: (project: Project) => void;
}

const MAX_VISIBLE_TAGS = 4;

export default function ProjectCard({ project, index, onViewDetails }: ProjectCardProps) {
  const visibleTags = project.technologies.slice(0, MAX_VISIBLE_TAGS);
  const remaining = project.technologies.length - visibleTags.length;

  // Drive the entrance from an explicit in-view flag instead of `whileInView`.
  // `once: true` + a small negative margin reliably fires on scroll AND when
  // the section is jumped to from the bottom tab bar (the card is already in
  // view, so it animates immediately rather than staying stuck/invisible).
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -12% 0px" });

  return (
    <motion.div
      ref={ref}
      layout
      initial={{ opacity: 0, y: 24, scale: 0.98 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 24, scale: 0.98 }}
      exit={{ opacity: 0, y: 12, scale: 0.98 }}
      transition={{
        type: "spring",
        stiffness: 520,
        damping: 40,
        mass: 0.6,
        delay: Math.min(index, 5) * 0.05,
      }}
      className="group relative rounded-2xl p-px"
    >
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan/0 via-violet/0 to-cyan/0 opacity-0 transition-opacity duration-300 group-hover:from-cyan/50 group-hover:via-violet/30 group-hover:to-cyan/40 group-hover:opacity-100" />

      <div className="glass-card relative flex h-full flex-col overflow-hidden rounded-2xl transition-transform duration-300 group-hover:-translate-y-1.5">
        <div className="relative aspect-[16/10] w-full overflow-hidden">
          <ProjectImage
            src={project.image}
            alt={`${project.title} — ${project.tagline} preview`}
            title={project.title}
            className="transition-transform duration-500 group-hover:scale-[1.04]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent dark:from-black/40" />
          <span className="glass-soft absolute left-4 top-4 rounded-full px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-ink-300">
            {project.categories[0]}
          </span>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open ${project.title} on GitHub`}
            data-cursor-hover
            className="glass-soft absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full text-ink-100 transition-transform duration-300 group-hover:-translate-y-1 group-hover:text-cyan hover:-translate-y-1 hover:text-cyan"
          >
            <Github className="h-4 w-4" strokeWidth={2} />
          </a>
        </div>

        <div className="flex flex-1 flex-col gap-4 p-6">
          <div>
            <h3 className="font-display text-lg font-semibold text-ink-100">{project.title}</h3>
            <p className="mt-1 text-sm text-cyan/80">{project.tagline}</p>
          </div>

          <p className="text-sm leading-relaxed text-ink-300">{project.description}</p>

          <div className="mt-auto flex flex-wrap gap-2 pt-2">
            {visibleTags.map((tech) => (
              <Chip key={tech}>{tech}</Chip>
            ))}
            {remaining > 0 && <Chip tone="violet">+{remaining} more</Chip>}
          </div>

          <button
            type="button"
            onClick={() => onViewDetails(project)}
            data-cursor-hover
            className="mt-2 inline-flex items-center gap-1.5 self-start font-mono text-xs font-medium uppercase tracking-widest text-ink-100 transition-colors duration-200 hover:text-cyan"
          >
            View Details
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
