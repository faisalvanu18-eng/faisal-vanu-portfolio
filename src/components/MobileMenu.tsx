import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Github, Instagram, Linkedin, X } from "lucide-react";
import { navItems } from "@/data/nav";
import { socialLinks } from "@/data/profile";
import { cn } from "@/lib/utils";

interface MobileMenuProps {
  open: boolean;
  onClose: () => void;
  activeId: string;
}

const socialIconMap = { github: Github, linkedin: Linkedin, instagram: Instagram };

export default function MobileMenu({ open, onClose, activeId }: MobileMenuProps) {
  useEffect(() => {
    if (!open) return;

    document.body.style.overflow = "hidden";
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[95] flex flex-col bg-navy-950/95 backdrop-blur-xl md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          <div className="flex items-center justify-between px-5 pt-5">
            <span className="font-display text-lg font-bold text-ink-100">
              F<span className="text-gradient">V</span>
            </span>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close menu"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-ink-100"
            >
              <X className="h-5 w-5" strokeWidth={1.75} />
            </button>
          </div>

          <nav className="mt-10 flex flex-1 flex-col items-start gap-2 px-6">
            {navItems.map((item, i) => {
              const isActive = activeId === item.href.replace("#", "");
              return (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={onClose}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.3 }}
                  className={cn(
                    "font-display text-3xl font-semibold transition-colors duration-200",
                    isActive ? "text-gradient" : "text-ink-100/90 hover:text-ink-100"
                  )}
                >
                  {item.label}
                </motion.a>
              );
            })}
          </nav>

          <div className="flex items-center gap-4 border-t border-white/5 px-6 py-6">
            {socialLinks.map((social) => {
              const Icon = socialIconMap[social.icon];
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-ink-300"
                >
                  <Icon className="h-4 w-4" strokeWidth={1.75} />
                </a>
              );
            })}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
