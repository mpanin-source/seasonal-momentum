import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Zap, X } from "lucide-react";
import AnimatedLogo from "./AnimatedLogo";

const Header = () => {
  const [mobileModalOpen, setMobileModalOpen] = useState(false);

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToPlaybook = () => {
    document.getElementById("q1-growth-windows")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToAlaCarte = () => {
    document.getElementById("ala-carte")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b border-border">
        <div className="container-wide px-6 md:px-8 lg:px-12">
          <div className="flex items-center justify-between h-16">
            <AnimatedLogo />
            <nav className="hidden md:flex items-center gap-6">
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
              <button
                onClick={scrollToAlaCarte}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold bg-accent text-accent-foreground hover:bg-accent/90 transition-all hover:scale-105 shadow-sm"
              >
                <Zap size={14} />
                Just Want The Website?
              </button>
              <Button 
                variant="accent" 
                size="sm" 
                onClick={scrollToContact}
                className="transition-transform hover:scale-105"
              >
                GET FREE FUNNEL AUDIT
              </Button>
            </nav>
            <div className="flex md:hidden items-center gap-2">
              <button
                onClick={() => setMobileModalOpen(true)}
                className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-full text-xs font-semibold bg-accent text-accent-foreground hover:bg-accent/90 transition-all shadow-sm"
              >
                <Zap size={12} />
                Website?
              </button>
              <Button 
                variant="accent" 
                size="sm" 
                onClick={scrollToContact}
                className="transition-transform hover:scale-105"
              >
                Free Audit
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Quick Selector Modal */}
      {mobileModalOpen && (
        <div className="fixed inset-0 z-[60] flex items-end justify-center bg-foreground/50 backdrop-blur-sm" onClick={() => setMobileModalOpen(false)}>
          <div
            className="w-full max-w-lg bg-card rounded-t-2xl p-6 pb-8 shadow-elevated animate-in slide-in-from-bottom duration-300"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-5">
              <h3 className="font-display text-xl text-foreground tracking-wide">CHOOSE YOUR TIER</h3>
              <button onClick={() => setMobileModalOpen(false)} className="p-1 rounded-full hover:bg-muted transition-colors">
                <X size={20} className="text-muted-foreground" />
              </button>
            </div>
            <div className="space-y-3">
              {[
                { label: "Tier 1 · Lead Pipeline", id: "pipeline", color: "bg-tier-blue text-tier-blue-foreground" },
                { label: "Tier 2 · Lead + Nurture", id: "nurture", color: "bg-tier-teal text-tier-teal-foreground" },
                { label: "Tier 3 · Custom Site", id: "custom", color: "bg-tier-purple text-tier-purple-foreground" },
                { label: "Tier 4 · Full Stack", id: "full", color: "bg-tier-gold text-tier-gold-foreground" },
              ].map((t) => (
                <button
                  key={t.id}
                  onClick={() => {
                    setMobileModalOpen(false);
                    setTimeout(() => {
                      document.getElementById("ala-carte")?.scrollIntoView({ behavior: "smooth" });
                    }, 150);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-xl font-display text-base tracking-wide ${t.color} transition-transform hover:scale-[1.02]`}
                >
                  {t.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
