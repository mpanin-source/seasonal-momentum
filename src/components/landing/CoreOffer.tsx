import { Check, X } from "lucide-react";

const CoreOffer = () => {
  const included = [
    "Seasonal offer alignment and positioning",
    "Paid ad setup across Meta, Google, or both",
    "Simple, conversion-focused landing page",
    "Budget pacing with mid-sprint performance review",
    "End-of-sprint debrief with learnings documented",
  ];

  const notIncluded = [
    "Long-term retainers or ongoing management",
    "Guaranteed leads, sales, or revenue outcomes",
    "Endless revisions or scope creep",
    "Organic social, SEO, or content marketing",
  ];

  return (
    <section className="section-padding" id="offer">
      <div className="container-wide">
        <div className="container-narrow text-center mb-16">
          <p className="text-sm font-medium tracking-wide text-accent uppercase mb-4">
            The Core Offer
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground mb-6">
            Seasonal Growth Sprint
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            A 30–45 day sprint designed around your peak season. We set up, run, 
            and optimize a focused campaign while demand is high.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="p-8 bg-sage-light rounded-lg">
            <h3 className="text-xl font-display font-medium text-foreground mb-6">
              What's included
            </h3>
            <ul className="space-y-4">
              {included.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 bg-card rounded-lg border border-border">
            <h3 className="text-xl font-display font-medium text-foreground mb-6">
              What this is not
            </h3>
            <ul className="space-y-4">
              {notIncluded.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-muted-foreground mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 pt-6 border-t border-border text-sm text-muted-foreground">
              This is a defined scope of work with a clear timeline. If that sounds 
              limiting, it's intentional. Constraints create focus.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreOffer;
