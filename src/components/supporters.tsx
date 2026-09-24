import { ShieldCheck, Cpu, Code2, Globe2 } from "lucide-react";

const PARTNERS = [
  { name: "DEV LABS", role: "VENUE & LAB PARTNER", icon: Cpu },
  { name: "OPEN AGENT FOUNDATION", role: "OPEN SOURCE GRANT", icon: Code2 },
  { name: "VECTOR ENGINE", role: "INFRASTRUCTURE SPONSOR", icon: ShieldCheck },
  { name: "GLOBAL BUILDERS HUB", role: "COMMUNITY NETWORK", icon: Globe2 },
];

export function Supporters() {
  return (
    <section className="section-padding bg-background relative overflow-hidden">
      <div className="container-custom space-y-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <h2 className="editorial-heading text-3xl sm:text-4xl text-foreground font-black">
            COMMUNITY SUPPORTED BY
          </h2>
          <p className="text-xs sm:text-sm text-foreground/70 font-mono">
            Organizations and open-source collectives enabling AI Evolve events and infrastructure.
          </p>
        </div>

        {/* Supporters Logo Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {PARTNERS.map((partner) => {
            const Icon = partner.icon;
            return (
              <div
                key={partner.name}
                className="p-6 border-2 border-border bg-card rounded-[20px] flex flex-col items-center justify-center text-center space-y-3 hover:border-[#FF7F00] transition-colors duration-200 group"
              >
                <div className="p-3 rounded-full bg-muted/60 text-foreground group-hover:bg-[#FF7F00] group-hover:text-black transition-colors">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="font-black text-sm uppercase tracking-tight text-foreground group-hover:text-[#FF7F00] transition-colors">
                  {partner.name}
                </div>
                <div className="font-mono text-[10px] text-foreground/50 tracking-wider">
                  {partner.role}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
