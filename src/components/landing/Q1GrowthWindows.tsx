import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dumbbell, Calculator, TreeDeciduous, Fan, TrendingUp, Users, DollarSign, Target, Sparkles, Truck, Droplets, Bug, Heart, Hammer, AlertTriangle, X, ChevronRight, Calendar, ArrowRight, Info, ChevronDown, Rocket, Settings, Crown, BadgeCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

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

        {/* MARKET GAP ANALYZER */}
        <div ref={calculatorRef} id="roi-calculator" className="mt-20 md:mt-28">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <p className="text-sm font-medium tracking-[0.25em] text-accent uppercase mb-5">
              Market Gap Analyzer
            </p>
            <h3
              className="text-3xl md:text-5xl font-display font-black text-white tracking-wider uppercase"
              style={{
                textShadow: "0 0 30px hsl(217 91% 53% / 0.2)",
              }}
            >
              {selectedNiche ? (
                <>
                  Your <span className="text-accent">{selectedNiche.title}</span> Funnel Gap
                </>
              ) : (
                <>See What You're Leaving on the Table</>
              )}
            </h3>
          </motion.div>

          <MarketGapAnalyzer selectedNiche={selectedNiche} isLoading={isLoading} />
        </div>
      </div>
    </section>
  );
};

interface MarketGapAnalyzerProps {
  selectedNiche: NicheData | null;
  isLoading: boolean;
}

type TicketTier = "low" | "mid" | "high" | "custom";

interface TierPreset {
  label: string;
  description: string;
  avgSaleValue: number;
  adSpendMin: number;
  adSpendMax: number;
}

const tierPresets: Record<Exclude<TicketTier, "custom">, TierPreset> = {
  low: {
    label: "Low Opportunity",
    description: "$2k-5k/month potential",
    avgSaleValue: 500,
    adSpendMin: 500,
    adSpendMax: 1500,
  },
  mid: {
    label: "Mid Opportunity",
    description: "$5k-15k/month potential",
    avgSaleValue: 3500,
    adSpendMin: 2000,
    adSpendMax: 3500,
  },
  high: {
    label: "High Opportunity",
    description: "$15k-50k+/month potential",
    avgSaleValue: 15000,
    adSpendMin: 3500,
    adSpendMax: 5000,
  },
};

