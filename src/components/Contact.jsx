import { useRef, useState } from "react";
import {
  FiAlertCircle,
  FiCheckCircle,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiPhone,
  FiSend,
} from "react-icons/fi";
import { personal } from "../data/portfolioData";
import SectionHeading from "./ui/SectionHeading";
import Reveal from "./ui/Reveal";

const MESSAGE_LIMIT = 1000;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const FIELD_NAMES = ["name", "email", "subject", "message"];

// Returns an error message for one field, or "" when the value is valid.
function validateField(name, value) {
  const v = value.trim();
  switch (name) {
    case "name":
      if (!v) return "Please enter your name.";
      if (v.length < 2) return "Name must be at least 2 characters.";
      return "";
    case "email":
      if (!v) return "Please enter your email address.";
      if (!EMAIL_PATTERN.test(v)) return "Please enter a valid email address.";
      return "";
    case "subject":
      if (!v) return "Please enter a subject.";
      if (v.length < 3) return "Subject must be at least 3 characters.";
      return "";
    case "message":
      if (!v) return "Please write a message.";
      if (v.length < 10) return "Message must be at least 10 characters.";
      if (v.length > MESSAGE_LIMIT) return `Message must be ${MESSAGE_LIMIT} characters or fewer.`;
      return "";
    default:
      return "";
  }
}

