import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Instagram, Linkedin, Menu } from "lucide-react";
import { navItems } from "@/data/nav";
import { socialLinks } from "@/data/profile";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useScrollProgress } from "@/hooks/useScrollProgress";
import { cn } from "@/lib/utils";
import MobileMenu from "@/components/MobileMenu";

const socialIconMap = { github: Github, linkedin: Linkedin, instagram: Instagram };

export default function Navbar() {
  const { scrolled } = useScrollProgress(30);
  const activeId = useActiveSection(navItems.map((item) => item.href.replace("#", "")));
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-[80] flex justify-center px-4 pt-4 sm:px-6">
        <motion.nav
          animate={{ paddingTop: scrolled ? 10 : 14, paddingBottom: scrolled ? 10 : 14 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className={cn(
            "glass flex w-full max-w-5xl items-center justify-between rounded-2xl px-5 shadow-[0_8px_30px_-15px_rgba(0,0,0,0.6)] transition-shadow"
          )}
        >
          <a
            href="#home"
            data-cursor-hover
            className="font-display text-lg font-bold tracking-tight text-ink-100"
            aria-label="Faisal Vanu — home"
          >
            F<span className="text-gradient">V</span>
          </a>

          <ul className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const isActive = activeId === item.href.replace("#", "");
              return (
                <li key={item.href} className="relative">
                  <a
                    href={item.href}
                    data-cursor-hover
                    className={cn(
                      "relative block px-4 py-2 text-sm transition-colors duration-200",
                      isActive ? "text-ink-100" : "text-ink-300 hover:text-ink-100"
                    )}
                  >
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active-underline"
                        className="absolute inset-x-3 -bottom-0.5 h-[2px] rounded-full bg-gradient-to-r from-cyan to-violet"
                        transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      />
                    )}
                  </a>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-1">
            <div className="hidden items-center gap-1 sm:flex">
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
                    className="flex h-9 w-9 items-center justify-center rounded-full text-ink-300 transition-colors duration-200 hover:text-cyan"
                  >
                    <Icon className="h-4 w-4" strokeWidth={1.75} />
                  </a>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              data-cursor-hover
              className="flex h-9 w-9 items-center justify-center rounded-full text-ink-100 md:hidden"
            >
              <Menu className="h-5 w-5" strokeWidth={1.75} />
            </button>
          </div>
        </motion.nav>
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} activeId={activeId} />
    </>
  );
}
