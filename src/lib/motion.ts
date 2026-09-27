/* ------------------------------------------------------------------
   Shared motion primitives.

   Every animated surface on the site — hero, inner pages, page backdrop —
   pulls its easing and timing from here so a card, a headline and a sparkle
   all feel like they belong to the same build. Each factory closes over
   `reduced` so a component only has to call `useReducedMotion()` once.

   Delays are passed per-item via `custom`, which is what makes the stagger
   read as one sequence instead of N unrelated animations.
   ------------------------------------------------------------------ */

import type { CSSProperties } from "react";

/** The site's editorial curve. */
export const EASE = [0.22, 1, 0.36, 1] as const;

/** Fade + rise. The default for anything that appears in place. */
export function fadeUp(reduced: boolean) {
  return {
    hidden: { opacity: 0, y: reduced ? 0 : 18 },
    visible: (delay: number) => ({
      opacity: 1,
      y: 0,
      transition: reduced
        ? { duration: 0.2, delay: delay * 0.25 }
        : { duration: 0.7, delay, ease: EASE },
    }),
  };
}

/**
 * Marks that "get drawn into" the composition: they arrive undersized and
 * slightly turned, then settle. A light spring reads as pen-on-paper rather
 * than as a UI pop. Used for sparkles and doodles.
 */
export function markIn(reduced: boolean) {
  return {
    hidden: {
      opacity: 0,
      scale: reduced ? 1 : 0.4,
      rotate: reduced ? 0 : -25,
    },
    visible: (delay: number) => ({
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: reduced
        ? { duration: 0.2, delay: delay * 0.25 }
        : ({ type: "spring", stiffness: 260, damping: 18, delay } as const),
    }),
  };
}

/**
 * Card lift for grids. Deliberately shallower than `fadeUp`'s rise so a row
 * of cards reads as a group arriving, not as a queue of separate slides.
 */
export function cardIn(reduced: boolean) {
  return {
    hidden: { opacity: 0, y: reduced ? 0 : 24 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: reduced
        ? { duration: 0.2, delay: index * 0.04 }
        : { duration: 0.6, delay: Math.min(index, 8) * 0.07, ease: EASE },
    }),
  };
}

/** Sparkle twinkle, shared by the hero and the inner-page backdrops.
 *
 *  This lives on the SVG, never on the element Framer animates. CSS
 *  animations sit above inline styles in the cascade, so a `transform`
 *  animation on the same node as a Framer entrance would silently win and the
 *  entrance would never be seen. Two elements, two transform channels.
 *
 *  `transform-box: fill-box` pins the origin to the glyph's own box so the
 *  scale pivots on the star's centre. */
export const twinkleClass = "twinkle";

/**
 * Per-item twinkle timing, shaped as ready-to-spread `style` props.
 *
 * Periods are non-harmonic and spread over ~3x: commensurate periods drift
 * into and out of phase together, so the stars visibly pulse in unison every
 * cycle. Negative delays put each one at a different point in its cycle on
 * first paint, so there is no moment where they all swell together.
 */
export const TWINKLE: CSSProperties[] = [
  { animationDuration: "4.7s", animationDelay: "-0s" },
  { animationDuration: "6.1s", animationDelay: "-1.2s" },
  { animationDuration: "7.3s", animationDelay: "-2.9s" },
  { animationDuration: "8.9s", animationDelay: "-5.3s" },
  { animationDuration: "12.7s", animationDelay: "-10.2s" },
];
