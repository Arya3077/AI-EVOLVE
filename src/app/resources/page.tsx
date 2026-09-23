import { ArrowUpRight, Code, Terminal, FileText, Cpu, Layers } from "lucide-react";

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
  return (
    <div className="section-padding bg-background min-h-screen">
      <div className="container-custom space-y-12">
        {/* Page Title */}
        <div className="border-b border-border pb-10 space-y-4">
          <div className="font-mono text-xs font-bold uppercase tracking-widest text-[#FF7F00]">
            [ BUILDER KNOWLEDGE & TOOLKITS ]
          </div>
          <h1 className="editorial-heading text-5xl sm:text-6xl md:text-7xl text-foreground font-black">
            COMMUNITY RESOURCES
          </h1>
          <p className="text-lg text-foreground/80 max-w-2xl">
            Open-source starter templates, evaluation benchmarks, architecture guides, and agent orchestration scripts shared freely by AI Evolve builders.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {RESOURCES.map((res, idx) => {
            const Icon = res.icon;
            return (
              <div
                key={idx}
                className="p-8 border-2 border-border bg-card rounded-[24px] space-y-5 flex flex-col justify-between hover:border-[#FF7F00] transition-colors duration-200 group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] font-bold uppercase tracking-wider px-3 py-1 bg-[#103C63] text-white dark:bg-[#FF7F00] dark:text-black rounded-full">
                      {res.category}
                    </span>
                    <div className="p-2 rounded-full bg-muted">
                      <Icon className="w-4 h-4 text-foreground" />
                    </div>
                  </div>

                  <h3 className="font-extrabold text-xl tracking-tight text-foreground group-hover:text-[#FF7F00] transition-colors">
                    {res.title}
                  </h3>

                  <p className="text-sm text-foreground/75 leading-relaxed font-sans">
                    {res.desc}
                  </p>
                </div>

                <a
                  href={res.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between py-3 px-5 border border-border rounded-full font-mono text-xs font-bold uppercase tracking-wider text-foreground group-hover:bg-[#FF7F00] group-hover:text-black group-hover:border-[#FF7F00] transition-all"
                >
                  <span>VIEW REPOSITORY</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
