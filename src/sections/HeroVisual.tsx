import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";
import type { MouseEvent as ReactMouseEvent } from "react";
import { useTypewriter } from "@/hooks/useTypewriter";

const nodes = [
  { label: "Python", top: "14%", left: "8%", tone: "cyan" as const, delay: 0 },
  { label: "React", top: "10%", left: "68%", tone: "violet" as const, delay: 0.4 },
  { label: "FastAPI", top: "46%", left: "84%", tone: "cyan" as const, delay: 0.8 },
  { label: "PyTorch", top: "68%", left: "4%", tone: "violet" as const, delay: 1.2 },
  { label: "Flutter", top: "86%", left: "30%", tone: "cyan" as const, delay: 0.6 },
  { label: "YOLOv8", top: "82%", left: "74%", tone: "violet" as const, delay: 1.0 },
];

const nodePoints: [number, number][] = [
  [14, 18],
  [74, 15],
  [90, 50],
  [10, 72],
  [36, 90],
  [80, 86],
];

const terminalLines = [
  "$ python train.py --model yolov8",
  "$ pytest tests/ -q  →  24 passed",
  "$ flutter run --release",
  "$ uvicorn main:app --reload",
];

export default function HeroVisual() {
  const reducedMotion = useReducedMotion();

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const springX = useSpring(rotateX, { stiffness: 120, damping: 14 });
  const springY = useSpring(rotateY, { stiffness: 120, damping: 14 });

  const { text } = useTypewriter(terminalLines);

  const handleMouseMove = (e: ReactMouseEvent<HTMLDivElement>) => {
    if (reducedMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width - 0.5;
    const relY = (e.clientY - rect.top) / rect.height - 0.5;
    rotateY.set(relX * 10);
    rotateX.set(relY * -10);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
  };

  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-[440px]"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ perspective: 900 }}
    >
      <div className="absolute inset-0 rounded-full bg-glow-cyan-violet blur-2xl" aria-hidden="true" />

      <motion.div
        style={{ rotateX: springX, rotateY: springY, transformStyle: "preserve-3d" }}
        className="relative h-full w-full"
      >
        <svg className="absolute inset-0 h-full w-full overflow-visible" viewBox="0 0 100 100" aria-hidden="true">
          <defs>
            <linearGradient id="hero-line" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#4FD8C9" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#8E7FF2" stopOpacity="0.55" />
            </linearGradient>
          </defs>
          {nodePoints.map(([x, y], i) => (
            <motion.line
              key={i}
              x1="50"
              y1="50"
              x2={x}
              y2={y}
              stroke="url(#hero-line)"
              strokeWidth="0.4"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.3 + i * 0.12, ease: "easeOut" }}
            />
          ))}
        </svg>

        {/* central terminal card */}
        <div
          className="glass absolute left-1/2 top-1/2 w-[72%] -translate-x-1/2 -translate-y-1/2 rounded-xl p-4 shadow-glow"
          data-cursor-hover
        >
          <div className="mb-3 flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
            <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
            <span className="h-2 w-2 rounded-full bg-[#28c840]" />
            <span className="ml-auto flex items-center gap-1 font-mono text-[10px] text-ink-500">
              <span className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-cyan" />
              online
            </span>
          </div>
          <p className="min-h-[2.5em] break-all font-mono text-[11px] leading-relaxed text-cyan/90 sm:text-xs">
            {text}
            <span className="ml-0.5 inline-block h-3 w-[6px] animate-pulse-soft bg-cyan/80 align-middle" />
          </p>
        </div>

        {/* floating tech nodes */}
        {nodes.map((node) => (
          <motion.div
            key={node.label}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 + node.delay * 0.3 }}
            className="absolute animate-float-slow"
            style={{ top: node.top, left: node.left, animationDelay: `-${node.delay}s` }}
          >
            <span
              className={
                "glass inline-flex items-center rounded-full px-3 py-1.5 font-mono text-[11px] font-medium shadow-glow " +
                (node.tone === "cyan" ? "text-cyan" : "text-violet")
              }
            >
              {node.label}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
