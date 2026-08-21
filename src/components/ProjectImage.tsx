import { useState } from "react";
import { initials, cn } from "@/lib/utils";

interface ProjectImageProps {
  src: string;
  alt: string;
  title: string;
  className?: string;
}

/**
 * Renders the real screenshot when it exists. If the file hasn't been added
 * yet (or fails to load), falls back to an elegant generated placeholder
 * instead of a broken-image icon — swap the file into /public/projects and
 * this automatically starts showing it, no code changes required.
 */
export default function ProjectImage({ src, alt, title, className }: ProjectImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={cn(
          "relative flex h-full w-full items-center justify-center overflow-hidden bg-navy-800",
          className
        )}
        role="img"
        aria-label={alt}
      >
        <div className="absolute inset-0 bg-glow-cyan-violet opacity-70" />
        <div className="absolute inset-0 grid-overlay opacity-40" />
        <span className="relative font-display text-4xl font-semibold tracking-wide text-ink-100/80 sm:text-5xl">
          {initials(title)}
        </span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      onError={() => setFailed(true)}
      className={cn("h-full w-full object-cover", className)}
    />
  );
}
