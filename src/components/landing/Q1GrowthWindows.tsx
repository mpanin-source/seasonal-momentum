import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dumbbell, Calculator, TreeDeciduous, Fan, ArrowLeft, TrendingUp, Users, DollarSign, Target, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NicheData {
  icon: LucideIcon;
  title: string;
  painPoint: string;
  forecastData: {
    leads: string;
    costPerLead: string;
    revenue: string;
    avgTicket: string;
  };
}

interface MonthCard {
  month: string;
  nicheA: NicheData;
  nicheB: NicheData;
}

const timelineData: MonthCard[] = [
  {
    month: "JAN",
    nicheA: {
      icon: Dumbbell,
      title: "Fitness",
      painPoint: "January sees 340% search volume spike for gym memberships. Stop burning December budget on low-intent traffic—strike when resolution motivation peaks.",
      forecastData: { leads: "45–60", costPerLead: "$35.00", revenue: "$22,500", avgTicket: "$450" },
    },
    nicheB: {
      icon: Calculator,
      title: "Tax Prep",
      painPoint: "Early filers are your highest-value clients. W-2s arrive, urgency builds. CPA firms that wait until March pay 3x CPCs. First-mover wins.",
      forecastData: { leads: "35–50", costPerLead: "$42.00", revenue: "$31,500", avgTicket: "$750" },
    },
  },
  {
    month: "FEB",
    nicheA: {
      icon: Dumbbell,
      title: "Fitness",
      painPoint: "Resolution momentum continues. February filters out casual interest—convert the committed. Don't pause campaigns after Jan; February clients show higher LTV.",
      forecastData: { leads: "35–50", costPerLead: "$38.00", revenue: "$18,000", avgTicket: "$420" },
    },
    nicheB: {
      icon: Calculator,
      title: "Tax Prep",
      painPoint: "Peak research phase. Complex filers compare options—position authority now. Mid-season entry costs 2x. February positioning drives March conversions.",
      forecastData: { leads: "55–75", costPerLead: "$32.00", revenue: "$48,750", avgTicket: "$780" },
    },
  },
  {
    month: "MAR",
    nicheA: {
      icon: TreeDeciduous,
      title: "Landscaping",
      painPoint: "Spring cleanup searches surge 280%. Homeowners plan seasonal projects—capture booking windows. Missed March means lost Q2 revenue.",
      forecastData: { leads: "40–60", costPerLead: "$28.00", revenue: "$32,000", avgTicket: "$640" },
    },
    nicheB: {
      icon: Calculator,
      title: "Tax Prep",
      painPoint: "Deadline panic phase. High-intent, last-minute filers pay premium prices. Emergency tax clients convert at 2x rate. Capture the procrastinators.",
      forecastData: { leads: "70–95", costPerLead: "$25.00", revenue: "$68,250", avgTicket: "$825" },
    },
  },
  {
    month: "APR",
    nicheA: {
      icon: TreeDeciduous,
      title: "Landscaping",
      painPoint: "Prime installation window. Convert planners into projects before summer rush pricing. April bookings = predictable summer revenue.",
      forecastData: { leads: "55–75", costPerLead: "$26.00", revenue: "$45,500", avgTicket: "$700" },
    },
    nicheB: {
      icon: Fan,
      title: "HVAC",
      painPoint: "Pre-summer AC maintenance window. Smart homeowners prep before June emergency calls. Emergency calls pay less than planned installs—own the decision phase.",
      forecastData: { leads: "30–45", costPerLead: "$48.00", revenue: "$33,750", avgTicket: "$900" },
    },
  },
];

interface NicheRowProps {
  niche: NicheData;
  isFlipped: boolean;
  onFlip: () => void;
  onBack: () => void;
  onViewForecast: () => void;
}

