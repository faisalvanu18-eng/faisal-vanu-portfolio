import { useState, type ChangeEvent, type FormEvent, type ReactNode } from "react";
import { motion } from "framer-motion";
import { AlertCircle, CheckCircle2, Loader2, Send } from "lucide-react";
import { profile } from "@/data/profile";
import { validateContactForm, submitContactForm, type ContactFormErrors, type ContactFormValues } from "@/lib/contact";
import { cn } from "@/lib/utils";
import MagneticButton from "@/components/MagneticButton";

const initialValues: ContactFormValues = { name: "", email: "", subject: "", message: "" };

type Status = "idle" | "submitting" | "success" | "error";

const fieldClasses =
  "w-full rounded-xl border bg-white/[0.03] px-4 py-3 text-sm text-ink-100 placeholder:text-ink-500 outline-none transition-colors duration-200 focus:border-cyan/50";

export default function ContactForm() {
  const [values, setValues] = useState<ContactFormValues>(initialValues);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const validationErrors = validateContactForm(values);

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatus("idle");
      return;
    }

    setStatus("submitting");
    try {
      await submitContactForm(values);
      setStatus("success");
      setValues(initialValues);
    } catch {
      setStatus("error");
    }
  };

  return (
    <motion.form
      noValidate
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className="panel space-y-5 rounded-2xl p-6 sm:p-8"
    >
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <Field label="Name" name="name" error={errors.name}>
          <input
            id="name"
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={handleChange}
            placeholder="Your name"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={cn(fieldClasses, errors.name ? "border-red-400/60" : "border-white/10")}
          />
        </Field>

        <Field label="Email" name="email" error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={handleChange}
            placeholder="you@example.com"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={cn(fieldClasses, errors.email ? "border-red-400/60" : "border-white/10")}
          />
        </Field>
      </div>

      <Field label="Subject" name="subject" error={errors.subject} optional>
        <input
          id="subject"
          name="subject"
          type="text"
          value={values.subject}
          onChange={handleChange}
          placeholder="What's this about?"
          className={cn(fieldClasses, "border-white/10")}
        />
      </Field>

      <Field label="Message" name="message" error={errors.message}>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={handleChange}
          placeholder="Tell me a bit about the project or opportunity…"
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={cn(fieldClasses, "resize-none", errors.message ? "border-red-400/60" : "border-white/10")}
        />
      </Field>

      <MagneticButton type="submit" variant="primary" className="w-full sm:w-auto" disabled={status === "submitting"}>
        {status === "submitting" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" strokeWidth={2.25} />
            Preparing…
          </>
        ) : (
          <>
            <Send className="h-4 w-4" strokeWidth={2.25} />
            Send Message
          </>
        )}
      </MagneticButton>

      {status === "success" && (
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          role="status"
          className="flex items-start gap-2 text-sm text-emerald-300"
        >
          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" />
          Your email app should now open with the message ready to send. If it doesn&apos;t open, email me directly
          at{" "}
          <a href={`mailto:${profile.email}`} className="underline underline-offset-2">
            {profile.email}
          </a>
          .
        </motion.p>
      )}

      {status === "error" && (
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          role="alert"
          className="flex items-start gap-2 text-sm text-red-300"
        >
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          Something went wrong opening your email app. Please email me directly at{" "}
          <a href={`mailto:${profile.email}`} className="underline underline-offset-2">
            {profile.email}
          </a>
          .
        </motion.p>
      )}
    </motion.form>
  );
}

interface FieldProps {
  label: string;
  name: string;
  error?: string;
  optional?: boolean;
  children: ReactNode;
}

function Field({ label, name, error, optional, children }: FieldProps) {
  return (
    <div>
      <label htmlFor={name} className="mb-1.5 block text-sm text-ink-300">
        {label} {optional && <span className="text-ink-500">(optional)</span>}
      </label>
      {children}
      {error && (
        <p id={`${name}-error`} role="alert" className="mt-1.5 flex items-center gap-1.5 text-xs text-red-300">
          <AlertCircle className="h-3 w-3 shrink-0" />
          {error}
        </p>
      )}
    </div>
  );
}
