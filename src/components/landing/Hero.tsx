import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="section-padding min-h-[85vh] flex items-center">
      <div className="container-wide">
        <div className="max-w-3xl">
          <p className="text-sm font-medium tracking-wide text-muted-foreground uppercase mb-6 animate-fade-in">
            Creative Core
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-body font-semibold leading-tight tracking-tight text-foreground mb-8 animate-fade-in [animation-delay:100ms] opacity-0">
            Stop paying for ads when nobody is searching.
            <span className="block text-foreground mt-2">
              Start when they are.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl animate-fade-in [animation-delay:200ms] opacity-0">
            Creative Core runs high-intensity, 30-day ad sprints for seasonal businesses like gyms, HVAC, and landscapers. We capture demand when it peaks—then we turn the budget off.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in [animation-delay:300ms] opacity-0">
            <Button 
              variant="accent" 
              size="xl" 
              onClick={scrollToContact}
              className="group"
            >
              Check If Your Business Fits
              <ArrowRight className="ml-1 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              variant="outline" 
              size="xl" 
              onClick={() => document.getElementById("seasonal-niches")?.scrollIntoView({ behavior: "smooth" })}
            >
              Best Seasonal Niches Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