const NicheRow = ({ niche, isFlipped, onFlip, onBack, onViewForecast }: NicheRowProps) => {
  const IconComponent = niche.icon;

  return (
    <div className="relative h-[140px] md:h-[150px] perspective-1000">
      <motion.div
        className="relative w-full h-full"
        initial={false}
        animate={{ rotateX: isFlipped ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Front Face - Default State */}
        <div
          className="absolute inset-0 backface-hidden rounded-lg cursor-pointer group overflow-hidden"
          style={{ 
            backfaceVisibility: "hidden",
            background: "linear-gradient(135deg, #16162a 0%, #1a1a32 100%)",
            border: "1px solid hsl(217 91% 53% / 0.2)",
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
          
          <div className="relative z-10 flex items-center justify-between h-full px-5 md:px-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-accent/10 border border-accent/30">
                <IconComponent className="w-5 h-5 text-accent" strokeWidth={1.5} />
              </div>
              <span className="text-lg md:text-xl font-display font-bold text-white tracking-wider uppercase">
                {niche.title}
              </span>
            </div>
            <div className="flex items-center gap-2 text-accent/70 group-hover:text-accent transition-colors">
              <span className="text-xs font-medium tracking-wider uppercase hidden sm:block">
                Analyze Opportunity
              </span>
              <Sparkles className="w-4 h-4" />
            </div>
          </div>

          {/* Bottom accent line */}
          <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-accent/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
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
          <div className="relative z-10 flex flex-col h-full p-4 md:p-5">
            {/* Back button and title */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded bg-accent/15 border border-accent/30">
                  <IconComponent className="w-3.5 h-3.5 text-accent" strokeWidth={1.5} />
                </div>
                <span className="text-sm font-display font-bold text-white tracking-wider uppercase">
                  {niche.title}
                </span>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onBack();
                }}
                className="flex items-center gap-1 text-white/50 hover:text-white transition-colors text-xs"
              >
                <ArrowLeft className="w-3 h-3" />
                Back
              </button>
            </div>

            {/* Pain Point Copy */}
            <p className="text-xs md:text-sm leading-relaxed text-white/80 mb-3 line-clamp-3">
              {niche.painPoint}
            </p>

            {/* CTA Button */}
            <div className="mt-auto">
              <Button
                onClick={(e) => {
                  e.stopPropagation();
                  onViewForecast();
                }}
                size="sm"
                className="w-full bg-accent hover:bg-accent/90 text-white font-display tracking-wider uppercase text-xs py-2"
              >
                <TrendingUp className="w-3 h-3 mr-1.5" />
                View Performance Forecast
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
  onSelectNiche: (niche: NicheData, month: string) => void;
}

const MasterCard = ({ card, onSelectNiche }: MasterCardProps) => {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  const handleViewForecast = (niche: NicheData) => {
    onSelectNiche(niche, card.month);
  };

  return (
    <div className="flex-shrink-0 w-[300px] md:w-[360px]">
      <motion.div
        className="rounded-xl overflow-hidden bg-[#0f0f1c] p-5 md:p-6"
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
        <div className="mb-5 text-center">
          <span
            className="text-4xl md:text-5xl font-display font-black tracking-[0.15em] text-accent"
            style={{
              textShadow: "0 0 30px hsl(217 91% 53% / 0.5)",
            }}
          >
            {card.month}
          </span>
        </div>

        {/* Niche Rows - Stacked Vertically */}
        <div className="flex flex-col gap-4">
          <NicheRow
            niche={card.nicheA}
            isFlipped={flippedIndex === 0}
            onFlip={() => setFlippedIndex(flippedIndex === 0 ? null : 0)}
            onBack={() => setFlippedIndex(null)}
            onViewForecast={() => handleViewForecast(card.nicheA)}
          />
          <NicheRow
            niche={card.nicheB}
            isFlipped={flippedIndex === 1}
            onFlip={() => setFlippedIndex(flippedIndex === 1 ? null : 1)}
            onBack={() => setFlippedIndex(null)}
            onViewForecast={() => handleViewForecast(card.nicheB)}
          />
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
  const data = selectedNiche?.forecastData || { leads: "40–60", costPerLead: "$35.00", revenue: "$28,000", avgTicket: "$550" };
  const title = selectedNiche?.title || "Your Industry";

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
            ROI Calculator
          </p>
          <h2 
            className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-white mb-6 tracking-wider uppercase"
            style={{
              textShadow: "0 0 40px hsl(217 91% 53% / 0.3)",
            }}
          >
            What to Expect from a $2K Sprint
          </h2>
          <p className="text-lg md:text-xl text-white/50 max-w-3xl mx-auto leading-relaxed">
            Projected returns for <span className="text-accent font-semibold">{title}</span> 
            {month && <> in <span className="text-white font-semibold">{month}</span></>} based on historical performance data
          </p>
        </div>

        {/* Dashboard Cards - 3 Column Grid */}
        <div className="grid md:grid-cols-3 gap-5 md:gap-8 max-w-5xl mx-auto mb-14">
          {/* Leads Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.5 }}
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
                className="text-5xl md:text-6xl font-display font-black text-white tracking-tight"
                style={{
                  textShadow: "0 0 30px hsl(217 91% 53% / 0.25)",
                }}
              >
                {data.leads}
              </p>
              <p className="text-sm text-white/30 mt-3 font-medium">per month</p>
            </div>
          </motion.div>

          {/* Cost Per Lead Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
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
                className="text-5xl md:text-6xl font-display font-black text-purple-400 tracking-tight"
                style={{
                  textShadow: "0 0 30px hsl(280 80% 50% / 0.25)",
                }}
              >
                {data.costPerLead}
              </p>
              <p className="text-sm text-white/30 mt-3 font-medium">average</p>
            </div>
          </motion.div>

          {/* Revenue Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="bg-[#0f0f1c] rounded-2xl p-7 md:p-10 text-center relative overflow-hidden group"
            style={{ border: "1px solid hsl(145 60% 40% / 0.2)" }}
          >
            <motion.div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background: "radial-gradient(ellipse at center, hsl(145 60% 40% / 0.1) 0%, transparent 70%)",
              }}
            />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto mb-5">
                <DollarSign className="w-7 h-7 text-emerald-400" />
              </div>
              <p className="text-[11px] uppercase tracking-[0.25em] text-white/40 mb-3 font-medium">
                Potential Revenue Opportunity
              </p>
              <p 
                className="text-5xl md:text-6xl font-display font-black text-emerald-400 tracking-tight"
                style={{
                  textShadow: "0 0 30px hsl(145 60% 40% / 0.3)",
                }}
              >
                {data.revenue}
              </p>
              <p className="text-sm text-white/30 mt-3 font-medium">
                at {data.avgTicket} avg ticket
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
    
    // Scroll to ROI section
    setTimeout(() => {
      const roiSection = document.getElementById("roi-calculator");
      if (roiSection) {
        roiSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
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
                <MasterCard key={index} card={card} onSelectNiche={handleSelectNiche} />
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
