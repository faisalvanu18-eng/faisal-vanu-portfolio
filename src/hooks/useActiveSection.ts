import { useEffect, useRef, useState } from "react";

/**
 * Returns whichever section is currently "active" for nav highlighting.
 *
 * Uses a scroll-position approach rather than IntersectionObserver bands:
 * we pick the section whose top has passed a fixed line near the top of the
 * viewport (and whose bottom hasn't yet). This is reliable on tall sections,
 * short sections, and when jumping to an anchor via the menu — all cases where
 * a thin IntersectionObserver rootMargin band can get "stuck".
 */
export function useActiveSection(ids: string[]): string {
  const [activeId, setActiveId] = useState(ids[0] ?? "");
  const frame = useRef<number | null>(null);

  // Join ids into a stable primitive so the effect doesn't re-run every render
  // (a new array reference would otherwise retrigger it constantly).
  const key = ids.join("|");

  useEffect(() => {
    const sectionIds = key ? key.split("|") : [];
    if (sectionIds.length === 0) return;

    const getSections = () =>
      sectionIds
        .map((id) => document.getElementById(id))
        .filter((el): el is HTMLElement => el !== null);

    const compute = () => {
      frame.current = null;
      const sections = getSections();
      if (sections.length === 0) return;

      // The "reading line" sits a bit below the top of the viewport, roughly
      // where the eye focuses. Whatever section crosses it is active.
      const line = window.innerHeight * 0.3;

      let current = sections[0].id;
      for (const section of sections) {
        const { top } = section.getBoundingClientRect();
        // Section has scrolled up past the reading line → it's at/above focus.
        if (top - line <= 0) {
          current = section.id;
        }
      }

      // Snap the last section active when the page is scrolled to the bottom,
      // so short trailing sections (e.g. Contact) still light up.
      const scrolledToBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;
      if (scrolledToBottom) {
        current = sections[sections.length - 1].id;
      }

      setActiveId((prev) => (prev === current ? prev : current));
    };

    const onScroll = () => {
      if (frame.current !== null) return;
      frame.current = window.requestAnimationFrame(compute);
    };

    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    // Anchor jumps change hash without a scroll event firing immediately.
    window.addEventListener("hashchange", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("hashchange", onScroll);
      if (frame.current !== null) cancelAnimationFrame(frame.current);
    };
  }, [key]);

  return activeId;
}
