import { useEffect, useState } from "react";

/** True on touch/coarse-pointer devices — used to disable desktop-only chrome like the custom cursor. */
export function useIsTouchDevice(): boolean {
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(pointer: coarse)");
    setIsTouch(query.matches);

    const handler = (event: MediaQueryListEvent) => setIsTouch(event.matches);
    query.addEventListener("change", handler);
    return () => query.removeEventListener("change", handler);
  }, []);

  return isTouch;
}
