import { Github, Instagram, Linkedin } from "lucide-react";
import { profile, socialLinks } from "@/data/profile";
import { navItems } from "@/data/nav";

const socialIconMap = { github: Github, linkedin: Linkedin, instagram: Instagram };

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div>
            <a href="#home" className="font-display text-lg font-bold text-ink-100" data-cursor-hover>
              F<span className="text-gradient">V</span>
            </a>
            <p className="mt-3 text-sm font-medium text-ink-100">{profile.name}</p>
            <p className="text-sm text-ink-300">{profile.title}</p>
            <p className="mt-1 text-sm text-ink-500">{profile.location}</p>

            <div className="mt-5 flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = socialIconMap[social.icon];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    data-cursor-hover
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 text-ink-300 transition-colors duration-200 hover:text-cyan"
                  >
                    <Icon className="h-4 w-4" strokeWidth={1.75} />
                  </a>
                );
              })}
            </div>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="grid grid-cols-2 gap-x-10 gap-y-2.5 sm:grid-cols-3">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    data-cursor-hover
                    className="text-sm text-ink-300 transition-colors duration-200 hover:text-cyan"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-white/5 pt-6 sm:flex-row sm:items-center">
          <p className="font-mono text-xs text-ink-500">© 2026 Faisal Vanu. All rights reserved.</p>
          <a
            href="#home"
            data-cursor-hover
            className="font-mono text-xs uppercase tracking-widest text-ink-300 transition-colors duration-200 hover:text-cyan"
          >
            Back to top ↑
          </a>
        </div>
      </div>
    </footer>
  );
}
