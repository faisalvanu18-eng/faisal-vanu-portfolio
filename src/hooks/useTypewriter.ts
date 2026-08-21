import { useEffect, useState } from "react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";

/**
 * Types out each line of `lines` one character at a time, pauses, then
 * moves to the next line and loops. When reduced motion is preferred,
 * skips the animation and returns the final line as static text.
 */
export function useTypewriter(lines: string[], speed = 32, pause = 1600) {
  const reducedMotion = usePrefersReducedMotion();
  const [lineIndex, setLineIndex] = useState(0);
  const [text, setText] = useState(reducedMotion ? lines[lines.length - 1] ?? "" : "");

  useEffect(() => {
    if (reducedMotion || lines.length === 0) return;

    let charIndex = 0;
    let timeout: ReturnType<typeof setTimeout>;
    const currentLine = lines[lineIndex] ?? "";

    const typeNext = () => {
      charIndex += 1;
      setText(currentLine.slice(0, charIndex));

      if (charIndex < currentLine.length) {
        timeout = setTimeout(typeNext, speed);
      } else {
        timeout = setTimeout(() => {
          setLineIndex((prev) => (prev + 1) % lines.length);
        }, pause);
      }
    };

    timeout = setTimeout(typeNext, speed);
    return () => clearTimeout(timeout);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [lineIndex, reducedMotion]);

  return { text, reducedMotion };
}
