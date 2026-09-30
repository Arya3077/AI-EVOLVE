"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";

import { DoodleSparkle } from "./hero-doodles";
import styles from "./hero.module.css";
import backdrop from "@/components/page-backdrop.module.css";
import { TWINKLE, fadeUp, markIn } from "@/lib/motion";

/* ------------------------------------------------------------------
   Entrance timeline (seconds). One source of truth so the hero reads as a
   single choreographed sequence rather than independently-timed parts.

   0.00  headline line 1   0.32  CTA row
   0.12  headline line 2   0.15 → 0.75  sparkles, in five steps
   0.20  subtext
   ------------------------------------------------------------------ */

/* The CTA keeps its lift; Framer owns the transform so it does not fight the
   Tailwind hover utilities, which are opacity-only. */
const SPRING = { type: "spring", stiffness: 450, damping: 18, mass: 0.7 } as const;

/* Hoisted to module scope: calling motion.create() during render would hand
   back a new component type every pass, remounting the link on each update. */
const MotionLink = motion.create(Link);

export function Hero() {
  const reduced = useReducedMotion() === true;
  const fades = fadeUp(reduced);
  const marks = markIn(reduced);

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative isolate overflow-hidden bg-[var(--bg)]"
    >
      {/* ----------------------------------------------------------------
          Decoration. Two layers, both `aria-hidden` and behind the content:
          soft colour blocks near the edges, then the ✦ glyphs.

          Everything is absolutely positioned and clipped by the section, so
          the blocks read as entering from off-canvas rather than as a
          background image. Every colour is a token — nothing here is
          theme-specific.
      ----------------------------------------------------------------- */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Colour blocks. The two top blocks are deliberately SHORT: the
            headline's top edge sits between 20% and 27% of the section from the
            narrowest phone to the widest desktop, so a top block that ends by
            ~14% can never reach it at any width. The bottom two carry the
            "large block" character instead, where there is acres of clear space
            below the CTA row. Widths are percentages so they stay pinned to
            the corners; all four sit outside the text column. */}
        <div className={`${styles.block} -left-[6%] -top-[10%] h-[24%] w-[26%] sm:w-[24%] lg:w-[26%]`} />
        <div className={`${styles.block} -right-[4%] -top-[6%] h-[20%] w-[22%] sm:w-[20%] lg:w-[22%]`} />
        <div className={`${styles.block} -bottom-[18%] -left-[8%] hidden h-[44%] w-[22%] sm:block`} />
        <div className={`${styles.block} -bottom-[12%] right-[-8%] h-[48%] w-[24%]`} />

        {/* Sparkles — sparse and asymmetric. Two animations per mark: a Framer
            spring entrance on the wrapper, and the CSS twinkle on the SVG
            inside.

            The periods are deliberately non-harmonic and spread over nearly
            3x (4.7s → 12.7s). Commensurate periods drift into and out of phase
            together, so the stars visibly pulse in unison every cycle; these
            share no common period, so the alignment never settles. The
            negative delays set each starting phase ~0.2 apart around the
            cycle, and the first star sits above the headline on mobile (where
            the text fills the width), moving to the left margin from `sm` up. */}
        <motion.span
          className="absolute left-[16%] top-[8%] sm:left-[18%] sm:top-[16%]"
          custom={0.15}
          variants={marks}
          initial="hidden"
          animate="visible"
        >
          <DoodleSparkle
            className={`${backdrop.twinkle} block h-4 w-4 text-[var(--accent)] sm:h-5 sm:w-5`}
            style={TWINKLE[0]}
          />
        </motion.span>
        <motion.span
          className="absolute right-[16%] top-[7%] hidden sm:top-[14%] sm:block"
          custom={0.3}
          variants={marks}
          initial="hidden"
          animate="visible"
        >
          <DoodleSparkle
            className={`${backdrop.twinkle} block h-5 w-5 text-[var(--accent-secondary)]`}
            style={TWINKLE[1]}
          />
        </motion.span>
        <motion.span
          className="absolute right-[9%] top-[52%] hidden sm:block"
          custom={0.45}
          variants={marks}
          initial="hidden"
          animate="visible"
        >
          <DoodleSparkle
            className={`${backdrop.twinkle} block h-3.5 w-3.5 text-[var(--accent)]`}
            style={TWINKLE[2]}
          />
        </motion.span>
        <motion.span
          className="absolute left-[7%] bottom-[22%] hidden md:block"
          custom={0.6}
          variants={marks}
          initial="hidden"
          animate="visible"
        >
          <DoodleSparkle
            className={`${backdrop.twinkle} block h-4 w-4 text-[var(--accent)]`}
            style={TWINKLE[3]}
          />
        </motion.span>
        <motion.span
          className="absolute right-[22%] bottom-[14%] hidden md:block"
          custom={0.75}
          variants={marks}
          initial="hidden"
          animate="visible"
        >
          <DoodleSparkle
            className={`${backdrop.twinkle} block h-5 w-5 text-[var(--accent-secondary)]`}
            style={TWINKLE[4]}
          />
        </motion.span>
      </div>

      {/* ----------------------------------------------------------------
          One open canvas, centred. No panel, no border, no card: the
          headline, subtext and CTA row sit directly on `--bg` and the
          blocks do the framing.
      ----------------------------------------------------------------- */}
      {/* The `min-h` only starts to bind on larger screens; on a phone the
          vertical padding alone gives the section its air, so the hero does
          not open a dead block under the CTA row. */}
      <div className="container-custom relative flex min-h-[58svh] flex-col items-center justify-center py-20 sm:min-h-[64svh] sm:py-24 lg:min-h-[74svh] lg:py-28">
        {/* 1. Headline — two lines, one word in the secondary accent.

            The floor is 1.7rem deliberately low: the first line is 26 glyphs
            wide, so anything above ~28px stops fitting on a 320px screen and
            the line breaks, orphaning "evolve". The vw term takes over from
            there and the 3.4rem cap keeps it from sprawling on desktop. */}
        <h1
          id="hero-heading"
          className={`${styles.display} w-full text-center text-[clamp(1.7rem,8.2vw,3.4rem)] text-[var(--text)] lg:text-[clamp(2.6rem,5.6vw,4.4rem)]`}
        >
          <motion.span
            className="block"
            custom={0}
            variants={fades}
            initial="hidden"
            animate="visible"
          >
            Build, learn, and{" "}
            <span className="text-[var(--accent-secondary)]">evolve</span>
          </motion.span>
          <motion.span
            className="block"
            custom={0.12}
            variants={fades}
            initial="hidden"
            animate="visible"
          >
            with AI Evolve
          </motion.span>
        </h1>

        {/* 2. Supporting copy. The `whitespace-nowrap` guard keeps
            "open-source" from splitting at its own hyphen. */}
        <motion.p
          className="mt-6 max-w-[30rem] text-center text-base leading-relaxed text-[var(--text-muted)] sm:mt-7 sm:text-lg"
          custom={0.2}
          variants={fades}
          initial="hidden"
          animate="visible"
        >
          Signals from companies, global access, and the support to build and ship
          beyond borders.
        </motion.p>

        {/* 3. CTA row. Stacked below `sm` so the primary pill never has to
            share a row with the outline pill, and neither label wraps. */}
        <motion.div
          className="mt-9 flex w-full flex-col items-center gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:items-center sm:gap-4"
          custom={0.32}
          variants={fades}
          initial="hidden"
          animate="visible"
        >
          {/* Primary — solid accent, white label, arrow in a circular badge. */}
          <MotionLink
            href="/resources"
            whileHover={reduced ? undefined : { y: -2 }}
            whileTap={reduced ? undefined : { scale: 0.97 }}
            transition={SPRING}
            className="group inline-flex shrink-0 items-center gap-2.5 whitespace-nowrap rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-white transition-opacity duration-300 hover:opacity-90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] sm:px-7 sm:py-3.5 sm:text-base"
          >
            <span className="grid h-6 w-6 shrink-0 place-items-center rounded-full bg-white/25 transition-transform duration-300 group-hover:translate-x-0.5">
              <ArrowRight className="h-3.5 w-3.5" />
            </span>
            Explore Signals
          </MotionLink>

          {/* Secondary — outline only, transparent, label in the theme's own
              text colour. */}
          <Link
            href="https://chat.whatsapp.com/LewBKchX7amCBBWIKqHDGv"
            className="inline-flex shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full border border-[var(--accent)] px-6 py-3 text-sm font-semibold text-[var(--text)] transition-colors duration-300 hover:bg-[var(--accent)] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] sm:px-7 sm:py-3.5 sm:text-base"
          >
            Join community
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
