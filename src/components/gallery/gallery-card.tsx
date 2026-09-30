"use client";

import * as React from "react";
import Image from "next/image";
import { Images } from "lucide-react";
import { GalleryEvent } from "@/data/gallery";

interface GalleryCardProps {
  event: GalleryEvent;
  onOpen: (event: GalleryEvent) => void;
  animationDelay?: number;
}

export function GalleryCard({
  event,
  onOpen,
  animationDelay = 0,
}: GalleryCardProps) {
  const cardRef = React.useRef<HTMLButtonElement>(null);
  const [isRevealed, setIsRevealed] = React.useState(false);
  const [isHovered, setIsHovered] = React.useState(false);
  const [prefersReducedMotion] = React.useState(
    () => typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );

  // Intersection Observer for scroll reveal
  React.useEffect(() => {
    const el = cardRef.current;
    if (!el) return;

    if (prefersReducedMotion) {
      const frame = requestAnimationFrame(() => setIsRevealed(true));
      return () => cancelAnimationFrame(frame);
    }

    let timer: ReturnType<typeof setTimeout>;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            timer = setTimeout(() => setIsRevealed(true), animationDelay);
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => {
      clearTimeout(timer);
      observer.disconnect();
    };
  }, [animationDelay, prefersReducedMotion]);

  const baseRevealStyle: React.CSSProperties = {
    opacity: isRevealed ? 1 : 0,
    transform: (() => {
      if (prefersReducedMotion) return "none";
      const revealTranslate = isRevealed ? "translateY(0px)" : "translateY(20px)";
      const revealScale = isRevealed ? "scale(1)" : "scale(0.98)";
      const hoverTranslate = isHovered && isRevealed ? "translateY(-3px)" : revealTranslate;
      return `${hoverTranslate} ${isRevealed ? "scale(1)" : revealScale}`;
    })(),
    transition: prefersReducedMotion
      ? "none"
      : "opacity 0.5s ease, transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
  };

  return (
    <button
      ref={cardRef}
      type="button"
      onClick={() => onOpen(event)}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      aria-label={`Open ${event.title} photo gallery — ${event.photos.length} photos`}
      className="group relative w-full text-left rounded-[20px] overflow-visible focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7F00] focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      style={baseRevealStyle}
    >
      {/* Image container */}
      <div className="relative w-full aspect-[4/3] overflow-hidden rounded-[20px] border border-border bg-muted shadow-sm group-hover:shadow-md transition-shadow duration-300">
        <Image
          src={event.coverImage}
          alt={event.title}
          fill
          className={`object-cover transition-transform duration-500 ease-out ${
            isHovered && !prefersReducedMotion ? "scale-[1.04]" : "scale-100"
          }`}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />

        {/* Subtle dark gradient overlay for hover state */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent rounded-[20px] transition-opacity duration-350"
          style={{ opacity: isHovered ? 1 : 0 }}
        />

        {/* Photo count badge — appears on hover */}
        <div
          className="absolute top-3 right-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/65 backdrop-blur-md text-white font-mono text-[10px] font-bold uppercase tracking-wider transition-all duration-300"
          style={{
            opacity: isHovered ? 1 : 0,
            transform: isHovered ? "translateY(0px)" : "translateY(4px)",
          }}
          aria-hidden="true"
        >
          <Images className="w-3 h-3" />
          <span>{event.photos.length}</span>
        </div>
      </div>

      {/* Title below image */}
      <div className="pt-3 pb-1 px-0.5">
        <h3
          className="text-sm font-bold uppercase tracking-tight leading-tight truncate transition-colors duration-200"
          style={{ color: isHovered ? "var(--accent)" : "var(--foreground)" }}
        >
          {event.title}
        </h3>
      </div>
    </button>
  );
}
