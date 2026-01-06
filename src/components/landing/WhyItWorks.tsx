import { Brain, Clock, Target, Vault } from "lucide-react";

const WhyItWorks = () => {
  const pillars = [
    {
      icon: Brain,
      title: "NEURO-SEASONAL ALIGNMENT",
      description:
        "We align your brand with the biological triggers of your audience. Whether it is the \"Fresh Start\" optimism of Spring or the \"Security & Comfort\" of Winter, our scripts hit the emotional cues that drive irrational buying behavior.",
      badge: "PSYCHOLOGY-BACKED",
    },
    {
      icon: Clock,
      title: "THE 21-DAY INTENT WINDOW",
      description:
        "Timing is the difference between a high-ticket lead and a window shopper. We launch our \"Wake-Up Agent\" exactly 21 days before demand peaks, capturing intent while competitors are still in neutral.",
    },
    {
      icon: Target,
      title: "DATA-DRIVEN VELOCITY",
      description:
        "Every click is tagged. We use intent data to identify high-value prospects who are already researching your solution, allowing us to prioritize outreach where the win-rate is highest.",
    },
    {
      icon: Vault,
      title: "COMPOUNDING DATA ASSETS",
      description:
        "Stop paying to rent the same lead twice. Our CRM infrastructure builds a \"Lead Vault\" that compounds in value, lowering your acquisition costs every single season.",
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="container-narrow text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 tracking-wider">
            THE SCIENCE OF PREDICTIVE MOMENTUM
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            We don't chase leads; we anticipate demand. Our framework leverages the predictable 
            psychological shifts of your local market to ensure you are the first choice—not the last resort.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {pillars.map((pillar, index) => (
            <div 
              key={index} 
              className="relative p-8 bg-card rounded-lg border border-border hover:border-primary/30 transition-colors"
            >
              {pillar.badge && (
                <div className="absolute top-4 right-4 px-3 py-1 bg-primary/10 border border-primary/30 rounded-full">
                  <span className="text-[10px] font-bold tracking-widest text-primary uppercase">
                    {pillar.badge}
                  </span>
                </div>
              )}
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-5">
                <pillar.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-display font-bold text-foreground mb-3 tracking-wider">
                {pillar.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyItWorks;
