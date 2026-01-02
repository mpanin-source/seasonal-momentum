import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, animate } from "framer-motion";
import { Dumbbell, Calculator, TreeDeciduous, Fan, ArrowLeft, TrendingUp, Users, DollarSign, Target, Sparkles, Truck, Droplets, Bug, Heart, Hammer, Check, AlertTriangle } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

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

// Animated counter component
const AnimatedNumber = ({ value, prefix = "", suffix = "" }: { value: number; prefix?: string; suffix?: string }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const prevValue = useRef(value);

  useEffect(() => {
    const controls = animate(prevValue.current, value, {
      duration: 0.8,
      ease: "easeOut",
      onUpdate: (latest) => setDisplayValue(Math.round(latest)),
    });
    prevValue.current = value;
    return () => controls.stop();
  }, [value]);

  return <>{prefix}{displayValue.toLocaleString()}{suffix}</>;
};

interface NicheRowProps {
  niche: NicheData;
  isFlipped: boolean;
  isSelected: boolean;
  onFlip: () => void;
  onBack: () => void;
  onViewForecast: () => void;
}

const NicheRow = ({ niche, isFlipped, isSelected, onFlip, onBack, onViewForecast }: NicheRowProps) => {
  const IconComponent = niche.icon;

  return (
    <div className="relative h-[130px] md:h-[140px] perspective-1000">
      <motion.div
        className="relative w-full h-full"
        initial={false}
        animate={{ rotateX: isFlipped ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Face - Default State */}
        <div
          className={`absolute inset-0 backface-hidden rounded-lg cursor-pointer group overflow-hidden transition-all duration-300 ${
            isSelected ? "ring-2 ring-accent" : ""
          }`}
          style={{ 
            backfaceVisibility: "hidden",
            background: isSelected 
              ? "linear-gradient(135deg, #1a1a3a 0%, #1e1e42 100%)" 
              : "linear-gradient(135deg, #16162a 0%, #1a1a32 100%)",
            border: isSelected 
              ? "1px solid hsl(217 91% 53% / 0.5)" 
              : "1px solid hsl(217 91% 53% / 0.2)",
            boxShadow: isSelected 
              ? "0 0 30px hsl(217 91% 53% / 0.25), inset 0 0 20px hsl(217 91% 53% / 0.1)" 
              : "none",
          }}
          onClick={onFlip}
        >
          {/* Pulse border on hover */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-lg"
            style={{
              boxShadow: "inset 0 0 25px hsl(217 91% 53% / 0.25), 0 0 35px hsl(217 91% 53% / 0.12)",
            }}
          />
          
          <div className="relative z-10 flex items-center justify-between h-full px-4 md:px-5">
            <div className="flex items-center gap-3">
              <div className={`p-2.5 rounded-lg border ${
                isSelected 
                  ? "bg-accent/20 border-accent/50" 
                  : "bg-accent/10 border-accent/30"
              }`}>
                <IconComponent className="w-4 h-4 text-accent" strokeWidth={1.5} />
              </div>
              <span className="text-base md:text-lg font-display font-bold text-white tracking-wider uppercase">
                {niche.title}
              </span>
              {/* Selected checkmark */}
              <AnimatePresence>
                {isSelected && (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0, opacity: 0 }}
                    className="w-5 h-5 rounded-full bg-accent flex items-center justify-center"
                  >
                    <Check className="w-3 h-3 text-white" strokeWidth={3} />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <div className="flex items-center gap-2 text-accent/70 group-hover:text-accent transition-colors">
              <span className="text-[10px] font-medium tracking-wider uppercase hidden sm:block">
                Analyze
              </span>
              <Sparkles className="w-3.5 h-3.5" />
            </div>
          </div>

          {/* Bottom accent line */}
          <div className={`absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent transition-opacity ${
            isSelected ? "opacity-100" : "opacity-0 group-hover:opacity-100"
          }`} />
        </div>

        {/* Back Face - Flipped State */}
        <div
          className="absolute inset-0 backface-hidden rounded-lg overflow-hidden"
          style={{ 
            backfaceVisibility: "hidden",
            transform: "rotateX(180deg)",
            background: "linear-gradient(135deg, #1a1a2e 0%, #1e1e3a 100%)",
            border: "1px solid hsl(217 91% 53% / 0.4)",
          }}
        >
          <div className="relative z-10 flex flex-col h-full p-3 md:p-4">
            {/* Back button and title */}
            <div className="flex items-center justify-between mb-1.5">
              <div className="flex items-center gap-2">
                <div className="p-1 rounded bg-accent/15 border border-accent/30">
                  <IconComponent className="w-3 h-3 text-accent" strokeWidth={1.5} />
                </div>
                <span className="text-xs font-display font-bold text-white tracking-wider uppercase">
                  {niche.title}
                </span>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onBack();
                }}
                className="flex items-center gap-1 text-white/50 hover:text-white transition-colors text-[10px]"
              >
                <ArrowLeft className="w-2.5 h-2.5" />
                Back
              </button>
            </div>

            {/* Pain Point Copy */}
            <p className="text-[10px] md:text-xs leading-relaxed text-white/80 mb-1.5 line-clamp-2">
              {niche.painPoint}
            </p>

            {/* Cost of Inaction */}
            <div className="flex items-center gap-1.5 mb-2">
              <AlertTriangle className="w-3 h-3 text-amber-400 flex-shrink-0" />
              <span className="text-[10px] text-amber-400/90 font-medium">
                {niche.costOfInaction}
              </span>
            </div>

            {/* CTA Button with glow */}
            <div className="mt-auto">
              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  onViewForecast();
                }}
                size="sm"
                className="w-full bg-accent hover:bg-accent/90 text-white font-display tracking-wider uppercase text-[10px] py-1.5 relative overflow-hidden group/btn"
                style={{
                  boxShadow: "0 0 20px hsl(217 91% 53% / 0.4), 0 0 40px hsl(217 91% 53% / 0.2)",
                }}
              >
                <motion.div
                  className="absolute inset-0 bg-white/20"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                />
                <TrendingUp className="w-3 h-3 mr-1.5 relative z-10" />
                <span className="relative z-10">View ROI Forecast</span>
              </Button>
            </div>
          </div>

          {/* Neon accent glow */}
          <div className="absolute inset-0 rounded-lg pointer-events-none" style={{
            boxShadow: "inset 0 0 30px hsl(217 91% 53% / 0.15)",
          }} />
        </div>
      </motion.div>
    </div>
  );
};

