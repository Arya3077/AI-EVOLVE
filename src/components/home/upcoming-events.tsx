"use client";

import { motion } from "framer-motion";

import { UPCOMING_EVENTS } from "@/data/events";
import { EventsCarousel } from "./events-carousel";

/* ------------------------------------------------------------------
   Events section — focused-centre carousel.

   The heading is unchanged. The carousel and the "Explore all events" CTA
   live in `events-carousel.tsx`; the CTA sits below the cards, connected to
   the section rather than pushed up into the header.
   ------------------------------------------------------------------ */

export function UpcomingEvents() {
  return (
    <section className="section-padding overflow-hidden border-b border-[var(--border)] bg-[var(--bg)]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: false,
            amount: 0.3,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-2 flex flex-col justify-between gap-5 md:flex-row md:items-end"
        >
          <div className="space-y-2">
            <h2 className="editorial-heading text-3xl font-black leading-none text-foreground sm:text-4xl md:text-5xl">
              DON&apos;T JUST WATCH.
              <br />
              <span className="text-[#FF7F00]">COME BUILD.</span>
            </h2>
          </div>
        </motion.div>
      </div>

      <EventsCarousel events={UPCOMING_EVENTS} />
    </section>
  );
}
