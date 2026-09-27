"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowUpRight,
  Sparkles,
  Terminal,
} from "lucide-react";

export function CTA() {
  const HIGHLIGHTS = [
    "Connect with active developers & AI researchers",
    "Hands-on workshops, live demos & code sprints",
    "Share your experiments and ship production tools",
  ];

  return (
    <section
      id="join"
      className="section-padding bg-background border-b border-border"
    >
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{
            duration: 1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="relative overflow-hidden rounded-[32px] bg-[#103C63] text-white border-2 border-[#103C63] p-8 sm:p-12 lg:p-16 shadow-2xl"
        >
          {/* Existing background */}
          <div
            className="absolute inset-0 opacity-[0.08] pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(#FFFFFF 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />

          {/* Subtle moving light */}
          <motion.div
            animate={{
              x: ["-100%", "200%"],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatDelay: 3,
              ease: "easeInOut",
            }}
            className="absolute top-0 bottom-0 w-[25%] pointer-events-none opacity-[0.08]"
            style={{
              background:
                "linear-gradient(90deg, transparent, white, transparent)",
              filter: "blur(30px)",
              transform: "skewX(-15deg)",
            }}
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* LEFT */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.25 }}
              transition={{
                duration: 0.9,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="lg:col-span-7 space-y-6"
            >
              <h2 className="editorial-heading text-4xl sm:text-5xl lg:text-6xl text-white font-black leading-none tracking-tight">
                READY TO
                <br />
                BUILD
                <br />
                <span className="text-[#FF7F00]">SOMETHING?</span>
              </h2>

              <p className="text-lg sm:text-xl text-white/90 max-w-xl font-medium leading-relaxed">
                There are people building things. There are events happening.
                There are things to learn.{" "}
                <span className="text-[#FF7F00] font-bold">
                  Now become part of it.
                </span>
              </p>

              <div className="space-y-3 pt-2">
                {HIGHLIGHTS.map((highlight, index) => (
                  <motion.div
                    key={highlight}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: false, amount: 0.3 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="text-sm text-white/75"
                  >
                    — {highlight}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* RIGHT */}
            <motion.div
              initial={{ opacity: 0, x: 40, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: false, amount: 0.25 }}
              transition={{
                duration: 1,
                delay: 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="lg:col-span-5 flex justify-center lg:justify-end"
            >
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-full max-w-md bg-white/10 backdrop-blur-md border border-white/20 p-8 rounded-[24px] space-y-8 text-white shadow-xl"
              >
                <div className="flex items-center justify-between border-b border-white/20 pb-4">
                  <div className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider text-white/80">
                    <Terminal className="w-4 h-4 text-[#FF7F00]" />
                    <span>AI_EVOLVE_ACCESS</span>
                  </div>

                  <motion.div
                    animate={{ rotate: [0, 8, -8, 0] }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Sparkles className="w-4 h-4 text-[#FF7F00]" />
                  </motion.div>
                </div>

                <div className="space-y-2">
                  <div className="font-mono text-xs text-[#FF7F00] font-bold uppercase">
                    [ FREE BUILDER MEMBERSHIP ]
                  </div>

                  <div className="text-2xl font-black uppercase text-white tracking-tight">
                    NO FEES. NO GATEKEEPING. JUST CODE.
                  </div>

                  <p className="text-xs text-white/70 font-mono leading-relaxed pt-1">
                    Get instant access to community Discord, event RSVPs, and
                    live builder demo notifications.
                  </p>
                </div>

                <div className="space-y-3 pt-2">
                  <motion.a
                    href="https://discord.gg"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, scale: 1.015 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.2 }}
                    className="w-full py-4 px-6 bg-[#FF7F00] text-black font-mono font-extrabold text-sm uppercase tracking-wider rounded-full flex items-center justify-between shadow-lg"
                  >
                    <span>JOIN THE COMMUNITY</span>
                    <ArrowUpRight className="w-5 h-5" />
                  </motion.a>

                  <Link
                    href="/events"
                    className="w-full py-3 px-6 bg-transparent text-white border border-white/30 font-mono font-bold text-xs uppercase tracking-wider rounded-full flex items-center justify-center hover:bg-white/10 transition-colors"
                  >
                    BROWSE PROGRAMME
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