interface MasterCardProps {
  card: MonthCard;
  selectedNicheId: string | null;
  onSelectNiche: (niche: NicheData, month: string) => void;
}

const MasterCard = ({ card, selectedNicheId, onSelectNiche }: MasterCardProps) => {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  const handleViewForecast = (niche: NicheData) => {
    onSelectNiche(niche, card.month);
    setFlippedIndex(null);
  };

  return (
    <div className="flex-shrink-0 w-[280px] md:w-[320px]">
      <motion.div
        className="rounded-xl overflow-hidden bg-[#0f0f1c] p-4 md:p-5"
        style={{
          border: "1px solid hsl(217 91% 53% / 0.25)",
          boxShadow: "0 0 50px hsl(217 91% 53% / 0.06)",
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

        {/* Niche Rows - 3 Stacked Vertically */}
        <div className="flex flex-col gap-3">
          {card.niches.map((niche, index) => (
            <NicheRow
              key={niche.id}
              niche={niche}
              isFlipped={flippedIndex === index}
              isSelected={selectedNicheId === niche.id}
              onFlip={() => setFlippedIndex(flippedIndex === index ? null : index)}
              onBack={() => setFlippedIndex(null)}
              onViewForecast={() => handleViewForecast(niche)}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
};

interface ROISectionProps {
  selectedNiche: NicheData | null;
  month: string;
}

const ROISection = ({ selectedNiche, month }: ROISectionProps) => {
  const data = selectedNiche?.forecastData || { leadsMin: 40, leadsMax: 60, costPerLead: 35, avgTicket: 550 };
  const title = selectedNiche?.title || "Your Industry";
  
  // Calculate revenue based on leads and avg ticket
  const avgLeads = Math.round((data.leadsMin + data.leadsMax) / 2);
  const revenue = avgLeads * data.avgTicket;
  
  // Calculate bar percentage (max revenue ~$70k for full bar)
  const maxRevenue = 70000;
  const barPercentage = Math.min((revenue / maxRevenue) * 100, 100);

  return (
    <section id="roi-calculator" className="py-20 md:py-28 bg-[#080810] relative overflow-hidden">
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(hsl(217 91% 53% / 0.6) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(217 91% 53% / 0.6) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Radial glow */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] opacity-20 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, hsl(217 91% 53% / 0.3) 0%, transparent 70%)",
        }}
      />

      <div className="container-wide relative z-10">
        {/* Section Header */}
        <div className="text-center mb-14 md:mb-20">
          <p className="text-sm font-medium tracking-[0.25em] text-accent uppercase mb-5">
            Seasonal ROI Calculator
          </p>
          <h2 
            className="text-3xl md:text-5xl lg:text-6xl font-display font-black text-white mb-6 tracking-wider uppercase"
            style={{
              textShadow: "0 0 40px hsl(217 91% 53% / 0.3)",
            }}
          >
            What to Expect from a $2K{" "}
            <motion.span
              key={title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-accent"
            >
              {title}
            </motion.span>
            {" "}Sprint
          </h2>
          <p className="text-lg md:text-xl text-white/50 max-w-3xl mx-auto leading-relaxed">
            {month ? (
              <>Projected returns for <span className="text-white font-semibold">{month}</span> based on historical performance data</>
            ) : (
              <>Select a niche above to see projected returns</>
            )}
          </p>
        </div>

        {/* Dashboard Cards - 3 Column Grid */}
        <div className="grid md:grid-cols-3 gap-5 md:gap-8 max-w-5xl mx-auto mb-14">
          {/* Leads Card */}
          <motion.div
            key={`leads-${selectedNiche?.id}`}
            initial={{ opacity: 0.5, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="bg-[#0f0f1c] rounded-2xl p-7 md:p-10 text-center relative overflow-hidden group"
            style={{ border: "1px solid hsl(217 91% 53% / 0.2)" }}
          >
            <motion.div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background: "radial-gradient(ellipse at center, hsl(217 91% 53% / 0.08) 0%, transparent 70%)",
              }}
            />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-xl bg-accent/10 border border-accent/30 flex items-center justify-center mx-auto mb-5">
                <Users className="w-7 h-7 text-accent" />
              </div>
              <p className="text-[11px] uppercase tracking-[0.25em] text-white/40 mb-3 font-medium">
                Estimated Leads
              </p>
              <p 
                className="text-4xl md:text-5xl font-display font-black text-white tracking-tight"
                style={{
                  textShadow: "0 0 30px hsl(217 91% 53% / 0.25)",
                }}
              >
                <AnimatedNumber value={data.leadsMin} />–<AnimatedNumber value={data.leadsMax} />
              </p>
              <p className="text-sm text-white/30 mt-3 font-medium">per month</p>
            </div>
          </motion.div>

          {/* Cost Per Lead Card */}
          <motion.div
            key={`cpl-${selectedNiche?.id}`}
            initial={{ opacity: 0.5, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.05 }}
            className="bg-[#0f0f1c] rounded-2xl p-7 md:p-10 text-center relative overflow-hidden group"
            style={{ border: "1px solid hsl(217 91% 53% / 0.2)" }}
          >
            <motion.div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background: "radial-gradient(ellipse at center, hsl(280 80% 50% / 0.08) 0%, transparent 70%)",
              }}
            />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center mx-auto mb-5">
                <Target className="w-7 h-7 text-purple-400" />
              </div>
              <p className="text-[11px] uppercase tracking-[0.25em] text-white/40 mb-3 font-medium">
                Projected Cost-Per-Lead
              </p>
              <p 
                className="text-4xl md:text-5xl font-display font-black text-purple-400 tracking-tight"
                style={{
                  textShadow: "0 0 30px hsl(280 80% 50% / 0.25)",
                }}
              >
                $<AnimatedNumber value={data.costPerLead} />.00
              </p>
              <p className="text-sm text-white/30 mt-3 font-medium">average</p>
            </div>
          </motion.div>

          {/* Revenue Card with Bar Chart */}
          <motion.div
            key={`revenue-${selectedNiche?.id}`}
            initial={{ opacity: 0.5, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className="bg-[#0f0f1c] rounded-2xl p-7 md:p-10 text-center relative overflow-hidden group"
            style={{ border: "1px solid hsl(145 60% 40% / 0.2)" }}
          >
            <motion.div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background: "radial-gradient(ellipse at center, hsl(145 60% 40% / 0.1) 0%, transparent 70%)",
              }}
            />
            
            {/* Animated Bar Chart Background */}
            <motion.div
              className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-emerald-500/20 via-emerald-500/10 to-transparent"
              initial={{ height: "0%" }}
              animate={{ height: `${barPercentage}%` }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            />
            <motion.div
              className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent"
              initial={{ opacity: 0, bottom: "0%" }}
              animate={{ opacity: 0.6, bottom: `${barPercentage}%` }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            />
            
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto mb-5">
                <DollarSign className="w-7 h-7 text-emerald-400" />
              </div>
              <p className="text-[11px] uppercase tracking-[0.25em] text-white/40 mb-3 font-medium">
                Potential Revenue Opportunity
              </p>
              <p 
                className="text-4xl md:text-5xl font-display font-black text-emerald-400 tracking-tight"
                style={{
                  textShadow: "0 0 30px hsl(145 60% 40% / 0.3)",
                }}
              >
                $<AnimatedNumber value={revenue} />
              </p>
              <p className="text-sm text-white/30 mt-3 font-medium">
                at ${data.avgTicket.toLocaleString()} avg job
              </p>
            </div>
          </motion.div>
        </div>

        {/* Disclaimer */}
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center text-xs text-white/35 max-w-2xl mx-auto leading-relaxed"
        >
          Forecasts based on historical 2025 sprint data. Results vary by local market saturation. 
          All projections assume proper landing page optimization and conversion tracking implementation.
        </motion.p>
      </div>
    </section>
  );
};

const Q1GrowthWindows = () => {
  const [selectedNiche, setSelectedNiche] = useState<NicheData | null>(null);
  const [selectedMonth, setSelectedMonth] = useState<string>("");

  const handleSelectNiche = (niche: NicheData, month: string) => {
    setSelectedNiche(niche);
    setSelectedMonth(month);
    
    // Smooth scroll to ROI section with perfect centering
    setTimeout(() => {
      const roiSection = document.getElementById("roi-calculator");
      if (roiSection) {
        const headerOffset = 80;
        const elementPosition = roiSection.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }, 150);
  };

  return (
    <>
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
              Click on any niche to reveal the strategic insight and view projected performance.
            </p>
          </div>

          {/* Horizontal Scroll Container */}
          <div className="relative -mx-4 md:-mx-8">
            <div className="flex gap-5 md:gap-7 overflow-x-auto pb-6 px-4 md:px-8 scrollbar-thin scrollbar-thumb-accent/30 scrollbar-track-transparent justify-start md:justify-center">
              {timelineData.map((card, index) => (
                <MasterCard 
                  key={index} 
                  card={card} 
                  selectedNicheId={selectedNiche?.id || null}
                  onSelectNiche={handleSelectNiche} 
                />
              ))}
            </div>

            {/* Scroll hint gradient - mobile only */}
            <div className="md:hidden absolute right-0 top-0 bottom-6 w-20 bg-gradient-to-l from-[#0a0a14] to-transparent pointer-events-none" />
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <ROISection selectedNiche={selectedNiche} month={selectedMonth} />
    </>
  );
};

export default Q1GrowthWindows;
