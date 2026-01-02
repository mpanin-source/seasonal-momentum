import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth"
    });
  };
  return <section className="section-padding min-h-[85vh] flex items-center">
      <div className="container-wide">
        <div className="max-w-3xl py-0 my-0 mx-0">
          <p className="text-sm font-medium tracking-wide text-muted-foreground uppercase mb-8 animate-fade-in">
            Creative Core
          </p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-black leading-[0.95] tracking-wide text-foreground mb-12 animate-fade-in [animation-delay:100ms] opacity-0 uppercase">
            Stop paying for ads when nobody is searching.
            <span style={{
            textShadow: '2px 2px 0px rgba(0,0,0,0.08)'
          }} className="block text-accent tracking-[-0.02em] text-left font-display -mt-2 skew-x-[-3deg] italic animate-slide-up [animation-delay:500ms] opacity-0 text-8xl mt-1">
              Start when they are.
            </span>
          </h1>
          <p className="text-[1.1rem] md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-[650px] text-left animate-fade-in [animation-delay:200ms] opacity-0">
            Creative Core runs high-intensity, 30-day ad sprints for seasonal businesses like gyms, HVAC, and landscapers. We capture demand when it peaks—then we turn the budget off.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in [animation-delay:300ms] opacity-0">
            <Button variant="accent" size="xl" onClick={scrollToContact} className="group">
              Find Your Growth Window
              <ArrowRight className="ml-1 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="xl" onClick={() => document.getElementById("seasonal-niches")?.scrollIntoView({
            behavior: "smooth"
          })} className="hover:bg-foreground hover:text-background hover:border-foreground">
              View Trending Niches
            </Button>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;