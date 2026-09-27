import Link from "next/link";
import { ArrowUpRight, MapPin, Calendar, User, Terminal } from "lucide-react";
import { EventItem } from "@/data/events";

interface EventCardProps {
  event: EventItem;
}

export function EventCard({ event }: EventCardProps) {
  // Theme styling for the banner image area
  const getBannerStyle = (theme: EventItem["bannerTheme"]) => {
    switch (theme) {
      case "navy":
        return "bg-[#103C63] text-white";
      case "orange":
        return "bg-[#FF7F00] text-black";
      case "dark":
        return "bg-[#0A0F14] text-white";
      case "cream":
      default:
        return "bg-[#EBE9DC] text-[#103C63] dark:bg-[#1A232E] dark:text-white";
    }
  };

  return (
    <div className="card-custom card-hover group flex flex-col justify-between h-full border-2 border-border bg-card rounded-[24px] overflow-hidden transition-all duration-300">
      <div>
        {/* Poster Image / Banner Section (Meaningful Proportion) */}
        <div className={`relative h-48 sm:h-52 p-6 flex flex-col justify-between ${getBannerStyle(event.bannerTheme)} overflow-hidden`}>
          {/* Background Decorative Abstract Graphic Elements */}
          <div className="absolute -right-6 -bottom-6 w-36 h-36 border-4 border-current/15 rounded-full pointer-events-none group-hover:scale-125 transition-transform duration-500" />
          <div className="absolute right-12 top-4 opacity-20 pointer-events-none">
            <Terminal className="w-16 h-16" />
          </div>

          {/* Top Row: Category Badge + Format */}
          <div className="flex items-center justify-between relative z-10">
            <span className="px-3 py-1 font-mono text-xs font-extrabold uppercase tracking-wider bg-black/80 text-white dark:bg-white/90 dark:text-black rounded-full shadow-sm">
              {event.category}
            </span>
            <span className="font-mono text-xs font-bold uppercase tracking-widest opacity-80">
              {event.format}
            </span>
          </div>

          {/* Bottom Row inside Banner: Large Date Block Overlay */}
          <div className="relative z-10 flex items-end justify-between">
            <div className="flex items-baseline gap-2">
              <span className="editorial-heading text-4xl sm:text-5xl font-black leading-none tracking-tight">
                {event.day}
              </span>
              <span className="font-mono text-sm font-extrabold uppercase tracking-widest opacity-90">
                {event.month} {event.year}
              </span>
            </div>

            <div className="p-2.5 rounded-full bg-white/20 dark:bg-black/20 backdrop-blur-md group-hover:bg-[#FF7F00] group-hover:text-black transition-colors duration-300">
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>
        </div>

        {/* Card Body Content */}
        <div className="p-6 sm:p-7 space-y-4">
          <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-foreground group-hover:text-[#FF7F00] transition-colors leading-tight">
            {event.title}
          </h3>

          <p className="text-sm text-foreground/75 leading-relaxed line-clamp-2">
            {event.description}
          </p>

          {/* Event Metadata List */}
          <div className="space-y-2 pt-2 border-t border-border/60 text-xs font-mono text-foreground/80">
            {event.speaker && (
              <div className="flex items-center gap-2">
                <User className="w-3.5 h-3.5 text-[#FF7F00]" />
                <span className="font-bold">{event.speaker}</span>
                {event.speakerRole && (
                  <span className="text-foreground/50">({event.speakerRole})</span>
                )}
              </div>
            )}

            <div className="flex items-center justify-between text-foreground/70">
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#FF7F00]" />
                <span className="font-semibold">{event.location}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#FF7F00]" />
                <span>{event.time}</span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Card Footer CTA Link */}
      <div className="px-6 pb-6 pt-2">
        <Link
          href={`/events#${event.id}`}
          className="w-full py-3 px-5 border border-border rounded-full font-mono text-xs font-extrabold uppercase tracking-wider text-foreground flex items-center justify-between group-hover:border-[#FF7F00] group-hover:bg-[#FF7F00] group-hover:text-black transition-all duration-200"
        >
          <span>VIEW EVENT & RSVP</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}
