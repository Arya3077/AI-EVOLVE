import { Code, Presentation, Layers, Users, Sparkles } from "lucide-react";

const ACTIVITIES = [
  {
    num: "01",
    icon: Code,
    title: "WORKSHOPS",
    subtitle: "Learn by building.",
    desc: "Interactive technical labs where developers build AI agents, fine-tune models, and deploy local runtimes.",
  },
  {
    num: "02",
    icon: Presentation,
    title: "TALKS & DEMOS",
    subtitle: "Learn from people working in the field.",
    desc: "No pitch decks. 10-minute live demonstrations of working software and production LLM architectures.",
  },
  {
    num: "03",
    icon: Layers,
    title: "OPEN PROJECTS",
    subtitle: "Build and experiment together.",
    desc: "Collaborative repositories, benchmark datasets, and open-source agent toolkits built by community teams.",
  },
  {
    num: "04",
    icon: Users,
    title: "MEETUPS",
    subtitle: "Meet people curious about the same things.",
    desc: "Casual technical gatherings to discuss multi-agent systems, WebGPU inference, and production scaling.",
  },
  {
    num: "05",
    icon: Sparkles,
    title: "COLLABORATION",
    subtitle: "Find people to build with.",
    desc: "Connect with co-founders, research collaborators, and fellow software engineers shipping AI apps.",
  },
];

export function CommunityActivities() {
  return (
    <section className="section-padding bg-[#EBE9DC] text-[#0A0F14] dark:bg-[#0D1117] dark:text-[#F1F5F9] relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

      <div className="container-custom relative z-10 space-y-12">
        {/* Header */}
        <div className="space-y-3">
          <div className="font-mono text-xs font-bold uppercase tracking-widest text-[#FF7F00]">
            03 / COMMUNITY ACTIVITIES
          </div>
          <h2 className="editorial-heading text-4xl sm:text-6xl md:text-7xl font-black leading-none">
            WHAT DOES THE
            <br />
            <span className="text-[#FF7F00]">COMMUNITY DO?</span>
          </h2>
        </div>

        {/* 5 Activity Poster Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ACTIVITIES.map((act) => {
            const Icon = act.icon;
            return (
              <div
                key={act.num}
                className="p-8 bg-white/80 dark:bg-card/80 backdrop-blur-md border-2 border-border/80 rounded-[24px] space-y-4 flex flex-col justify-between hover:border-[#FF7F00] transition-colors duration-300 group shadow-sm"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-border/60 pb-3">
                    <span className="font-mono text-2xl font-black text-[#FF7F00]">
                      {act.num}
                    </span>
                    <div className="p-2 rounded-full bg-[#103C63] text-white dark:bg-[#FF7F00] dark:text-black">
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <div>
                    <h3 className="editorial-heading text-2xl font-black uppercase text-foreground group-hover:text-[#FF7F00] transition-colors">
                      {act.title}
                    </h3>
                    <div className="font-mono text-xs font-bold text-[#FF7F00] mt-1">
                      {act.subtitle}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed font-sans">
                    {act.desc}
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
