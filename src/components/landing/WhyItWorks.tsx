const WhyItWorks = () => {
  const reasons = [
    {
      title: "Seasonal alignment",
      description:
        "We only run campaigns when demand is naturally high. No convincing. No forcing. Just showing up when people are already looking.",
    },
    {
      title: "Controlled scope",
      description:
        "A defined timeline and budget means no scope creep. We do one thing well instead of many things poorly.",
    },
    {
      title: "Repeatable systems",
      description:
        "Each sprint builds on the last. What worked gets refined. What didn't gets cut. Your next season starts stronger.",
    },
    {
      title: "Compounding learnings",
      description:
        "Every campaign generates data. Over time, you know exactly what works for your business, your market, and your timing.",
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="container-narrow text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground mb-6">
            Why this approach works
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Simple principles, consistently applied.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {reasons.map((reason, index) => (
            <div key={index} className="p-8 bg-card rounded-lg border border-border">
              <h3 className="text-xl font-display font-medium text-foreground mb-3">
                {reason.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyItWorks;
