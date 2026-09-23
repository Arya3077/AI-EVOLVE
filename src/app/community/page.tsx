import { ArrowUpRight, MessageSquare, Code2, Users2 } from "lucide-react";
import { Principles } from "@/components/principles";
import { RECENT_TALKS } from "@/data/talks";

const COMMUNITY_CHANNELS = [
  {
    icon: MessageSquare,
    name: "Discord Server",
    desc: "Real-time technical discussions, code reviews, and project collaboration channels.",
    action: "Join Discord",
    href: "https://discord.gg",
  },
  {
    icon: Code2,
    name: "Open Repositories",
    desc: "Community-maintained benchmarks, starter templates, and agent orchestration scripts.",
    action: "Explore GitHub",
    href: "https://github.com",
  },
  {
    icon: Users2,
    name: "Local Gatherings",
    desc: "Monthly developer meetups hosted by active community members across regional hubs.",
    action: "Find Local Event",
    href: "/events",
  },
];

export default function CommunityPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Header */}
      <section className="section-padding border-b border-border bg-background">
        <div className="container-custom space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 border border-border bg-card text-xs font-mono font-bold uppercase text-[#FF7F00]">
            [ GLOBAL BUILDER COLLECTIVE ]
          </div>

          <h1 className="editorial-heading text-5xl sm:text-7xl lg:text-8xl text-foreground">
            THE COMMUNITY
          </h1>

          <p className="text-xl sm:text-2xl text-foreground/80 max-w-3xl font-medium leading-relaxed">
            A place for builders, developers, founders, researchers, and AI enthusiasts pushing the boundaries of what is possible with artificial intelligence.
          </p>
        </div>
      </section>

      {/* Community Engagement Channels */}
      <section className="section-padding border-b border-border bg-card">
        <div className="container-custom">
          <div className="max-w-2xl mb-12">
            <div className="font-mono text-xs font-bold uppercase tracking-widest text-[#FF7F00] mb-2">
              [ GET CONNECTED ]
            </div>
            <h2 className="editorial-heading text-3xl sm:text-4xl text-foreground">
              COMMUNITY CHANNELS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {COMMUNITY_CHANNELS.map((ch) => {
              const Icon = ch.icon;
              return (
                <div
                  key={ch.name}
                  className="p-8 border border-border bg-background flex flex-col justify-between space-y-6 hover:border-[#FF7F00] transition-colors group"
                >
                  <div className="space-y-4">
                    <div className="p-3 w-fit bg-[#103C63] text-white dark:bg-[#FF7F00] dark:text-black">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground group-hover:text-[#FF7F00] transition-colors">
                      {ch.name}
                    </h3>
                    <p className="text-sm text-foreground/75 leading-relaxed">
                      {ch.desc}
                    </p>
                  </div>

                  <a
                    href={ch.href}
                    target={ch.href.startsWith("http") ? "_blank" : "_self"}
                    rel={ch.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase text-foreground hover:text-[#FF7F00] transition-colors"
                  >
                    <span>{ch.action}</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Principles Component Reuse */}
      <Principles />

      {/* Community Speakers Roster */}
      <section className="section-padding border-b border-border bg-background">
        <div className="container-custom space-y-10">
          <div>
            <div className="font-mono text-xs font-bold uppercase tracking-widest text-[#FF7F00] mb-2">
              [ FEATURED SPEAKERS ]
            </div>
            <h2 className="editorial-heading text-3xl sm:text-5xl text-foreground">
              RECENT CONTRIBUTORS & SPEAKERS
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {RECENT_TALKS.map((talk) => (
              <div
                key={talk.id}
                className="p-6 border border-border bg-card space-y-3 hover:border-[#103C63] dark:hover:border-[#FF7F00] transition-colors"
              >
                <div className="font-mono text-xs text-[#FF7F00] font-bold uppercase">
                  {talk.category}
                </div>
                <h3 className="font-bold text-lg text-foreground">{talk.speaker}</h3>
                <div className="font-mono text-xs text-foreground/60">{talk.role}</div>
                <p className="text-xs text-foreground/80 pt-2 border-t border-border">
                  &ldquo;{talk.talkTitle}&rdquo;
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