// Builds a mailto: link addressed to you with the visitor's text filled in.
// To use a real email service later, replace this with a request to that service.
function buildMailto(values) {
  const subject = values.subject.trim();
  const body = `${values.message.trim()}\n\n---\nFrom: ${values.name.trim()} (${values.email.trim()})`;
  return `mailto:${personal.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

const fieldClass = (hasError) =>
  `w-full rounded-xl border bg-ink-950/60 px-4 py-3 text-slate-100 placeholder:text-slate-500 transition-colors focus:border-cyan-400 ${
    hasError ? "border-rose-400/70" : "border-white/15"
  }`;

// Label + control + error message wrapper
function Field({ id, label, error, children }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-sm font-medium text-slate-200">
        {label}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 flex items-center gap-1.5 text-sm text-rose-300">
          <FiAlertCircle aria-hidden="true" className="h-4 w-4 shrink-0" />
          {error}
        </p>
      )}
    </div>
  );
}

// Contact cards: a real link when a URL exists, otherwise a clearly marked placeholder.
const contactItems = [
  {
    icon: FiMail,
    label: "Email",
    value: personal.email,
    href: `mailto:${personal.email}`,
  },
  {
    icon: FiPhone,
    label: "Phone",
    value: personal.phone,
    href: personal.phoneHref,
  },
  {
    icon: FiGithub,
    label: "GitHub",
    value: personal.github ? "View GitHub profile" : "Profile link coming soon",
    href: personal.github,
    external: true,
  },
  {
    icon: FiLinkedin,
    label: "LinkedIn",
    value: personal.linkedin ? "View LinkedIn profile" : "Profile link coming soon",
    href: personal.linkedin,
    external: true,
  },
];

export default function Contact() {
  const [values, setValues] = useState({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState({});
  const [mailtoHref, setMailtoHref] = useState("");
  const fieldRefs = useRef({});

  const hasErrors = Object.values(errors).some(Boolean);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setMailtoHref(""); // hide the "sent" message once the visitor edits again
    // Once a field shows an error, re-check it while typing so it clears immediately
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    // Don't flag untouched empty fields just because someone tabbed past them
    if (value.trim() === "" && !errors[name]) return;
    setErrors((prev) => ({ ...prev, [name]: validateField(name, value) }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const nextErrors = {};
    FIELD_NAMES.forEach((name) => {
      const message = validateField(name, values[name]);
      if (message) nextErrors[name] = message;
    });
    setErrors(nextErrors);

    const firstInvalid = FIELD_NAMES.find((name) => nextErrors[name]);
    if (firstInvalid) {
      setMailtoHref("");
      fieldRefs.current[firstInvalid]?.focus();
      return;
    }

    // Valid: open the visitor's email app with the message ready to send
    const href = buildMailto(values);
    setMailtoHref(href);
    window.location.href = href;
  };

  // Props shared by every input so ids, errors and refs stay consistent
  const inputProps = (name) => ({
    id: name,
    name,
    value: values[name],
    onChange: handleChange,
    onBlur: handleBlur,
    ref: (el) => {
      fieldRefs.current[name] = el;
    },
    required: true,
    "aria-invalid": errors[name] ? "true" : "false",
    "aria-describedby": errors[name] ? `${name}-error` : undefined,
    className: fieldClass(errors[name]),
  });

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative isolate overflow-hidden border-t border-white/5 py-20 sm:py-28"
    >
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-0 top-1/4 h-80 w-80 rounded-full bg-blue-600/15 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-violet-600/15 blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          id="contact-heading"
          eyebrow="Contact"
          title="Let's Build Something Great Together"
          description="I'm open to opportunities where I can contribute my development skills, continue learning, and build useful software applications."
        />

        <div className="grid items-start gap-8 lg:grid-cols-5">
          {/* Contact details */}
          <ul className="space-y-4 lg:col-span-2">
            {contactItems.map(({ icon: Icon, label, value, href, external }, i) => {
              const inner = (
                <>
                  <span
                    aria-hidden="true"
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500/25 to-violet-500/25 text-cyan-300"
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs font-semibold uppercase tracking-wider text-slate-500">
                      {label}
                    </span>
                    <span className="block break-words font-medium text-white">{value}</span>
                  </span>
                </>
              );

              return (
                <Reveal as="li" key={label} delay={i * 80}>
                  {href ? (
                    <a
                      href={href}
                      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="flex items-center gap-4 rounded-2xl border border-white/10 bg-ink-900/70 p-4 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/40"
                    >
                      {inner}
                    </a>
                  ) : (
                    // Placeholder state: not a link, because no URL has been added yet.
                    // Add the URL in src/data/portfolioData.js to turn this into a link.
                    <div className="flex items-center gap-4 rounded-2xl border border-dashed border-white/15 bg-ink-900/40 p-4 text-slate-400">
                      {inner}
                    </div>
                  )}
                </Reveal>
              );
            })}
          </ul>

          {/* Contact form */}
          <Reveal className="lg:col-span-3" delay={120}>
            <form
              onSubmit={handleSubmit}
              noValidate
              aria-label="Contact form"
              className="rounded-2xl border border-white/10 bg-ink-900/70 p-6 sm:p-8"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <Field id="name" label="Name" error={errors.name}>
                  <input type="text" autoComplete="name" placeholder="Your name" {...inputProps("name")} />
                </Field>
                <Field id="email" label="Email" error={errors.email}>
                  <input
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    {...inputProps("email")}
                  />
                </Field>
              </div>

              <div className="mt-5">
                <Field id="subject" label="Subject" error={errors.subject}>
                  <input type="text" placeholder="What is this about?" {...inputProps("subject")} />
                </Field>
              </div>

              <div className="mt-5">
                <Field id="message" label="Message" error={errors.message}>
                  <textarea
                    rows={6}
                    maxLength={MESSAGE_LIMIT}
                    placeholder="Write your message here..."
                    {...inputProps("message")}
                  />
                </Field>
                <p className="mt-1.5 text-right text-xs text-slate-500">
                  {values.message.length}/{MESSAGE_LIMIT}
                </p>
              </div>

              <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <button type="submit" className="btn btn-primary">
                  <FiSend aria-hidden="true" className="h-4 w-4" />
                  Send Message
                </button>
                <p className="text-sm text-slate-400">
                  This opens your email app with the message ready to send.
                </p>
              </div>

              {/* Status messages (announced to screen readers) */}
              <div aria-live="polite" className="mt-5 empty:hidden">
                {hasErrors && (
                  <p className="flex items-center gap-2 rounded-xl border border-rose-400/30 bg-rose-400/10 px-4 py-3 text-sm text-rose-200">
                    <FiAlertCircle aria-hidden="true" className="h-4 w-4 shrink-0" />
                    Please fix the highlighted fields and try again.
                  </p>
                )}
                {mailtoHref && !hasErrors && (
                  <div className="rounded-xl border border-emerald-400/30 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-100">
                    <p className="flex items-center gap-2 font-medium">
                      <FiCheckCircle aria-hidden="true" className="h-4 w-4 shrink-0" />
                      Your email app should now open with your message ready.
                    </p>
                    <p className="mt-2 text-emerald-100/90">
                      If nothing opened,{" "}
                      <a href={mailtoHref} className="font-semibold underline underline-offset-2">
                        try again
                      </a>{" "}
                      or email me directly at{" "}
                      <a href={`mailto:${personal.email}`} className="font-semibold underline underline-offset-2">
                        {personal.email}
                      </a>
                      .
                    </p>
                  </div>
                )}
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}