import { useState } from "react";
import { Check, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const CoreOffer = () => {
  const [expandedPhase, setExpandedPhase] = useState<number | null>(null);

  const phases = [
    {
      title: "PHASE 1 · SEASONAL ALIGNMENT & OFFER FIT",
      summary: "Clarify your local buyer and peak demand window. Lock a seasonal offer that actually converts. Set win metrics for the sprint: leads, booked calls, and ROAS.",
      bullets: [
        "Deep-dive into your local market and buyer persona",
        "Craft a seasonal offer positioned for maximum conversion",
        "Define clear KPIs: lead targets, booked calls, and ROAS benchmarks"
      ]
    },
    {
      title: "PHASE 2 · HIGH-INTENSITY LAUNCH & OPTIMIZATION",
      summary: "Rebuild paid campaigns around winning angles. Rapid creative testing to find scroll-stopping ads. Daily checks to cut waste and push winners.",
      bullets: [
        "Launch paid campaigns with high-converting creative angles",
        "A/B test ad variations to identify top performers fast",
        "Daily budget reallocation to maximize ROAS"
      ]
    },
    {
      title: "PHASE 3 · DATA-DRIVEN HANDOVER & SCALE PLAN",
      summary: "Loom walkthrough of every funnel change. Bottleneck map for the next 90 days. Option to retain Creative Core as a growth partner.",
      bullets: [
        "Comprehensive Loom video documenting all funnel changes",
        "90-day bottleneck map with prioritized action items",
        "Optional retainer proposal for continued growth partnership"
      ]
    },
  ];

  const included = [
    "Strategic seasonal offer positioning",
    "Paid ad setup across Meta, Google, or both",
    "Conversion-focused landing page",
    "Real-time budget optimization",
    "Complete performance documentation",
  ];

  const notIncluded = [
    "Long-term retainers or ongoing management",
    "Guaranteed leads, sales, or revenue outcomes",
    "Endless revisions or scope creep",
    "Organic social, SEO, or content marketing",
  ];

  const handleScrollToForm = () => {
    const formElement = document.getElementById('corediagnostic');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const togglePhase = (index: number) => {
    setExpandedPhase(expandedPhase === index ? null : index);
  };

  return (
    <section className="section-padding" id="offer">
      <div className="container-wide">
        <div className="container-narrow text-center mb-16">
          <p className="text-xs font-medium tracking-[0.2em] text-accent uppercase mb-4">
            IMPLEMENTATION PROGRAM • BY INVITE AFTER CORE FUNNEL AUDIT
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-foreground mb-6 tracking-wider">
            SEASONAL GROWTH SPRINT (30–45 DAY BUILD + LAUNCH)
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            A focused implementation sprint we offer to qualified brands after your Core Funnel Audit. 
            We fix the biggest leaks in your funnel and scale into peak demand while momentum is on your side.
          </p>
        </div>

        {/* Three Phases - Accordion Style */}
        <div className="max-w-4xl mx-auto mb-12 space-y-4">
          {phases.map((phase, index) => (
            <motion.div
              key={index}
              className={`bg-card rounded-lg border-2 transition-all duration-300 cursor-pointer overflow-hidden ${
                expandedPhase === index 
                  ? 'border-accent shadow-lg' 
                  : 'border-border hover:border-accent/50 hover:-translate-y-1 hover:shadow-md'
              }`}
              onClick={() => togglePhase(index)}
            >
              <div className="p-6 flex items-center justify-between">
                <div className="flex-1">
                  <h3 className="text-lg font-display font-bold text-foreground tracking-wider">
                    {phase.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2 pr-4">
                    {phase.summary}
                  </p>
                </div>
                <motion.div
                  animate={{ rotate: expandedPhase === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="shrink-0 ml-4"
                >
                  <ChevronDown className="w-5 h-5 text-accent" />
                </motion.div>
              </div>
              
              <AnimatePresence>
                {expandedPhase === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 pt-2 border-t border-border/50">
                      <ul className="space-y-3">
                        {phase.bullets.map((bullet, bulletIndex) => (
                          <li key={bulletIndex} className="flex items-start gap-3">
                            <Check className="w-4 h-4 text-accent mt-1 shrink-0" />
                            <span className="text-sm text-foreground/90">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Bridge CTA */}
        <div className="text-center mb-12">
          <button
            onClick={handleScrollToForm}
            className="text-accent hover:text-accent/80 text-sm font-medium underline underline-offset-4 transition-colors duration-200"
          >
            Not sure you're ready for the sprint? Start with a free Core Funnel Audit →
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <div className="p-8 bg-sage-light rounded-lg">
            <h3 className="text-xl font-display font-bold text-foreground mb-6 tracking-wider">
              What's included
            </h3>
            <ul className="space-y-4">
              {included.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-8 bg-card rounded-lg border border-border">
            <h3 className="text-xl font-display font-bold text-foreground mb-6 tracking-wider">
              What this is not
            </h3>
            <ul className="space-y-4">
              {notIncluded.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <X className="w-5 h-5 text-muted-foreground mt-0.5 shrink-0" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 pt-6 border-t border-border text-sm text-muted-foreground">
              This is a defined scope of work with a clear timeline. If that sounds 
              limiting, it's intentional. Constraints create focus.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoreOffer;
