import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dumbbell, Leaf, Calculator, Heart, Snowflake, Thermometer, TreeDeciduous, Waves, X } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface NicheZone {
  icon: LucideIcon;
  title: string;
  strategicLogic: string;
  painPoint: string;
}

interface MasterCard {
  month: string;
  zoneA: NicheZone;
  zoneB: NicheZone;
}

const timelineData: MasterCard[] = [
  {
    month: "JAN",
    zoneA: {
      icon: Dumbbell,
      title: "Fitness",
      strategicLogic: "New Year resolutions drive 340% search volume spike. First-mover advantage is critical.",
      painPoint: "Gyms waste budget in Dec when intent is low. Strike when motivation peaks.",
    },
    zoneB: {
      icon: Leaf,
      title: "Wellness",
      strategicLogic: "Detox & reset searches explode post-holidays. Health-conscious consumers are primed.",
      painPoint: "Competing with fitness noise requires precision targeting on wellness-specific terms.",
    },
  },
  {
    month: "FEB",
    zoneA: {
      icon: Heart,
      title: "Romance",
      strategicLogic: "Valentine's creates urgency. Gift & experience searches peak 2 weeks prior.",
      painPoint: "Late entrants pay 3x CPC. Early positioning captures intent before price inflation.",
    },
    zoneB: {
      icon: Calculator,
      title: "Tax Prep",
      strategicLogic: "Early filers search now. W-2s arrive, urgency builds through April.",
      painPoint: "CPA firms miss early-bird clients by waiting until March madness.",
    },
  },
  {
    month: "MAR",
    zoneA: {
      icon: TreeDeciduous,
      title: "Landscaping",
      strategicLogic: "Spring cleanup searches surge. Homeowners plan seasonal projects.",
      painPoint: "Booking windows are tight. Missed March means lost Q2 revenue.",
    },
    zoneB: {
      icon: Thermometer,
      title: "HVAC",
      strategicLogic: "AC maintenance searches begin. Smart homeowners prep before summer.",
      painPoint: "Emergency-only positioning leaves money on the table. Capture planned maintenance.",
    },
  },
  {
    month: "APR",
    zoneA: {
      icon: Waves,
      title: "Pool Services",
      strategicLogic: "Opening season demand peaks. Pool owners search for seasonal contractors.",
      painPoint: "Late starters compete against established relationships. Be first contact.",
    },
    zoneB: {
      icon: Snowflake,
      title: "AC Install",
      strategicLogic: "Pre-summer installation window. Beat the June rush for better scheduling.",
      painPoint: "Summer emergency calls pay less than planned installs. Own the decision phase.",
    },
  },
];

