import { Button } from "@/components/ui/button";
import AnimatedLogo from "./AnimatedLogo";

const Header = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToPlaybook = () => {
    document.getElementById("q1-growth-windows")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container-wide px-6 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16">
          <AnimatedLogo />
          <nav className="hidden md:flex items-center gap-8">
            <a 
              href="#offer" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Services
            </a>
            <a 
              href="#q1-growth-windows"
              onClick={(e) => {
                e.preventDefault();
                scrollToPlaybook();
              }}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Seasonal Playbook
            </a>
            <a 
              href="#fit" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Case Studies
            </a>
            <Button 
              variant="accent" 
              size="sm" 
              onClick={scrollToContact}
              className="transition-transform hover:scale-105"
            >
              GET FREE FUNNEL AUDIT
            </Button>
          </nav>
          <Button 
            variant="accent" 
            size="sm" 
            onClick={scrollToContact}
            className="md:hidden transition-transform hover:scale-105"
          >
            Free Audit
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
