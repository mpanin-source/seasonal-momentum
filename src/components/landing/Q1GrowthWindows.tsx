import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dumbbell, Calculator, TreeDeciduous, Fan, TrendingUp, Users, DollarSign, Target, Sparkles, Truck, Droplets, Bug, Heart, Hammer, AlertTriangle, X, ChevronRight } from "lucide-react";
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
  onViewROI: (niche: NicheData) => void;
}

const MasterCard = ({ card, onViewROI }: MasterCardProps) => {
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
        <div className="flex flex-col gap-2" style={{ minHeight: "440px" }}>
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
                  minHeight: isExpanded ? "340px" : undefined,
                }}
                animate={{
                  flex: isExpanded ? "1 0 auto" : isMinimized ? "0 0 50px" : "1 0 33%",
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
                      className="flex items-center justify-start gap-2.5 h-full px-3"
                      style={{ height: "44px" }}
                    >
                      <div className="flex items-center justify-center w-7 h-7 rounded-md bg-accent/10 border border-accent/30">
                        <IconComponent className="w-[18px] h-[18px] text-accent" strokeWidth={1.5} />
                      </div>
                      <span className="text-xs font-display font-bold text-white/70 tracking-wider uppercase leading-none">
                        {niche.title}
                      </span>
                    </motion.div>
                  ) : isExpanded ? (
                    // Expanded State - Full Content with internal scroll
                    <motion.div
                      key="expanded"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ delay: 0.1 }}
                      className="flex flex-col p-4 overflow-y-auto"
                      style={{ 
                        minHeight: "340px",
                        maxHeight: "380px",
                        scrollbarWidth: "none",
                        msOverflowStyle: "none",
                      }}
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
                      <div className="mb-4">
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

                      {/* VIEW ROI FORECAST Button with Pulse */}
                      <motion.button
                        onClick={(e) => {
                          e.stopPropagation();
                          onViewROI(niche);
                        }}
                        className="relative mt-auto w-full py-3 px-4 rounded-lg font-display font-bold text-sm uppercase tracking-wider text-white overflow-hidden"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          background: "linear-gradient(135deg, hsl(217 91% 53%) 0%, hsl(217 91% 43%) 100%)",
                          boxShadow: "0 0 20px hsl(217 91% 53% / 0.4)",
                        }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {/* Pulse animation overlay */}
                        <motion.div
                          className="absolute inset-0 bg-white/20"
                          initial={{ scale: 0, opacity: 0.5 }}
                          animate={{ scale: 2, opacity: 0 }}
                          transition={{
                            repeat: Infinity,
                            duration: 1.5,
                            ease: "easeOut",
                          }}
                          style={{ borderRadius: "inherit" }}
                        />
                        <span className="relative z-10 flex items-center justify-center gap-2">
                          View ROI Forecast
                          <ChevronRight className="w-4 h-4" />
                        </span>
                      </motion.button>
                    </motion.div>
                  ) : (
                    // Default State - Full Row (streamlined for mobile)
                    <motion.div
                      key="default"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center justify-between h-full px-3 py-2.5 group"
                    >
                      <div className="flex items-center gap-2.5">
                        <div className="flex items-center justify-center w-8 h-8 rounded-md bg-accent/10 border border-accent/30 group-hover:bg-accent/15 group-hover:border-accent/40 transition-colors">
                          <IconComponent className="w-[18px] h-[18px] text-accent" strokeWidth={1.5} />
                        </div>
                        <span className="text-sm font-display font-bold text-white tracking-wider uppercase leading-none">
                          {niche.title}
                        </span>
                      </div>
                      <div className="flex items-center gap-1.5 text-accent/70 group-hover:text-accent transition-colors">
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

// Animated Counter Component
const AnimatedCounter = ({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) => {
  const [displayValue, setDisplayValue] = useState(0);
  
  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 800;
    const startTime = Date.now();
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.round(start + (end - start) * easeOut);
      setDisplayValue(current);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    animate();
  }, [value]);
  
  return <>{prefix}{displayValue.toLocaleString()}{suffix}</>;
};

