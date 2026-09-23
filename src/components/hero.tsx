import Link from "next/link";
import { ArrowRight, Terminal, Zap } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border py-16 sm:py-24 lg:py-32 bg-background">
      {/* Layered Background: Tech Grid Overlay */}
      <div className="absolute inset-0 bg-tech-grid opacity-60 pointer-events-none" />

      {/* Decorative Brand Accent Line */}
      <div className="absolute top-0 left-1/4 w-px h-full bg-border/40 pointer-events-none hidden md:block" />
      <div className="absolute top-0 right-1/4 w-px h-full bg-border/40 pointer-events-none hidden md:block" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Main Content (Left Column) */}
          <div className="lg:col-span-8 flex flex-col space-y-8">
            {/* Section Tag */}
           

            {/* Main Editorial Display Heading */}
            <h1 className="editorial-heading text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-foreground tracking-tighter font-black">
              BUILD.
              <br />
              <span className="text-[#FF7F00]">LEARN.</span>
              <br />
              EVOLVE.
            </h1>

            {/* Subtitle */}
            <p className="text-xl sm:text-2xl font-medium text-foreground/85 max-w-2xl leading-relaxed">
              A community for people building, learning, and experimenting with AI. Hands-on workshops, live demos, and real-world projects.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <Link href="/events" className="btn-primary text-sm sm:text-base">
                <span>EXPLORE EVENTS</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/#join" className="btn-secondary text-sm sm:text-base">
                <span>JOIN THE COMMUNITY</span>
              </Link>
            </div>
          </div>

          {/* Asymmetric Technical Metadata Block (Right Column) */}
          <div className="lg:col-span-4 flex justify-center lg:justify-end pt-4 lg:pt-0">
            <div className="w-full max-w-md border-2 border-border bg-card p-6 sm:p-8 flex flex-col justify-between space-y-8 relative rounded-[24px] shadow-xl">
              {/* Corner Technical Accents */}
              <div className="absolute top-0 left-0 w-3.5 h-3.5 border-t-2 border-l-2 border-[#FF7F00] -translate-x-1 -translate-y-1" />
              <div className="absolute top-0 right-0 w-3.5 h-3.5 border-t-2 border-r-2 border-[#FF7F00] translate-x-1 -translate-y-1" />
              <div className="absolute bottom-0 left-0 w-3.5 h-3.5 border-b-2 border-l-2 border-[#FF7F00] -translate-x-1 translate-y-1" />
              <div className="absolute bottom-0 right-0 w-3.5 h-3.5 border-b-2 border-r-2 border-[#FF7F00] translate-x-1 translate-y-1" />

              <div className="flex items-center justify-between border-b border-border pb-4">
                <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase text-foreground/80">
                  <Terminal className="w-4 h-4 text-[#FF7F00]" />
                  <span>COMMUNITY_MANIFESTO</span>
                </div>
                <Zap className="w-4 h-4 text-[#FF7F00]" />
              </div>

              <div className="space-y-4">
                <div className="font-mono text-xs text-[#FF7F00] font-bold uppercase">
                  [ HIGH-SIGNAL NETWORK ]
                </div>
                <div className="text-2xl sm:text-3xl font-black uppercase tracking-tight text-foreground leading-none">
                  BUILDERS OVER SLIDE DECKS.
                </div>
                <p className="text-xs sm:text-sm text-foreground/75 font-mono leading-relaxed">
                  We bring engineers, researchers, and creators together to ship autonomous agents, local models, and production LLMs.
                </p>
              </div>

              <div className="border-t border-border pt-4 font-mono text-xs flex justify-between items-center text-foreground/70">
                <span>FORMAT: IN-PERSON & HYBRID</span>
                <span className="font-bold text-[#FF7F00]">OPEN ACCESS</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
