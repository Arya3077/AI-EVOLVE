"use client";

import { Terminal, ShieldCheck, Zap } from "lucide-react";
import { motion } from "framer-motion";

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

const cardVariants = {
  hidden: (index: number) => ({
    opacity: 0,
    y: 45,
    x: index % 2 === 0 ? -25 : 25,
    scale: 0.96,
  }),

  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    x: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      delay: index * 0.12,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export function AboutSection() {
  return (
    <section className="section-padding relative overflow-hidden bg-background">
      <div className="container-custom">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {PILLARS.map((item, idx) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={idx}
                custom={idx}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: false,
                  amount: 0.25,
                }}
                whileHover={{
                  y: -6,
                  rotate: idx % 2 === 0 ? 1 : -1,
                  scale: 1.015,
                  transition: {
                    duration: 0.2,
                    ease: "easeOut",
                  },
                }}
                className="
                  group relative
                  rounded-[24px]
                  border-2 border-border
                  bg-card
                  p-6 sm:p-7
                  space-y-5
                  transition-colors duration-300
                  hover:border-[#FF7F00]
                  hover:shadow-[0_12px_35px_rgba(255,127,0,0.14)]
                "
              >
                {/* Subtle hover glow */}
                <div
                  className="
                    pointer-events-none
                    absolute inset-0
                    rounded-[24px]
                    opacity-0
                    transition-opacity duration-300
                    group-hover:opacity-100
                  "
                  style={{
                    boxShadow: "inset 0 0 30px rgba(255,127,0,0.06)",
                  }}
                />

                {/* Top row */}
                <div className="relative z-10 flex items-center justify-between">
                  <span className="font-mono text-xs font-bold tracking-widest text-foreground/40">
                    0{idx + 1}
                  </span>

                  <motion.div
                    whileHover={{
                      rotate: [0, -8, 8, -6, 6, 0],
                      scale: 1.08,
                    }}
                    transition={{
                      duration: 0.5,
                      ease: "easeInOut",
                    }}
                    className="
                      flex h-11 w-11
                      items-center justify-center
                      rounded-full
                      bg-[#103C63]
                      text-white
                      dark:bg-[#FF7F00]
                      dark:text-black
                    "
                  >
                    <Icon className="h-5 w-5" />
                  </motion.div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-base font-extrabold uppercase tracking-tight text-foreground transition-colors duration-300 group-hover:text-[#FF7F00] sm:text-lg">
                    {item.title}
                  </h3>

                  <p className="mt-3 font-sans text-sm leading-relaxed text-foreground/70">
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}