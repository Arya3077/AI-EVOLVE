"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const PARTNERS = [
  {
    name: "NETRASEMI",
    logo: "/logos/netrasemi.webp",
  },
  {
    name: "GEMMA",
    logo: "/logos/gemma.png",
  },
  {
    name: "HEX20",
    logo: "/logos/hex20.jpg",
  },
  {
    name: "FAYA HOME",
    logo: "/logos/faya-home.png",
  },
];

export function Supporters() {
  return (
    <section className="section-padding relative overflow-hidden bg-background">
      <div className="container-custom space-y-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-2xl space-y-2 text-center"
        >
          <h2 className="ediorial-heading text-3xl font-black text-foreground sm:text-4xl">
            SUPPORTED BY
          </h2>

          <p className="font-mono text-xs text-foreground/70 sm:text-sm">
            Organizations and open-source collectives enabling AI Evolve events
            and infrastructure.
          </p>
        </motion.div>

        {/* Supporters Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          className="mx-auto grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {PARTNERS.map((partner, index) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 18, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{
                duration: 0.5,
                delay: index * 0.12,
                ease: "easeOut",
              }}
              className="flex h-24 items-center justify-center"
            >
              <div className="flex h-20 w-44 items-center justify-center rounded-md bg-white p-2">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  width={160}
                  height={80}
                  className={`h-full w-full object-contain drop-shadow-[0_1px_1px_rgba(0,0,0,0.18)] ${
                    partner.name === "FAYA HOME" ? "scale-150" : ""
                  }`}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}