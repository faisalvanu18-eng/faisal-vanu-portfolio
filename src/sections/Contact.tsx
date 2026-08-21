import { motion } from "framer-motion";
import { Github, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { profile, socialLinks } from "@/data/profile";
import SectionHeading from "@/components/SectionHeading";
import ContactForm from "@/components/ContactForm";

const socialIconMap = { github: Github, linkedin: Linkedin, instagram: Instagram };

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-full bg-glow-cyan-violet opacity-60"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's Build Something Meaningful"
          subtitle="Have a project idea, opportunity, or simply want to connect? Feel free to reach out."
        />

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:gap-14">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-3"
          >
            <ContactRow icon={Mail} label="Email" value={profile.email} href={`mailto:${profile.email}`} />
            <ContactRow icon={Phone} label="Phone" value={profile.phone} href={profile.phoneHref} />
            <ContactRow icon={MapPin} label="Location" value={profile.location} />

            <div className="panel mt-6 flex items-center gap-3 rounded-2xl p-5">
              {socialLinks.map((social) => {
                const Icon = socialIconMap[social.icon];
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    data-cursor-hover
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-ink-300 transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan/40 hover:text-cyan"
                  >
                    <Icon className="h-4 w-4" strokeWidth={1.75} />
                  </a>
                );
              })}
            </div>
          </motion.div>

          <ContactForm />
        </div>
      </div>
    </section>
  );
}

interface ContactRowProps {
  icon: typeof Mail;
  label: string;
  value: string;
  href?: string;
}

function ContactRow({ icon: Icon, label, value, href }: ContactRowProps) {
  const content = (
    <div className="panel flex items-center gap-4 rounded-2xl p-5 transition-colors duration-200 hover:border-cyan/30">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-cyan">
        <Icon className="h-4 w-4" strokeWidth={1.75} />
      </div>
      <div>
        <p className="font-mono text-[11px] uppercase tracking-widest text-ink-500">{label}</p>
        <p className="mt-0.5 text-sm text-ink-100">{value}</p>
      </div>
    </div>
  );

  if (href) {
    return (
      <a href={href} data-cursor-hover className="block">
        {content}
      </a>
    );
  }

  return content;
}
