import {
  Code,
  Presentation,
  Layers,
  Users,
  Sparkles,
} from "lucide-react";

const ACTIVITIES = [
  {
    num: "01",
    icon: Code,
    title: "WORKSHOPS",
    subtitle: "LEARN BY BUILDING",
    desc: "Interactive technical labs where developers build AI agents, experiment with models, and deploy working projects.",
    aspect: "lg:col-span-4",
    theme: "bg-[#103C63] text-white border-[#103C63]",
  },
  {
    num: "02",
    icon: Presentation,
    title: "TALKS & DEMOS",
    subtitle: "LEARN FROM BUILDERS",
    desc: "Live sessions, technical talks, and working demonstrations from people building in the field.",
    aspect: "lg:col-span-4",
    theme: "bg-[#FF7F00] text-black border-[#FF7F00]",
  },
  {
    num: "03",
    icon: Layers,
    title: "OPEN PROJECTS",
    subtitle: "BUILD TOGETHER",
    desc: "Collaborative projects, experiments, repositories, and open-source tools created by the community.",
    aspect: "lg:col-span-4",
    theme: "bg-card text-foreground border-border",
  },
  {
    num: "04",
    icon: Users,
    title: "MEETUPS",
    subtitle: "MEET CURIOUS PEOPLE",
    desc: "Small gatherings to exchange ideas, discuss technology, and meet people working on similar problems.",
    aspect: "lg:col-span-6",
    theme: "bg-[#103C63] text-white border-[#103C63]",
  },
  {
    num: "05",
    icon: Sparkles,
    title: "COLLABORATION",
    subtitle: "FIND PEOPLE TO BUILD WITH",
    desc: "Connect with developers, researchers, founders, and creators looking for people to experiment and build with.",
    aspect: "lg:col-span-6",
    theme: "bg-card text-foreground border-border",
  },
];

export function CommunityActivities() {
  return (
    <section className="relative overflow-hidden bg-[#EBE9DC] text-black dark:bg-black dark:text-white">
      <div className="container-custom section-padding relative z-10 space-y-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">

            <h2 className="editorial-heading text-3xl sm:text-4xl lg:text-5xl font-black leading-[0.95] tracking-tight">
              WHAT DOES THE
              <br />
              <span className="text-[#FF7F00]">COMMUNITY DO?</span>
            </h2>
          </div>
        </div>

        {/* Two-row asymmetric grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {ACTIVITIES.map((activity) => {
            const Icon = activity.icon;

            return (
              <article
                key={activity.num}
                className={`${activity.aspect} group relative min-h-[250px] overflow-hidden rounded-[24px] border p-7 sm:p-8 flex flex-col justify-between transition-transform duration-300 hover:-translate-y-1 ${activity.theme}`}
              >
                {/* Technical grid */}
                <div className="absolute inset-0 bg-tech-grid opacity-[0.12] pointer-events-none" />

                {/* Top metadata */}
                <div className="relative z-10 flex items-center justify-between border-b border-current/20 pb-4">
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-lg font-bold">
                      {activity.num}
                    </span>

                  </div>

                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-current/10">
                    <Icon className="h-4 w-4" />
                  </div>
                </div>

                {/* Main content */}
                <div className="relative z-10 mt-10 max-w-2xl">
                  <div className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] opacity-70">
                    {activity.subtitle}
                  </div>

                  <h3 className="editorial-heading mt-2 text-2xl sm:text-3xl font-black leading-[0.95] tracking-tight">
                    {activity.title}
                  </h3>

                  <p className="mt-4 max-w-xl text-xs sm:text-sm leading-relaxed opacity-75">
                    {activity.desc}
                  </p>
                </div>

                {/* Hover accent */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-current transition-all duration-300 group-hover:w-full" />
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}