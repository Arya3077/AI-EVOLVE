import { Camera, Users, Code, Terminal, Sparkles } from "lucide-react";

const GALLERY_ITEMS = [
  {
    id: "gal-1",
    title: "AI AGENTS BUILD SPRINT",
    tag: "WORKSHOP // TRIVANDRUM",
    icon: Code,
    aspect: "col-span-1 lg:col-span-8",
    bgTheme: "bg-[#103C63] text-white",
    desc: "30 engineers shipping multi-agent function calling scripts during a 1-day weekend sprint.",
  },
  {
    id: "gal-2",
    title: "DEMO NIGHT SHOWCASE",
    tag: "LIVE DEMO // KOCHI",
    icon: Terminal,
    aspect: "col-span-1 lg:col-span-4",
    bgTheme: "bg-[#FF7F00] text-black",
    desc: "10-minute live working demos of on-device WebGPU models.",
  },
  {
    id: "gal-3",
    title: "OPEN SOURCE RAG ARCHITECTURE",
    tag: "TECHNICAL SESSION // BANGALORE",
    icon: Sparkles,
    aspect: "col-span-1 lg:col-span-5",
    bgTheme: "bg-card text-foreground border-2 border-border",
    desc: "Deep dive into vector database index benchmarking and hybrid retrieval.",
  },
  {
    id: "gal-4",
    title: "LOCAL LLM FINE-TUNING LAB",
    tag: "HANDS-ON // CHENNAI",
    icon: Users,
    aspect: "col-span-1 lg:col-span-7",
    bgTheme: "bg-[#0A0F14] text-white",
    desc: "Developers quantization tuning 7B parameter models for private offline edge deployment.",
  },
];

export function Gallery() {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="container-custom space-y-12">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <div className="font-mono text-xs font-bold uppercase tracking-widest text-[#FF7F00]">
              05 / COMMUNITY SNAPSHOT
            </div>
            <h2 className="editorial-heading text-4xl sm:text-6xl text-foreground font-black leading-none">
              COMMUNITY IN ACTION
            </h2>
          </div>

          <div className="flex items-center gap-2 font-mono text-xs font-bold text-foreground/70">
            <Camera className="w-4 h-4 text-[#FF7F00]" />
            <span>REAL BUILDERS // REAL MOMENTS</span>
          </div>
        </div>

        {/* Asymmetric Gallery Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {GALLERY_ITEMS.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className={`${item.aspect} p-8 sm:p-10 rounded-[24px] flex flex-col justify-between space-y-6 hover:scale-[1.01] transition-all duration-300 shadow-md relative overflow-hidden group ${item.bgTheme}`}
              >
                {/* Decorative background grid */}
                <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />

                <div className="relative z-10 flex items-center justify-between border-b border-current/20 pb-4">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider opacity-80">
                    {item.tag}
                  </span>
                  <div className="p-2 rounded-full bg-current/10">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <div className="relative z-10 space-y-3 pt-6">
                  <h3 className="editorial-heading text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight leading-none">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm opacity-80 font-mono max-w-xl">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
