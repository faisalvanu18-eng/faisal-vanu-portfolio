import { useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Github, X } from "lucide-react";
import type { Project } from "@/types";
import ProjectImage from "@/components/ProjectImage";
import Chip from "@/components/Chip";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!project) return;

    previouslyFocused.current = document.activeElement as HTMLElement;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    const getFocusable = (): HTMLElement[] =>
      Array.from(
        dialogRef.current?.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        ) ?? []
      );

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
        return;
      }

      if (e.key === "Tab") {
        const focusable = getFocusable();
        if (focusable.length === 0) return;
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
      previouslyFocused.current?.focus?.();
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[90] flex items-center justify-center px-4 py-8 sm:px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="absolute inset-0 bg-navy-950/60 backdrop-blur-md"
            onClick={onClose}
            aria-hidden="true"
          />

          <motion.div
            ref={dialogRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative flex max-h-[88vh] w-full max-w-2xl flex-col overflow-hidden rounded-2xl border border-white/[0.12] bg-navy-900/85 backdrop-blur-md shadow-glow-violet"
          >
            <button
              ref={closeButtonRef}
              type="button"
              onClick={onClose}
              aria-label="Close project details"
              data-cursor-hover
              className="glass-soft absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full text-ink-100 transition-colors hover:text-cyan"
            >
              <X className="h-4 w-4" strokeWidth={2} />
            </button>

            <div className="overflow-y-auto">
              <div className="relative aspect-[16/9] w-full shrink-0">
                <ProjectImage
                  src={project.image}
                  alt={`${project.title} — ${project.tagline} preview`}
                  title={project.title}
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-navy-900 via-transparent to-transparent" />
              </div>

              <motion.div
                initial="hidden"
                animate="show"
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: 0.06, delayChildren: 0.05 } },
                }}
                className="flex flex-col gap-6 p-6 sm:p-8"
              >
                <motion.div variants={fadeUp}>
                  <div className="flex flex-wrap gap-2">
                    {project.categories.map((cat) => (
                      <Chip key={cat} tone="cyan">
                        {cat}
                      </Chip>
                    ))}
                  </div>
                  <h3 id="project-modal-title" className="mt-3 font-display text-2xl font-semibold text-ink-100">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm text-cyan/80">{project.tagline}</p>
                </motion.div>

                <motion.div variants={fadeUp}>
                  <h4 className="font-mono text-xs uppercase tracking-[0.24em] text-ink-500">Overview</h4>
                  <p className="mt-2 text-sm leading-relaxed text-ink-300">{project.problem}</p>
                </motion.div>

                <motion.div variants={fadeUp}>
                  <h4 className="font-mono text-xs uppercase tracking-[0.24em] text-ink-500">Key Features</h4>
                  <ul className="mt-3 grid grid-cols-1 gap-x-6 gap-y-2 sm:grid-cols-2">
                    {project.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2 text-sm text-ink-300">
                        <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-cyan" strokeWidth={2} />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div variants={fadeUp}>
                  <h4 className="font-mono text-xs uppercase tracking-[0.24em] text-ink-500">Technology Stack</h4>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Chip key={tech}>{tech}</Chip>
                    ))}
                  </div>
                </motion.div>

                <motion.div variants={fadeUp} className="pt-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor-hover
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan to-violet px-6 py-3 text-sm font-semibold text-navy-950 shadow-glow transition-shadow hover:shadow-glow-violet"
                  >
                    <Github className="h-4 w-4" strokeWidth={2.25} />
                    View on GitHub
                  </a>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] } },
};
