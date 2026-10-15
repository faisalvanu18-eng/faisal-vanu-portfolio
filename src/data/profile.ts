import type { SocialLink, OtherRepo } from "@/types";

export const profile = {
  name: "Faisal Vanu",
  title: "Software Developer | AI/ML Enthusiast",
  location: "Mumbai, Maharashtra, India",
  email: "faisalvanu18@gmail.com",
  phone: "+91 93225 76336",
  phoneHref: "tel:+919322576336",
  github: "https://github.com/faisalvanu18-eng",
  linkedin: "https://www.linkedin.com/in/faisal-vanu-5782b226a",
  instagram: "https://www.instagram.com/_faisal_vanu/",
  instagramHandle: "_faisal_vanu",
  site: "https://www.faisalvanu.online",
  resumeUrl: import.meta.env.BASE_URL + "resume/Faisal-Vanu-Resume.pdf",
  heroSupportingText:
    "Computer Science Engineering graduate specializing in Artificial Intelligence and Machine Learning, building full-stack, mobile, and AI/ML applications with a focus on practical software solutions.",
  aboutTextPrimary:
    "Computer Science Engineering graduate specializing in Artificial Intelligence and Machine Learning, with hands-on experience building full-stack, mobile, machine learning, and computer vision applications.",
  aboutTextSecondary:
    "My project work focuses on turning practical problems into usable software solutions, combining modern application development with AI/ML techniques.",
};

export const socialLinks: SocialLink[] = [
  { label: "GitHub", href: profile.github, icon: "github" },
  { label: "LinkedIn", href: profile.linkedin, icon: "linkedin" },
  { label: "Instagram", href: profile.instagram, icon: "instagram" },
];

export const education = {
  degree: "Bachelor of Engineering (B.E.)",
  field: "Computer Science Engineering — Artificial Intelligence & Machine Learning",
  college: "M.H. Saboo Siddik College of Engineering",
  university: "University of Mumbai",
  year: "2026",
  cgpa: "7.55 / 10",
};

export const coursework: string[] = [
  "Data Structures & Algorithms",
  "Database Management Systems",
  "Computer Networks",
  "Operating Systems",
  "Artificial Intelligence",
  "Machine Learning",
  "Deep Learning",
  "Social Media Analysis",
  "Image & Video Processing",
  "Full Stack Development",
];

export const focusAreas: string[] = [
  "Software Development",
  "AI / Machine Learning",
  "Computer Vision",
  "Full Stack Development",
  "Mobile Development",
];

export const otherRepos: OtherRepo[] = [
  { name: "Rise With Uzma", url: "https://github.com/faisalvanu18-eng/rise-with-uzma" },
  { name: "Bilal Furniture", url: "https://github.com/faisalvanu18-eng/bilal-furniture" },
  { name: "Aatif Quran Teaching", url: "https://github.com/faisalvanu18-eng/Aatif-Quran-Teaching" },
  { name: "Restaurant Website Sample", url: "https://github.com/faisalvanu18-eng/restaurant-website-sample" },
  { name: "Masail Islamia", url: "https://github.com/faisalvanu18-eng/masail-islamia" },
];
