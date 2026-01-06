import { Button } from "@/components/ui/button";
import { ArrowRight, Check, TrendingUp, TrendingDown, Target } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth"
    });
  };

  const scrollToPlaybook = () => {
    document.getElementById("q1-growth-windows")?.scrollIntoView({
      behavior: "smooth"
    });
  };

  return (
    <section className="section-padding min-h-[85vh] flex items-center px-6 md:px-8 lg:px-12 -mt-16 pt-16">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column */}
          <div className="max-w-xl">
            <p className="text-sm font-medium tracking-wider text-accent uppercase mb-6 animate-fade-in">
              CREATIVE CORE · FULL-FUNNEL GROWTH
            </p>
            <h1 className="text-[2.75rem] md:text-5xl lg:text-6xl font-display font-black leading-[0.95] tracking-wide text-foreground mb-8 animate-fade-in [animation-delay:100ms] opacity-0 uppercase">
              STOP PAYING FOR ADS WHEN NOBODY IS SEARCHING.
              <span 
                style={{
                  textShadow: '0 0 15px rgba(59, 130, 246, 0.4), 2px 2px 0px rgba(255,255,255,0.7)'
                }} 
                className="block text-accent tracking-[-0.02em] font-display -mt-3 md:-mt-5 skew-x-[-3deg] italic animate-slide-up [animation-delay:500ms] opacity-0 text-[2.75rem] md:text-5xl lg:text-6xl text-left leading-[0.85]"
              >
                START SHOWING UP WHEN THEY ARE.
              </span>
            </h1>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-6 max-w-full animate-fade-in [animation-delay:200ms] opacity-0">
              We fix leaky funnels, grow the metrics that matter, and bring you buyers who are actively looking for your service.
            </p>
            
            {/* Checkmark List */}
            <ul className="space-y-3 mb-8 animate-fade-in [animation-delay:250ms] opacity-0">
              <li className="flex items-center gap-3 text-sm md:text-base text-foreground">
                <Check className="w-5 h-5 text-accent flex-shrink-0" />
                <span>Fix broken journeys from click → lead → sale</span>
              </li>
              <li className="flex items-center gap-3 text-sm md:text-base text-foreground">
                <Check className="w-5 h-5 text-accent flex-shrink-0" />
                <span>Ads that sell, not just get cheap clicks</span>
              </li>
              <li className="flex items-center gap-3 text-sm md:text-base text-foreground">
                <Check className="w-5 h-5 text-accent flex-shrink-0" />
                <span>Lead quality filters for real buyers</span>
              </li>
            </ul>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in [animation-delay:300ms] opacity-0">
              <div className="flex flex-col">
                <Button 
                  variant="accent" 
                  size="xl" 
                  onClick={scrollToContact} 
                  className="group w-full sm:w-auto transition-transform hover:scale-105 shadow-[0_0_20px_rgba(37,99,235,0.3)]"
                >
                  Get My Free Core Funnel Audit
                  <ArrowRight className="ml-1 transition-transform group-hover:translate-x-1" />
                </Button>
                <span className="text-xs text-muted-foreground mt-2 text-center sm:text-left">
                  15-minute Loom breakdown · No fluff, no obligation
                </span>
              </div>
              <Button 
                variant="outline" 
                size="xl" 
                onClick={scrollToPlaybook} 
                className="hover:bg-foreground hover:text-background hover:border-foreground w-full sm:w-auto transition-transform hover:scale-105"
              >
                View Seasonal Playbook
              </Button>
            </div>
          </div>

          {/* Right Column - Audit Dashboard Card */}
          <div className="hidden lg:block animate-fade-in [animation-delay:400ms] opacity-0">
            <div className="bg-card border border-border rounded-xl p-6 shadow-elevated">
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                  Sample Core Funnel Audit Loom Snapshot
                </h3>
                <div className="w-3 h-3 bg-accent rounded-full animate-pulse" />
              </div>
              
              <div className="space-y-4">
                {/* CTR Metric */}
                <div className="flex items-center justify-between p-4 bg-background rounded-lg border border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <Target className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide">Click-Through Rate</p>
                      <p className="text-2xl font-display text-foreground">4.2%</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-green-500">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm font-medium">+1.8%</span>
                  </div>
                </div>

                {/* CVR Metric */}
                <div className="flex items-center justify-between p-4 bg-background rounded-lg border border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide">Conversion Rate</p>
                      <p className="text-2xl font-display text-foreground">12.4%</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-green-500">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm font-medium">+3.2%</span>
                  </div>
                </div>

                {/* CPA Metric */}
                <div className="flex items-center justify-between p-4 bg-background rounded-lg border border-border">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                      <TrendingDown className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground uppercase tracking-wide">Cost Per Acquisition</p>
                      <p className="text-2xl font-display text-foreground">$24.50</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 text-green-500">
                    <TrendingDown className="w-4 h-4" />
                    <span className="text-sm font-medium">-28%</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-border">
                <p className="text-xs text-muted-foreground text-center">
                  Real metrics from a recent Core Funnel Audit
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
