import { motion } from "framer-motion";
import {
  Home,
  User,
  Layers,
  FolderGit2,
  GraduationCap,
  Mail,
  type LucideIcon,
} from "lucide-react";
import { navItems } from "@/data/nav";
import { useActiveSection } from "@/hooks/useActiveSection";
import { cn } from "@/lib/utils";
import type { NavItem } from "@/types";

const iconMap: Record<NavItem["icon"], LucideIcon> = {
  home: Home,
  about: User,
  skills: Layers,
  projects: FolderGit2,
  education: GraduationCap,
  contact: Mail,
};

export default function BottomTabBar() {
  const activeId = useActiveSection(navItems.map((item) => item.href.replace("#", "")));

  return (
    <nav
      aria-label="Primary"
      className="pointer-events-none fixed inset-x-0 bottom-0 z-[80] flex justify-center px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))]"
    >
      <motion.ul
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="tabbar-glass pointer-events-auto flex items-center gap-0.5 rounded-[26px] p-1.5 sm:gap-1"
      >
        {navItems.map((item) => {
          const Icon = iconMap[item.icon];
          const isActive = activeId === item.href.replace("#", "");
          return (
            <li key={item.href} className="relative">
              <a
                href={item.href}
                data-cursor-hover
                aria-label={item.label}
                aria-current={isActive ? "page" : undefined}
                className={cn(
                  "relative flex flex-col items-center justify-center rounded-[20px] px-3 py-1.5 transition-colors duration-200 sm:px-4",
                  isActive ? "text-cyan" : "text-ink-500 hover:text-ink-300"
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="tab-active-pill"
                    className="absolute inset-0 rounded-[20px] bg-cyan/10 ring-1 ring-inset ring-cyan/20"
                    transition={{ type: "spring", stiffness: 420, damping: 34 }}
                  />
                )}
                <Icon
                  className="relative h-[22px] w-[22px]"
                  strokeWidth={isActive ? 2.4 : 2}
                  aria-hidden="true"
                />
                <span className="relative mt-0.5 text-[10px] font-medium leading-none tracking-tight">
                  {item.label}
                </span>
              </a>
            </li>
          );
        })}
      </motion.ul>
    </nav>
  );
}
