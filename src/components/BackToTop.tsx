import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useScrollProgress } from "@/hooks/useScrollProgress";

export default function BackToTop() {
  const { scrolled } = useScrollProgress(600);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {scrolled && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          initial={{ opacity: 0, scale: 0.7, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 10 }}
          whileHover={{ y: -3 }}
          transition={{ duration: 0.2 }}
          className="glass fixed bottom-6 right-5 z-[60] flex h-11 w-11 items-center justify-center rounded-full text-ink-100 md:bottom-8 md:right-8"
        >
          <ArrowUp className="h-4 w-4" strokeWidth={2.25} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