const NicheZoneCard = ({
  zone,
  side,
  isExpanded,
  onExpand,
  onClose,
}: {
  zone: NicheZone;
  side: "left" | "right";
  isExpanded: boolean;
  onExpand: () => void;
  onClose: () => void;
}) => {
  const IconComponent = zone.icon;

  return (
    <motion.div
      className={`relative cursor-pointer overflow-hidden ${
        isExpanded ? "absolute inset-0 z-20" : "flex-1"
      }`}
      onClick={() => !isExpanded && onExpand()}
      layout
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <motion.div
        className={`h-full flex flex-col items-center justify-center p-4 transition-all duration-300 ${
          isExpanded
            ? "bg-[#1a1a2e]"
            : "bg-[#16162a] hover:bg-[#1a1a2e] group"
        }`}
        style={{
          borderLeft: side === "right" && !isExpanded ? "1px solid rgba(59, 130, 246, 0.2)" : "none",
        }}
        layout
      >
        {/* Pulse border effect on hover */}
        {!isExpanded && (
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            style={{
              boxShadow: "inset 0 0 20px rgba(59, 130, 246, 0.4), 0 0 30px rgba(59, 130, 246, 0.2)",
            }}
          />
        )}

        <AnimatePresence mode="wait">
          {!isExpanded ? (
            <motion.div
              key="collapsed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex flex-col items-center gap-3 text-center"
            >
              <div className="p-3 rounded-full bg-accent/10 border border-accent/30">
                <IconComponent className="w-6 h-6 text-accent" strokeWidth={1.5} />
              </div>
              <span className="text-sm font-display font-bold text-foreground/90 tracking-wider uppercase">
                {zone.title}
              </span>
              <span className="text-[10px] text-accent/60 uppercase tracking-widest">
                Click to expand
              </span>
            </motion.div>
          ) : (
            <motion.div
              key="expanded"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="flex flex-col h-full p-6 relative"
            >
              {/* Close button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onClose();
                }}
                className="absolute top-4 right-4 p-2 rounded-full bg-accent/10 hover:bg-accent/20 transition-colors border border-accent/30"
              >
                <X className="w-4 h-4 text-accent" />
              </button>

              {/* Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-full bg-accent/20 border border-accent/40">
                  <IconComponent className="w-6 h-6 text-accent" strokeWidth={1.5} />
                </div>
                <span className="text-xl font-display font-bold text-foreground tracking-wider uppercase">
                  {zone.title}
                </span>
              </div>

              {/* Strategic Logic */}
              <div className="mb-6">
                <h4 className="text-[10px] uppercase tracking-[0.2em] text-accent mb-2 font-medium">
                  Strategic Logic
                </h4>
                <p className="text-sm leading-relaxed text-foreground/90 font-medium">
                  {zone.strategicLogic}
                </p>
              </div>

              {/* Pain Point */}
              <div className="mt-auto">
                <h4 className="text-[10px] uppercase tracking-[0.2em] text-red-400/80 mb-2 font-medium">
                  Pain Point
                </h4>
                <p className="text-sm leading-relaxed text-foreground/70 italic">
                  {zone.painPoint}
                </p>
              </div>

              {/* Neon accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-60" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

const MasterCard = ({ card }: { card: MasterCard }) => {
  const [expandedZone, setExpandedZone] = useState<"left" | "right" | null>(null);

  return (
    <div className="flex-shrink-0 w-[320px] md:w-[380px]">
      {/* Month Header */}
      <div className="mb-4 text-center">
        <span
          className="text-4xl md:text-5xl font-display font-black tracking-[0.15em] text-transparent bg-clip-text"
          style={{
            backgroundImage: "linear-gradient(180deg, hsl(var(--foreground)) 0%, hsl(var(--foreground)/0.5) 100%)",
          }}
        >
          {card.month}
        </span>
      </div>

      {/* Card Container */}
      <motion.div
        className="relative h-[320px] md:h-[380px] rounded-xl overflow-hidden border border-accent/20 bg-[#12121f]"
        style={{
          boxShadow: "0 0 40px rgba(59, 130, 246, 0.1), inset 0 1px 0 rgba(255,255,255,0.05)",
        }}
        whileHover={{
          boxShadow: "0 0 60px rgba(59, 130, 246, 0.2), inset 0 1px 0 rgba(255,255,255,0.08)",
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Split zones container */}
        <div className="flex h-full relative">
          <NicheZoneCard
            zone={card.zoneA}
            side="left"
            isExpanded={expandedZone === "left"}
            onExpand={() => setExpandedZone("left")}
            onClose={() => setExpandedZone(null)}
          />
          {expandedZone !== "left" && expandedZone !== "right" && (
            <NicheZoneCard
              zone={card.zoneB}
              side="right"
              isExpanded={expandedZone === "right"}
              onExpand={() => setExpandedZone("right")}
              onClose={() => setExpandedZone(null)}
            />
          )}
          {expandedZone === "right" && (
            <NicheZoneCard
              zone={card.zoneB}
              side="right"
              isExpanded={true}
              onExpand={() => {}}
              onClose={() => setExpandedZone(null)}
            />
          )}
        </div>

        {/* Ambient glow */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-accent/5 to-transparent" />
      </motion.div>
    </div>
  );
};

const Q1Timeline = () => {
  return (
    <section className="py-20 md:py-28 bg-[#0d0d1a] relative overflow-hidden">
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.5) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(59, 130, 246, 0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="container-wide relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12 md:mb-16">
          <p className="text-sm font-medium tracking-[0.2em] text-accent uppercase mb-4">
            Strategic Calendar
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-black text-foreground mb-6 tracking-wider uppercase">
            Q1 Growth Timeline
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Each month presents unique opportunities. Click on a niche zone to reveal the 
            strategic logic and pain points that drive our targeting decisions.
          </p>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="relative -mx-4 md:-mx-8">
          <div className="flex gap-6 md:gap-8 overflow-x-auto pb-8 px-4 md:px-8 scrollbar-thin scrollbar-thumb-accent/30 scrollbar-track-transparent">
            {timelineData.map((card, index) => (
              <MasterCard key={index} card={card} />
            ))}
          </div>

          {/* Scroll hint gradient */}
          <div className="absolute right-0 top-0 bottom-8 w-24 bg-gradient-to-l from-[#0d0d1a] to-transparent pointer-events-none" />
        </div>

        {/* Timeline connector line */}
        <div className="hidden md:block relative mt-8">
          <div className="absolute left-8 right-8 h-[2px] bg-gradient-to-r from-accent/50 via-accent to-accent/50" />
          <div className="flex justify-between px-8">
            {timelineData.map((card, index) => (
              <div key={index} className="flex flex-col items-center -mt-2">
                <div className="w-4 h-4 rounded-full bg-accent border-4 border-[#0d0d1a]" />
                <span className="text-xs text-accent/60 mt-2 uppercase tracking-wider">
                  {card.month}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Q1Timeline;
