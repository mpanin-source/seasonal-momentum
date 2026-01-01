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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium leading-tight text-foreground mb-8 animate-fade-in [animation-delay:100ms] opacity-0">
            Run ads when demand is highest.
            <span className="block text-muted-foreground mt-2">
              Not when your budget runs out.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10 max-w-2xl animate-fade-in [animation-delay:200ms] opacity-0">
            Short-cycle seasonal campaigns built around your peak demand windows. 
            Controlled budgets. Clear timelines. No long-term contracts.
          </p>
          <div className="animate-fade-in [animation-delay:300ms] opacity-0">
            <Button 
              variant="accent" 
              size="xl" 
              onClick={scrollToContact}
              className="group"
            >
              See if this season is a fit
              <ArrowRight className="ml-1 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
