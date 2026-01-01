const SeasonalNiches = () => {
  const niches = [
    {
      title: "Fitness & Gyms",
      season: "January - March",
      description: "New Year resolution traffic peaks in early Q1",
    },
    {
      title: "HVAC Services",
      season: "Spring & Fall",
      description: "Seasonal maintenance and emergency repairs",
    },
    {
      title: "Landscaping",
      season: "March - May",
      description: "Spring cleanup and seasonal prep demand",
    },
    {
      title: "Tax Preparation",
      season: "January - April",
      description: "Tax season drives consistent high-intent searches",
    },
    {
      title: "Pool Services",
      season: "April - June",
      description: "Opening season creates predictable demand",
    },
    {
      title: "Snow Removal",
      season: "November - February",
      description: "Weather-driven urgency and local searches",
    },
  ];

  return (
    <section id="seasonal-niches" className="section-padding bg-secondary/30">
      <div className="container-wide">
        <div className="max-w-3xl mb-12">
          <p className="text-sm font-medium tracking-wide text-muted-foreground uppercase mb-4">
            Current Opportunities
          </p>
          <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground mb-6">
            Best Seasonal Niches Right Now
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            These industries are entering or currently in their peak demand windows. 
            PPC campaigns in these niches are seeing strong performance.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {niches.map((niche, index) => (
            <div
              key={index}
              className="bg-background border border-border rounded-lg p-6 hover:border-accent/50 transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-medium text-foreground">
                  {niche.title}
                </h3>
                <span className="text-xs font-medium tracking-wide text-accent uppercase bg-accent/10 px-2 py-1 rounded">
                  {niche.season}
                </span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {niche.description}
              </p>
            </div>
          ))}
        </div>

        <p className="text-sm text-muted-foreground mt-8 text-center">
          Don't see your industry? Reach out — we evaluate fit on a case-by-case basis.
        </p>
      </div>
    </section>
  );
};

export default SeasonalNiches;
