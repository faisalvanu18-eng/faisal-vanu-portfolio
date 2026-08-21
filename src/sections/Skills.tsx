import { skillCategories } from "@/data/skills";
import SectionHeading from "@/components/SectionHeading";
import SkillCategoryCard from "@/components/SkillCategoryCard";

export default function Skills() {
  return (
    <section id="skills" className="relative px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Skills"
          title="Technical Skills"
          subtitle="Tools and technologies I reach for across full-stack, mobile, and AI/ML work."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, i) => (
            <SkillCategoryCard key={category.id} category={category} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
