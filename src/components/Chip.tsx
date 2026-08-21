import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ChipProps {
  children: ReactNode;
  tone?: "default" | "cyan" | "violet";
  className?: string;
}

const toneClasses: Record<NonNullable<ChipProps["tone"]>, string> = {
  default: "border-white/10 bg-white/[0.03] text-ink-300",
  cyan: "border-cyan/25 bg-cyan/[0.06] text-cyan",
  violet: "border-violet/25 bg-violet/[0.08] text-violet",
};

export default function Chip({ children, tone = "default", className }: ChipProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-3 py-1 font-mono text-[11px] tracking-wide transition-all duration-200 hover:-translate-y-0.5",
        toneClasses[tone],
        className
      )}
    >
      {children}
    </span>
  );
}
