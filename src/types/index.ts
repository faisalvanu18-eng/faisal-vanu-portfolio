export type ProjectCategory = "AI/ML" | "Full Stack" | "Computer Vision" | "Mobile";

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  problem: string;
  categories: ProjectCategory[];
  technologies: string[];
  features: string[];
  image: string;
  github: string;
  demo?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  items: string[];
}

export interface NavItem {
  label: string;
  href: string;
  icon: "home" | "about" | "skills" | "projects" | "education" | "contact";
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "github" | "linkedin" | "instagram";
}

export interface OtherRepo {
  name: string;
  url: string;
}
