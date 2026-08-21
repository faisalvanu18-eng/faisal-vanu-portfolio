import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education, coursework } from "@/data/profile";
import SectionHeading from "@/components/SectionHeading";
import Chip from "@/components/Chip";

export default function Education() {
  return (
    <section id="education" className="relative px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="Background" title="Education" />

        <div className="relative pl-11">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            style={{ transformOrigin: "top" }}
            className="absolute left-[9px] top-3 bottom-3 w-px bg-gradient-to-b from-cyan via-violet to-transparent"
            aria-hidden="true"
          />
          <motion.span
            initial={{ scale: 0, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="absolute left-0 top-3 flex h-[19px] w-[19px] items-center justify-center rounded-full bg-navy-950 shadow-glow"
            aria-hidden="true"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-br from-cyan to-violet" />
          </motion.span>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="panel rounded-2xl p-6 sm:p-8"
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-cyan">
                  <GraduationCap className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="font-display text-lg font-semibold text-ink-100">{education.degree}</h3>
                  <p className="mt-1 text-sm text-ink-300">{education.field}</p>
                </div>
              </div>
              <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-xs text-ink-300">
                {education.year}
              </span>
            </div>

            <div className="mt-6 grid grid-cols-1 gap-4 border-t border-white/5 pt-6 sm:grid-cols-3">
              <div>
                <p className="font-mono text-[11px] uppercase tracking-widest text-ink-500">College</p>
                <p className="mt-1 text-sm text-ink-100">{education.college}</p>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-widest text-ink-500">University</p>
                <p className="mt-1 text-sm text-ink-100">{education.university}</p>
              </div>
              <div>
                <p className="font-mono text-[11px] uppercase tracking-widest text-ink-500">CGPA</p>
                <p className="mt-1 text-sm text-ink-100">{education.cgpa}</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-12"
        >
          <h3 className="font-mono text-xs uppercase tracking-[0.24em] text-ink-500">Relevant Coursework</h3>
          <div className="mt-4 flex flex-wrap gap-2.5">
            {coursework.map((course) => (
              <Chip key={course} tone="cyan">
                {course}
              </Chip>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
