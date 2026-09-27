"use client";

import { ShieldCheck, Cpu, Code2, Globe2 } from "lucide-react";
import { motion } from "framer-motion";

const PARTNERS = [
  {
    name: "DEV LABS",
    role: "VENUE & LAB PARTNER",
    icon: Cpu,
  },
  {
    name: "OPEN AGENT FOUNDATION",
    role: "OPEN SOURCE GRANT",
    icon: Code2,
  },
  {
    name: "VECTOR ENGINE",
    role: "INFRASTRUCTURE SPONSOR",
    icon: ShieldCheck,
  },
  {
    name: "GLOBAL BUILDERS HUB",
    role: "COMMUNITY NETWORK",
    icon: Globe2,
  },
];

const cardVariants = {
  hidden: (index: number) => ({
    opacity: 0,
    x: index % 2 === 0 ? -70 : 70,
    y: 20,
    scale: 0.96,
  }),

  visible: (index: number) => ({
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.9,
      delay: index * 0.12,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export function Supporters() {
  return (
    <section className="section-padding relative overflow-hidden bg-background">
      <div className="container-custom space-y-10">
        {/* Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: false,
            amount: 0.3,
          }}
          transition={{
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto max-w-2xl space-y-2 text-center"
        >
          <h2 className="editorial-heading text-3xl font-black text-foreground sm:text-4xl">
            COMMUNITY SUPPORTED BY
          </h2>

          <p className="font-mono text-xs text-foreground/70 sm:text-sm">
            Organizations and open-source collectives enabling AI Evolve events
            and infrastructure.
          </p>
        </motion.div>

        {/* Supporters Grid */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {PARTNERS.map((partner, index) => {
            const Icon = partner.icon;

            return (
              <motion.div
                key={partner.name}
                custom={index}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{
                  once: false,
                  amount: 0.25,
                }}
                whileHover={{
                  y: -7,
                  rotate: index % 2 === 0 ? 1 : -1,
                  scale: 1.025,
                  transition: {
                    duration: 0.25,
                    ease: "easeOut",
                  },
                }}
                className="
                  group relative
                  flex flex-col
                  items-center
                  justify-center
                  space-y-3
                  overflow-hidden
                  rounded-[20px]
                  border-2 border-border
                  bg-card
                  p-6
                  text-center
                  transition-colors duration-300
                  hover:border-[#FF7F00]
                  hover:shadow-[0_12px_35px_rgba(255,127,0,0.14)]
                "
              >
                {/* Hover glow */}
                <div
                  className="
                    pointer-events-none
                    absolute inset-0
                    rounded-[20px]
                    opacity-0
                    transition-opacity duration-500
                    group-hover:opacity-100
                  "
                  style={{
                    boxShadow:
                      "inset 0 0 35px rgba(255,127,0,0.07)",
                  }}
                />

                {/* Icon */}
                <motion.div
                  whileHover={{
                    rotate: [0, -7, 7, -5, 5, 0],
                    scale: 1.1,
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut",
                  }}
                  className="
                    relative z-10
                    rounded-full
                    bg-muted/60
                    p-3
                    text-foreground
                    transition-colors duration-300
                    group-hover:bg-[#FF7F00]
                    group-hover:text-black
                  "
                >
                  <Icon className="h-5 w-5" />
                </motion.div>

                {/* Name */}
                <div className="relative z-10 font-black text-sm uppercase tracking-tight text-foreground transition-colors duration-300 group-hover:text-[#FF7F00]">
                  {partner.name}
                </div>

                {/* Role */}
                <div className="relative z-10 font-mono text-[10px] tracking-wider text-foreground/50">
                  {partner.role}
                </div>

                {/* Bottom accent */}
                <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#FF7F00] transition-all duration-500 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}