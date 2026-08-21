import { useEffect, useState } from "react";

interface ScrollState {
  progress: number;
  scrolled: boolean;
}

/** progress: 0-1 fraction of page scrolled. scrolled: true once past a small threshold. */
export function useScrollProgress(threshold = 40): ScrollState {
  const [state, setState] = useState<ScrollState>({ progress: 0, scrolled: false });

  useEffect(() => {
    let ticking = false;

    const update = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0;
      setState({ progress, scrolled: scrollTop > threshold });
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return state;
}
