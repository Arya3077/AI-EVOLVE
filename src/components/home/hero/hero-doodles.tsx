/*
 * Hand-drawn style decorations used by the hero.
 *
 * Every mark is:
 *  - a pure SVG so it inherits `currentColor` and scales with the type,
 *  - slightly irregular on purpose (hand drawn, not geometric),
 *  - `aria-hidden` + non focusable so screen readers never announce it.
 *
 * Positioning lives in `hero.tsx`; only the shapes live here.
 */

import type { CSSProperties } from "react";

interface DoodleProps {
  className?: string;
  /**
   * Lets the hero stagger each mark independently — the marks that draw
   * themselves in (ring, squiggle) are driven by a CSS `animation-delay`
   * supplied here, so the choreography lives with the timeline that owns it.
   */
  style?: CSSProperties;
}

/** Four point sparkle — echoes the stars in the AI Evolve logo. */
export function DoodleSparkle({ className, style }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      focusable="false"
      className={className}
      style={style}
      fill="currentColor"
    >
      <path d="M12 0.8c.6 5.9 4.7 10 10.6 10.6-5.9.6-10 4.7-10.6 10.6C11.4 16.1 7.3 12 1.4 11.4 7.3 10.8 11.4 6.7 12 .8Z" />
    </svg>
  );
}

/** Loose annotation loop with a small gap where the pen lifted. */
export function DoodleRing({ className, style }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 300 100"
      preserveAspectRatio="none"
      aria-hidden="true"
      focusable="false"
      className={className}
      style={style}
      fill="none"
    >
      {/* pathLength normalises the stroke to 0..1 so a CSS
          `stroke-dashoffset: 1 -> 0` genuinely draws the loop. Without it
          the offset is a no-op and the ring simply appears. */}
      <path
        d="M286 34C262 16 190 8 130 10 66 12 20 26 10 44 2 60 14 74 52 82 92 90 168 90 220 78c46-10 72-26 68-38"
        pathLength={1}
        stroke="currentColor"
        strokeDasharray={1}
        strokeWidth="3"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

/** Curved hand arrow that points down and to the right. */
export function DoodleArrow({ className }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 70 46"
      aria-hidden="true"
      focusable="false"
      className={className}
      fill="none"
    >
      <path
        d="M5 6c22 3 38 12 47 27"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M40 26l12 7 6-12"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Registration mark. */
export function DoodlePlus({ className }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 20 20"
      aria-hidden="true"
      focusable="false"
      className={className}
      fill="none"
    >
      <path
        d="M10 2.5v15M2.5 10h15"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Wavy underline that draws itself in on load. */
export function DoodleSquiggle({ className, style }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 140 14"
      aria-hidden="true"
      focusable="false"
      className={className}
      style={style}
      fill="none"
    >
      <path
        d="M2 9C12 3 22 12 32 7s20-4 30 1 20 4 30-2 20-3 46 2"
        pathLength={1}
        stroke="currentColor"
        strokeDasharray={1}
        strokeWidth="2.5"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}

/** Dashed scribble used as a low weight background annotation. */
export function DoodleDashedCircle({ className }: DoodleProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      aria-hidden="true"
      focusable="false"
      className={className}
      fill="none"
    >
      <circle
        cx="60"
        cy="60"
        r="52"
        stroke="currentColor"
        strokeWidth="2"
        strokeDasharray="4 9"
        strokeLinecap="round"
      />
    </svg>
  );
}
