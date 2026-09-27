"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { GALLERY_EVENTS, GalleryEvent } from "@/data/gallery";
import { GalleryCard } from "@/components/gallery/gallery-card";
import { GalleryLightbox } from "@/components/gallery/gallery-lightbox";
import { PageBackdrop } from "@/components/page-backdrop";
import { fadeUp } from "@/lib/motion";

export default function GalleryPage() {
  const [activeEvent, setActiveEvent] = React.useState<GalleryEvent | null>(null);
  const [lightboxStartIndex, setLightboxStartIndex] = React.useState(0);
  const reduced = useReducedMotion() === true;
  const fades = fadeUp(reduced);

  const handleOpenGallery = (event: GalleryEvent) => {
    setLightboxStartIndex(0);
    setActiveEvent(event);
  };

  const handleCloseLightbox = () => {
    setActiveEvent(null);
  };

  return (
    <>
      <div className="section-padding relative isolate min-h-screen overflow-hidden bg-[var(--bg)]">
        <PageBackdrop />
        <div className="container-custom space-y-12">
          {/* Page Header */}
          <motion.div
            className="space-y-4 border-b border-[var(--border)] pb-10"
            custom={0.1}
            variants={fades}
            initial="hidden"
            animate="visible"
          >
            <div className="font-mono text-xs font-bold uppercase tracking-widest text-[var(--accent)]">
              [ MOMENTS FROM THE COMMUNITY ]
            </div>
            <h1 className="editorial-heading text-5xl text-[var(--text)] sm:text-6xl md:text-7xl">
              GALLERY
            </h1>
            <p className="max-w-2xl text-lg text-[var(--text-muted)]">
              Photos from workshops, demo nights, hackathons, and builder meetups across our community hubs.
            </p>
          </motion.div>

          {/* Gallery Grid. Deliberately NOT wrapped in a stagger: each
              GalleryCard runs its own IntersectionObserver reveal via
              `animationDelay`, and layering a Framer entrance on top would
              fight it for the same transform. See the note in gallery-card.tsx
              about converting that to Framer for full consistency. */}
          <div
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3"
            role="list"
            aria-label="Community event photo galleries"
          >
            {GALLERY_EVENTS.map((event, index) => (
              <div key={event.id} role="listitem">
                <GalleryCard
                  event={event}
                  onOpen={handleOpenGallery}
                  animationDelay={index * 75}
                />
              </div>
            ))}
          </div>

          {/* Footer note */}
          <motion.div
            className="border-t border-[var(--border)] pt-8 text-center"
            custom={0.3}
            variants={fades}
            initial="hidden"
            animate="visible"
          >
            <p className="font-mono text-xs uppercase tracking-widest text-[var(--text-muted)]">
              {GALLERY_EVENTS.reduce((acc, e) => acc + e.photos.length, 0)} photos across {GALLERY_EVENTS.length} events
            </p>
          </motion.div>
        </div>
      </div>

      {/* Lightbox (portal-like, rendered at end of page) */}
      {activeEvent && (
        <GalleryLightbox
          photos={activeEvent.photos}
          initialIndex={lightboxStartIndex}
          eventTitle={activeEvent.title}
          onClose={handleCloseLightbox}
        />
      )}
    </>
  );
}
