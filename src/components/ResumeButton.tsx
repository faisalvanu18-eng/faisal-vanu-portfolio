import { useEffect, useState } from "react";
import { Download, FileClock } from "lucide-react";
import { profile } from "@/data/profile";
import MagneticButton from "@/components/MagneticButton";

export default function ResumeButton() {
  const [available, setAvailable] = useState<boolean | null>(null);

  useEffect(() => {
    let cancelled = false;

    fetch(profile.resumeUrl, { method: "HEAD" })
      .then((res) => {
        if (!cancelled) setAvailable(res.ok);
      })
      .catch(() => {
        if (!cancelled) setAvailable(false);
      });

    return () => {
      cancelled = true;
    };
  }, []);

  if (available === false) {
    return (
      <span className="glass-soft inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm text-ink-500">
        <FileClock className="h-4 w-4" strokeWidth={2} />
        Resume coming soon
      </span>
    );
  }

  return (
    <MagneticButton href={profile.resumeUrl} variant="secondary" aria-label="Download Faisal Vanu's resume (PDF)">
      <Download className="h-4 w-4" strokeWidth={2.25} />
      Download Resume
    </MagneticButton>
  );
}
