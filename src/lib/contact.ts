import { profile } from "@/data/profile";

export interface ContactFormValues {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export type ContactFormErrors = Partial<Record<keyof ContactFormValues, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_MESSAGE_LENGTH = 20;

export function validateContactForm(values: ContactFormValues): ContactFormErrors {
  const errors: ContactFormErrors = {};

  if (!values.name.trim()) {
    errors.name = "Please enter your name.";
  }

  if (!values.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.message.trim()) {
    errors.message = "Please enter a message.";
  } else if (values.message.trim().length < MIN_MESSAGE_LENGTH) {
    errors.message = `Message should be at least ${MIN_MESSAGE_LENGTH} characters.`;
  }

  return errors;
}

function buildMailtoUrl(values: ContactFormValues): string {
  const subject = values.subject.trim() || `Portfolio inquiry from ${values.name.trim()}`;
  const body = `${values.message.trim()}\n\n— ${values.name.trim()} (${values.email.trim()})`;

  const params = new URLSearchParams({ subject, body });
  return `mailto:${profile.email}?${params.toString().replace(/\+/g, "%20")}`;
}

/**
 * No backend is configured for this site, so submission opens the visitor's
 * email client with a pre-filled message (mailto fallback). This function is
 * the single place to swap in a real provider later — e.g. replace the body
 * with a `fetch()` call to Formspree, Web3Forms, Resend, or a custom API —
 * without touching the form component itself.
 */
export async function submitContactForm(values: ContactFormValues): Promise<void> {
  const url = buildMailtoUrl(values);
  window.location.href = url;
  // Yield a tick so callers can show a brief, honest "preparing" state
  // rather than an instant flash.
  await new Promise((resolve) => setTimeout(resolve, 350));
}
