"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Code, Terminal, FileText, Cpu, Layers } from "lucide-react";

import { PageBackdrop } from "@/components/page-backdrop";
import { cardIn, fadeUp } from "@/lib/motion";

const RESOURCES = [
  {
    category: "STARTER TEMPLATE",
    title: "Next.js 16 + React 19 Autonomous Agent Starter",
    desc: "Pre-configured template with tool calling, streaming responses, and local eval logging.",
    icon: Code,
    link: "https://github.com",
  },
  {
    category: "BENCHMARK & EVALS",
    title: "Deterministic Evals Suite for Non-Deterministic Output",
    desc: "Python testing harness to measure LLM function accuracy, latency distribution, and token cost.",
    icon: Terminal,
    link: "https://github.com",
  },
  {
    category: "EDGE & ON-DEVICE",
    title: "WebGPU Local Small Model Inference Lab",
    desc: "Zero-server browser runtime running quantized 3B models directly on client GPUs.",
    icon: Cpu,
    link: "https://github.com",
  },
  {
    category: "ARCHITECTURE GUIDE",
    title: "Production RAG Indexing & Vector Search Blueprint",
    desc: "Comprehensive guide on hybrid BM25 + dense vector indexing and re-ranking algorithms.",
    icon: FileText,
    link: "https://github.com",
  },
  {
    category: "TOOLKIT",
    title: "Multi-Agent Orchestration & Communication Bus",
    desc: "Lightweight pub/sub bus for coordinating asynchronous AI worker agents.",
    icon: Layers,
    link: "https://github.com",
  },
];

export default function ResourcesPage() {
  const reduced = useReducedMotion() === true;
  const fades = fadeUp(reduced);
  const cards = cardIn(reduced);

  return (
    <div className="section-padding relative isolate min-h-screen overflow-hidden bg-[var(--bg)]">
      <PageBackdrop />
      <div className="container-custom space-y-12">
        {/* Page Title */}
        <motion.div
          className="space-y-4 border-b border-[var(--border)] pb-10"
          custom={0.1}
          variants={fades}
          initial="hidden"
          animate="visible"
        >
          <div className="font-mono text-xs font-bold uppercase tracking-widest text-[var(--accent)]">
            [ BUILDER KNOWLEDGE & TOOLKITS ]
          </div>
          <h1 className="editorial-heading text-5xl font-black text-[var(--text)] sm:text-6xl md:text-7xl">
            COMMUNITY RESOURCES
          </h1>
          <p className="max-w-2xl text-lg text-[var(--text-muted)]">
            Open-source starter templates, evaluation benchmarks, architecture guides, and agent orchestration scripts shared freely by AI Evolve builders.
          </p>
        </motion.div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {RESOURCES.map((res, idx) => {
            const Icon = res.icon;
            return (
              <motion.div
                key={idx}
                custom={idx}
                variants={cards}
                initial="hidden"
                animate="visible"
                className="group flex flex-col justify-between space-y-5 rounded-[24px] border-2 border-[var(--border)] bg-[var(--bg)] p-8 transition-colors duration-200 hover:border-[var(--accent)]"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full bg-[var(--accent)] px-3 py-1 font-mono text-[11px] font-bold uppercase tracking-wider text-white">
                      {res.category}
                    </span>
                    <div className="rounded-full bg-[var(--bg-block)] p-2">
                      <Icon className="h-4 w-4 text-[var(--text-muted)]" />
                    </div>
                  </div>

                  <h3 className="text-xl font-extrabold tracking-tight text-[var(--text)] transition-colors group-hover:text-[var(--accent)]">
                    {res.title}
                  </h3>

                  <p className="font-sans text-sm leading-relaxed text-[var(--text-muted)]">
                    {res.desc}
                  </p>
                </div>

                <a
                  href={res.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between rounded-full border border-[var(--border)] px-5 py-3 font-mono text-xs font-bold uppercase tracking-wider text-[var(--text)] transition-colors duration-200 hover:border-[var(--accent)] hover:bg-[var(--accent)] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--accent)]"
                >
                  <span>VIEW REPOSITORY</span>
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
