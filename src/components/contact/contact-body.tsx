"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin, MessageCircle } from "lucide-react";

import { ContactForm } from "@/components/contact/contact-form";
import { PageBackdrop } from "@/components/page-backdrop";
import { CONTACT_CHANNELS, CONTACT_EMAIL } from "@/data/contact";
import { cardIn, fadeUp } from "@/lib/motion";

/* ------------------------------------------------------------------
   The animated half of the contact page.

   It lives in its own file because `page.tsx` must stay a SERVER component
   in order to export `metadata` — a `"use client"` file cannot — while the
   entrance needs `useReducedMotion` and `motion`, which cannot run on the
   server. Adding hooks straight into the server page 500s the route.

   Everything visual is token-driven — `--bg`, `--text`, `--text-muted`,
   `--accent`, `--accent-secondary`, `--bg-block`, `--border` — so both
   themes come from the same markup and `data-theme` on <html> is the only
   switch. The decorative layer is the same <PageBackdrop /> the other inner
   pages use, so the four routes are identical rather than four
   approximations.
   ------------------------------------------------------------------ */

const REASONS = [
  {
    icon: MessageCircle,
    title: "Ask or suggest",
    body: "Questions about an event, an idea for the community, or feedback on what we're building — all welcome.",
  },
  {
    icon: MapPin,
    title: "Run something locally",
    body: "Want to host a workshop or meetup in your city? We'll help you find a room, a crowd, and speakers.",
  },
  {
    icon: ArrowUpRight,
    title: "Partner with us",
    body: "Sponsoring, venue support, or lending compute and tools to keep sessions free for attendees.",
  },
];

export function ContactBody() {
  const reduced = useReducedMotion() === true;
  const fades = fadeUp(reduced);
  const cards = cardIn(reduced);

  return (
    <div className="relative isolate overflow-hidden bg-[var(--bg)]">
      <PageBackdrop />

      <div className="container-custom py-16 sm:py-20 lg:py-24">
        {/* Page header. `max-w-4xl` so the headline sets on one line at desktop
            widths instead of orphaning the accent word. */}
        <motion.header
          className="max-w-4xl"
          custom={0.1}
          variants={fades}
          initial="hidden"
          animate="visible"
        >
          <p className="font-mono text-xs font-bold uppercase tracking-[0.26em] text-[var(--text-muted)]">
            Get in touch
          </p>
          <h1 className="mt-4 text-[clamp(2rem,6vw,3.25rem)] font-extrabold leading-[1.05] tracking-[-0.035em] text-[var(--text)]">
            Let&rsquo;s build something{" "}
            <span className="text-[var(--accent-secondary)]">together</span>
          </h1>
          <p className="mt-5 text-base leading-relaxed text-[var(--text-muted)] sm:text-lg">
            Whether you want to run a session in your city, speak at one of ours,
            sponsor the community, or just ask what we&rsquo;re up to — this is the
            fastest way to reach us.
          </p>
        </motion.header>

        {/* Why write to us */}
        <section aria-labelledby="contact-reasons" className="mt-14 sm:mt-16">
          <motion.h2
            id="contact-reasons"
            className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--text-muted)]"
            custom={0.18}
            variants={fades}
            initial="hidden"
            animate="visible"
          >
            What people write in about
          </motion.h2>
          <ul className="mt-6 grid gap-5 sm:grid-cols-3">
            {REASONS.map(({ icon: Icon, title, body }, index) => (
              <motion.li
                key={title}
                custom={index}
                variants={cards}
                initial="hidden"
                animate="visible"
                className="rounded-2xl border border-[var(--border)] p-5 transition-colors duration-300 hover:border-[var(--accent)]"
              >
                <span className="grid h-10 w-10 place-items-center rounded-full bg-[var(--bg-block)] text-[var(--accent)]">
                  <Icon className="h-4 w-4" />
                </span>
                <h3 className="mt-4 text-sm font-bold uppercase tracking-wide text-[var(--text)]">
                  {title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text-muted)]">
                  {body}
                </p>
              </motion.li>
            ))}
          </ul>
        </section>

        {/* Channels + form */}
        <div className="mt-16 grid gap-10 lg:mt-20 lg:grid-cols-12 lg:gap-12">
          <section aria-labelledby="contact-channels" className="lg:col-span-4">
            <motion.h2
              id="contact-channels"
              className="text-xs font-bold uppercase tracking-[0.18em] text-[var(--text-muted)]"
              custom={0.24}
              variants={fades}
              initial="hidden"
              animate="visible"
            >
              Other ways to reach us
            </motion.h2>

            <ul className="mt-6 space-y-3">
              {CONTACT_CHANNELS.map((channel, index) => {
                const inner = (
                  <>
                    <span className="min-w-0">
                      <span className="block text-sm font-semibold text-[var(--text)]">
                        {channel.label}
                      </span>
                      <span className="mt-0.5 block truncate text-sm text-[var(--text-muted)]">
                        {channel.handle}
                      </span>
                    </span>
                    {channel.kind === "mailto" ? (
                      <Mail className="h-4 w-4 shrink-0 text-[var(--accent)]" />
                    ) : (
                      <ArrowUpRight className="h-4 w-4 shrink-0 text-[var(--text-muted)] transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    )}
                  </>
                );

                return (
                  <motion.li
                    key={channel.id}
                    custom={index}
                    variants={cards}
                    initial="hidden"
                    animate="visible"
                  >
                    <a
                      href={channel.href}
                      {...(channel.kind === "external"
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}
                      className="group flex items-center justify-between gap-4 rounded-2xl border border-[var(--border)] px-5 py-4 transition-colors duration-300 hover:border-[var(--accent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
                    >
                      {inner}
                    </a>
                  </motion.li>
                );
              })}
            </ul>

            <p className="mt-6 text-sm leading-relaxed text-[var(--text-muted)]">
              Prefer to just show up?{" "}
              {/* Link text uses --text with an accent rule, not accent-coloured
                  text: #ff6a2b on the light background measures 2.6:1, well
                  under the 4.5:1 AA threshold for body copy. The underline
                  still carries the "this is a link" signal. */}
              <a
                href="/events"
                className="font-semibold text-[var(--text)] underline decoration-[var(--accent)] decoration-2 underline-offset-4 transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
              >
                Browse the next event
              </a>{" "}
              — most sessions need no registration.
            </p>
          </section>

          <motion.section
            aria-labelledby="contact-form-heading"
            className="rounded-3xl border border-[var(--border)] p-6 sm:p-8 lg:col-span-8"
            custom={0.3}
            variants={fades}
            initial="hidden"
            animate="visible"
          >
            <h2
              id="contact-form-heading"
              className="text-lg font-bold tracking-tight text-[var(--text)]"
            >
              Send us a message
            </h2>
            <p className="mt-1.5 text-sm text-[var(--text-muted)]">
              We read everything. Fields marked by the browser are required.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </motion.section>
        </div>

        {/* Fallback for anyone whose mail client is blocked */}
        <p className="mt-12 text-sm text-[var(--text-muted)]">
          No mail client? Write to{" "}
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="font-semibold text-[var(--text)] underline decoration-[var(--accent)] decoration-2 underline-offset-4 transition-opacity hover:opacity-80 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
          >
            {CONTACT_EMAIL}
          </a>{" "}
          directly.
        </p>
      </div>
    </div>
  );
}
