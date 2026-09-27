"use client";

import Link from "next/link";
import { motion } from "framer-motion";

import { Logo } from "./logo";

const footerVariants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  },
};

const columnVariants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: index * 0.12,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

const socialVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
    y: 15,
  },
  visible: (index: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: index * 0.08,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
    },
  }),
};

export function Footer() {
  return (
    <footer className="w-full bg-background border-t-2 border-border py-12 text-foreground/80">
      <div className="container-custom space-y-12">
        <motion.div
          variants={footerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.15 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pb-8 border-b border-border"
        >
          {/* Brand & Description */}
          <motion.div
            custom={0}
            variants={columnVariants}
            className="lg:col-span-5 space-y-4"
          >
            <Link href="/" className="block w-fit">
              <motion.div
                whileHover={{ x: 4 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
              >
                <Logo className="h-8 w-auto text-foreground" />
              </motion.div>
            </Link>

            <p className="text-xs sm:text-sm text-foreground/75 font-mono max-w-sm leading-relaxed">
              A community for people building, learning, and experimenting
              with technology and AI.
            </p>
          </motion.div>

          {/* Navigation Links */}
          <motion.div
            custom={1}
            variants={columnVariants}
            className="lg:col-span-3 space-y-3"
          >
            <div className="font-mono text-xs font-bold uppercase tracking-widest text-[#FF7F00]">
              NAVIGATION
            </div>

            <nav className="flex flex-col space-y-2 text-xs font-mono font-bold uppercase tracking-wider">
              {[
                { href: "/", label: "Home" },
                { href: "/resources", label: "Resources" },
                { href: "/events", label: "Events" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="w-fit transition-colors hover:text-[#FF7F00]"
                >
                  <motion.span
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="inline-block"
                  >
                    {link.label}
                  </motion.span>
                </Link>
              ))}
            </nav>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            custom={2}
            variants={columnVariants}
            className="lg:col-span-4 space-y-3"
          >
            <div className="font-mono text-xs font-bold uppercase tracking-widest text-[#FF7F00]">
              CONNECT WITH US
            </div>

            <div className="flex items-center gap-3">
              {/* GitHub */}
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="AI Evolve GitHub"
                custom={0}
                variants={socialVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                whileHover={{
                  y: -5,
                  rotate: -5,
                  scale: 1.08,
                }}
                whileTap={{ scale: 0.92 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="p-3 border border-border rounded-full hover:border-[#FF7F00] hover:text-[#FF7F00] transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
              </motion.a>

              {/* LinkedIn */}
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="AI Evolve LinkedIn"
                custom={1}
                variants={socialVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                whileHover={{
                  y: -5,
                  rotate: 5,
                  scale: 1.08,
                }}
                whileTap={{ scale: 0.92 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="p-3 border border-border rounded-full hover:border-[#FF7F00] hover:text-[#FF7F00] transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </motion.a>

              {/* Instagram */}
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="AI Evolve Instagram"
                custom={2}
                variants={socialVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                whileHover={{
                  y: -5,
                  rotate: -5,
                  scale: 1.08,
                }}
                whileTap={{ scale: 0.92 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="p-3 border border-border rounded-full hover:border-[#FF7F00] hover:text-[#FF7F00] transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618-6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </motion.a>

              {/* WhatsApp */}
              <motion.a
                href="https://whatsapp.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="AI Evolve WhatsApp Community"
                custom={3}
                variants={socialVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.3 }}
                whileHover={{
                  y: -5,
                  rotate: 5,
                  scale: 1.08,
                }}
                whileTap={{ scale: 0.92 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="p-3 border border-border rounded-full hover:border-[#FF7F00] hover:text-[#FF7F00] transition-colors"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z" />
                </svg>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{
            duration: 0.7,
            delay: 0.15,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-foreground/60"
        >
          <div>© 2026 AI EVOLVE COMMUNITY. ALL RIGHTS RESERVED.</div>
          <div>BUILT FOR BUILDERS.</div>
        </motion.div>
      </div>
    </footer>
  );
}