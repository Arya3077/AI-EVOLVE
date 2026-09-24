import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Sparkles, Terminal } from "lucide-react";

export function CTA() {
  const HIGHLIGHTS = [
    "Connect with active developers & AI researchers",
    "Hands-on workshops, live demos & code sprints",
    "Share your experiments and ship production tools",
  ];

  return (
    <section id="join" className="section-padding bg-background border-b border-border">
      <div className="container-custom">
        {/* MakeMyPass Inspired Large Poster Panel */}
        <div className="relative overflow-hidden rounded-[32px] bg-[#103C63] text-white dark:bg-[#0A0F14] border-2 border-[#103C63] dark:border border-border p-8 sm:p-12 lg:p-16 shadow-2xl">
          {/* Subtle Technical Grid overlay */}
          <div
            className="absolute inset-0 opacity-[0.08] pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(#FFFFFF 1px, transparent 1px)`,
              backgroundSize: "28px 28px",
            }}
          />

          {/* Decorative Glow Blob */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#FF7F00]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
        {/* Left Column: Typography & Message */}
<div className="lg:col-span-7 space-y-6">
  <h2 className="editorial-heading text-4xl sm:text-5xl lg:text-6xl text-white font-black leading-none tracking-tight">
    READY TO
    <br />
    BUILD
    <br />
    <span className="text-[#FF7F00]">SOMETHING?</span>
  </h2>

  <p className="text-lg sm:text-xl text-white/90 max-w-xl font-medium leading-relaxed">
    There are people building things. There are events happening. There are
    things to learn.{" "}
    <span className="text-[#FF7F00] font-bold">
      Now become part of it.
    </span>
  </p>

  
</div>

            {/* Right Column: Poster Action Card & Primary Join Button */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="w-full max-w-md bg-white/10 dark:bg-card/80 backdrop-blur-md border border-white/20 p-8 rounded-[24px] space-y-8 text-white shadow-xl">
                <div className="flex items-center justify-between border-b border-white/20 pb-4">
                  <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-white/80">
                    <Terminal className="w-4 h-4 text-[#FF7F00]" />
                    <span>AI_EVOLVE_ACCESS</span>
                  </div>
                  <Sparkles className="w-4 h-4 text-[#FF7F00]" />
                </div>

                <div className="space-y-2">
                  <div className="font-mono text-xs text-[#FF7F00] font-bold uppercase">
                    [ FREE BUILDER MEMBERSHIP ]
                  </div>
                  <div className="text-2xl font-black uppercase text-white tracking-tight">
                    NO FEES. NO GATEKEEPING. JUST CODE.
                  </div>
                  <p className="text-xs text-white/70 font-mono leading-relaxed pt-1">
                    Get instant access to community Discord, event RSVPs, and live builder demo notifications.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <a
                    href="https://discord.gg"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 px-6 bg-[#FF7F00] text-black font-mono font-extrabold text-sm uppercase tracking-wider rounded-full flex items-center justify-between hover:bg-[#FF7F00]/90 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                  >
                    <span>JOIN THE COMMUNITY</span>
                    <ArrowUpRight className="w-5 h-5" />
                  </a>

                  <Link
                    href="/events"
                    className="w-full py-3 px-6 bg-transparent text-white border border-white/30 font-mono font-bold text-xs uppercase tracking-wider rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
                  >
                    <span>BROWSE PROGRAMME</span>
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
