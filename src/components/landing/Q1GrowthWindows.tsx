import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dumbbell, Calculator, TreeDeciduous, Fan, X, ChevronRight, TrendingUp, Users, DollarSign, Target } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NicheZone {
  icon: LucideIcon;
  title: string;
  sprintLogic: string;
  painPoint: string;
  forecastData: {
    leads: string;
    revenue: string;
    ctr: string;
  };
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
      sprintLogic: "Stop burning budget on high-CAC clicks. January sees 340% search volume spike—capture intent when motivation peaks.",
      painPoint: "Gyms waste December budget on low-intent traffic. Strike in the resolution window.",
      forecastData: { leads: "45-65", revenue: "$18K-$32K", ctr: "4.2%" },
    },
    zoneB: {
      icon: Calculator,
      title: "Tax Prep",
      sprintLogic: "Early filers are your highest-value clients. W-2s arrive, urgency builds—own the January advantage.",
      painPoint: "CPA firms wait until March, paying 3x CPCs. First-mover wins.",
      forecastData: { leads: "35-50", revenue: "$28K-$45K", ctr: "5.1%" },
    },
  },
  {
    month: "FEB",
    zoneA: {
      icon: Dumbbell,
      title: "Fitness",
      sprintLogic: "Resolution momentum continues. Convert the committed—February filters out casual interest.",
      painPoint: "Don't pause campaigns after Jan. February clients show higher LTV.",
      forecastData: { leads: "35-50", revenue: "$14K-$25K", ctr: "3.8%" },
    },
    zoneB: {
      icon: Calculator,
      title: "Tax Prep",
      sprintLogic: "Peak research phase. Complex filers compare options—position authority now.",
      painPoint: "Mid-season entry costs 2x. February positioning drives March conversions.",
      forecastData: { leads: "55-75", revenue: "$44K-$68K", ctr: "5.8%" },
    },
  },
  {
    month: "MAR",
    zoneA: {
      icon: TreeDeciduous,
      title: "Landscaping",
      sprintLogic: "Spring cleanup searches surge 280%. Homeowners plan seasonal projects—capture booking windows.",
      painPoint: "Missed March means lost Q2 revenue. Booking windows are razor thin.",
      forecastData: { leads: "40-60", revenue: "$22K-$38K", ctr: "4.5%" },
    },
    zoneB: {
      icon: Calculator,
      title: "Tax Prep",
      sprintLogic: "Deadline panic phase. High-intent, last-minute filers pay premium prices.",
      painPoint: "Emergency tax clients convert at 2x rate. Capture the procrastinators.",
      forecastData: { leads: "70-95", revenue: "$56K-$86K", ctr: "6.2%" },
    },
  },
  {
    month: "APR",
    zoneA: {
      icon: TreeDeciduous,
      title: "Landscaping",
      sprintLogic: "Prime installation window. Convert planners into projects before summer rush pricing.",
      painPoint: "April bookings = predictable summer revenue. Late starters compete on price.",
      forecastData: { leads: "55-75", revenue: "$35K-$52K", ctr: "4.8%" },
    },
    zoneB: {
      icon: Fan,
      title: "HVAC",
      sprintLogic: "Pre-summer AC maintenance window. Smart homeowners prep before June emergency calls.",
      painPoint: "Emergency calls pay less than planned installs. Own the decision phase.",
      forecastData: { leads: "30-45", revenue: "$24K-$42K", ctr: "4.0%" },
    },
  },
];

