const LeadPhilosophy = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container-wide">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12 items-center">
            <div className="lg:col-span-3">
              <p className="text-sm font-medium tracking-wide text-accent uppercase mb-4">
                Our Philosophy
              </p>
              <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground mb-6">
                Traffic is easy. Managing attention is where the money goes.
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Generating clicks isn't the hard part. Any ad account with a budget 
                  can drive traffic. The challenge is what happens after.
                </p>
                <p>
                  Not everyone who clicks is ready to buy today. Some are researching. 
                  Some are comparing. Some will forget about you by tomorrow.
                </p>
                <p>
                  Systems should capture both immediate and delayed intent. The first 
                  click opens a window. What you do in that window determines whether 
                  attention becomes revenue.
                </p>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="bg-background p-8 rounded-lg border border-border">
                <div className="text-5xl font-display font-medium text-foreground mb-2">
                  72%
                </div>
                <p className="text-muted-foreground">
                  of interested prospects don't convert on their first visit. 
                  Most businesses have no system to re-engage them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LeadPhilosophy;
