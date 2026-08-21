import type { ReactNode, MouseEvent as ReactMouseEvent } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

type Variant = "primary" | "secondary" | "ghost";

interface MagneticButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: Variant;
  external?: boolean;
  type?: "button" | "submit";
  disabled?: boolean;
  className?: string;
  "aria-label"?: string;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-gradient-to-r from-cyan to-violet text-navy-950 font-semibold shadow-glow hover:shadow-glow-violet",
  secondary: "panel text-ink-100 hover:border-cyan/40",
  ghost: "text-ink-100 border border-transparent hover:border-white/15",
};

export default function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  external = false,
  type = "button",
  disabled = false,
  className,
  ...aria
}: MagneticButtonProps) {
  const reducedMotion = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 220, damping: 18, mass: 0.3 });
  const springY = useSpring(y, { stiffness: 220, damping: 18, mass: 0.3 });

  const applyMagnetic = (rect: DOMRect, clientX: number, clientY: number) => {
    if (reducedMotion) return;
    x.set((clientX - rect.left - rect.width / 2) * 0.18);
    y.set((clientY - rect.top - rect.height / 2) * 0.28);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  const classes = cn(
    "group relative inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm transition-colors duration-200",
    variantClasses[variant],
    disabled && "pointer-events-none opacity-50",
    className
  );

  const content = <span className="inline-flex items-center gap-2">{children}</span>;

  if (href) {
    return (
      <motion.a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noopener noreferrer" : undefined}
        onMouseMove={(e: ReactMouseEvent<HTMLAnchorElement>) =>
          applyMagnetic(e.currentTarget.getBoundingClientRect(), e.clientX, e.clientY)
        }
        onMouseLeave={reset}
        style={{ x: springX, y: springY }}
        className={classes}
        data-cursor-hover
        {...aria}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      onMouseMove={(e: ReactMouseEvent<HTMLButtonElement>) =>
        applyMagnetic(e.currentTarget.getBoundingClientRect(), e.clientX, e.clientY)
      }
      onMouseLeave={reset}
      style={{ x: springX, y: springY }}
      className={classes}
      data-cursor-hover
      {...aria}
    >
      {content}
    </motion.button>
  );
}
