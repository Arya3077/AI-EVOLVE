"use client";

import * as React from "react";
import Link from "next/link";
import { animate, motion, useMotionValue, useReducedMotion } from "framer-motion";

import { EventCard } from "@/components/events/event-card";
import type { EventItem } from "@/data/events";

/* ------------------------------------------------------------------
   Focused-centre event carousel.

   THE FLOW
   One number drives everything: `pos`, the index of the slide in the
   centre. The track is translated so that slide sits on the viewport's
   midpoint, which means every card's screen position is
   `(slideIndex - pos) * slot` for free. Cards sliding out left, the centre
   card moving left, the right card moving into centre and a new card
   entering from the right all fall out of that single spring — there is no
   per-card choreography to keep in sync. Scale, opacity and z-index are
   derived from `|slideIndex - pos|`, so the card that lands in the centre is
   the one that grows to full size. That second spring, on a different
   property, is what reads as layers settling into focus rather than a flat
   slide.

   WHY THE GEOMETRY IS CSS, NOT JS
   An earlier version picked the slot/card widths in JS from
   `window.innerWidth`. That branches on `typeof window` during render, so the
   server emitted desktop values and the client emitted mobile ones — React
   reported a hydration mismatch and, per its own recovery, refused to patch
   the mismatched attributes. The slides kept their server width forever and
   the active card rendered off-screen. The widths now live in CSS custom
   properties on the viewport (see the `slot:` classes below), so the markup
   is byte-identical on both sides and the breakpoint is handled by the
   cascade. JS reads `--slot` back only to compute the transform, which is
   applied imperatively and therefore never touches the markup.

   SLOT VS CARD
   Each slide is a fixed-width SLOT of `--slot` with the card centred inside
   it at `--card`. Sizing the slot rather than using a flex `gap` is what
   lets the card be slightly wider than its slot on mobile — a small overlap
   at a lower z-index — without needing a negative flex gap.

   LOOPING
   Two copies of the list are rendered so the carousel can run past either
   end. When `pos` hits a bound it is rewound by exactly one list length
   after the spring settles; the window it lands on is pixel-identical, so
   the rewind is invisible.
   ------------------------------------------------------------------ */

const SPRING = { type: "spring", stiffness: 190, damping: 26, mass: 1 } as const;

/** useLayoutEffect that degrades to useEffect on the server, so the track is
 *  seated on its final offset before the first paint. */
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? React.useLayoutEffect : React.useEffect;

/** Visual state per distance from the centre. The side values sit inside the
 *  0.86–0.92 scale / 0.55–0.75 opacity band the design calls for. */
function cardState(distance: number) {
  const d = Math.abs(distance);
  if (d === 0) return { scale: 1, opacity: 1, z: 30 };
  if (d === 1) return { scale: 0.88, opacity: 0.62, z: 20 };
  if (d === 2) return { scale: 0.78, opacity: 0.3, z: 10 };
  return { scale: 0.72, opacity: 0, z: 0 };
}

interface EventsCarouselProps {
  events: EventItem[];
  /** Fired with the event that has just taken the centre slot. */
  onActiveChange?: (event: EventItem) => void;
}

