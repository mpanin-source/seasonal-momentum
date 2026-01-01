import { Check, X } from "lucide-react";

const FitSection = () => {
  const goodFit = [
    "Your business has clear seasonal demand patterns",
    "You have a realistic advertising budget ($2k–$10k/month)",
    "You value quality leads over high volume",
    "You can follow up with leads within 24–48 hours",
    "You're open to learning what works (and what doesn't)",
  ];

  const notFit = [
    "You want guaranteed results before spending",
    "You expect ads to fix broken operations",
    "You're unwilling to follow up with leads yourself",
    "You need instant, high-volume lead flow",
    "You're looking for a magic bullet",
  ];

  return (
    <section className="section-padding bg-card" id="fit">
      <div className="container-wide">
        <div className="container-narrow text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground mb-6">
            Is this a fit?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            This approach works well for some businesses and not at all for others. 
            Here's how to know which side you're on.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="p-8 bg-background rounded-lg border border-border">
            <h3 className="text-xl font-display font-medium text-foreground mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-sage-light flex items-center justify-center">
                <Check className="w-4 h-4 text-accent" />
              </span>
              This is for you if
            </h3>
            <ul className="space-y-4">
              {goodFit.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 bg-background rounded-lg border border-border">
            <h3 className="text-xl font-display font-medium text-foreground mb-6 flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                <X className="w-4 h-4 text-muted-foreground" />
              </span>
              This is not for you if
            </h3>
            <ul className="space-y-4">
              {notFit.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-muted-foreground mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FitSection;
