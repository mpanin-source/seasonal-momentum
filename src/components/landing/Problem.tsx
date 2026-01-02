const Problem = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container-wide">
        <div className="container-narrow text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-6 tracking-wider">
            Most ads fail before they even start.
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The issue isn't usually the creative or the platform. It's the timing.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="p-8 bg-background rounded-lg border border-border">
            <div className="w-10 h-10 rounded-full bg-sage-light flex items-center justify-center mb-5">
              <span className="text-sage font-display text-lg">1</span>
            </div>
            <h3 className="text-xl font-display font-bold text-foreground mb-3 tracking-wider">
              Off-season spending
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Running campaigns when people aren't actively looking means paying for 
              impressions that don't convert. Budget drains without return.
            </p>
          </div>

          <div className="p-8 bg-background rounded-lg border border-border">
            <div className="w-10 h-10 rounded-full bg-sage-light flex items-center justify-center mb-5">
              <span className="text-sage font-display text-lg">2</span>
            </div>
            <h3 className="text-xl font-display font-bold text-foreground mb-3 tracking-wider">
              Low-intent traffic
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Clicks from curious browsers rarely become customers. Without timing 
              alignment, you attract attention without purchase intent.
            </p>
          </div>

          <div className="p-8 bg-background rounded-lg border border-border">
            <div className="w-10 h-10 rounded-full bg-sage-light flex items-center justify-center mb-5">
              <span className="text-sage font-display text-lg">3</span>
            </div>
            <h3 className="text-xl font-display font-bold text-foreground mb-3 tracking-wider">
              Lost attention
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              When timing is off, even interested prospects forget. The window 
              between interest and action closes faster than most realize.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
