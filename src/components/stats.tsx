export function Stats() {
  const STATS_DATA = [
    { value: "10K+", label: "COMMUNITY MEMBERS" },
    { value: "25+", label: "HANDS-ON EVENTS" },
    { value: "50+", label: "BUILDER SPEAKERS" },
  ];

  return (
    <section className="border-b border-border bg-background">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
          {STATS_DATA.map((stat, idx) => (
            <div
              key={idx}
              className="py-10 md:py-12 md:px-8 flex flex-col justify-center first:pl-0 last:pr-0 group"
            >
              <div className="editorial-heading text-5xl sm:text-6xl md:text-7xl font-black text-foreground group-hover:text-[#FF7F00] transition-colors">
                {stat.value}
              </div>
              <div className="font-mono text-xs font-bold tracking-widest text-foreground/70 uppercase mt-2">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
