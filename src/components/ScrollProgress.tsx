import { useScrollProgress } from "@/hooks/useScrollProgress";

export default function ScrollProgress() {
  const { progress } = useScrollProgress();

  return (
    <div className="fixed inset-x-0 top-0 z-[70] h-[2px] bg-transparent" aria-hidden="true">
      <div
        className="h-full bg-gradient-to-r from-cyan to-violet"
        style={{ width: `${progress * 100}%`, transition: "width 120ms linear" }}
      />
    </div>
  );
}
