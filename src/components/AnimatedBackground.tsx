export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-void" aria-hidden="true">
      {/* base ambient glow */}
      <div className="absolute inset-0 bg-glow-cyan-violet" />

      {/* slow-drifting secondary glow for a whisper of life without being a spinner */}
      <div
        className="absolute -left-1/4 -top-1/4 h-[70vh] w-[70vh] rounded-full opacity-20 blur-[110px] animate-gradient-shift"
        style={{
          background: "radial-gradient(circle, #4FD8C9 0%, transparent 70%)",
          backgroundSize: "200% 200%",
        }}
      />
      <div
        className="absolute -right-1/4 top-1/3 h-[60vh] w-[60vh] rounded-full opacity-[0.18] blur-[110px] animate-gradient-shift"
        style={{
          background: "radial-gradient(circle, #8E7FF2 0%, transparent 70%)",
          backgroundSize: "200% 200%",
          animationDelay: "-4s",
        }}
      />

      {/* fine blueprint-style grid */}
      <div className="absolute inset-0 grid-overlay [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black_40%,transparent_100%)]" />

      {/* two small floating blurred accents, kept far from content contrast */}
      <div className="absolute left-[8%] top-[62%] h-40 w-40 rounded-full bg-cyan/10 blur-[70px] animate-float-slow" />
      <div
        className="absolute right-[12%] top-[18%] h-56 w-56 rounded-full bg-violet/10 blur-[90px] animate-float"
        style={{ animationDelay: "-2.5s" }}
      />

      {/* faint neural-network connective lines — echoes the hero's signature motif site-wide */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.07]"
        preserveAspectRatio="none"
        viewBox="0 0 1000 1400"
      >
        <defs>
          <linearGradient id="bg-line" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#4FD8C9" />
            <stop offset="100%" stopColor="#8E7FF2" />
          </linearGradient>
        </defs>
        <g stroke="url(#bg-line)" strokeWidth="1" fill="none">
          <path d="M60,120 L280,260 L520,180 L760,340" />
          <path d="M180,520 L420,460 L640,620 L900,540" />
          <path d="M100,900 L340,840 L560,980 L820,900" />
          <path d="M220,1180 L460,1120 L700,1260 L940,1180" />
        </g>
        <g fill="#4FD8C9">
          <circle cx="280" cy="260" r="3" />
          <circle cx="640" cy="620" r="3" />
          <circle cx="560" cy="980" r="3" />
        </g>
        <g fill="#8E7FF2">
          <circle cx="520" cy="180" r="3" />
          <circle cx="420" cy="460" r="3" />
          <circle cx="700" cy="1260" r="3" />
        </g>
      </svg>
    </div>
  );
}
