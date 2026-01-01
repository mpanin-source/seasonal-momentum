import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
      <div className="container-wide px-6 md:px-8 lg:px-12">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="font-display text-xl font-medium text-foreground">
            Creative Core
          </a>
          <nav className="hidden md:flex items-center gap-8">
            <a 
              href="#offer" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              How it works
            </a>
            <a 
              href="#fit" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Is this for me?
            </a>
            <Button variant="accent" size="sm" onClick={scrollToContact}>
              Get started
            </Button>
          </nav>
          <Button 
            variant="accent" 
            size="sm" 
            onClick={scrollToContact}
            className="md:hidden"
          >
            Get started
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
