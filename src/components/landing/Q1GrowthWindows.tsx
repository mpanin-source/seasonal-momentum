import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dumbbell, Calculator, TreeDeciduous, Fan, TrendingUp, Users, DollarSign, Target, Sparkles, Truck, Droplets, Bug, Heart, Hammer, AlertTriangle, X } from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface NicheData {
  id: string;
  icon: LucideIcon;
  title: string;
  painPoint: string;
  costOfInaction: string;
  forecastData: {
    leadsMin: number;
    leadsMax: number;
    costPerLead: number;
    avgTicket: number;
  };
}

interface MonthCard {
  month: string;
  niches: NicheData[];
}

const timelineData: MonthCard[] = [
  {
    month: "JAN",
    niches: [
      {
        id: "jan-fitness",
        icon: Dumbbell,
        title: "Fitness",
        painPoint: "January sees 340% search volume spike for gym memberships. Stop burning December budget on low-intent traffic—strike when resolution motivation peaks.",
        costOfInaction: "~12 qualified leads lost per week of delay",
        forecastData: { leadsMin: 45, leadsMax: 60, costPerLead: 35, avgTicket: 450 },
      },
      {
        id: "jan-tax",
        icon: Calculator,
        title: "Tax Prep",
        painPoint: "Early filers are your highest-value clients. W-2s arrive, urgency builds. CPA firms that wait until March pay 3x CPCs. First-mover wins.",
        costOfInaction: "~8 high-value filers lost per week of delay",
        forecastData: { leadsMin: 35, leadsMax: 50, costPerLead: 42, avgTicket: 750 },
      },
      {
        id: "jan-wellness",
        icon: Heart,
        title: "Wellness",
        painPoint: "New Year health resolutions drive 280% surge in wellness searches. Capture the motivated before competitors saturate the space.",
        costOfInaction: "~10 motivated clients lost per week of delay",
        forecastData: { leadsMin: 40, leadsMax: 55, costPerLead: 38, avgTicket: 380 },
      },
    ],
  },
  {
    month: "FEB",
    niches: [
      {
        id: "feb-moving",
        icon: Truck,
        title: "Moving Services",
        painPoint: "Spring relocation planning starts in February. Families research movers 6-8 weeks ahead. Lock in Q2 bookings before March price wars.",
        costOfInaction: "~7 relocation bookings lost per week of delay",
        forecastData: { leadsMin: 30, leadsMax: 45, costPerLead: 52, avgTicket: 1200 },
      },
      {
        id: "feb-tax",
        icon: Calculator,
        title: "Tax Prep",
        painPoint: "Peak research phase. Complex filers compare options—position authority now. Mid-season entry costs 2x. February positioning drives March conversions.",
        costOfInaction: "~14 complex filers lost per week of delay",
        forecastData: { leadsMin: 55, leadsMax: 75, costPerLead: 32, avgTicket: 780 },
      },
      {
        id: "feb-remodeling",
        icon: Hammer,
        title: "Home Remodeling",
        painPoint: "Homeowners plan spring renovations during winter months. Decision phase peaks in February—be there when budgets are set.",
        costOfInaction: "~5 major projects lost per week of delay",
        forecastData: { leadsMin: 25, leadsMax: 40, costPerLead: 65, avgTicket: 8500 },
      },
    ],
  },
  {
    month: "MAR",
    niches: [
      {
        id: "mar-landscaping",
        icon: TreeDeciduous,
        title: "Landscaping",
        painPoint: "Spring cleanup searches surge 280%. Homeowners plan seasonal projects—capture booking windows. Missed March means lost Q2 revenue.",
        costOfInaction: "~11 cleanup contracts lost per week of delay",
        forecastData: { leadsMin: 40, leadsMax: 60, costPerLead: 28, avgTicket: 640 },
      },
      {
        id: "mar-tax",
        icon: Calculator,
        title: "Tax Prep",
        painPoint: "Deadline panic phase. High-intent, last-minute filers pay premium prices. Emergency tax clients convert at 2x rate. Capture the procrastinators.",
        costOfInaction: "~18 urgent filers lost per week of delay",
        forecastData: { leadsMin: 70, leadsMax: 95, costPerLead: 25, avgTicket: 825 },
      },
      {
        id: "mar-pest",
        icon: Bug,
        title: "Pest Control",
        painPoint: "Spring pest emergence drives urgent searches. Homeowners discover winter infestations—immediate service need creates high-intent leads.",
        costOfInaction: "~13 service calls lost per week of delay",
        forecastData: { leadsMin: 50, leadsMax: 70, costPerLead: 22, avgTicket: 320 },
      },
    ],
  },
  {
    month: "APR",
    niches: [
      {
        id: "apr-landscaping",
        icon: TreeDeciduous,
        title: "Landscaping",
        painPoint: "Prime installation window. Convert planners into projects before summer rush pricing. April bookings = predictable summer revenue.",
        costOfInaction: "~14 installation projects lost per week of delay",
        forecastData: { leadsMin: 55, leadsMax: 75, costPerLead: 26, avgTicket: 700 },
      },
      {
        id: "apr-hvac",
        icon: Fan,
        title: "HVAC",
        painPoint: "Pre-summer AC maintenance window. Smart homeowners prep before June emergency calls. Emergency calls pay less than planned installs—own the decision phase.",
        costOfInaction: "~8 maintenance contracts lost per week of delay",
        forecastData: { leadsMin: 30, leadsMax: 45, costPerLead: 48, avgTicket: 900 },
      },
      {
        id: "apr-pool",
        icon: Droplets,
        title: "Pool Services",
        painPoint: "Pool opening season peaks. Homeowners book seasonal maintenance 4-6 weeks ahead. April bookings lock in summer recurring revenue.",
        costOfInaction: "~9 seasonal contracts lost per week of delay",
        forecastData: { leadsMin: 35, leadsMax: 50, costPerLead: 35, avgTicket: 550 },
      },
    ],
  },
];

