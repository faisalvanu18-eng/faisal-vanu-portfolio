import { motion } from "framer-motion";
import { profile, focusAreas } from "@/data/profile";
import SectionHeading from "@/components/SectionHeading";
import ResumeButton from "@/components/ResumeButton";

export default function About() {
  return (
    <section id="about" className="relative px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-2 lg:gap-16">
          <div>
            <SectionHeading eyebrow="About" title="About Me" />
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="space-y-5"
            >
              <p className="text-base leading-relaxed text-ink-300">{profile.aboutTextPrimary}</p>
              <p className="text-base leading-relaxed text-ink-300">{profile.aboutTextSecondary}</p>
              <div className="pt-2">
                <ResumeButton />
              </div>
            </motion.div>
          </div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="panel rounded-2xl p-6 sm:p-7"
            >
              <h3 className="font-mono text-xs uppercase tracking-[0.24em] text-ink-500">Developer Profile</h3>
              <h4 className="mt-2 font-display text-lg font-semibold text-ink-100">Focus Areas</h4>

              <ul className="mt-5 space-y-4">
                {focusAreas.map((area, i) => (
                  <motion.li
                    key={area}
                    initial={{ opacity: 0, x: -14 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
                  >
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-ink-100">{area}</span>
                    </div>
                    <div className="mt-2 h-[3px] w-full overflow-hidden rounded-full bg-white/[0.06]">
                      <motion.div
                        initial={{ width: "0%" }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true, margin: "-40px" }}
                        transition={{ duration: 0.8, delay: 0.25 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                        className="h-full rounded-full bg-gradient-to-r from-cyan to-violet"
                      />
                    </div>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="glass overflow-hidden rounded-2xl p-6 font-mono text-[13px] leading-relaxed sm:p-7"
            >
              <div className="mb-3 flex items-center gap-1.5" aria-hidden="true">
                <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
                <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
                <span className="h-2 w-2 rounded-full bg-[#28c840]" />
              </div>
              <p>
                <span className="text-violet">const</span> <span className="text-ink-100">developer</span>{" "}
                <span className="text-ink-500">=</span> <span className="text-ink-500">{"{"}</span>
              </p>
              <p className="pl-4">
                <span className="text-cyan">name</span>
                <span className="text-ink-500">:</span> <span className="text-emerald-600">&quot;Faisal Vanu&quot;</span>
                <span className="text-ink-500">,</span>
              </p>
              <p className="pl-4">
                <span className="text-cyan">focus</span>
                <span className="text-ink-500">: [</span>
              </p>
              <p className="pl-8 text-emerald-600">&quot;Software Development&quot;,</p>
              <p className="pl-8 text-emerald-600">&quot;AI/ML&quot;,</p>
              <p className="pl-8 text-emerald-600">&quot;Computer Vision&quot;</p>
              <p className="pl-4 text-ink-500">],</p>
              <p className="text-ink-500">{"};"}</p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
