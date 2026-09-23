import { Sparkles, Terminal, ShieldCheck, Zap } from "lucide-react";

export function AboutSection() {
  const PILLARS = [
    {
      icon: Terminal,
      title: "PRACTICAL CODE OVER HYPE",
      desc: "We focus on building working artifacts—autonomous agents, local LLM runtimes, and fine-tuned models—rather than empty slide decks.",
    },
    {
      icon: ShieldCheck,
      title: "OPEN & INCLUSIVE NETWORK",
      desc: "Whether you are a senior ML researcher, self-taught engineer, or curious builder, AI Evolve is an accessible space to collaborate freely.",
    },
    {
      icon: Zap,
      title: "PEER-TO-PEER KNOWLEDGE",
      desc: "Our members regularly host live workshops, share honest technical postmortems, and publish open-source starter templates.",
    },
  ];

  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Heading & Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 font-mono text-xs font-bold uppercase tracking-widest text-[#FF7F00] bg-[#FF7F00]/10 border border-[#FF7F00]/20 rounded-full">
              02 / ABOUT AI EVOLVE
            </div>

            <h2 className="editorial-heading text-4xl sm:text-6xl text-foreground font-black leading-none">
              BUILT BY BUILDERS.
              <br />
              <span className="text-[#FF7F00]">FOR BUILDERS.</span>
            </h2>

            <p className="text-lg sm:text-xl text-foreground/85 font-medium leading-relaxed">
              AI Evolve is an open technology community created for people who are curious about artificial intelligence and eager to build with it.
            </p>

            <p className="text-sm text-foreground/75 leading-relaxed font-sans">
              The AI ecosystem moves too quickly for traditional lectures or corporate trade shows. We bring software engineers, researchers, founders, and students together in high-signal environments to test new ideas, debug complex systems, and launch real software.
            </p>
          </div>

          {/* Right Column: 24px Rounded Cards Grid */}
          <div className="lg:col-span-6 space-y-4">
            {PILLARS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-6 sm:p-7 border-2 border-border bg-card rounded-[24px] space-y-3 hover:border-[#FF7F00] transition-colors duration-200 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-full bg-[#103C63] text-white dark:bg-[#FF7F00] dark:text-black">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-extrabold text-base sm:text-lg uppercase tracking-tight text-foreground group-hover:text-[#FF7F00] transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-foreground/75 leading-relaxed pl-12 font-sans">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
