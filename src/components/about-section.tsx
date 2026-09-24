import { Terminal, ShieldCheck, Zap } from "lucide-react";

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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {PILLARS.map((item, idx) => {
            const Icon = item.icon;

            return (
              <div
                key={idx}
                className="group rounded-[24px] border-2 border-border bg-card p-6 sm:p-7 space-y-5 transition-all duration-200 hover:-translate-y-1 hover:border-[#FF7F00]"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold tracking-widest text-foreground/40">
                    0{idx + 1}
                  </span>

                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#103C63] text-white dark:bg-[#FF7F00] dark:text-black">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>

                <div>
                  <h3 className="text-base sm:text-lg font-extrabold uppercase tracking-tight text-foreground group-hover:text-[#FF7F00] transition-colors">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm text-foreground/70 leading-relaxed font-sans">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}