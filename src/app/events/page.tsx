"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Search } from "lucide-react";
import { UPCOMING_EVENTS } from "@/data/events";
import { EventCard } from "@/components/events/event-card";
import { PageBackdrop } from "@/components/page-backdrop";
import { cardIn, fadeUp } from "@/lib/motion";

const CATEGORIES = ["ALL", "WORKSHOP", "MEETUP", "DEMO DAY", "PRODUCT NIGHT", "HACKATHON"] as const;

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = React.useState<string>("ALL");
  const [searchQuery, setSearchQuery] = React.useState<string>("");
  const reduced = useReducedMotion() === true;
  const fades = fadeUp(reduced);
  const cards = cardIn(reduced);

  const filteredEvents = React.useMemo(() => {
    return UPCOMING_EVENTS.filter((event) => {
      const matchesCategory =
        selectedCategory === "ALL" || event.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === "" ||
        event.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        event.location.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="section-padding relative isolate min-h-screen overflow-hidden bg-[var(--bg)]">
      <PageBackdrop />
      <div className="container-custom space-y-12">
        {/* Page Title & Intro */}
        <motion.div
          className="space-y-4 border-b border-[var(--border)] pb-10"
          custom={0.1}
          variants={fades}
          initial="hidden"
          animate="visible"
        >
          <div className="font-mono text-xs font-bold uppercase tracking-widest text-[var(--accent)]">
            [ DISCOVER SESSIONS & MEETUPS ]
          </div>
          <h1 className="editorial-heading text-5xl text-[var(--text)] sm:text-6xl md:text-7xl">
            COMMUNITY EVENTS
          </h1>
          <p className="max-w-2xl text-lg text-[var(--text-muted)]">
            Hands-on workshops, live builder demos, product deep dives, and collaborative hackathons across active builder hubs.
          </p>
        </motion.div>

        {/* Filters & Search Toolbar */}
        <motion.div
          className="flex flex-col items-stretch justify-between gap-6 border-b border-[var(--border)] pb-8 md:flex-row md:items-center"
          custom={0.2}
          variants={fades}
          initial="hidden"
          animate="visible"
        >
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  aria-pressed={active}
                  className={`border px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)] ${
                    active
                      ? "border-[var(--accent)] bg-[var(--accent)] text-white"
                      : "border-[var(--border)] bg-[var(--bg)] text-[var(--text-muted)] hover:border-[var(--accent)] hover:text-[var(--text)]"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--text-muted)]" />
            <input
              type="text"
              placeholder="Search events, cities..."
              aria-label="Search events by title, description or city"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-full border border-[var(--border)] bg-[var(--bg)] py-2 pl-10 pr-4 text-sm text-[var(--text)] placeholder:text-[var(--text-muted)]/70 focus:border-[var(--accent)] focus:outline-2 focus:outline-offset-2 focus:outline-[var(--accent)]"
            />
          </div>
        </motion.div>

        {/* Events Grid */}
        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                custom={index}
                variants={cards}
                initial="hidden"
                animate="visible"
              >
                <EventCard event={event} />
              </motion.div>
            ))}
          </div>
        ) : (
          <motion.div
            className="space-y-4 border border-[var(--border)] p-16 text-center"
            custom={0}
            variants={fades}
            initial="hidden"
            animate="visible"
          >
            <h3 className="text-xl font-bold uppercase text-[var(--text)]">NO EVENTS FOUND</h3>
            <p className="text-sm text-[var(--text-muted)]">
              Try adjusting your search query or switching category filters.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory("ALL");
                setSearchQuery("");
              }}
              className="rounded-full border border-[var(--accent)] px-5 py-2.5 font-mono text-xs font-bold uppercase text-[var(--text)] transition-colors duration-200 hover:bg-[var(--accent)] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
            >
              RESET FILTERS
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
