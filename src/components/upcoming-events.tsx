"use client";

import * as React from "react";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { UPCOMING_EVENTS } from "@/data/events";
import { EventCard } from "./event-card";

export function UpcomingEvents() {
  const scrollRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -440 : 440;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="section-padding border-b border-border bg-background overflow-hidden">
      <div className="container-custom">
        {/* Header with Navigation Controls */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-2">
            <div className="font-mono text-xs font-bold uppercase tracking-widest text-[#FF7F00]">
              01 / UPCOMING EVENTS
            </div>
            <h2 className="editorial-heading text-4xl sm:text-6xl md:text-7xl text-foreground font-black leading-none">
              DON&apos;T JUST WATCH.
              <br />
              <span className="text-[#FF7F00]">COME BUILD.</span>
            </h2>
          </div>

          {/* Desktop & Mobile Actions */}
          <div className="flex items-center gap-4 self-start md:self-auto">
            <Link
              href="/events"
              className="btn-secondary text-xs inline-flex items-center gap-2"
            >
              <span>EXPLORE ALL EVENTS</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            {/* Carousel Control Buttons (← →) */}
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => scroll("left")}
                aria-label="Previous events"
                className="p-3 rounded-full border border-border bg-card text-foreground hover:border-[#FF7F00] hover:text-[#FF7F00] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <ArrowLeft className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => scroll("right")}
                aria-label="Next events"
                className="p-3 rounded-full border border-border bg-card text-foreground hover:border-[#FF7F00] hover:text-[#FF7F00] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Horizontal Scrollable Carousel Container */}
      <div className="pl-[5vw] xl:pl-[calc((100vw-1280px)/2+2rem)] pr-[5vw]">
        <div
          ref={scrollRef}
          className="flex items-stretch gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory py-4 scroll-smooth"
        >
          {UPCOMING_EVENTS.map((event) => (
            <div
              key={event.id}
              className="w-[85vw] sm:w-[420px] md:w-[440px] shrink-0 snap-start"
            >
              <EventCard event={event} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
