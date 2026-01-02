import { Shield, Clock, Database } from "lucide-react";

const PhaseTwo = () => {
  return (
    <section className="section-padding bg-foreground/5">
      <div className="container-wide">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-medium tracking-wide text-muted-foreground uppercase mb-4">
              Optional Add-On
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground mb-6">
              THE RECALL LAYER: AUTOMATED OFF-SEASON RELEVANCE
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              For businesses that want to stay connected with interested prospects 
              after the initial sprint ends.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="text-center p-6">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-display font-medium text-foreground mb-2">
                The Safety Net
              </h3>
              <p className="text-sm text-muted-foreground">
                Automated triggers for long-term prospects who showed interest but weren't ready to convert.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Clock className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-display font-medium text-foreground mb-2">
                Timed Re-Engagement
              </h3>
              <p className="text-sm text-muted-foreground">
                Automatic re-activation 30 days before your next peak season begins.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <Database className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-display font-medium text-foreground mb-2">
                The Data Asset
              </h3>
              <p className="text-sm text-muted-foreground">
                Building a high-intent database you own forever—not rented from platforms.
              </p>
            </div>
          </div>

          <div className="bg-background border border-border rounded-lg p-6 text-center">
            <p className="text-muted-foreground text-sm">
              This is recall and engagement infrastructure—not a lead guarantee. 
              It helps you stay relevant with people who've already shown interest, 
              so when they're ready, you're the first call.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhaseTwo;
