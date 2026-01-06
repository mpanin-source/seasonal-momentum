import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dumbbell, Calculator, TreeDeciduous, Fan, TrendingUp, Users, DollarSign, Target, Sparkles, Truck, Droplets, Bug, Heart, Hammer, AlertTriangle, X, ChevronRight, Calendar, ArrowRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Slider } from "@/components/ui/slider";

interface NicheData {
  id: string;
  icon: LucideIcon;
  title: string;
  painPoint: string;
  costOfInaction: string;
  marketOutlook: string;
  bestOffers: string[];
  channelPriority: string;
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
        marketOutlook: "Post-holiday guilt peaks in first 2 weeks. 78% of gym sign-ups happen in January—lowest CPCs of the year.",
        bestOffers: ["New Year Transformation Package", "21-Day Challenge Membership", "Free Week + Assessment"],
        channelPriority: "Meta > Google Search > TikTok",
        forecastData: { leadsMin: 45, leadsMax: 60, costPerLead: 35, avgTicket: 450 },
      },
      {
        id: "jan-tax",
        icon: Calculator,
        title: "Tax Prep",
        painPoint: "Early filers are your highest-value clients. W-2s arrive, urgency builds. CPA firms that wait until March pay 3x CPCs. First-mover wins.",
        costOfInaction: "~8 high-value filers lost per week of delay",
        marketOutlook: "IRS opens Jan 27. Early filers have higher avg income—these are your premium clients.",
        bestOffers: ["Early Bird Filing Discount", "Max Refund Guarantee", "Free Audit Protection"],
        channelPriority: "Google Search > Meta > YouTube",
        forecastData: { leadsMin: 35, leadsMax: 50, costPerLead: 42, avgTicket: 750 },
      },
      {
        id: "jan-wellness",
        icon: Heart,
        title: "Wellness",
        painPoint: "New Year health resolutions drive 280% surge in wellness searches. Capture the motivated before competitors saturate the space.",
        costOfInaction: "~10 motivated clients lost per week of delay",
        marketOutlook: "Mental health awareness at all-time high. Wellness spending projected +22% YoY in Q1.",
        bestOffers: ["New Year Reset Program", "Intro Session Bundle", "Wellness Assessment Package"],
        channelPriority: "Meta > TikTok > Google Display",
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
        marketOutlook: "Remote work normalization drives 15% more mid-year relocations. Early bookers get priority scheduling.",
        bestOffers: ["Spring Moving Special", "Free In-Home Estimate", "Book Early, Save 15%"],
        channelPriority: "Google Search > Meta > Nextdoor",
        forecastData: { leadsMin: 30, leadsMax: 45, costPerLead: 52, avgTicket: 1200 },
      },
      {
        id: "feb-tax",
        icon: Calculator,
        title: "Tax Prep",
        painPoint: "Peak research phase. Complex filers compare options—position authority now. Mid-season entry costs 2x. February positioning drives March conversions.",
        costOfInaction: "~14 complex filers lost per week of delay",
        marketOutlook: "Complex returns (1099, investments) research peaks Feb 10-25. Decision window before March rush.",
        bestOffers: ["Complex Return Specialist", "Business Tax Package", "Investment Income Bundle"],
        channelPriority: "Google Search > LinkedIn > Meta",
        forecastData: { leadsMin: 55, leadsMax: 75, costPerLead: 32, avgTicket: 780 },
      },
      {
        id: "feb-remodeling",
        icon: Hammer,
        title: "Home Remodeling",
        painPoint: "Homeowners plan spring renovations during winter months. Decision phase peaks in February—be there when budgets are set.",
        costOfInaction: "~5 major projects lost per week of delay",
        marketOutlook: "Home equity at historic highs. HELOC applications spike 40% in Feb for spring projects.",
        bestOffers: ["Spring Project Discount", "Free Design Consultation", "Financing Available"],
        channelPriority: "Google Search > Houzz > Meta",
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
        marketOutlook: "Tax refunds hit bank accounts mid-March. Disposable income peaks—highest conversion rates of year.",
        bestOffers: ["Spring Cleanup Package", "Season-Long Maintenance Plan", "Design + Install Bundle"],
        channelPriority: "Google Search > Nextdoor > Meta",
        forecastData: { leadsMin: 40, leadsMax: 60, costPerLead: 28, avgTicket: 640 },
      },
      {
        id: "mar-tax",
        icon: Calculator,
        title: "Tax Prep",
        painPoint: "Deadline panic phase. High-intent, last-minute filers pay premium prices. Emergency tax clients convert at 2x rate. Capture the procrastinators.",
        costOfInaction: "~18 urgent filers lost per week of delay",
        marketOutlook: "April 15 deadline drives 65% of remaining filers. Emergency pricing accepted—highest margins of season.",
        bestOffers: ["Last-Minute Filing", "Same-Day Turnaround", "Extension + Full Service"],
        channelPriority: "Google Search > Meta > YouTube",
        forecastData: { leadsMin: 70, leadsMax: 95, costPerLead: 25, avgTicket: 825 },
      },
      {
        id: "mar-pest",
        icon: Bug,
        title: "Pest Control",
        painPoint: "Spring pest emergence drives urgent searches. Homeowners discover winter infestations—immediate service need creates high-intent leads.",
        costOfInaction: "~13 service calls lost per week of delay",
        marketOutlook: "Warmer winters = earlier pest activity. First warm week triggers 3x search volume—be ready.",
        bestOffers: ["Spring Prevention Package", "One-Time Treatment Special", "Annual Protection Plan"],
        channelPriority: "Google Search > Meta > Nextdoor",
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
        marketOutlook: "Spring planting window optimal Apr 1-30. Clients booking now avoid May/June premium pricing.",
        bestOffers: ["Design + Build Package", "Irrigation Installation", "Sod & Planting Special"],
        channelPriority: "Google Search > Houzz > Meta",
        forecastData: { leadsMin: 55, leadsMax: 75, costPerLead: 26, avgTicket: 700 },
      },
      {
        id: "apr-hvac",
        icon: Fan,
        title: "HVAC",
        painPoint: "Pre-summer AC maintenance window. Smart homeowners prep before June emergency calls. Emergency calls pay less than planned installs—own the decision phase.",
        costOfInaction: "~8 maintenance contracts lost per week of delay",
        marketOutlook: "New efficiency standards effective 2026. Upgrade demand up 35%—proactive maintenance converts to replacements.",
        bestOffers: ["AC Tune-Up Special", "System Upgrade Discount", "Maintenance Plan + Priority Service"],
        channelPriority: "Google Search > Meta > Nextdoor",
        forecastData: { leadsMin: 30, leadsMax: 45, costPerLead: 48, avgTicket: 900 },
      },
      {
        id: "apr-pool",
        icon: Droplets,
        title: "Pool Services",
        painPoint: "Pool opening season peaks. Homeowners book seasonal maintenance 4-6 weeks ahead. April bookings lock in summer recurring revenue.",
        costOfInaction: "~9 seasonal contracts lost per week of delay",
        marketOutlook: "Pool ownership +18% since 2020. Seasonal service contracts create predictable recurring revenue through September.",
        bestOffers: ["Pool Opening Package", "Season-Long Service Plan", "Equipment Check + Repair"],
        channelPriority: "Meta > Nextdoor > Google Search",
        forecastData: { leadsMin: 35, leadsMax: 50, costPerLead: 35, avgTicket: 550 },
      },
    ],
  },
];

