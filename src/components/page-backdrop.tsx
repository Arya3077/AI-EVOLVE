"use client";

import { motion, useReducedMotion } from "framer-motion";

import { DoodleSparkle } from "@/components/home/hero/hero-doodles";
import { TWINKLE, fadeUp, markIn } from "@/lib/motion";
import styles from "./page-backdrop.module.css";

/* ------------------------------------------------------------------
   The decorative layer behind every inner page.

   One component so /events, /gallery, /resources and /contact are provably
   identical rather than four hand-copied approximations. Mount it as the
   first child of a `relative isolate overflow-hidden` wrapper; it fills that
   wrapper and sits behind the content on `-z-10`.

   Two animations per sparkle, on two elements, because CSS animations
   outrank inline styles in the cascade and a `transform` loop on the same
   node as the Framer entrance would mask it.

   POSITIONING IS THE FRAGILE PART. An inner page's height comes from its
   content, so any `top-[26%]` lands somewhere different at every viewport —
   an earlier hand-written version of this layer did exactly that and put
   blocks behind the copy between 640px and 1024px. So the blocks live only
   in the two bands every page has free — above the header, and below the
   last line — and the side pieces are `2xl` only, which is the first
   breakpoint where the 1280px container is genuinely narrower than the
   viewport and real margin exists. Verified clear of text ink from 360px to
   2560px.
   ------------------------------------------------------------------ */

const BLOCKS = [
  { className: "absolute -left-[7%] -top-28 h-44 w-64", delay: 0.05 },
  { className: "absolute -right-[7%] -top-28 h-40 w-56", delay: 0.12 },
  { className: "absolute -bottom-12 -right-[5%] hidden h-56 w-56 2xl:block", delay: 0.2 },
];

const SPARKS = [
  { className: "absolute left-[42%] top-8 h-4 w-4", color: "var(--accent)", at: 0.3, timing: TWINKLE[0] },
  { className: "absolute right-[10%] top-6 h-5 w-5", color: "var(--accent-secondary)", at: 0.42, timing: TWINKLE[1] },
  { className: "absolute left-[5%] top-[86%] hidden h-4 w-4 2xl:block", color: "var(--accent)", at: 0.54, timing: TWINKLE[2] },
  { className: "absolute right-[6%] top-[72%] hidden h-5 w-5 2xl:block", color: "var(--accent-secondary)", at: 0.66, timing: TWINKLE[3] },
];

export function PageBackdrop() {
  const reduced = useReducedMotion() === true;
  const fades = fadeUp(reduced);
  const marks = markIn(reduced);

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      {BLOCKS.map((block) => (
        <motion.div
          key={block.className}
          className={`${block.className} bg-[var(--bg-block)] blur-[3px]`}
          custom={block.delay}
          variants={fades}
          initial="hidden"
          animate="visible"
        />
      ))}

      {SPARKS.map((spark) => (
        <motion.span
          key={spark.className}
          className={spark.className}
          style={{ color: spark.color }}
          custom={spark.at}
          variants={marks}
          initial="hidden"
          animate="visible"
        >
          <DoodleSparkle
            className={`${styles.twinkle} block h-full w-full`}
            style={spark.timing}
          />
        </motion.span>
      ))}
    </div>
  );
}
