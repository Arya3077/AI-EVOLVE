const PRINCIPLES = [
  {
    num: "01",
    title: "BUILD FIRST",
    description: "Learn by creating real things. Code over slide decks, working software over speculative theory.",
  },
  {
    num: "02",
    title: "SHARE KNOWLEDGE",
    description: "What you learn should move the community forward. Open source, clear writeups, and honest technical postmortems.",
  },
  {
    num: "03",
    title: "REAL PROJECTS",
    description: "Ideas become valuable when they are built and put in front of users. We champion shipping production code.",
  },
  {
    num: "04",
    title: "REAL PEOPLE",
    description: "Technology is better when builders connect directly. No gatekeeping—just engineers, researchers, and creators gathering together.",
  },
];

export function Principles() {
  return (
    <section className="section-padding border-b border-border bg-[#EBE9DC] text-[#0A0F14] dark:bg-[#0D1117] dark:text-[#F1F5F9] relative overflow-hidden">
      {/* Background Subtle Tech Pattern */}
      <div className="absolute inset-0 bg-tech-grid opacity-30 pointer-events-none" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <div className="mb-16 space-y-2">
          <div className="font-mono text-xs font-bold uppercase tracking-widest text-[#FF7F00]">
            02 / WHAT WE BELIEVE
          </div>
          <h2 className="editorial-heading text-5xl sm:text-6xl md:text-7xl font-black">
            OUR MANIFESTO
          </h2>
        </div>

        {/* Editorial Typographic List with Dividers */}
        <div className="divide-y-2 divide-border border-y-2 border-border bg-white/70 dark:bg-card/70 backdrop-blur-sm rounded-[24px] overflow-hidden">
          {PRINCIPLES.map((p) => (
            <div
              key={p.num}
              className="py-10 sm:py-12 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start group hover:bg-[#103C63] hover:text-white transition-colors duration-300 px-6 sm:px-10"
            >
              <div className="lg:col-span-2 font-mono text-3xl font-black text-[#FF7F00] group-hover:text-[#FF7F00]">
                {p.num}
              </div>

              <div className="lg:col-span-4">
                <h3 className="editorial-heading text-3xl sm:text-4xl lg:text-5xl font-black group-hover:text-white transition-colors">
                  {p.title}
                </h3>
              </div>

              <div className="lg:col-span-6 flex items-center">
                <p className="text-base sm:text-lg opacity-90 group-hover:text-white/90 leading-relaxed font-sans">
                  {p.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
