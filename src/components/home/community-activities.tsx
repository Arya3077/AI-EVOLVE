"use client";

import {
  Code,
  Presentation,
  Layers,
  Users,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

const ACTIVITIES = [
  {
    num: "01",
    icon: Code,
    title: "WORKSHOPS",
    subtitle: "LEARN BY BUILDING",
    desc: "Interactive technical labs where developers build AI agents, experiment with models, and deploy working projects.",
    aspect: "lg:col-span-4",
    theme: "bg-[#103C63] text-white border-[#103C63]",
    glow: "rgba(16, 60, 99, 0.55)",
  },
  {
    num: "02",
    icon: Presentation,
    title: "TALKS & DEMOS",
    subtitle: "LEARN FROM BUILDERS",
    desc: "Live sessions, technical talks, and working demonstrations from people building in the field.",
    aspect: "lg:col-span-4",
    theme: "bg-[#FF7F00] text-black border-[#FF7F00]",
    glow: "rgba(255, 127, 0, 0.55)",
  },
  {
    num: "03",
    icon: Layers,
    title: "OPEN PROJECTS",
    subtitle: "BUILD TOGETHER",
    desc: "Collaborative projects, experiments, repositories, and open-source tools created by the community.",
    aspect: "lg:col-span-4",
    theme: "bg-card text-foreground border-border",
    glow: "rgba(255, 127, 0, 0.35)",
  },
  {
    num: "04",
    icon: Users,
    title: "MEETUPS",
    subtitle: "MEET CURIOUS PEOPLE",
    desc: "Small gatherings to exchange ideas, discuss technology, and meet people working on similar problems.",
    aspect: "lg:col-span-6",
    theme: "bg-[#103C63] text-white border-[#103C63]",
    glow: "rgba(16, 60, 99, 0.55)",
  },
  {
    num: "05",
    icon: Sparkles,
    title: "COLLABORATION",
    subtitle: "FIND PEOPLE TO BUILD WITH",
    desc: "Connect with developers, researchers, founders, and creators looking for people to experiment and build with.",
    aspect: "lg:col-span-6",
    theme: "bg-card text-foreground border-border",
    glow: "rgba(255, 127, 0, 0.35)",
  },
];

const cardVariants = {
  hidden: (index: number) => ({
    opacity: 0,
    x: index % 2 === 0 ? -80 : 80,
  }),

  visible: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
      delay: index * 0.08,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

export function CommunityActivities() {
  return (
    <section className="relative overflow-hidden bg-[#EBE9DC] text-black dark:bg-black dark:text-white">
      <div className="container-custom section-padding relative z-10 space-y-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: false,
            amount: 0.3,
          }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between"
        >
          <div className="space-y-2">
            <h2 className="editorial-heading text-3xl font-black leading-[0.95] tracking-tight sm:text-4xl lg:text-5xl">
              WHAT DOES THE
              <br />
              <span className="text-[#FF7F00]">COMMUNITY DO?</span>
            </h2>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
          {ACTIVITIES.map((activity, index) => {
            const Icon = activity.icon;

            return (
              <motion.article
                key={activity.num}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: false,
                  amount: 0.2,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.015,
                  transition: {
                    duration: 0.35,
                    ease: [0.22, 1, 0.36, 1],
                  },
                }}
                style={
                  {
                    "--card-glow": activity.glow,
                  } as React.CSSProperties
                }
                className={`
                  ${activity.aspect}
                  group relative min-h-[250px]
                  overflow-hidden rounded-[24px]
                  border p-7 sm:p-8
                  flex flex-col justify-between
                  transition-shadow duration-500
                  hover:shadow-[0_0_40px_var(--card-glow)]
                  ${activity.theme}
                `}
              >
                {/* Technical grid */}
                <div className="pointer-events-none absolute inset-0 bg-tech-grid opacity-[0.12]" />

                {/* Main glow */}
                <div
                  className="
                    pointer-events-none absolute
                    -inset-20
                    opacity-0
                    blur-3xl
                    transition-opacity duration-700
                    group-hover:opacity-30
                  "
                  style={{
                    background: `radial-gradient(
                      circle,
                      ${activity.glow} 0%,
                      transparent 65%
                    )`,
                  }}
                />

                {/* Top metadata */}
                <div className="relative z-10 flex items-center justify-between border-b border-current/20 pb-4">
                  <span className="font-mono text-lg font-bold">
                    {activity.num}
                  </span>

                  <motion.div
                    whileHover={{
                      rotate: 8,
                      scale: 1.12,
                    }}
                    transition={{
                      duration: 0.3,
                    }}
                    className="flex h-9 w-9 items-center justify-center rounded-full bg-current/10"
                  >
                    <Icon className="h-4 w-4" />
                  </motion.div>
                </div>

                {/* Main content */}
                <div className="relative z-10 mt-10 max-w-2xl">
                  <div className="font-mono text-[10px] font-bold uppercase tracking-[0.14em] opacity-70">
                    {activity.subtitle}
                  </div>

                  <h3 className="editorial-heading mt-2 text-2xl font-black leading-[0.95] tracking-tight sm:text-3xl">
                    {activity.title}
                  </h3>

                  <p className="mt-4 max-w-xl text-xs leading-relaxed opacity-75 sm:text-sm">
                    {activity.desc}
                  </p>
                </div>

                {/* Bottom hover accent */}
                <div className="absolute bottom-0 left-0 h-1 w-0 bg-current transition-all duration-500 group-hover:w-full" />

                {/* Corner glow */}
                <div
                  className="
                    pointer-events-none absolute
                    -bottom-20 -right-20
                    h-40 w-40
                    rounded-full
                    opacity-0
                    blur-3xl
                    transition-opacity duration-700
                    group-hover:opacity-40
                  "
                  style={{
                    backgroundColor: activity.glow,
                  }}
                />
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}