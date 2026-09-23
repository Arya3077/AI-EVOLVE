import Link from "next/link";
import { ArrowRight, Code, Presentation, Users, Sparkles, Share2 } from "lucide-react";

const ACTIVITIES = [
  {
    icon: Users,
    title: "MEETUPS",
    desc: "In-person developer gatherings where engineers, founders, and creators discuss real-world implementations, trade-offs, and open questions.",
  },
  {
    icon: Code,
    title: "WORKSHOPS",
    desc: "Hands-on coding labs focused on practical skill acquisition—building AI agents, fine-tuning local models, and optimizing vector retrieval.",
  },
  {
    icon: Presentation,
    title: "DEMOS",
    desc: "No empty slides. Live demonstrations of working software, novel architectures, and experimental AI tools built by community members.",
  },
  {
    icon: Sparkles,
    title: "COMMUNITY PROJECTS",
    desc: "Collaborative open-source initiatives where builders assemble teams to launch open benchmarks, evaluation datasets, and agent toolkits.",
  },
  {
    icon: Share2,
    title: "KNOWLEDGE SHARING",
    desc: "Unfiltered technical write-ups, architecture breakdowns, and post-mortems shared freely to elevate the entire regional ecosystem.",
  },
];

export default function AboutPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Header */}
      <section className="section-padding border-b border-border bg-background">
        <div className="container-custom space-y-6">
          <div className="inline-block px-3 py-1 border border-border bg-card text-xs font-mono font-bold uppercase text-[#FF7F00]">
            [ MISSION & MANIFESTO ]
          </div>

          <h1 className="editorial-heading text-5xl sm:text-7xl lg:text-8xl text-foreground">
            ABOUT AI EVOLVE
          </h1>

          <p className="text-xl sm:text-3xl text-foreground/90 max-w-3xl font-extrabold leading-snug">
            AI Evolve is a community for people who are curious about AI and willing to build with it.
          </p>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="section-padding border-b border-border bg-card">
        <div className="container-custom grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6 text-base sm:text-lg text-foreground/80 leading-relaxed">
            <h2 className="editorial-heading text-3xl sm:text-4xl text-foreground">
              NO SLIDE DECKS. JUST WORKING CODE.
            </h2>
            <p>
              The landscape of artificial intelligence is moving faster than formal curriculum or traditional conferences can capture. We believe the best way to understand AI is to build with it.
            </p>
            <p>
              AI Evolve was created to bring engineers, developers, researchers, and technical founders together in high-signal, low-bullshit environments. Whether you are building complex agentic systems or testing local models on web runtimes, you belong here.
            </p>
          </div>

          <div className="lg:col-span-5 border-2 border-border p-8 bg-background space-y-6">
            <div className="font-mono text-xs font-bold uppercase text-[#FF7F00]">
              [ COMMUNITY STATS & REACH ]
            </div>
            <div className="space-y-4 font-mono text-sm">
              <div className="flex justify-between border-b border-border pb-2">
                <span className="text-foreground/60">PRIMARY FOCUS</span>
                <span className="font-bold text-foreground">APPLIED AI & AGENTS</span>
              </div>
              <div className="flex justify-between border-b border-border pb-2">
                <span className="text-foreground/60">FORMAT</span>
                <span className="font-bold text-foreground">IN-PERSON & HYBRID</span>
              </div>
              <div className="flex justify-between border-b border-border pb-2">
                <span className="text-foreground/60">ENTRY REQUIREMENT</span>
                <span className="font-bold text-[#FF7F00]">WILLINGNESS TO BUILD</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section-padding border-b border-border bg-background">
        <div className="container-custom space-y-12">
          <div>
            <div className="font-mono text-xs font-bold uppercase tracking-widest text-[#FF7F00] mb-2">
              [ CORE INITIATIVES ]
            </div>
            <h2 className="editorial-heading text-4xl sm:text-5xl text-foreground">
              WHAT WE DO
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ACTIVITIES.map((act) => {
              const Icon = act.icon;
              return (
                <div
                  key={act.title}
                  className="p-8 border border-border bg-card space-y-4 hover:border-[#103C63] dark:hover:border-[#FF7F00] transition-colors"
                >
                  <div className="p-3 w-fit bg-[#103C63] text-white dark:bg-[#FF7F00] dark:text-black">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-extrabold text-xl tracking-tight uppercase text-foreground">
                    {act.title}
                  </h3>
                  <p className="text-sm text-foreground/75 leading-relaxed">
                    {act.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="pt-8 text-center">
            <Link href="/#join" className="btn-primary text-sm uppercase">
              <span>GET INVOLVED WITH AI EVOLVE</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
