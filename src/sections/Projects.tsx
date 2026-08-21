import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { projects } from "@/data/projects";
import { otherRepos, profile } from "@/data/profile";
import type { Project, ProjectCategory } from "@/types";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";
import MagneticButton from "@/components/MagneticButton";
import { cn } from "@/lib/utils";

type FilterOption = "All" | ProjectCategory;

const filters: FilterOption[] = ["All", "AI/ML", "Full Stack", "Computer Vision", "Mobile"];

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterOption>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") return projects;
    return projects.filter((project) => project.categories.includes(activeFilter));
  }, [activeFilter]);

  return (
    <section id="projects" className="relative px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Work"
          title="Featured Projects"
          subtitle="Selected projects across AI/ML, full-stack development, computer vision, and mobile development."
        />

        <div className="mb-10 flex flex-wrap gap-2" role="group" aria-label="Filter projects by category">
          {filters.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActiveFilter(filter)}
                data-cursor-hover
                aria-pressed={isActive}
                className="relative rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200"
              >
                {isActive && (
                  <motion.span
                    layoutId="filter-active-bg"
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan to-violet"
                    transition={{ type: "spring", stiffness: 400, damping: 34 }}
                  />
                )}
                {!isActive && <span className="absolute inset-0 rounded-full border border-white/10" />}
                <span className={cn("relative", isActive ? "text-navy-950" : "text-ink-300")}>{filter}</span>
              </button>
            );
          })}
        </div>

        <motion.div layout className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-7">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} onViewDetails={setSelectedProject} />
            ))}
          </AnimatePresence>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="panel mt-14 rounded-2xl p-7 sm:p-9"
        >
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <h3 className="font-display text-xl font-semibold text-ink-100">More Projects</h3>
              <p className="mt-1.5 text-sm text-ink-300">Explore more of my work on GitHub.</p>
            </div>
            <MagneticButton href={profile.github} external variant="secondary" className="shrink-0">
              <Github className="h-4 w-4" strokeWidth={2} />
              View GitHub Profile
            </MagneticButton>
          </div>

          <ul className="mt-7 grid grid-cols-1 gap-x-8 gap-y-3 border-t border-white/5 pt-6 sm:grid-cols-2">
            {otherRepos.map((repo) => (
              <li key={repo.url}>
                <a
                  href={repo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor-hover
                  className="group inline-flex items-center gap-1.5 text-sm text-ink-300 transition-colors duration-200 hover:text-cyan"
                >
                  {repo.name}
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
}
