"use client";

import * as React from "react";
import { Search } from "lucide-react";
import { UPCOMING_EVENTS } from "@/data/events";
import { EventCard } from "@/components/event-card";

const CATEGORIES = ["ALL", "WORKSHOP", "MEETUP", "DEMO DAY", "PRODUCT NIGHT", "HACKATHON"] as const;

export default function EventsPage() {
  const [selectedCategory, setSelectedCategory] = React.useState<string>("ALL");
  const [searchQuery, setSearchQuery] = React.useState<string>("");

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
    <div className="section-padding bg-background min-h-screen">
      <div className="container-custom space-y-12">
        {/* Page Title & Intro */}
        <div className="border-b border-border pb-10 space-y-4">
          <div className="font-mono text-xs font-bold uppercase tracking-widest text-[#FF7F00]">
            [ DISCOVER SESSIONS & MEETUPS ]
          </div>
          <h1 className="editorial-heading text-5xl sm:text-6xl md:text-7xl text-foreground">
            COMMUNITY EVENTS
          </h1>
          <p className="text-lg text-foreground/80 max-w-2xl">
            Hands-on workshops, live builder demos, product deep dives, and collaborative hackathons across active builder hubs.
          </p>
        </div>

        {/* Filters & Search Toolbar */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6 border-b border-border pb-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 font-mono text-xs font-bold uppercase tracking-wider transition-all border ${
                    active
                      ? "bg-[#103C63] text-white border-[#103C63] dark:bg-[#FF7F00] dark:text-black dark:border-[#FF7F00]"
                      : "bg-card text-foreground/80 border-border hover:border-foreground"
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-foreground/50" />
            <input
              type="text"
              placeholder="Search events, cities..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-card border border-border text-foreground placeholder:text-foreground/40 text-sm focus:outline-none focus:border-[#FF7F00] font-sans"
            />
          </div>
        </div>

        {/* Events Grid */}
        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        ) : (
          <div className="p-16 border border-border bg-card text-center space-y-4">
            <h3 className="text-xl font-bold uppercase">NO EVENTS FOUND</h3>
            <p className="text-sm text-foreground/70">
              Try adjusting your search query or switching category filters.
            </p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory("ALL");
                setSearchQuery("");
              }}
              className="btn-secondary text-xs uppercase font-bold"
            >
              RESET FILTERS
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
