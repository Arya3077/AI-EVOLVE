"use client";

import * as React from "react";
import { ArrowRight, Check, Mail } from "lucide-react";

import { CONTACT_EMAIL, CONTACT_TOPICS, type ContactTopic } from "@/data/contact";

/* ------------------------------------------------------------------
   Contact form.

   There is no backend in this project, so there is nowhere to POST. The
   submit handler composes a `mailto:` instead: it opens the visitor's own
   mail client with the fields pre-filled, so the form genuinely delivers a
   message with zero infrastructure and nothing silently swallows input.

   `buildMailto` is deliberately the only place that knows about this. To move
   to a real endpoint later (Formspree, Resend, an app/api route), replace the
   body of `handleSubmit` — the field state, validation and status messaging
   above it stay exactly as they are.
   ------------------------------------------------------------------ */

interface FormValues {
  name: string;
  email: string;
  topic: ContactTopic;
  message: string;
}

const EMPTY: FormValues = {
  name: "",
  email: "",
  topic: CONTACT_TOPICS[0],
  message: "",
};

/** Shared control styling. Focus is a 2px accent outline with an offset so it
 *  stays legible against both the page background and the `--bg-block` panels. */
const FIELD =
  "w-full rounded-xl border border-[var(--border)] bg-[var(--bg)] px-4 py-3 text-[var(--text)] " +
  "placeholder:text-[var(--text-muted)]/70 transition-colors duration-200 " +
  "focus:border-[var(--accent)] focus:outline-2 focus:outline-offset-2 focus:outline-[var(--accent)]";
const LABEL =
  "mb-1.5 block text-xs font-semibold uppercase tracking-[0.14em] text-[var(--text-muted)]";

/** `encodeURIComponent` on every interpolated value: a message containing
 *  `&`, `#` or a newline would otherwise truncate or corrupt the mailto. */
function buildMailto({ name, email, topic, message }: FormValues): string {
  const subject = `[AI Evolve] ${topic}`;
  const body = [
    `Name: ${name}`,
    `Reply-to: ${email}`,
    `Topic: ${topic}`,
    "",
    message,
  ].join("\n");

  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}

export function ContactForm() {
  const [values, setValues] = React.useState<FormValues>(EMPTY);
  const [errors, setErrors] = React.useState<Partial<Record<keyof FormValues, string>>>({});
  const [sent, setSent] = React.useState(false);

  const update =
    (field: keyof FormValues) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setValues((prev) => ({ ...prev, [field]: e.target.value }));
      // Clear a field's error as soon as the visitor edits it — re-validating
      // on every keystroke would scold mid-sentence.
      setErrors((prev) => (prev[field] ? { ...prev, [field]: undefined } : prev));
      setSent(false);
    };

  function validate(next: FormValues): Partial<Record<keyof FormValues, string>> {
    const found: Partial<Record<keyof FormValues, string>> = {};
    if (!next.name.trim()) found.name = "Please add your name.";
    if (!next.email.trim()) {
      found.email = "Please add an email so we can reply.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(next.email.trim())) {
      found.email = "That email address doesn't look right.";
    }
    if (next.message.trim().length < 10) {
      found.message = "A little more detail helps us route this (10+ characters).";
    }
    return found;
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length > 0) {
      // Move focus to the first problem so keyboard and screen-reader users
      // are not left guessing at the top of a long form.
      const first = Object.keys(found)[0];
      document.getElementById(`contact-${first}`)?.focus();
      return;
    }
    window.location.href = buildMailto(values);
    setSent(true);
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="w-full">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className={LABEL}>
            Name
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={update("name")}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "contact-name-error" : undefined}
            className={FIELD}
            placeholder="Ada Lovelace"
          />
          {errors.name && (
            <p id="contact-name-error" className="mt-1.5 text-xs text-[var(--accent)]">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="contact-email" className={LABEL}>
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            autoComplete="email"
            value={values.email}
            onChange={update("email")}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "contact-email-error" : undefined}
            className={FIELD}
            placeholder="you@company.com"
          />
          {errors.email && (
            <p id="contact-email-error" className="mt-1.5 text-xs text-[var(--accent)]">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="contact-topic" className={LABEL}>
          Topic
        </label>
        <select
          id="contact-topic"
          name="topic"
          value={values.topic}
          onChange={update("topic")}
          className={`${FIELD} appearance-none pr-10`}
          style={{
            /* Chevron drawn as a CSS mask rather than a background image: the
               mask takes its shape from the SVG's alpha channel, so the colour
               comes from `background-color` and therefore follows
               `--text-muted` in both themes. Inlining a stroke colour in the
               data URI would pin it to one theme. */
            maskImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'><path d='m6 9 6 6 6-6'/></svg>\")",
            WebkitMaskImage:
              "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'><path d='m6 9 6 6 6-6'/></svg>\")",
            maskSize: "1rem",
            WebkitMaskSize: "1rem",
            maskRepeat: "no-repeat",
            WebkitMaskRepeat: "no-repeat",
            maskPosition: "right 1rem center",
            WebkitMaskPosition: "right 1rem center",
          }}
        >
          {CONTACT_TOPICS.map((topic) => (
            <option key={topic} value={topic}>
              {topic}
            </option>
          ))}
        </select>
      </div>

      <div className="mt-5">
        <label htmlFor="contact-message" className={LABEL}>
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          value={values.message}
          onChange={update("message")}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
          className={`${FIELD} resize-y`}
          placeholder="Tell us what you're building, or what you'd like to see next."
        />
        {errors.message && (
          <p id="contact-message-error" className="mt-1.5 text-xs text-[var(--accent)]">
            {errors.message}
          </p>
        )}
      </div>

      <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          className="group inline-flex items-center justify-center gap-2 rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition-opacity duration-300 hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
        >
          Send message
          <span className="grid h-5 w-5 place-items-center rounded-full bg-white/25 transition-transform duration-300 group-hover:translate-x-0.5">
            <ArrowRight className="h-3 w-3" />
          </span>
        </button>

        <p
          role="status"
          aria-live="polite"
          className="flex min-h-5 items-center gap-1.5 text-xs text-[var(--text-muted)]"
        >
          {sent ? (
            <>
              <Check className="h-3.5 w-3.5 shrink-0 text-[var(--accent)]" />
              Opening your mail client — send the draft to finish.
            </>
          ) : (
            <>
              <Mail className="h-3.5 w-3.5 shrink-0" />
              Opens your mail client. No data is stored on this site.
            </>
          )}
        </p>
      </div>
    </form>
  );
}
