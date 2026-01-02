import { X, Check } from "lucide-react";

const LeadPhilosophy = () => {
  const oldWay = [
    "6-12 month retainers",
    "Ads run year-round (even off-season)",
    "Vague monthly reports",
    "Budget bleeds during slow periods",
    "Locked into long contracts",
  ];

  const creativeWay = [
    "30-day focused sprints",
    "Ads run only during peak demand",
    "Clear, actionable insights",
    "Budget stops when demand stops",
    "No long-term commitments",
  ];

  return (
    <section className="section-padding bg-card">
      <div className="container-wide">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sm font-medium tracking-wide text-accent uppercase mb-4">
              Our Philosophy
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-bold tracking-wider text-foreground">
              A smarter way to run seasonal ads
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-0 border border-border rounded-lg overflow-hidden">
            {/* The Old Way */}
            <div className="bg-muted/30 p-10 md:border-r border-border">
              <h3 className="text-xl font-display font-bold text-foreground mb-6 tracking-widest uppercase">
                The Old Way
              </h3>
              <ul className="space-y-4">
                {oldWay.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-destructive/10 flex items-center justify-center mt-0.5">
                      <X className="w-3 h-3 text-destructive" />
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* The Creative Core Way */}
            <div className="bg-accent/5 p-10">
              <h3 className="text-xl font-display font-bold text-foreground mb-6 tracking-widest uppercase">
                The Creative Core Way
              </h3>
              <ul className="space-y-4">
                {creativeWay.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-accent" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadPhilosophy;
