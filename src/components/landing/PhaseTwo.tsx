import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, Send, DollarSign, Shield, RefreshCw, Lock } from "lucide-react";

const PhaseTwo = () => {
  const [hasDatabase, setHasDatabase] = useState(true);

  const handleScrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const formSection = document.getElementById('contact-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const databaseContent = {
    heading: "THE RECALL LAYER: YOUR PREDICTIVE DEMAND AGENT",
    subheadline: "You are sitting on a goldmine. We turn your static emails into a Private Data Asset that automatically re-activates 21 days before peak demand hits.",
    pillars: [
      {
        icon: Zap,
        title: "OMNI-SYNC",
        subtitle: "The Wake-Up Agent",
        description: "We bridge the gap by syncing your database directly to Meta and Google as a \"Custom Audience\" for precision seasonal retargeting."
      },
      {
        icon: Send,
        title: "PREDICTIVE RE-ACTIVATION",
        subtitle: "Seasonal Broadcasts",
        description: "Automated SMS and Email sprints triggered by seasonal search intent. Fill your calendar before spending a dollar on cold ads."
      },
      {
        icon: DollarSign,
        title: "UNSETTLED GOLD",
        subtitle: "CAC Reduction",
        description: "Stop paying to acquire the same lead twice. Lower your long-term costs by owning the relationship, not renting it."
      }
    ]
  };

  const freshContent = {
    heading: "THE RECALL LAYER: YOUR FUTURE-PROOF SHIELD",
    subheadline: "Most agencies let 97% of traffic walk away forever. We build the infrastructure to capture, nurture, and own your audience from day one.",
    pillars: [
      {
        icon: Shield,
        title: "RECALL SHIELD",
        subtitle: "The Safety Net",
        description: "Capture every high-intent visitor who isn't ready to book today. Our \"Shadow Funnel\" keeps you top-of-mind until they are."
      },
      {
        icon: RefreshCw,
        title: "AUTOMATED NURTURE",
        subtitle: "Shadow Funnels",
        description: "Intelligent sequences that maintain relevance during your off-season, ensuring you are the first call when their need becomes urgent."
      },
      {
        icon: Lock,
        title: "ZERO-RELIANCE",
        subtitle: "Asset Ownership",
        description: "We build this infrastructure inside your environment. You own the data, the sequences, and the audience—forever."
      }
    ]
  };

  const currentContent = hasDatabase ? databaseContent : freshContent;

  return (
    <section className="section-padding bg-foreground/5">
      <div className="container-wide">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-sm font-medium tracking-wide text-muted-foreground uppercase mb-4">
              Optional Add-On
            </p>
          </div>

          {/* Interactive Toggle */}
          <div className="flex justify-center mb-10">
            <div className="inline-flex bg-background border border-border rounded-full p-1 shadow-lg">
              <button
                onClick={() => setHasDatabase(true)}
                className={`px-6 py-3 rounded-full text-sm font-bold tracking-wider transition-all duration-300 ${
                  hasDatabase
                    ? "bg-accent text-white shadow-md"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                I HAVE A DATABASE
              </button>
              <button
                onClick={() => setHasDatabase(false)}
                className={`px-6 py-3 rounded-full text-sm font-bold tracking-wider transition-all duration-300 ${
                  !hasDatabase
                    ? "bg-accent text-white shadow-md"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                I AM STARTING FRESH
              </button>
            </div>
          </div>

          {/* Dynamic Content with Cross-fade */}
          <AnimatePresence mode="wait">
            <motion.div
              key={hasDatabase ? "database" : "fresh"}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-display font-bold text-accent mb-6 tracking-wider">
                  {currentContent.heading}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                  {currentContent.subheadline}
                </p>
              </div>

              {/* Pillars with Central Pulse Line */}
              <div className="relative">
                {/* Central Vertical Pulse Line - visible on md+ */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-px">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/30 to-transparent" />
                  <motion.div
                    className="absolute left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-accent shadow-[0_0_15px_hsl(var(--accent))]"
                    animate={{
                      y: [0, 200, 0],
                      opacity: [0.5, 1, 0.5],
                      scale: [0.8, 1.2, 0.8]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                </div>

                <div className="grid md:grid-cols-3 gap-8 mb-12">
                  {currentContent.pillars.map((pillar, index) => (
                    <motion.div
                      key={pillar.title}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.15, duration: 0.4 }}
                      className="relative bg-background border border-border rounded-xl p-6 text-center hover:border-accent/50 hover:shadow-lg hover:shadow-accent/10 transition-all duration-300"
                    >
                      <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                        <pillar.icon className="w-6 h-6 text-accent" />
                      </div>
                      <p className="text-xs text-accent font-medium uppercase tracking-wider mb-1">
                        {pillar.subtitle}
                      </p>
                      <h3 className="font-display font-bold text-foreground mb-3 tracking-wider text-lg">
                        {pillar.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {pillar.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Disclaimer */}
          <div className="bg-background border border-border rounded-lg p-6 text-center">
            <p className="text-muted-foreground text-sm mb-4">
              The Recall Layer is infrastructure for long-term dominance—not a lead-gen magic bullet. 
              It ensures you are the only brand they remember.
            </p>
            <a
              href="#contact-form"
              onClick={handleScrollToForm}
              className="inline-flex items-center text-accent hover:text-accent/80 font-medium transition-colors"
            >
              <span className="font-['Bebas_Neue'] italic tracking-wider">
                See how the Recall Layer fits into your Audit →
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhaseTwo;
