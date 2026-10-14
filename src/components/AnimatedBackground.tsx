export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-void" aria-hidden="true">
      {/* base ambient glow — static, cheap, gives glass surfaces color to refract */}
      <div className="absolute inset-0 bg-glow-cyan-violet" />

      {/* two static color pools behind content (no animation = no repaint cost) */}
      <div
        className="absolute -left-1/4 -top-1/4 h-[70vh] w-[70vh] rounded-full opacity-20 blur-[120px]"
        style={{ background: "radial-gradient(circle, #4FD8C9 0%, transparent 70%)" }}
      />
      <div
        className="absolute -right-1/4 top-1/3 h-[60vh] w-[60vh] rounded-full opacity-[0.18] blur-[120px]"
        style={{ background: "radial-gradient(circle, #8E7FF2 0%, transparent 70%)" }}
      />

      {/* fine blueprint-style grid */}
      <div className="absolute inset-0 grid-overlay [mask-image:radial-gradient(ellipse_80%_60%_at_50%_0%,black_40%,transparent_100%)]" />
    </div>
  );
}
