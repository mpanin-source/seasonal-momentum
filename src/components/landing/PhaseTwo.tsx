import { Clock, Mail, RotateCcw } from "lucide-react";

const PhaseTwo = () => {
  return (
    <section className="section-padding">
      <div className="container-wide">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm font-medium tracking-wide text-muted-foreground uppercase mb-4">
              Optional Add-On
            </p>
            <h2 className="text-3xl md:text-4xl font-display font-medium text-foreground mb-6">
              Phase 2: Timed Engagement & Recall Layer
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              For businesses that want to stay connected with interested prospects 
              after the initial sprint ends.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="text-center p-6">
              <div className="w-12 h-12 rounded-full bg-sage-light flex items-center justify-center mx-auto mb-4">
                <Mail className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-display font-medium text-foreground mb-2">
                Permission-based follow-up
              </h3>
              <p className="text-sm text-muted-foreground">
                Stay in touch with prospects who opted in but weren't ready to act immediately.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-12 h-12 rounded-full bg-sage-light flex items-center justify-center mx-auto mb-4">
                <Clock className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-display font-medium text-foreground mb-2">
                Timed re-engagement
              </h3>
              <p className="text-sm text-muted-foreground">
                Reach back out when timing is right—before the next season, or when intent signals return.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-12 h-12 rounded-full bg-sage-light flex items-center justify-center mx-auto mb-4">
                <RotateCcw className="w-5 h-5 text-accent" />
              </div>
              <h3 className="font-display font-medium text-foreground mb-2">
                Return path to conversion
              </h3>
              <p className="text-sm text-muted-foreground">
                Route returning interest back into the same funnel that worked the first time.
              </p>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 text-center">
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