export function EventsCarousel({ events, onActiveChange }: EventsCarouselProps) {
  const reduced = useReducedMotion() === true;
  const total = events.length;

  const slides = React.useMemo(() => [...events, ...events], [events]);

  const MIN = 1;
  const MAX = total * 2 - 2;

  const [pos, setPos] = React.useState(() => total);
  const [slot, setSlot] = React.useState(0);
  const [inner, setInner] = React.useState(0);
  const [dragging, setDragging] = React.useState(false);
  const activeIndex = eventIndexOf(slides[pos]?.id ?? "", events);

  /* Two motion values, deliberately NOT shared.
     `trackX` is the absolute slot offset and is only ever written by
     `goTo`; `dragX` is the live finger offset and is only ever written by
     Framer's drag gesture. Sharing one value looked simpler but the drag's
     own release animation re-targeted it and undid every step — the track
     sprang back to its old slot no matter how far it was flung. The wrapper
     composes them, so a step and a drag can never fight. */
  const trackX = useMotionValue(0);
  const dragX = useMotionValue(0);
  const cooldown = React.useRef(false);
  const settle = React.useRef<ReturnType<typeof animate> | null>(null);

  const viewportRef = React.useRef<HTMLDivElement>(null);

  /* Read the geometry back out of CSS. `--slot` owns the breakpoints; the
     inner width is the viewport's content box, needed to offset the track
     from the track's own left edge onto the viewport's midpoint. */
  useIsomorphicLayoutEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const measure = () => {
      const cs = getComputedStyle(el);
      const nextSlot = parseFloat(cs.getPropertyValue("--slot"));
      const width = el.clientWidth - parseFloat(cs.paddingLeft) - parseFloat(cs.paddingRight);
      if (nextSlot > 0) setSlot(nextSlot);
      if (width > 0) setInner(width);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const targetFor = React.useCallback(
    (p: number) => (inner > 0 && slot > 0 ? inner / 2 - slot / 2 - p * slot : 0),
    [inner, slot],
  );

  // Re-seat when the geometry changes. Scoped to layout changes so it never
  // fights the spring or an in-progress drag.
  const seated = React.useRef(false);
  useIsomorphicLayoutEffect(() => {
    if (inner === 0 || slot === 0) return;
    const next = targetFor(pos);
    if (seated.current && !dragging) {
      if (Math.abs(trackX.get() - next) > 1) trackX.jump(next);
      return;
    }
    seated.current = true;
    trackX.jump(next);
  }, [dragging, inner, pos, slot, targetFor, trackX]);

  // Announce + report the centred event.
  React.useEffect(() => {
    const event = slides[pos];
    if (!event) return;
    onActiveChange?.(event);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pos]);

  const goTo = React.useCallback(
    (next: number) => {
      if (cooldown.current) return;
      cooldown.current = true;

      const target = Math.max(MIN, Math.min(MAX, next));
      const transition = reduced ? { duration: 0.18 } : SPRING;

      settle.current?.stop();
      settle.current = animate(trackX, targetFor(target), transition);

      settle.current
        .then(() => {
          setPos(target);
          let wrapped = target;
          if (target >= MAX) wrapped = target - total;
          else if (target <= MIN) wrapped = target + total;
          if (wrapped !== target) {
            trackX.jump(targetFor(wrapped));
            setPos(wrapped);
          }
          cooldown.current = false;
        })
        .catch(() => {
          cooldown.current = false;
        });
    },
    [reduced, targetFor, total, trackX],
  );

  const step = React.useCallback(
    (direction: 1 | -1) => goTo(pos + direction),
    [goTo, pos],
  );

  /* Horizontal-intent wheel only. A trackpad swipe moves the carousel; a
     normal vertical scroll is left completely alone, so the page is never
     hijacked. Deliberately not a vertical scroll-jack. */
  const onWheel = React.useCallback(
    (e: React.WheelEvent<HTMLDivElement>) => {
      if (Math.abs(e.deltaX) <= Math.abs(e.deltaY)) return;
      e.preventDefault();
      if (cooldown.current) return;
      goTo(pos + (e.deltaX > 0 ? 1 : -1));
    },
    [goTo, pos],
  );

  const onKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "ArrowRight") { e.preventDefault(); step(1); }
    else if (e.key === "ArrowLeft") { e.preventDefault(); step(-1); }
    else if (e.key === "Home") { e.preventDefault(); goTo(pos); }
    else if (e.key === "End") { e.preventDefault(); goTo(pos + total - 1); }
  };

  const activeEvent = slides[pos] ?? events[0];

  return (
    <div className="relative">
      {/* Viewport: clips horizontally, with vertical padding so the focused
          card's shadow has room inside the clip.

          `--slot` / `--card` are the single source of truth for the
          breakpoints. A narrow phone gets a small slot with a slight card
          overlap; from `sm` up the slot opens out so both neighbours show a
          clear, clipped peek. The JS transform reads these back; the markup
          never differs between server and client. */}
      <div
        ref={viewportRef}
        role="region"
        aria-roledescription="carousel"
        aria-label="Upcoming events"
        tabIndex={0}
        onKeyDown={onKeyDown}
        onWheel={onWheel}
        className="relative mx-auto w-full max-w-[1000px] cursor-grab overflow-hidden px-4 py-12 [--slot:214px] [--card:230px] min-[380px]:[--slot:250px] min-[380px]:[--card:262px] sm:[--slot:424px] sm:[--card:400px] focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-[var(--accent)] active:cursor-grabbing"
      >
        {/* Step layer: carries the absolute slot offset. */}
        <motion.div className="w-max" style={{ x: trackX }}>
          {/* Drag layer: carries the live finger offset only.
              `w-max` is load-bearing, not cosmetic. As a block-level flex
              container the box is only as wide as the viewport, and the step
              offset slides that box off to one side — leaving just the
              OVERFLOWING slides painted over the visible area. Those are
              `inert`, so hit-testing skipped straight past them to the
              viewport and no gesture ever reached the drag listener
              (`pointerdown` count was 0). Sizing the track to its content
              keeps its box under the cards, so a drag anywhere in view
              lands on it. */}
          <motion.div
            className="flex w-max items-stretch"
            style={{ x: dragX }}
            drag="x"
            // No `dragConstraints`: the usual `{ left: 0, right: 0 }` idiom is
            // an ABSOLUTE range from the element's layout position, and this
            // track rests far outside [0, 0], so Framer silently dropped every
            // gesture. Nothing needs constraining — the track is re-seated onto
            // a slot on release.
            dragElastic={reduced ? 0 : 0.16}
            dragMomentum={false}
            onDragStart={() => {
              settle.current?.stop();
              setDragging(true);
            }}
            onDragEnd={(_, info) => {
              setDragging(false);
              // Direction comes from the flick, not the resting offset: the
              // track can be parked anywhere between two slots.
              const flung =
                Math.abs(info.offset.x) > slot * 0.22 || Math.abs(info.velocity.x) > 420;
              if (flung) step(info.offset.x < 0 ? 1 : -1);
              else goTo(pos);
              // Return the finger offset to neutral on the same spring, so the
              // release blends into whichever slot the step just chose.
              animate(dragX, 0, reduced ? { duration: 0.18 } : SPRING);
            }}
          >
            {slides.map((event, slideIndex) => {
              const distance = slideIndex - pos;
              const state = cardState(distance);
              const isActive = distance === 0;

            return (
              <div
                key={`${event.id}-${slideIndex}`}
                role="group"
                aria-roledescription="slide"
                aria-label={`${events.indexOf(event) + 1} of ${total}`}
                // Only the centred slide is reachable: the duplicates are
                // decorative repeats, and leaving them in the tab order would
                // triple every link stop in the section.
                inert={!isActive}
                className="shrink-0"
                style={{ width: "var(--slot)", zIndex: state.z }}
              >
                <motion.div
                  className="mx-auto"
                  style={{ width: "var(--card)" }}
                  animate={{ scale: state.scale, opacity: state.opacity }}
                  transition={reduced ? { duration: 0.18 } : SPRING}
                >
                  <div
                    className={
                      isActive
                        ? "[&>*]:shadow-[0_22px_45px_-24px_rgba(0,0,0,0.55)]"
                        : ""
                    }
                  >
                    <EventCard event={event} />
                  </div>
                </motion.div>
              </div>
            );
            })}
          </motion.div>
        </motion.div>
      </div>

      {/* Controls: the two small arrows this section already had, the dot
          indicators, and the existing CTA — on one row beneath the carousel
          so nothing crowds the cards. */}
      <div className="container-custom mt-2 flex flex-col items-center gap-5">
        <div className="flex items-center gap-4">
          <CarouselButton label="Previous event" onClick={() => step(-1)} disabled={dragging}>
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </CarouselButton>

          <div className="flex items-center gap-2">
            {events.map((event, i) => {
              const isCurrent = i === activeIndex;
              return (
                <button
                  key={event.id}
                  type="button"
                  onClick={() => goTo(nearestSlideFor(i, pos, total))}
                  aria-label={`Go to event ${i + 1}: ${event.title}`}
                  aria-current={isCurrent ? "true" : undefined}
                  className={`h-2 rounded-full transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] ${
                    isCurrent ? "w-7 bg-[#FF7F00]" : "w-2 bg-[var(--border)] hover:bg-[var(--text-muted)]"
                  }`}
                />
              );
            })}
          </div>

          <CarouselButton label="Next event" onClick={() => step(1)} disabled={dragging}>
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </CarouselButton>
        </div>

        <Link
          href="/events"
          className="inline-flex items-center gap-2 rounded-full border border-[var(--accent)] px-6 py-3 text-[11px] font-bold uppercase tracking-[0.14em] text-[var(--text)] transition-colors duration-200 hover:bg-[#FF7F00] hover:text-black focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
        >
          <span>Explore all events</span>
          <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </Link>

        <p className="sr-only" role="status" aria-live="polite">
          Showing event {activeIndex + 1} of {total}: {activeEvent?.title}
        </p>
      </div>
    </div>
  );
}

/** Slide index within the duplicated list whose event matches `wanted` and
 *  which is nearest the current position — lets the dots jump without
 *  tracking which copy is on screen. */
function nearestSlideFor(wanted: number, pos: number, total: number): number {
  const base = pos - (((pos % total) + total) % total);
  let best = base + wanted;
  if (best > pos) {
    const behind = best - total;
    if (behind >= 1) best = behind;
  } else {
    const ahead = best + total;
    if (ahead <= total * 2 - 2) best = ahead;
  }
  return best;
}

function eventIndexOf(id: string, events: EventItem[]): number {
  const i = events.findIndex((e) => e.id === id);
  return i === -1 ? 0 : i;
}

function CarouselButton({
  label,
  onClick,
  disabled,
  children,
}: {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className="rounded-full border border-[var(--border)] p-2.5 text-[var(--text-muted)] transition-colors duration-200 hover:border-[#FF7F00] hover:text-[#FF7F00] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] disabled:opacity-40"
    >
      {children}
    </button>
  );
}