const MarketGapAnalyzer = ({ selectedNiche, isLoading }: MarketGapAnalyzerProps) => {
  const [selectedTier, setSelectedTier] = useState<TicketTier | null>(null);
  const [adSpend, setAdSpend] = useState(3000);
  const [avgSaleValue, setAvgSaleValue] = useState(2000);
  const [currentLeadVolume, setCurrentLeadVolume] = useState(40);
  const [currentCloseRateInput, setCurrentCloseRateInput] = useState(15);
  const [isCalculating, setIsCalculating] = useState(false);

  const handleTierSelect = (tier: TicketTier) => {
    setSelectedTier(tier);
    
    if (tier === "custom") {
      // Reset to defaults for manual entry
      setAdSpend(3000);
      setAvgSaleValue(2000);
      setCurrentLeadVolume(40);
      setCurrentCloseRateInput(15);
    } else {
      const preset = tierPresets[tier];
      setAvgSaleValue(preset.avgSaleValue);
      // Set ad spend to middle of range
      const midAdSpend = Math.round((preset.adSpendMin + preset.adSpendMax) / 2);
      setAdSpend(midAdSpend);
      // Adjust lead volume based on tier
      const estimatedLeads = tier === "low" ? 60 : tier === "mid" ? 35 : 20;
      setCurrentLeadVolume(estimatedLeads);
    }
    
    setIsCalculating(true);
    setTimeout(() => setIsCalculating(false), 800);
  };

  const handleSliderChange = (setter: (val: number) => void, value: number[]) => {
    setter(value[0]);
    setIsCalculating(true);
    setTimeout(() => setIsCalculating(false), 800);
  };

  // Current State Calculations (user's baseline)
  const currentCPL = currentLeadVolume > 0 ? adSpend / currentLeadVolume : 100;
  const currentCloseRate = currentCloseRateInput / 100;
  const currentCustomers = Math.round(currentLeadVolume * currentCloseRate);
  const currentRevenue = currentCustomers * avgSaleValue;

  // Optimized State Calculations (Creative Core improvements)
  // Tier-specific: Low -35% CPL / +18% CR, Mid -30% CPL / +24% CR, High -25% CPL / +28% CR
  const cplReduction = selectedTier === "low" ? 0.65 : selectedTier === "high" ? 0.75 : 0.70;
  const closeRateBoost = selectedTier === "low" ? 1.18 : selectedTier === "high" ? 1.28 : 1.24;
  const cplReductionLabel = selectedTier === "low" ? "35" : selectedTier === "high" ? "25" : "30";
  const closeRateBoostLabel = selectedTier === "low" ? "18" : selectedTier === "high" ? "28" : "24";
  const optimizedCPL = currentCPL * cplReduction;
  const optimizedLeads = Math.round(adSpend / optimizedCPL);
  const optimizedCloseRate = currentCloseRate * closeRateBoost;
  const optimizedCustomers = Math.round(optimizedLeads * optimizedCloseRate);
  const optimizedRevenue = optimizedCustomers * avgSaleValue;

  // The Revenue Leak (Optimized - Current)
  const revenueLeak = optimizedRevenue - currentRevenue;

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const getAdSpendRange = () => {
    if (selectedTier && selectedTier !== "custom") {
      const preset = tierPresets[selectedTier];
      return { min: preset.adSpendMin, max: Math.max(preset.adSpendMax * 3, 10000) };
    }
    return { min: 500, max: 25000 };
  };

  const adSpendRange = getAdSpendRange();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-5xl mx-auto"
    >
      <div
        className="rounded-2xl p-6 md:p-8"
        style={{
          background: "linear-gradient(135deg, #16162a 0%, #1a1a32 100%)",
          border: "1px solid hsl(217 91% 53% / 0.3)",
          boxShadow: "0 0 60px hsl(217 91% 53% / 0.1)",
        }}
      >
        {/* Psychology Cards */}
        <div className="mb-8 pb-6 border-b border-white/10">
          <p className="text-xs uppercase tracking-[0.2em] text-accent mb-6 text-center">
            Which Sounds Most Like You?
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {([
              { tier: "low" as const, icon: Rocket, name: "THE PILOT LAUNCH", price: "$2,500 – $5,000", belief: "\"I need proof this works before I commit.\"", desc: "You're testing seasonal ads for the first time. Low risk, measurable results.", color: "--tier-blue", shadowColor: "217 91% 53%" },
              { tier: "mid" as const, icon: Settings, name: "THE SYSTEM BUILDER", price: "$5,000 – $10,000", belief: "\"I'm drowning in follow-ups with no system.\"", desc: "You have leads but no automation. Time to scale without hiring.", color: "--tier-teal", shadowColor: "174 60% 40%", badge: "MOST POPULAR" },
              { tier: "high" as const, icon: Crown, name: "THE MARKET AUTHORITY", price: "$10,000 – $20,000", belief: "\"I'm competing on price. I want to compete on value.\"", desc: "You want to own your market. Brand, authority, dominance.", color: "--tier-purple", shadowColor: "270 50% 45%" },
              { tier: "custom" as const, icon: Rocket, name: "THE AGENTIC EMPIRE", price: "$20,000+", belief: "\"I'm ready to build a real business, not just a job.\"", desc: "Market domination. Scaling beyond your current limits.", color: "--tier-gold", shadowColor: "42 80% 50%", badge: "MARKET LEADER" },
            ]).map((card) => {
              const IconComp = card.icon;
              const isSelected = selectedTier === card.tier;
              return (
                <motion.button
                  key={card.tier}
                  onClick={() => handleTierSelect(card.tier)}
                  className={`relative rounded-lg p-5 text-left cursor-pointer transition-all border-2 ${isSelected ? "ring-2" : ""}`}
                  style={{
                    background: `hsl(var(${card.color}))`,
                    color: card.tier === "custom" ? "hsl(var(--foreground))" : "white",
                    borderColor: isSelected ? "white" : `hsl(${card.shadowColor} / 0.5)`,
                  }}
                  whileHover={{
                    scale: 1.02,
                    boxShadow: `0 8px 30px hsl(${card.shadowColor} / 0.4)`,
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  {card.badge && (
                    <span className="absolute top-2 right-2 text-[9px] uppercase tracking-wider font-bold px-2 py-0.5 rounded-full bg-white/20 backdrop-blur-sm">
                      {card.badge}
                    </span>
                  )}
                  <IconComp className="w-6 h-6 mb-2 opacity-80" />
                  <p className="text-xs uppercase tracking-wider font-bold opacity-70 mb-1">{card.price}</p>
                  <h4 className="font-display text-base font-black tracking-wider uppercase mb-2">{card.name}</h4>
                  <p className="text-xs italic opacity-70 mb-2">{card.belief}</p>
                  <p className="text-xs opacity-60 leading-relaxed">{card.desc}</p>
                </motion.button>
              );
            })}
          </div>
        </div>

        {/* Input Sliders */}
        <div className="mb-8 pb-6 border-b border-white/10">
          <p className="text-xs uppercase tracking-[0.2em] text-accent mb-6 text-center">
            Your Current Numbers
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Monthly Ad Spend */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs uppercase tracking-wider text-white/50">Monthly Ad Spend</span>
                <span className="text-lg font-display font-bold text-accent">${adSpend.toLocaleString()}</span>
              </div>
              <Slider
                value={[adSpend]}
                onValueChange={(v) => handleSliderChange(setAdSpend, v)}
                min={adSpendRange.min}
                max={adSpendRange.max}
                step={100}
                className="w-full"
              />
            </div>

            {/* Average Sale Value */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs uppercase tracking-wider text-white/50">Avg Sale Value</span>
                <span className="text-lg font-display font-bold text-emerald-400">${avgSaleValue.toLocaleString()}</span>
              </div>
              <Slider
                value={[avgSaleValue]}
                onValueChange={(v) => handleSliderChange(setAvgSaleValue, v)}
                min={100}
                max={25000}
                step={100}
                className="w-full"
              />
            </div>

            {/* Current Lead Volume */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs uppercase tracking-wider text-white/50">Current Leads/Mo</span>
                <span className="text-lg font-display font-bold text-purple-400">{currentLeadVolume}</span>
              </div>
              <Slider
                value={[currentLeadVolume]}
                onValueChange={(v) => handleSliderChange(setCurrentLeadVolume, v)}
                min={5}
                max={200}
                step={1}
                className="w-full"
              />
            </div>

            {/* Current Close Rate */}
            <div>
              <div className="flex justify-between items-center mb-3">
                <span className="text-xs uppercase tracking-wider text-white/50">Close Rate</span>
                <span className="text-lg font-display font-bold text-amber-400">{currentCloseRateInput}%</span>
              </div>
              <Slider
                value={[currentCloseRateInput]}
                onValueChange={(v) => handleSliderChange(setCurrentCloseRateInput, v)}
                min={5}
                max={50}
                step={1}
                className="w-full"
              />
            </div>
          </div>
        </div>

        {/* Side-by-Side Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Your Current State */}
          <div
            className="rounded-xl p-5 relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, hsl(0 0% 50% / 0.05) 0%, transparent 100%)",
              border: "1px solid hsl(0 0% 50% / 0.2)",
            }}
          >
            <div className="flex items-center gap-2 mb-5">
              <div className="w-2 h-2 rounded-full bg-white/40" />
              <p className="text-sm uppercase tracking-[0.15em] text-white/60 font-medium">Your Current State</p>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-white/50">Cost Per Lead</span>
                <span className="text-lg font-display font-bold text-white/70">${currentCPL.toFixed(0)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-white/50">Leads Generated</span>
                <span className="text-lg font-display font-bold text-white/70">{currentLeadVolume}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-white/50">Close Rate</span>
                <span className="text-lg font-display font-bold text-white/70">{(currentCloseRate * 100).toFixed(0)}%</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-white/50">Customers</span>
                <span className="text-lg font-display font-bold text-white/70">{currentCustomers}</span>
              </div>
              <div className="pt-3 border-t border-white/10">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-white/60">Monthly Revenue</span>
                  <span className="text-2xl font-display font-black text-white/70">${currentRevenue.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Creative Core Optimized */}
          <div
            className="rounded-xl p-5 relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, hsl(217 91% 53% / 0.1) 0%, hsl(160 60% 40% / 0.05) 100%)",
              border: "1px solid hsl(160 60% 40% / 0.3)",
              boxShadow: "0 0 30px hsl(160 60% 40% / 0.1)",
            }}
          >
            {isCalculating && (
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
              />
            )}
            <div className="flex items-center gap-2 mb-5">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <p className="text-sm uppercase tracking-[0.15em] text-emerald-400 font-medium">Creative Core Optimized</p>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-white/50">Cost Per Lead</span>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-display font-bold text-emerald-400">${optimizedCPL.toFixed(0)}</span>
                  <span className="text-xs text-emerald-400 bg-emerald-400/10 px-1.5 py-0.5 rounded">-{cplReductionLabel}%</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-white/50">Leads Generated</span>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-display font-bold text-emerald-400">{optimizedLeads}</span>
                  <span className="text-xs text-emerald-400 bg-emerald-400/10 px-1.5 py-0.5 rounded">+{optimizedLeads - currentLeadVolume}</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-white/50">Close Rate</span>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-display font-bold text-emerald-400">{(optimizedCloseRate * 100).toFixed(0)}%</span>
                  <span className="text-xs text-emerald-400 bg-emerald-400/10 px-1.5 py-0.5 rounded">+{closeRateBoostLabel}%</span>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-white/50">Customers</span>
                <div className="flex items-center gap-2">
                  <span className="text-lg font-display font-bold text-emerald-400">{optimizedCustomers}</span>
                  <span className="text-xs text-emerald-400 bg-emerald-400/10 px-1.5 py-0.5 rounded">+{optimizedCustomers - currentCustomers}</span>
                </div>
              </div>
              <div className="pt-3 border-t border-emerald-400/20">
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-emerald-400/80">Monthly Revenue</span>
                  <span className="text-2xl font-display font-black text-emerald-400">${optimizedRevenue.toLocaleString()}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Revenue Leak Display */}
        <motion.div
          className="rounded-xl p-6 md:p-8 text-center relative overflow-hidden mb-6"
          style={{
            background: "linear-gradient(135deg, hsl(0 70% 50% / 0.1) 0%, hsl(0 70% 40% / 0.05) 100%)",
            border: "1px solid hsl(0 70% 50% / 0.3)",
          }}
        >
          <motion.div
            className="absolute inset-0 opacity-30"
            animate={{
              boxShadow: [
                "inset 0 0 40px hsl(0 70% 50% / 0.3)",
                "inset 0 0 60px hsl(0 70% 50% / 0.5)",
                "inset 0 0 40px hsl(0 70% 50% / 0.3)",
              ],
            }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <p className="text-xs uppercase tracking-[0.2em] text-red-400/70 mb-3 relative z-10 flex items-center justify-center gap-2">
            Your Monthly Revenue Leak
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <Info className="w-3.5 h-3.5 text-red-400/50 hover:text-red-400 transition-colors" />
                </TooltipTrigger>
                <TooltipContent className="max-w-xs bg-[#0f0f1c] border-white/20 text-white/80">
                  <p className="text-xs">Based on standard performance gains seen in optimized seasonal service funnels.</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </p>
          <motion.p
            className="text-5xl md:text-7xl font-display font-black text-red-400 relative z-10"
            animate={isCalculating ? { scale: [1, 1.05, 1] } : {}}
            transition={{ duration: 0.8 }}
            style={{
              textShadow: "0 0 40px hsl(0 70% 50% / 0.5)",
            }}
          >
            ${revenueLeak.toLocaleString()}
          </motion.p>
          <p className="text-sm text-red-400/60 mt-2 relative z-10">
            left on the table every month
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.button
          onClick={scrollToContact}
          className="w-full py-4 px-6 rounded-xl font-display font-bold text-lg uppercase tracking-wider text-white relative overflow-hidden"
          style={{
            background: "linear-gradient(135deg, hsl(217 91% 53%) 0%, hsl(217 91% 43%) 100%)",
            boxShadow: "0 0 30px hsl(217 91% 53% / 0.4)",
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
            Plug The Leak: Request CoreDiagnostic
            <ArrowRight className="w-5 h-5" />
          </span>
        </motion.button>

        {/* Verification Badge + Disclaimer */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6">
          <div className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-500/50 text-emerald-400">
            <BadgeCheck className="w-3.5 h-3.5" />
            <span className="font-medium">Verified Benchmark</span>
          </div>
          <p className="text-xs text-white/40 text-center">
            Based on Creative Core 2026 local service data. Your Core Funnel Audit uses your actual numbers.
          </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Q1GrowthWindows;
