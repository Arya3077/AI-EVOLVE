"use client";

import * as React from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GalleryPhoto } from "@/data/gallery";

interface GalleryLightboxProps {
  photos: GalleryPhoto[];
  initialIndex: number;
  eventTitle: string;
  onClose: () => void;
}

export function GalleryLightbox({
  photos,
  initialIndex,
  eventTitle,
  onClose,
}: GalleryLightboxProps) {
  const [currentIndex, setCurrentIndex] = React.useState(initialIndex);
  const [isVisible, setIsVisible] = React.useState(false);
  const [isImageTransitioning, setIsImageTransitioning] = React.useState(false);
  const [imageKey, setImageKey] = React.useState(0);

  const touchStartX = React.useRef<number | null>(null);
  const closeButtonRef = React.useRef<HTMLButtonElement>(null);
  const prefersReducedMotion = React.useRef(false);

  // Check prefers-reduced-motion
  React.useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    prefersReducedMotion.current = mq.matches;
  }, []);

  // Fade in on mount
  React.useEffect(() => {
    const raf = requestAnimationFrame(() => {
      setIsVisible(true);
    });
    return () => cancelAnimationFrame(raf);
  }, []);

  // Body scroll lock
  React.useEffect(() => {
    const scrollY = window.scrollY;
    document.body.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      window.scrollTo(0, scrollY);
    };
  }, []);

  // Focus trap
  React.useEffect(() => {
    closeButtonRef.current?.focus();
  }, []);

  // Keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        goToPrev();
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        goToNext();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  const handleClose = () => {
    if (prefersReducedMotion.current) {
      onClose();
      return;
    }
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  const navigateTo = (newIndex: number) => {
    if (isImageTransitioning) return;
    if (prefersReducedMotion.current) {
      setCurrentIndex(newIndex);
      setImageKey((k) => k + 1);
      return;
    }
    setIsImageTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(newIndex);
      setImageKey((k) => k + 1);
      setIsImageTransitioning(false);
    }, 150);
  };

  const goToPrev = () => {
    const prev = (currentIndex - 1 + photos.length) % photos.length;
    navigateTo(prev);
  };

  const goToNext = () => {
    const next = (currentIndex + 1) % photos.length;
    navigateTo(next);
  };

  // Touch / swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(deltaX) > 50) {
      if (deltaX < 0) goToNext();
      else goToPrev();
    }
    touchStartX.current = null;
  };

  const currentPhoto = photos[currentIndex];
  const hasSinglePhoto = photos.length === 1;

  const overlayStyle: React.CSSProperties = {
    opacity: isVisible ? 1 : 0,
    transition: prefersReducedMotion.current
      ? "none"
      : "opacity 0.3s ease",
  };

  const imageWrapperStyle: React.CSSProperties = {
    opacity: isImageTransitioning ? 0 : 1,
    transform: isImageTransitioning ? "scale(0.97)" : "scale(1)",
    transition: prefersReducedMotion.current
      ? "none"
      : "opacity 0.15s ease, transform 0.15s ease",
  };

  const contentStyle: React.CSSProperties = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "scale(1)" : "scale(0.96)",
    transition: prefersReducedMotion.current
      ? "none"
      : "opacity 0.3s ease 0.05s, transform 0.3s ease 0.05s",
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={`${eventTitle} photo gallery`}
      style={overlayStyle}
      className="fixed inset-0 z-50 flex items-center justify-center"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/92 backdrop-blur-sm"
        onClick={handleClose}
        aria-hidden="true"
      />

      {/* Content */}
      <div
        className="relative z-10 flex flex-col items-center w-full h-full px-4 py-4 sm:px-6 sm:py-6"
        style={contentStyle}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        {/* Top bar */}
        <div className="w-full max-w-6xl flex items-center justify-between mb-4 sm:mb-6 flex-shrink-0">
          {/* Event title */}
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-white/60 hidden sm:block truncate max-w-xs">
            {eventTitle}
          </span>
          {/* Counter */}
          <span className="font-mono text-xs font-bold tracking-widest text-white/70 tabular-nums">
            {String(currentIndex + 1).padStart(2, "0")} /{" "}
            {String(photos.length).padStart(2, "0")}
          </span>
          {/* Close */}
          <button
            ref={closeButtonRef}
            type="button"
            onClick={handleClose}
            aria-label="Close gallery"
            className="group flex items-center justify-center w-10 h-10 rounded-full border border-white/20 bg-white/10 text-white hover:bg-white/20 hover:border-white/40 active:scale-95 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7F00]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Main image area */}
        <div className="relative flex-1 w-full max-w-6xl min-h-0 flex items-center justify-center">
          {/* Prev button */}
          {!hasSinglePhoto && (
            <button
              type="button"
              onClick={goToPrev}
              aria-label="Previous photo"
              className="absolute left-0 z-20 group flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/20 bg-black/40 text-white hover:bg-white/20 hover:border-white/40 active:scale-95 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7F00] -translate-x-0 sm:-translate-x-2"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          )}

          {/* Image */}
          <div
            key={imageKey}
            className="relative w-full h-full flex items-center justify-center px-14 sm:px-16"
            style={imageWrapperStyle}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full h-full">
              <Image
                src={currentPhoto.src}
                alt={currentPhoto.alt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1200px"
                priority
              />
            </div>
          </div>

          {/* Next button */}
          {!hasSinglePhoto && (
            <button
              type="button"
              onClick={goToNext}
              aria-label="Next photo"
              className="absolute right-0 z-20 group flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/20 bg-black/40 text-white hover:bg-white/20 hover:border-white/40 active:scale-95 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF7F00] translate-x-0 sm:translate-x-2"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Alt text caption */}
        <div className="flex-shrink-0 mt-4 sm:mt-5">
          <p className="text-center text-xs text-white/40 font-mono tracking-wider max-w-lg truncate">
            {currentPhoto.alt}
          </p>
        </div>
      </div>
    </div>
  );
}