const NicheZoneCard = ({
  zone,
  side,
  isExpanded,
  onExpand,
  onClose,
  onViewForecast,
}: {
  zone: NicheZone;
  side: "left" | "right";
  isExpanded: boolean;
  onExpand: () => void;
  onClose: () => void;
  onViewForecast: () => void;
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
        className={`h-full flex flex-col transition-all duration-300 ${
          isExpanded
            ? "bg-[#1a1a2e] p-6"
            : "bg-[#16162a] hover:bg-[#1e1e38] group items-center justify-center p-4"
        }`}
        style={{
          borderLeft: side === "right" && !isExpanded ? "1px solid hsl(217 91% 53% / 0.3)" : "none",
        }}
        layout
      >
        {/* Pulse border effect on hover */}
        {!isExpanded && (
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
            style={{
              boxShadow: "inset 0 0 30px hsl(217 91% 53% / 0.3), 0 0 40px hsl(217 91% 53% / 0.15)",
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
              className="flex flex-col items-center gap-4 text-center"
            >
              <div className="p-4 rounded-lg bg-accent/10 border border-accent/30">
                <IconComponent className="w-7 h-7 text-accent" strokeWidth={1.5} />
              </div>
              <span className="text-base font-display font-bold text-white tracking-wider uppercase">
                {zone.title}
              </span>
              <ChevronRight className="w-4 h-4 text-accent/60" />
            </motion.div>
          ) : (
            <motion.div
              key="expanded"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="flex flex-col h-full relative"
            >
              {/* Close button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onClose();
                }}
                className="absolute top-0 right-0 p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors border border-white/10"
              >
                <X className="w-4 h-4 text-white/70" />
              </button>

              {/* Header */}
              <div className="flex items-center gap-3 mb-5">
                <div className="p-3 rounded-lg bg-accent/20 border border-accent/40">
                  <IconComponent className="w-5 h-5 text-accent" strokeWidth={1.5} />
                </div>
                <span className="text-xl font-display font-bold text-white tracking-wider uppercase">
                  {zone.title}
                </span>
              </div>

              {/* Sprint Logic */}
              <div className="mb-4">
                <h4 className="text-[10px] uppercase tracking-[0.2em] text-accent mb-2 font-semibold">
                  Sprint Logic
                </h4>
                <p className="text-sm leading-relaxed text-white/90 font-medium">
                  {zone.sprintLogic}
                </p>
              </div>

              {/* Pain Point */}
              <div className="mb-6">
                <h4 className="text-[10px] uppercase tracking-[0.2em] text-red-400/80 mb-2 font-semibold">
                  Pain Point
                </h4>
                <p className="text-sm leading-relaxed text-white/70 italic">
                  {zone.painPoint}
                </p>
              </div>

              {/* CTA Button */}
              <div className="mt-auto">
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    onViewForecast();
                  }}
                  className="w-full bg-accent hover:bg-accent/90 text-white font-display tracking-wider uppercase text-sm py-5"
                >
                  <TrendingUp className="w-4 h-4 mr-2" />
                  View ROI Forecast
                </Button>
              </div>

              {/* Neon accent line */}
              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-accent to-transparent opacity-60" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};

const MasterCard = ({ card, onSelectNiche }: { card: MasterCard; onSelectNiche: (zone: NicheZone, month: string) => void }) => {
  const [expandedZone, setExpandedZone] = useState<"left" | "right" | null>(null);

  const handleViewForecast = (zone: NicheZone) => {
    onSelectNiche(zone, card.month);
  };

  return (
    <div className="flex-shrink-0 w-[280px] md:w-[340px]">
      {/* Month Header */}
      <div className="mb-4 text-center">
        <span
          className="text-4xl md:text-5xl font-display font-black tracking-[0.15em] text-transparent bg-clip-text"
          style={{
            backgroundImage: "linear-gradient(180deg, #ffffff 0%, rgba(255,255,255,0.4) 100%)",
          }}
        >
          {card.month}
        </span>
      </div>

      {/* Card Container */}
      <motion.div
        className="relative h-[300px] md:h-[340px] rounded-xl overflow-hidden bg-[#12121f]"
        style={{
          border: "1px solid hsl(217 91% 53% / 0.3)",
          boxShadow: "0 0 40px hsl(217 91% 53% / 0.08)",
        }}
        whileHover={{
          boxShadow: "0 0 60px hsl(217 91% 53% / 0.15)",
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
            onViewForecast={() => handleViewForecast(card.zoneA)}
          />
          {expandedZone !== "left" && expandedZone !== "right" && (
            <NicheZoneCard
              zone={card.zoneB}
              side="right"
              isExpanded={expandedZone === "right"}
              onExpand={() => setExpandedZone("right")}
              onClose={() => setExpandedZone(null)}
              onViewForecast={() => handleViewForecast(card.zoneB)}
            />
          )}
          {expandedZone === "right" && (
            <NicheZoneCard
              zone={card.zoneB}
              side="right"
              isExpanded={true}
              onExpand={() => {}}
              onClose={() => setExpandedZone(null)}
              onViewForecast={() => handleViewForecast(card.zoneB)}
            />
          )}
        </div>
      </motion.div>
    </div>
  );
};

const ForecastSection = ({ selectedNiche, month }: { selectedNiche: NicheZone | null; month: string }) => {
  const data = selectedNiche?.forecastData || { leads: "40-60", revenue: "$25K-$40K", ctr: "4.5%" };
  const title = selectedNiche?.title || "Fitness";

  return (
    <section id="forecast-calculator" className="py-20 md:py-28 bg-[#0a0a14] relative overflow-hidden">
      {/* Background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(217 91% 53% / 0.5) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(217 91% 53% / 0.5) 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container-wide relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16">
          <p className="text-sm font-medium tracking-[0.2em] text-accent uppercase mb-4">
            Data-Driven Projections
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-black text-white mb-4 tracking-wider uppercase">
            Seasonal Performance Forecast
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            What a <span className="text-accent font-semibold">$2,000/month</span> Seasonal Sprint typically yields for{" "}
            <span className="text-white font-semibold">{title}</span> in <span className="text-white font-semibold">{month || "Q1"}</span>
          </p>
        </div>

        {/* Dashboard Cards */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto mb-12">
          {/* Leads Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="bg-[#12121f] rounded-xl p-6 md:p-8 text-center relative overflow-hidden"
            style={{ border: "1px solid hsl(217 91% 53% / 0.2)" }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent pointer-events-none" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-accent" />
              </div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-white/50 mb-2 font-medium">
                Estimated Lead Volume
              </p>
              <p className="text-4xl md:text-5xl font-display font-black text-white tracking-wide">
                {data.leads}
              </p>
              <p className="text-sm text-white/40 mt-2">qualified leads/month</p>
            </div>
          </motion.div>

          {/* Revenue Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-[#12121f] rounded-xl p-6 md:p-8 text-center relative overflow-hidden"
            style={{ border: "1px solid hsl(217 91% 53% / 0.2)" }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-green-500/5 to-transparent pointer-events-none" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center mx-auto mb-4">
                <DollarSign className="w-6 h-6 text-green-400" />
              </div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-white/50 mb-2 font-medium">
                Projected Revenue
              </p>
              <p className="text-4xl md:text-5xl font-display font-black text-green-400 tracking-wide">
                {data.revenue}
              </p>
              <p className="text-sm text-white/40 mt-2">opportunity value</p>
            </div>
          </motion.div>

          {/* CTR Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-[#12121f] rounded-xl p-6 md:p-8 text-center relative overflow-hidden"
            style={{ border: "1px solid hsl(217 91% 53% / 0.2)" }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-amber-500/5 to-transparent pointer-events-none" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-amber-400" />
              </div>
              <p className="text-[11px] uppercase tracking-[0.2em] text-white/50 mb-2 font-medium">
                Average CTR
              </p>
              <p className="text-4xl md:text-5xl font-display font-black text-amber-400 tracking-wide">
                {data.ctr}
              </p>
              <p className="text-sm text-white/40 mt-2">click-through rate</p>
            </div>
          </motion.div>
        </div>

        {/* Disclaimer */}
        <p className="text-center text-xs text-white/40 max-w-xl mx-auto leading-relaxed">
          Forecasts based on historical 2025 sprint data. Results vary by local market saturation.
          All projections assume proper landing page optimization and conversion tracking.
        </p>
      </div>
    </section>
  );
};

const Q1GrowthWindows = () => {
  const [selectedNiche, setSelectedNiche] = useState<NicheZone | null>(null);
  const [selectedMonth, setSelectedMonth] = useState<string>("");
  const forecastRef = useRef<HTMLDivElement>(null);

  const handleSelectNiche = (zone: NicheZone, month: string) => {
    setSelectedNiche(zone);
    setSelectedMonth(month);
    
    // Scroll to forecast section
    setTimeout(() => {
      const forecastSection = document.getElementById("forecast-calculator");
      if (forecastSection) {
        forecastSection.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  return (
    <>
      <section id="q1-growth-windows" className="py-20 md:py-28 bg-[#0d0d1a] relative overflow-hidden">
        {/* Background grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(hsl(217 91% 53% / 0.5) 1px, transparent 1px),
                             linear-gradient(90deg, hsl(217 91% 53% / 0.5) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        <div className="container-wide relative z-10">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <p className="text-sm font-medium tracking-[0.2em] text-accent uppercase mb-4">
              Strategic Calendar
            </p>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-white mb-6 tracking-wider uppercase">
              The Q1 Growth Windows
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
              Each month presents unique opportunities. Click on a niche zone to reveal the 
              sprint logic and view projected ROI.
            </p>
          </div>

          {/* Horizontal Scroll Container */}
          <div className="relative -mx-4 md:-mx-8">
            <div className="flex gap-6 md:gap-8 overflow-x-auto pb-8 px-4 md:px-8 scrollbar-thin scrollbar-thumb-accent/30 scrollbar-track-transparent justify-start md:justify-center">
              {timelineData.map((card, index) => (
                <MasterCard key={index} card={card} onSelectNiche={handleSelectNiche} />
              ))}
            </div>

            {/* Scroll hint gradient - mobile only */}
            <div className="md:hidden absolute right-0 top-0 bottom-8 w-16 bg-gradient-to-l from-[#0d0d1a] to-transparent pointer-events-none" />
          </div>
        </div>
      </section>

      {/* Forecast Calculator Section */}
      <div ref={forecastRef}>
        <ForecastSection selectedNiche={selectedNiche} month={selectedMonth} />
      </div>
    </>
  );
};

export default Q1GrowthWindows;
