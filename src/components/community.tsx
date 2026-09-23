import Link from "next/link";
import { ArrowRight, Code, Sparkles, Users, Cpu, Layers, Terminal } from "lucide-react";

const ROLES = [
  "DEVELOPERS",
  "DESIGNERS",
  "FOUNDERS",
  "RESEARCHERS",
  "STUDENTS",
  "CURIOUS MINDS",
];

const COMMUNITY_PILLARS = [
  {
    icon: Code,
    title: "LIVE DEMOS",
    desc: "10-minute working software demos. No slide pitch decks—just source code and live runtimes.",
  },
  {
    icon: Cpu,
    title: "ON-DEVICE & LOCAL AI",
    desc: "Hands-on labs running quantized LLMs, WebGPU inference, and private local data pipelines.",
  },
  {
    icon: Layers,
    title: "AUTONOMOUS AGENTS",
    desc: "Architecting multi-agent orchestration, function calling, tool use, and evaluation loops.",
  },
  {
    icon: Sparkles,
    title: "OPEN KNOWLEDGE",
    desc: "Free technical postmortems, architecture blueprints, and community open-source repositories.",
  },
];

export function CommunitySection() {
  return (
    <section className="section-padding border-b border-border bg-card">
      <div className="container-custom">
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
          <div className="lg:col-span-7 space-y-4">
            <div className="font-mono text-xs font-bold uppercase tracking-widest text-[#FF7F00]">
              04 / THE COMMUNITY
            </div>

            <h2 className="editorial-heading text-5xl sm:text-6xl lg:text-7xl text-foreground font-black leading-none">
              PEOPLE WHO
              <br />
              <span className="text-[#FF7F00]">BUILD.</span>
            </h2>

            <p className="text-xl sm:text-2xl font-medium text-foreground/85 max-w-xl leading-relaxed pt-2">
              AI Evolve is a place to meet people, share experiments, and learn from each other in high-signal environments.
            </p>
          </div>

          {/* Builder Roles Tag Cloud / Poster Column */}
          <div className="lg:col-span-5 border-2 border-border bg-background p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-border pb-4 font-mono text-xs font-bold text-foreground/70">
              <span className="flex items-center gap-2">
                <Users className="w-4 h-4 text-[#FF7F00]" />
                COMMUNITY ROSTER
              </span>
              <Terminal className="w-4 h-4 text-[#FF7F00]" />
            </div>

            <div className="flex flex-wrap gap-2.5">
              {ROLES.map((role) => (
                <span
                  key={role}
                  className="px-3 py-1.5 font-mono text-xs font-bold uppercase tracking-wider bg-card border border-border text-foreground hover:border-[#FF7F00] hover:text-[#FF7F00] transition-colors"
                >
                  {role}
                </span>
              ))}
            </div>

            <div className="pt-4 border-t border-border flex justify-between items-center text-xs font-mono">
              <span className="text-foreground/60">NETWORK ACCESS</span>
              <Link href="/community" className="font-bold text-[#FF7F00] hover:underline flex items-center gap-1">
                <span>SEE ALL MEMBERS</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>

        {/* Community Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {COMMUNITY_PILLARS.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="p-6 border-2 border-border bg-background flex flex-col justify-between space-y-4 hover:border-[#FF7F00] transition-colors group"
              >
                <div className="space-y-3">
                  <div className="p-2.5 w-fit bg-[#103C63] text-white dark:bg-[#FF7F00] dark:text-black">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-extrabold text-lg uppercase tracking-tight text-foreground group-hover:text-[#FF7F00] transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-foreground/75 leading-relaxed">
                    {pillar.desc}
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
