import type { SkillCategory } from "@/types";

export const skillCategories: SkillCategory[] = [
  {
    id: "programming",
    title: "Programming",
    icon: "Code2",
    items: ["Python", "JavaScript", "TypeScript", "Dart", "SQL"],
  },
  {
    id: "frontend",
    title: "Frontend",
    icon: "LayoutTemplate",
    items: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS"],
  },
  {
    id: "backend",
    title: "Backend",
    icon: "Server",
    items: ["FastAPI", "Node.js", "Express.js"],
  },
  {
    id: "mobile",
    title: "Mobile",
    icon: "Smartphone",
    items: ["Flutter"],
  },
  {
    id: "ai-ml",
    title: "AI / Machine Learning",
    icon: "BrainCircuit",
    items: ["PyTorch", "Scikit-learn", "LightGBM", "YOLOv8", "OpenCV", "Pandas", "NumPy", "SHAP", "Grad-CAM"],
  },
  {
    id: "databases",
    title: "Databases",
    icon: "Database",
    items: ["PostgreSQL", "SQLite", "MongoDB", "Supabase"],
  },
  {
    id: "tools",
    title: "Tools & Technologies",
    icon: "Wrench",
    items: ["Git", "GitHub", "Docker", "Streamlit", "SQLAlchemy", "Prisma", "Vite"],
  },
];