interface MasterCardProps {
  card: MonthCard;
}

const MasterCard = ({ card }: MasterCardProps) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const handleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const handleClose = () => {
    setExpandedIndex(null);
  };

  return (
    <div className="flex-shrink-0 w-[300px] md:w-[340px]">
      <motion.div
        className="rounded-xl overflow-hidden bg-[#0f0f1c] p-4 md:p-5"
        style={{
          border: "1px solid hsl(217 91% 53% / 0.25)",
          boxShadow: "0 0 50px hsl(217 91% 53% / 0.06)",
          minHeight: "520px",
        }}
        whileHover={{
          boxShadow: "0 0 70px hsl(217 91% 53% / 0.12)",
        }}
        transition={{ duration: 0.3 }}
      >
        {/* Month Header */}
        <div className="mb-4 text-center">
          <span
            className="text-3xl md:text-4xl font-display font-black tracking-[0.15em] text-accent"
            style={{
              textShadow: "0 0 30px hsl(217 91% 53% / 0.5)",
            }}
          >
            {card.month}
          </span>
        </div>

        {/* Niche Rows - Focus Mode */}
        <div className="flex flex-col gap-2 h-[440px]">
          {card.niches.map((niche, index) => {
            const IconComponent = niche.icon;
            const isExpanded = expandedIndex === index;
            const isMinimized = expandedIndex !== null && expandedIndex !== index;
            
            // Calculate revenue
            const avgLeads = Math.round((niche.forecastData.leadsMin + niche.forecastData.leadsMax) / 2);
            const revenue = avgLeads * niche.forecastData.avgTicket;

            return (
              <motion.div
                key={niche.id}
                layout
                layoutId={`niche-${niche.id}`}
                onClick={() => !isExpanded && handleExpand(index)}
                className={`relative rounded-lg overflow-hidden cursor-pointer ${
                  isMinimized ? "cursor-pointer" : ""
                }`}
                style={{
                  background: isExpanded
                    ? "linear-gradient(135deg, hsl(217 91% 53% / 0.15) 0%, hsl(217 91% 53% / 0.05) 100%)"
                    : "linear-gradient(135deg, #16162a 0%, #1a1a32 100%)",
                  border: isExpanded
                    ? "1px solid hsl(217 91% 53% / 0.5)"
                    : "1px solid hsl(217 91% 53% / 0.2)",
                  boxShadow: isExpanded
                    ? "0 0 40px hsl(217 91% 53% / 0.25), inset 0 0 30px hsl(217 91% 53% / 0.1)"
                    : "none",
                }}
                animate={{
                  flex: isExpanded ? "1 0 70%" : isMinimized ? "0 0 15%" : "1 0 33%",
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
              >
                <AnimatePresence mode="wait">
                  {isMinimized ? (
                    // Minimized State - Icon + Name only
                    <motion.div
                      key="minimized"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center gap-3 h-full px-4"
                    >
                      <div className="p-2 rounded-lg bg-accent/10 border border-accent/30">
                        <IconComponent className="w-4 h-4 text-accent" strokeWidth={1.5} />
                      </div>
                      <span className="text-sm font-display font-bold text-white/70 tracking-wider uppercase">
                        {niche.title}
                      </span>
                    </motion.div>
                  ) : isExpanded ? (
                    // Expanded State - Full Content
                    <motion.div
                      key="expanded"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ delay: 0.1 }}
                      className="h-full flex flex-col p-4"
                    >
                      {/* Header with Close Button */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <div className="p-2 rounded-lg bg-accent/20 border border-accent/50">
                            <IconComponent className="w-4 h-4 text-accent" strokeWidth={1.5} />
                          </div>
                          <span className="text-base font-display font-bold text-white tracking-wider uppercase">
                            {niche.title}
                          </span>
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            handleClose();
                          }}
                          className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                        >
                          <X className="w-4 h-4 text-white/70" />
                        </button>
                      </div>

                      {/* Strategic Logic */}
                      <p className="text-xs leading-relaxed text-white/80 mb-3">
                        {niche.painPoint}
                      </p>

                      {/* Cost of Inaction Warning */}
                      <div className="flex items-center gap-2 mb-4 p-2 rounded-lg bg-amber-500/10 border border-amber-500/30">
                        <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0" />
                        <span className="text-xs text-amber-400 font-medium">
                          {niche.costOfInaction}
                        </span>
                      </div>

                      {/* Projected Performance Dashboard */}
                      <div className="mt-auto">
                        <div className="flex items-center gap-1.5 mb-3">
                          <TrendingUp className="w-3.5 h-3.5 text-accent" />
                          <span className="text-[10px] uppercase tracking-[0.2em] text-accent font-medium">
                            Projected Performance
                          </span>
                        </div>
                        
                        <div className="grid grid-cols-3 gap-2">
                          {/* Leads */}
                          <div className="bg-[#0a0a14] rounded-lg p-2.5 text-center border border-accent/20">
                            <Users className="w-4 h-4 text-accent mx-auto mb-1.5" />
                            <p className="text-lg font-display font-black text-white">
                              {niche.forecastData.leadsMin}–{niche.forecastData.leadsMax}
                            </p>
                            <p className="text-[9px] uppercase tracking-wider text-white/40">Leads</p>
                          </div>
                          
                          {/* CPL */}
                          <div className="bg-[#0a0a14] rounded-lg p-2.5 text-center border border-purple-500/20">
                            <Target className="w-4 h-4 text-purple-400 mx-auto mb-1.5" />
                            <p className="text-lg font-display font-black text-purple-400">
                              ${niche.forecastData.costPerLead}
                            </p>
                            <p className="text-[9px] uppercase tracking-wider text-white/40">CPL</p>
                          </div>
                          
                          {/* Revenue */}
                          <div className="bg-[#0a0a14] rounded-lg p-2.5 text-center border border-emerald-500/20 relative overflow-hidden">
                            {/* Revenue bar animation */}
                            <motion.div
                              className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-emerald-500/20 to-transparent"
                              initial={{ height: "0%" }}
                              animate={{ height: "100%" }}
                              transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                            />
                            <div className="relative z-10">
                              <DollarSign className="w-4 h-4 text-emerald-400 mx-auto mb-1.5" />
                              <p className="text-lg font-display font-black text-emerald-400">
                                ${(revenue / 1000).toFixed(0)}K
                              </p>
                              <p className="text-[9px] uppercase tracking-wider text-white/40">Revenue</p>
                            </div>
                          </div>
                        </div>
                        
                        {/* Average Ticket Info */}
                        <p className="text-[10px] text-white/40 text-center mt-2">
                          at ${niche.forecastData.avgTicket.toLocaleString()} avg job
                        </p>
                      </div>
                    </motion.div>
                  ) : (
                    // Default State - Full Row
                    <motion.div
                      key="default"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center justify-between h-full px-4 group"
                    >
                      <div className="flex items-center gap-3">
                        <div className="p-2.5 rounded-lg bg-accent/10 border border-accent/30 group-hover:bg-accent/15 group-hover:border-accent/40 transition-colors">
                          <IconComponent className="w-4 h-4 text-accent" strokeWidth={1.5} />
                        </div>
                        <span className="text-base font-display font-bold text-white tracking-wider uppercase">
                          {niche.title}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-accent/70 group-hover:text-accent transition-colors">
                        <span className="text-[10px] font-medium tracking-wider uppercase hidden sm:block">
                          Analyze
                        </span>
                        <Sparkles className="w-3.5 h-3.5" />
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Bottom accent line for default state */}
                {!isExpanded && !isMinimized && (
                  <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                )}
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  );
};

const Q1GrowthWindows = () => {
  return (
    <section id="q1-growth-windows" className="py-20 md:py-28 bg-[#0a0a14] relative overflow-hidden">
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(217 91% 53% / 0.5) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(217 91% 53% / 0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1200px] h-[600px] opacity-15 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, hsl(217 91% 53% / 0.2) 0%, transparent 60%)",
        }}
      />

      <div className="container-wide relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14 md:mb-20">
          <p className="text-sm font-medium tracking-[0.25em] text-accent uppercase mb-5">
            Strategic Calendar
          </p>
          <h2 
            className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-white mb-6 tracking-wider uppercase"
            style={{
              textShadow: "0 0 40px hsl(217 91% 53% / 0.25)",
            }}
          >
            The Q1 Growth Windows
          </h2>
          <p className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
            Click on any niche to reveal strategic insights and projected performance—all in one view.
          </p>
        </div>

        {/* Horizontal Scroll Container */}
        <div className="relative -mx-4 md:-mx-8">
          <div className="flex gap-5 md:gap-7 overflow-x-auto pb-6 px-4 md:px-8 scrollbar-thin scrollbar-thumb-accent/30 scrollbar-track-transparent justify-start md:justify-center">
            {timelineData.map((card, index) => (
              <MasterCard 
                key={index} 
                card={card}
              />
            ))}
          </div>

          {/* Scroll hint gradient - mobile only */}
          <div className="md:hidden absolute right-0 top-0 bottom-6 w-20 bg-gradient-to-l from-[#0a0a14] to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
};

export default Q1GrowthWindows;