interface MasterCardProps {
  card: MonthCard;
  onViewROI: (niche: NicheData, customData?: { adSpend: number; cpl: number; closeRate: number; ltv: number }) => void;
}

const MasterCard = ({ card, onViewROI }: MasterCardProps) => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);
  const [showROISliders, setShowROISliders] = useState(false);
  const [sliderValues, setSliderValues] = useState({
    adSpend: 2000,
    cpl: 35,
    closeRate: 25,
    ltv: 500,
  });
  const [isCalculating, setIsCalculating] = useState(false);

  const handleExpand = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
    setShowROISliders(false);
  };

  const handleClose = () => {
    setExpandedIndex(null);
    setShowROISliders(false);
  };

  const handleSliderChange = (key: keyof typeof sliderValues, value: number[]) => {
    setSliderValues((prev) => ({ ...prev, [key]: value[0] }));
    setIsCalculating(true);
    setTimeout(() => setIsCalculating(false), 800);
  };

  // Calculate ROI based on sliders
  const leads = Math.round(sliderValues.adSpend / sliderValues.cpl);
  const customers = Math.round(leads * (sliderValues.closeRate / 100));
  const revenue = customers * sliderValues.ltv;

  const scrollToContact = (e: React.MouseEvent) => {
    e.stopPropagation();
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
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

            return (
              <motion.div
                key={niche.id}
                layout
                layoutId={`niche-${niche.id}`}
                onClick={() => !isExpanded && handleExpand(index)}
                className={`relative rounded-lg overflow-hidden cursor-pointer group ${
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
                whileHover={!isExpanded && !isMinimized ? {
                  boxShadow: "0 0 25px hsl(217 91% 53% / 0.15)",
                  borderColor: "hsl(217 91% 53% / 0.4)",
                } : {}}
                animate={{
                  flex: isExpanded
                    ? "1 0 90%"
                    : isMinimized
                    ? "0 0 50px"
                    : "1 0 33%",
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
              >
                <AnimatePresence mode="wait">
                  {isMinimized ? (
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
                    <motion.div
                      key="expanded"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ delay: 0.1 }}
                      className="flex flex-col p-4 h-full expanded-content"
                      style={{
                        minHeight: "340px",
                        maxHeight: "calc(90vh - 120px)",
                        overflowY: "auto",
                        scrollbarWidth: "none",
                        msOverflowStyle: "none",
                      }}
                    >
                      <style>{`
                        .expanded-content::-webkit-scrollbar {
                          display: none;
                        }
                      `}</style>

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

                      {/* 2026 Market Outlook */}
                      <div className="flex items-start gap-2 mb-3 p-2.5 rounded-lg bg-accent/5 border border-accent/20">
                        <Calendar className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                        <div>
                          <span className="text-[10px] uppercase tracking-wider text-accent/70 block mb-0.5">2026 Market Outlook</span>
                          <span className="text-xs text-accent/90 font-medium leading-relaxed">
                            {niche.marketOutlook}
                          </span>
                        </div>
                      </div>

                      {/* Best Offers to Push */}
                      <div className="mb-3 p-2.5 rounded-lg bg-emerald-500/5 border border-emerald-500/20">
                        <span className="text-[10px] uppercase tracking-wider text-emerald-400/70 block mb-2">Best Offers to Push</span>
                        <ul className="space-y-1">
                          {niche.bestOffers.map((offer, i) => (
                            <li key={i} className="text-xs text-emerald-400/90 flex items-center gap-1.5">
                              <span className="w-1 h-1 rounded-full bg-emerald-400" />
                              {offer}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Channel Priority */}
                      <div className="mb-3 p-2.5 rounded-lg bg-purple-500/5 border border-purple-500/20">
                        <span className="text-[10px] uppercase tracking-wider text-purple-400/70 block mb-1">Channel Priority</span>
                        <span className="text-xs text-purple-400 font-medium">{niche.channelPriority}</span>
                      </div>

                      {/* Cost of Inaction Warning */}
                      <div className="flex items-center gap-2 mb-4 p-2 rounded-lg bg-amber-500/10 border border-amber-500/30">
                        <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0" />
                        <span className="text-xs text-amber-400 font-medium">
                          {niche.costOfInaction}
                        </span>
                      </div>

                      {/* ROI Calculator Section */}
                      <AnimatePresence mode="wait">
                        {showROISliders ? (
                          <motion.div
                            key="sliders"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="mb-4"
                          >
                            <div className="space-y-4 mb-4">
                              {/* Ad Spend Slider */}
                              <div>
                                <div className="flex justify-between items-center mb-2">
                                  <span className="text-[10px] uppercase tracking-wider text-white/50">Ad Spend</span>
                                  <span className="text-sm font-display font-bold text-accent">${sliderValues.adSpend.toLocaleString()}</span>
                                </div>
                                <Slider
                                  value={[sliderValues.adSpend]}
                                  onValueChange={(v) => handleSliderChange("adSpend", v)}
                                  min={500}
                                  max={10000}
                                  step={100}
                                  className="w-full"
                                />
                              </div>

                              {/* CPL Slider */}
                              <div>
                                <div className="flex justify-between items-center mb-2">
                                  <span className="text-[10px] uppercase tracking-wider text-white/50">Cost Per Lead</span>
                                  <span className="text-sm font-display font-bold text-purple-400">${sliderValues.cpl}</span>
                                </div>
                                <Slider
                                  value={[sliderValues.cpl]}
                                  onValueChange={(v) => handleSliderChange("cpl", v)}
                                  min={10}
                                  max={100}
                                  step={1}
                                  className="w-full"
                                />
                              </div>

                              {/* Close Rate Slider */}
                              <div>
                                <div className="flex justify-between items-center mb-2">
                                  <span className="text-[10px] uppercase tracking-wider text-white/50">Close Rate</span>
                                  <span className="text-sm font-display font-bold text-amber-400">{sliderValues.closeRate}%</span>
                                </div>
                                <Slider
                                  value={[sliderValues.closeRate]}
                                  onValueChange={(v) => handleSliderChange("closeRate", v)}
                                  min={5}
                                  max={50}
                                  step={1}
                                  className="w-full"
                                />
                              </div>

                              {/* LTV Slider */}
                              <div>
                                <div className="flex justify-between items-center mb-2">
                                  <span className="text-[10px] uppercase tracking-wider text-white/50">Customer LTV</span>
                                  <span className="text-sm font-display font-bold text-emerald-400">${sliderValues.ltv.toLocaleString()}</span>
                                </div>
                                <Slider
                                  value={[sliderValues.ltv]}
                                  onValueChange={(v) => handleSliderChange("ltv", v)}
                                  min={100}
                                  max={5000}
                                  step={50}
                                  className="w-full"
                                />
                              </div>
                            </div>

                            {/* Calculated Results with Shimmer */}
                            <div className="grid grid-cols-3 gap-2 mb-3">
                              <div className="bg-[#0a0a14] rounded-lg p-2.5 text-center border border-accent/20 relative overflow-hidden">
                                {isCalculating && (
                                  <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                    initial={{ x: "-100%" }}
                                    animate={{ x: "100%" }}
                                    transition={{ duration: 0.8, ease: "easeInOut" }}
                                  />
                                )}
                                <p className="text-lg font-display font-black text-accent">{leads}</p>
                                <p className="text-[9px] uppercase tracking-wider text-white/40">Leads</p>
                              </div>
                              <div className="bg-[#0a0a14] rounded-lg p-2.5 text-center border border-amber-500/20 relative overflow-hidden">
                                {isCalculating && (
                                  <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                    initial={{ x: "-100%" }}
                                    animate={{ x: "100%" }}
                                    transition={{ duration: 0.8, ease: "easeInOut", delay: 0.1 }}
                                  />
                                )}
                                <p className="text-lg font-display font-black text-amber-400">{customers}</p>
                                <p className="text-[9px] uppercase tracking-wider text-white/40">Customers</p>
                              </div>
                              <div className="bg-[#0a0a14] rounded-lg p-2.5 text-center border border-emerald-500/20 relative overflow-hidden">
                                {isCalculating && (
                                  <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                                    initial={{ x: "-100%" }}
                                    animate={{ x: "100%" }}
                                    transition={{ duration: 0.8, ease: "easeInOut", delay: 0.2 }}
                                  />
                                )}
                                <p className="text-lg font-display font-black text-emerald-400">${(revenue / 1000).toFixed(1)}K</p>
                                <p className="text-[9px] uppercase tracking-wider text-white/40">Revenue</p>
                              </div>
                            </div>
                          </motion.div>
                        ) : (
                          <motion.button
                            key="button"
                            onClick={(e) => {
                              e.stopPropagation();
                              setShowROISliders(true);
                            }}
                            className="relative w-full py-3 px-4 rounded-lg font-display font-bold text-sm uppercase tracking-wider text-white overflow-hidden mb-4"
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
                        )}
                      </AnimatePresence>

                      {/* Audit Bridge CTA */}
                      <div className="mt-auto pt-3 border-t border-white/10">
                        <button
                          onClick={scrollToContact}
                          className="w-full text-left group/cta"
                        >
                          <p className="text-xs text-accent/80 leading-relaxed group-hover/cta:text-accent transition-colors">
                            Serious about this window? <span className="font-medium">Book a Core Funnel Audit</span> for a custom breakdown of this niche
                            <ArrowRight className="w-3.5 h-3.5 inline-block ml-1 group-hover/cta:translate-x-1 transition-transform" />
                          </p>
                        </button>
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="default"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="flex items-center justify-between h-full px-3 py-2.5"
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
  const [isLoading, setIsLoading] = useState(false);
  const [activeMonth, setActiveMonth] = useState<string>("JAN");
  const calculatorRef = useRef<HTMLDivElement>(null);

  const handleViewROI = (niche: NicheData) => {
    setIsLoading(true);
    setSelectedNiche(niche);

    setTimeout(() => {
      if (calculatorRef.current) {
        const elementRect = calculatorRef.current.getBoundingClientRect();
        const absoluteElementTop = elementRect.top + window.pageYOffset;
        const middle = absoluteElementTop - window.innerHeight / 2 + elementRect.height / 2;

        window.scrollTo({
          top: middle,
          behavior: "smooth",
        });
      }

      setTimeout(() => setIsLoading(false), 600);
    }, 100);
  };

  const avgLeads = selectedNiche
    ? Math.round((selectedNiche.forecastData.leadsMin + selectedNiche.forecastData.leadsMax) / 2)
    : 0;
  const revenue = selectedNiche ? avgLeads * selectedNiche.forecastData.avgTicket : 0;
  const revenuePercentage = Math.min((revenue / 100000) * 100, 100);

  const months = ["JAN", "FEB", "MAR", "APR"];

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
        <div className="text-center mb-10 md:mb-20">
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
            Tap a niche to see how hard Q1 can work for you—then run the numbers with a live ROI forecast.
          </p>
        </div>

        {/* Mobile Month Pill Selector */}
        <div className="md:hidden flex justify-center gap-2 mb-8">
          {months.map((month) => (
            <button
              key={month}
              onClick={() => setActiveMonth(month)}
              className={`px-4 py-2 rounded-full font-display font-bold text-sm uppercase tracking-wider transition-all ${
                activeMonth === month
                  ? "bg-accent text-white shadow-[0_0_20px_hsl(217_91%_53%_/_0.4)]"
                  : "bg-white/5 text-white/50 hover:bg-white/10 hover:text-white/70"
              }`}
            >
              {month}
            </button>
          ))}
        </div>

        {/* Desktop: Horizontal Scroll Container */}
        <div className="hidden md:block relative -mx-4 md:-mx-8">
          <div className="flex gap-5 md:gap-7 overflow-x-auto pb-6 px-4 md:px-8 scrollbar-thin scrollbar-thumb-accent/30 scrollbar-track-transparent justify-start md:justify-center">
            {timelineData.map((card, index) => (
              <MasterCard key={index} card={card} onViewROI={handleViewROI} />
            ))}
          </div>
          <div className="md:hidden absolute right-0 top-0 bottom-6 w-20 bg-gradient-to-l from-[#0a0a14] to-transparent pointer-events-none" />
        </div>

        {/* Mobile: Single Month Card */}
        <div className="md:hidden flex justify-center">
          {timelineData
            .filter((card) => card.month === activeMonth)
            .map((card, index) => (
              <MasterCard key={index} card={card} onViewROI={handleViewROI} />
            ))}
        </div>

        {/* SEASONAL ROI CALCULATOR */}
        <div ref={calculatorRef} id="roi-calculator" className="mt-20 md:mt-28">
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
              {selectedNiche ? (
                <>
                  What to Expect from a $2K <span className="text-accent">{selectedNiche.title}</span> Sprint
                </>
              ) : (
                <>Select a Niche Above to See ROI</>
              )}
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
                      <p className="text-xs uppercase tracking-[0.2em] text-accent mb-1">Selected Niche</p>
                      <h4 className="text-xl font-display font-bold text-white tracking-wider uppercase">
                        {selectedNiche.title}
                      </h4>
                    </div>
                  </div>

                  {/* ROI Metrics Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                    {/* Expected Leads */}
                    <motion.div
                      className="rounded-xl p-5 text-center relative overflow-hidden"
                      style={{
                        background: "linear-gradient(135deg, hsl(217 91% 53% / 0.1) 0%, transparent 100%)",
                        border: "1px solid hsl(217 91% 53% / 0.3)",
                      }}
                    >
                      {isLoading && (
                        <motion.div
                          className="absolute inset-0 bg-accent/20 rounded-xl"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: [0, 0.5, 0] }}
                          transition={{ duration: 0.6, ease: "easeInOut" }}
                        />
                      )}
                      <Users className="w-8 h-8 text-accent mx-auto mb-4" />
                      <p className="text-4xl md:text-5xl font-display font-black text-white mb-2">
                        <AnimatedCounter value={selectedNiche.forecastData.leadsMin} />–
                        <AnimatedCounter value={selectedNiche.forecastData.leadsMax} />
                      </p>
                      <p className="text-sm uppercase tracking-[0.15em] text-white/50">Expected Leads</p>
                    </motion.div>

                    {/* Cost Per Lead */}
                    <motion.div
                      className="rounded-xl p-5 text-center relative overflow-hidden"
                      style={{
                        background: "linear-gradient(135deg, hsl(280 70% 50% / 0.1) 0%, transparent 100%)",
                        border: "1px solid hsl(280 70% 50% / 0.3)",
                      }}
                    >
                      {isLoading && (
                        <motion.div
                          className="absolute inset-0 bg-purple-400/20 rounded-xl"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: [0, 0.5, 0] }}
                          transition={{ duration: 0.6, ease: "easeInOut", delay: 0.1 }}
                        />
                      )}
                      <Target className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                      <p className="text-4xl md:text-5xl font-display font-black text-purple-400 mb-2">
                        $<AnimatedCounter value={selectedNiche.forecastData.costPerLead} />
                      </p>
                      <p className="text-sm uppercase tracking-[0.15em] text-white/50">Cost Per Lead</p>
                    </motion.div>

                    {/* Revenue Opportunity */}
                    <motion.div
                      className="rounded-xl p-5 text-center relative overflow-hidden"
                      style={{
                        background: "linear-gradient(135deg, hsl(160 60% 40% / 0.1) 0%, transparent 100%)",
                        border: "1px solid hsl(160 60% 40% / 0.3)",
                      }}
                    >
                      {isLoading && (
                        <motion.div
                          className="absolute inset-0 bg-emerald-400/20 rounded-xl"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: [0, 0.5, 0] }}
                          transition={{ duration: 0.6, ease: "easeInOut", delay: 0.2 }}
                        />
                      )}
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
                        <p className="text-sm uppercase tracking-[0.15em] text-white/50 mb-1">Revenue Opportunity</p>
                        <p className="text-xs text-emerald-400/70">
                          at ${selectedNiche.forecastData.avgTicket.toLocaleString()} avg job
                        </p>
                      </div>
                    </motion.div>
                  </div>

                  {/* Cost of Inaction Reminder */}
                  <div className="mt-8 p-4 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center gap-4">
                    <AlertTriangle className="w-6 h-6 text-amber-400 flex-shrink-0" />
                    <div>
                      <p className="text-sm font-medium text-amber-400 mb-1">Cost of Waiting</p>
                      <p className="text-xs text-amber-400/70">{selectedNiche.costOfInaction}</p>
                    </div>
                  </div>

                  {/* Projection disclaimer */}
                  <p className="text-xs text-white/40 text-center mt-6">
                    These are projections. Your Core Funnel Audit uses your actual numbers to find realistic upside.
                  </p>
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
                    border: "1px solid hsl(217 91% 53% / 0.2)",
                  }}
                >
                  <div className="p-4 rounded-xl bg-accent/10 border border-accent/30 w-fit mx-auto mb-6">
                    <TrendingUp className="w-10 h-10 text-accent" />
                  </div>
                  <h4 className="text-xl font-display font-bold text-white mb-3 uppercase tracking-wider">
                    Select a Niche to See Your ROI
                  </h4>
                  <p className="text-white/50 text-sm leading-relaxed">
                    Click on any niche card above to reveal projected leads, cost per lead, and revenue opportunity for that
                    seasonal window.
                  </p>
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