const Q1GrowthWindows = () => {
  const [selectedNiche, setSelectedNiche] = useState<NicheData | null>(null);
  const calculatorRef = useRef<HTMLDivElement>(null);

  const handleViewROI = (niche: NicheData) => {
    setSelectedNiche(niche);
    
    // Spring-like smooth scroll to calculator
    setTimeout(() => {
      if (calculatorRef.current) {
        const elementRect = calculatorRef.current.getBoundingClientRect();
        const absoluteElementTop = elementRect.top + window.pageYOffset;
        const middle = absoluteElementTop - (window.innerHeight / 2) + (elementRect.height / 2);
        
        window.scrollTo({
          top: middle,
          behavior: "smooth",
        });
      }
    }, 100);
  };

  // Calculate ROI data for selected niche
  const avgLeads = selectedNiche 
    ? Math.round((selectedNiche.forecastData.leadsMin + selectedNiche.forecastData.leadsMax) / 2)
    : 0;
  const revenue = selectedNiche ? avgLeads * selectedNiche.forecastData.avgTicket : 0;
  const revenuePercentage = Math.min((revenue / 100000) * 100, 100);

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
                onViewROI={handleViewROI}
              />
            ))}
          </div>

          {/* Scroll hint gradient - mobile only */}
          <div className="md:hidden absolute right-0 top-0 bottom-6 w-20 bg-gradient-to-l from-[#0a0a14] to-transparent pointer-events-none" />
        </div>

        {/* SEASONAL ROI CALCULATOR */}
        <div 
          ref={calculatorRef}
          id="roi-calculator"
          className="mt-20 md:mt-28"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-sm font-medium tracking-[0.25em] text-accent uppercase mb-5">
              Seasonal ROI Calculator
            </p>
            <h3 
              className="text-3xl md:text-5xl font-display font-black text-white tracking-wider uppercase"
              style={{
                textShadow: "0 0 30px hsl(217 91% 53% / 0.2)",
              }}
            >
              {selectedNiche 
                ? <>What to Expect from a $2K <span className="text-accent">{selectedNiche.title}</span> Sprint</>
                : <>Select a Niche Above to See ROI</>
              }
            </h3>
          </motion.div>

          <AnimatePresence mode="wait">
            {selectedNiche ? (
              <motion.div
                key={selectedNiche.id}
                initial={{ opacity: 0, y: 20, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.98 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                className="max-w-4xl mx-auto"
              >
                <div 
                  className="rounded-2xl p-6 md:p-8"
                  style={{
                    background: "linear-gradient(135deg, #16162a 0%, #1a1a32 100%)",
                    border: "1px solid hsl(217 91% 53% / 0.3)",
                    boxShadow: "0 0 60px hsl(217 91% 53% / 0.1)",
                  }}
                >
                  {/* Selected Niche Header */}
                  <div className="flex items-center gap-3 mb-8 pb-6 border-b border-white/10">
                    <div className="p-3 rounded-xl bg-accent/20 border border-accent/50">
                      <selectedNiche.icon className="w-6 h-6 text-accent" strokeWidth={1.5} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-[0.2em] text-accent mb-1">
                        Selected Niche
                      </p>
                      <h4 className="text-xl font-display font-bold text-white tracking-wider uppercase">
                        {selectedNiche.title}
                      </h4>
                    </div>
                  </div>

                  {/* ROI Metrics Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                    {/* Expected Leads */}
                    <div 
                      className="rounded-xl p-5 text-center"
                      style={{
                        background: "linear-gradient(135deg, hsl(217 91% 53% / 0.1) 0%, transparent 100%)",
                        border: "1px solid hsl(217 91% 53% / 0.3)",
                      }}
                    >
                      <Users className="w-8 h-8 text-accent mx-auto mb-4" />
                      <p className="text-4xl md:text-5xl font-display font-black text-white mb-2">
                        <AnimatedCounter value={selectedNiche.forecastData.leadsMin} />–<AnimatedCounter value={selectedNiche.forecastData.leadsMax} />
                      </p>
                      <p className="text-sm uppercase tracking-[0.15em] text-white/50">
                        Expected Leads
                      </p>
                    </div>

                    {/* Cost Per Lead */}
                    <div 
                      className="rounded-xl p-5 text-center"
                      style={{
                        background: "linear-gradient(135deg, hsl(280 70% 50% / 0.1) 0%, transparent 100%)",
                        border: "1px solid hsl(280 70% 50% / 0.3)",
                      }}
                    >
                      <Target className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                      <p className="text-4xl md:text-5xl font-display font-black text-purple-400 mb-2">
                        $<AnimatedCounter value={selectedNiche.forecastData.costPerLead} />
                      </p>
                      <p className="text-sm uppercase tracking-[0.15em] text-white/50">
                        Cost Per Lead
                      </p>
                    </div>

                    {/* Revenue Opportunity with Bar Chart */}
                    <div 
                      className="rounded-xl p-5 text-center relative overflow-hidden"
                      style={{
                        background: "linear-gradient(135deg, hsl(160 60% 40% / 0.1) 0%, transparent 100%)",
                        border: "1px solid hsl(160 60% 40% / 0.3)",
                      }}
                    >
                      {/* Animated bar chart background */}
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-emerald-500/20 via-emerald-500/10 to-transparent"
                        initial={{ height: "0%" }}
                        animate={{ height: `${revenuePercentage}%` }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                      />
                      <div className="relative z-10">
                        <DollarSign className="w-8 h-8 text-emerald-400 mx-auto mb-4" />
                        <p className="text-4xl md:text-5xl font-display font-black text-emerald-400 mb-2">
                          $<AnimatedCounter value={Math.round(revenue / 1000)} suffix="K" />
                        </p>
                        <p className="text-sm uppercase tracking-[0.15em] text-white/50 mb-1">
                          Revenue Opportunity
                        </p>
                        <p className="text-xs text-emerald-400/70">
                          at ${selectedNiche.forecastData.avgTicket.toLocaleString()} avg job
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Cost of Inaction Reminder */}
                  <div className="mt-8 p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center gap-4">
                    <AlertTriangle className="w-6 h-6 text-amber-400 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-amber-400 mb-1">
                        Cost of Waiting
                      </p>
                      <p className="text-xs text-amber-400/70">
                        {selectedNiche.costOfInaction}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="max-w-2xl mx-auto text-center py-16"
              >
                <div 
                  className="rounded-2xl p-8 md:p-12"
                  style={{
                    background: "linear-gradient(135deg, #16162a 0%, #1a1a32 100%)",
                    border: "1px dashed hsl(217 91% 53% / 0.3)",
                  }}
                >
                  <Sparkles className="w-12 h-12 text-accent/50 mx-auto mb-6" />
                  <p className="text-lg text-white/50 mb-4">
                    Explore the growth windows above and click<br />
                    <span className="text-accent font-medium">"View ROI Forecast"</span> to see projected returns.
                  </p>
                  <div className="flex justify-center gap-2">
                    {[0, 1, 2].map((i) => (
                      <motion.div
                        key={i}
                        className="w-2 h-2 rounded-full bg-accent/50"
                        animate={{
                          scale: [1, 1.3, 1],
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Q1GrowthWindows;
