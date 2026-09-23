import { RECENT_TALKS } from "@/data/talks";
import { ArrowUpRight } from "lucide-react";

export function RecentTalks() {
  return (
    <section className="section-padding border-b border-border bg-[#103C63] text-white dark:bg-[#0A0F14] relative overflow-hidden">
      {/* Background Dots Pattern Overlay */}
      <div className="absolute inset-0 bg-dots-pattern opacity-10 pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="space-y-2">
            <div className="font-mono text-xs font-bold uppercase tracking-widest text-[#FF7F00]">
              03 / TALKS + DEMOS
            </div>
            <h2 className="editorial-heading text-5xl sm:text-6xl md:text-7xl text-white font-black">
              LIVE ARCHIVE
            </h2>
          </div>

          <span className="font-mono text-xs text-white/70">
            RECORDED DEMOS & BUILDER PRESENTATIONS
          </span>
        </div>

        {/* Desktop Editorial Table */}
        <div className="hidden md:block border-2 border-white/20 bg-white/5 backdrop-blur-md rounded-[24px] overflow-hidden">
          <div className="grid grid-cols-12 gap-4 px-6 py-4 border-b border-white/20 font-mono text-xs font-bold uppercase tracking-wider text-white/70 bg-white/5">
            <div className="col-span-5">Talk Title</div>
            <div className="col-span-3">Speaker</div>
            <div className="col-span-2">Category</div>
            <div className="col-span-2 text-right">Date</div>
          </div>

          <div className="divide-y divide-white/10">
            {RECENT_TALKS.map((talk) => (
              <div
                key={talk.id}
                className="grid grid-cols-12 gap-4 px-6 py-5 items-center hover:bg-[#FF7F00] hover:text-black transition-colors duration-200 group"
              >
                <div className="col-span-5 flex items-center gap-3">
                  <span className="font-extrabold text-lg uppercase tracking-tight text-white group-hover:text-black transition-colors">
                    {talk.talkTitle}
                  </span>
                  <ArrowUpRight className="w-4 h-4 text-[#FF7F00] group-hover:text-black opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <div className="col-span-3">
                  <div className="font-bold text-sm text-white group-hover:text-black">
                    {talk.speaker}
                  </div>
                  <div className="text-xs text-white/70 group-hover:text-black/80 font-mono">
                    {talk.role}
                  </div>
                </div>

                <div className="col-span-2">
                  <span className="inline-block px-2.5 py-1 text-[11px] font-mono font-bold uppercase bg-white/20 text-white group-hover:bg-black group-hover:text-white transition-colors rounded-full">
                    {talk.category}
                  </span>
                </div>

                <div className="col-span-2 text-right font-mono text-xs text-white/80 group-hover:text-black/90">
                  {talk.date}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Stacked Editorial Rows */}
        <div className="md:hidden space-y-4">
          {RECENT_TALKS.map((talk) => (
            <div
              key={talk.id}
              className="p-6 border border-white/20 bg-white/5 backdrop-blur-md rounded-[20px] space-y-3 group hover:border-[#FF7F00] transition-colors"
            >
              <div className="flex items-center justify-between text-xs font-mono text-white/70 border-b border-white/10 pb-3">
                <span className="text-[#FF7F00] font-bold uppercase">
                  {talk.category}
                </span>
                <span>{talk.date}</span>
              </div>

              <h3 className="font-extrabold text-lg uppercase tracking-tight text-white group-hover:text-[#FF7F00] transition-colors">
                {talk.talkTitle}
              </h3>

              <div className="pt-2 flex items-center justify-between text-xs font-mono text-white/80">
                <div>
                  <div className="font-bold text-white">{talk.speaker}</div>
                  <div className="text-white/60">{talk.role}</div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#FF7F00]" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
