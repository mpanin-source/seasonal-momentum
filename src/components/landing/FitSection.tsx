import { Check, X, ShieldCheck } from "lucide-react";

const FitSection = () => {
  const goodFit = [
    {
      title: "Ready to Scale Your Team",
      description: "You are ready to hire. You understand that our \"Multiplier\" will create a bottleneck in your operations, and you are prepared to scale your team to meet the demand."
    },
    {
      title: "Proven Offer & Growth Budget",
      description: "You have a proven offer and a growth budget of $3k–$15k/month to dominate your peak seasonal windows."
    },
    {
      title: "Data Ownership Mindset",
      description: "You value data ownership and want to build a \"Private Lead Vault\" rather than just renting traffic from platforms."
    },
    {
      title: "Clear Seasonal Demand",
      description: "Your business has identifiable peak seasons, and you're ready to capture demand before your competitors wake up."
    },
  ];

  const notFit = [
    {
      title: "Looking for Hands-Off Lead Gen",
      description: "You are looking for a \"hands-off\" lead-gen agency. We are a strategic partner; we provide the scripts and the machine, but you must provide the face and the \"Hero\" energy for the Authority Layer."
    },
    {
      title: "Operational Bottlenecks",
      description: "You don't have a reliable way to fulfill the work. If your current bottleneck is \"Bad Service\" rather than \"Not Enough Leads,\" we cannot help you scale."
    },
    {
      title: "Want Guaranteed Results",
      description: "You expect guaranteed ROI before spending. We work with data and strategy, not crystal balls."
    },
    {
      title: "Unwilling to Engage",
      description: "You're unwilling to follow up with leads or participate in the content creation process."
    },
  ];

  return (
    <section className="section-padding bg-card" id="fit">
      <div className="container-wide">
        <div className="container-narrow text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/30 rounded-full mb-6">
            <ShieldCheck className="w-4 h-4 text-primary" />
            <span className="text-xs font-bold tracking-widest text-primary uppercase">
              Qualification Required
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 tracking-wider">
            Is this a fit?
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            This is a high-level growth partnership, not a transactional vendor relationship. 
            Here's how to know if we're the right fit for each other.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Good Fit - Vibrant brand-blue border */}
          <div className="p-8 bg-background rounded-lg border-2 border-primary shadow-lg shadow-primary/10">
            <h3 className="text-xl font-display font-bold text-foreground mb-6 tracking-wider flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                <Check className="w-4 h-4 text-primary" />
              </span>
              This is for you if
            </h3>
            <ul className="space-y-5">
              {goodFit.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <div>
                    <span className="font-semibold text-foreground block mb-1">{item.title}</span>
                    <span className="text-muted-foreground text-sm leading-relaxed">{item.description}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Not a Fit */}
          <div className="p-8 bg-background rounded-lg border border-border">
            <h3 className="text-xl font-display font-bold text-foreground mb-6 tracking-wider flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                <X className="w-4 h-4 text-muted-foreground" />
              </span>
              This is not for you if
            </h3>
            <ul className="space-y-5">
              {notFit.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-muted-foreground mt-0.5 shrink-0" />
                  <div>
                    <span className="font-semibold text-muted-foreground block mb-1">{item.title}</span>
                    <span className="text-muted-foreground/80 text-sm leading-relaxed">{item.description}</span>
                  </div>
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
