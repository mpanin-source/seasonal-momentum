import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { NICHE_DATA } from "@/data/nicheSeasonality";
import {
  Thermometer,
  TreeDeciduous,
  Calculator,
  Home,
  Droplets,
  Hammer,
  Dumbbell,
  Truck,
  ArrowRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton";

const ICON_MAP: Record<string, LucideIcon> = {
  Thermometer,
  TreeDeciduous,
  Calculator,
  Home,
  Droplets,
  Hammer,
  Dumbbell,
  Truck,
};

const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function calculateTriggerDate(peakDate: string): string {
  const currentYear = new Date().getFullYear();
  const parsed = new Date(`${peakDate}, ${currentYear}`);
  parsed.setDate(parsed.getDate() - 21);
  return parsed.toLocaleDateString("en-US", { month: "long", day: "numeric" });
}

function daysUntilDate(peakDate: string): number {
  const now = new Date();
  const currentYear = now.getFullYear();
  let target = new Date(`${peakDate}, ${currentYear}`);
  if (target < now) {
    target = new Date(`${peakDate}, ${currentYear + 1}`);
  }
  return Math.ceil((target.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
}

function generateWavePath(peaks: { monthNumber: number; intensity: number }[]): string {
  const width = 680;
  const height = 180;
  const baseline = height - 20;
  const points: { x: number; y: number }[] = [];

  const intensityMap = new Array(12).fill(0.1);
  peaks.forEach((p) => {
    const idx = p.monthNumber - 1;
    intensityMap[idx] = p.intensity;
    if (idx > 0) intensityMap[idx - 1] = Math.max(intensityMap[idx - 1], p.intensity * 0.5);
    if (idx < 11) intensityMap[idx + 1] = Math.max(intensityMap[idx + 1], p.intensity * 0.5);
    if (idx > 1) intensityMap[idx - 2] = Math.max(intensityMap[idx - 2], p.intensity * 0.25);
    if (idx < 10) intensityMap[idx + 2] = Math.max(intensityMap[idx + 2], p.intensity * 0.25);
  });

  for (let i = 0; i <= 12; i++) {
    const x = 60 + (i / 12) * (width - 60);
    const intensity = i < 12 ? intensityMap[i] : intensityMap[0];
    const y = baseline - intensity * (baseline - 30);
    points.push({ x, y });
  }

  let path = `M ${points[0].x} ${points[0].y}`;
  for (let i = 1; i < points.length; i++) {
    const prev = points[i - 1];
    const curr = points[i];
    const cpx1 = prev.x + (curr.x - prev.x) * 0.5;
    const cpy1 = prev.y;
    const cpx2 = prev.x + (curr.x - prev.x) * 0.5;
    const cpy2 = curr.y;
    path += ` C ${cpx1} ${cpy1}, ${cpx2} ${cpy2}, ${curr.x} ${curr.y}`;
  }
  return path;
}

function generateFillPath(peaks: { monthNumber: number; intensity: number }[]): string {
  const wavePath = generateWavePath(peaks);
  return `${wavePath} L 680 160 L 60 160 Z`;
}

function getTriggerX(peakMonthNumber: number): number {
  const width = 680;
  const triggerMonth = peakMonthNumber - 1 - 0.7;
  return 60 + (triggerMonth / 12) * (width - 60);
}

function getPeakX(peakMonthNumber: number): number {
  const width = 680;
  return 60 + ((peakMonthNumber - 1) / 12) * (width - 60);
}

export default function OpportunityMap() {
  const [selectedNiche, setSelectedNiche] = useState("hvac");
  const [selectedPeakIndex, setSelectedPeakIndex] = useState(0);
  const [hoveredPeak, setHoveredPeak] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const niche = NICHE_DATA[selectedNiche];
  const peak = niche.peaks[selectedPeakIndex];
  const daysLeft = daysUntilDate(peak.peakDate);
  const triggerDate = calculateTriggerDate(peak.peakDate);
  const NicheIcon = ICON_MAP[niche.icon] || Thermometer;

  const handleNicheChange = (value: string) => {
    setIsLoading(true);
    setSelectedNiche(value);
    setSelectedPeakIndex(0);
    setHoveredPeak(null);
    setTimeout(() => setIsLoading(false), 300);
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="opportunity-map" className="section-padding bg-background">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {/* Header */}
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display text-foreground mb-4">
              FIND YOUR <span className="cta-emphasis">GROWTH</span> WINDOW
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              See exactly when your market wakes up. Then wake up first.
            </p>
          </div>

          {/* Step 1: Niche Selector */}
          <div className="max-w-md mx-auto mb-8">
            <label className="text-sm font-bold text-muted-foreground uppercase tracking-wider block mb-2">
              Step 1: Select Your Niche
            </label>
            <Select value={selectedNiche} onValueChange={handleNicheChange}>
              <SelectTrigger className="w-full bg-card border-border">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {Object.values(NICHE_DATA).map((n) => (
                  <SelectItem key={n.id} value={n.id}>
                    {n.name} — {n.description}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Step 2: Peak Selection */}
          {niche.peaks.length > 1 && (
            <div className="max-w-md mx-auto mb-8 text-center">
              <label className="text-sm font-bold text-muted-foreground uppercase tracking-wider block mb-3">
                Peak Seasons for {niche.name}
              </label>
              <div className="flex gap-3 justify-center">
                {niche.peaks.map((p, idx) => (
                  <button
                    key={p.month}
                    onClick={() => setSelectedPeakIndex(idx)}
                    className={`px-5 py-2.5 rounded-lg border-2 font-body font-medium transition-all ${
                      selectedPeakIndex === idx
                        ? "border-accent bg-accent/20 text-accent"
                        : "border-border hover:border-accent/50 text-muted-foreground"
                    }`}
                  >
                    {p.month}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Demand Wave Visualization */}
          <AnimatePresence mode="wait">
            <motion.div
              key={`${selectedNiche}-${selectedPeakIndex}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="rounded-2xl p-6 md:p-8 bg-card border border-border shadow-card"
            >
              {isLoading ? (
                <div className="space-y-4">
                  <Skeleton className="h-8 w-64" />
                  <Skeleton className="h-[200px] w-full" />
                  <Skeleton className="h-4 w-96" />
                  <Skeleton className="h-4 w-72" />
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-display text-foreground mb-4 flex items-center gap-2">
                    <NicheIcon className="w-6 h-6 text-accent" />
                    Demand Wave: {niche.name}
                  </h3>

                  {/* SVG Wave */}
                  <div className="w-full overflow-x-auto mb-6">
                    <svg
                      viewBox="0 0 700 200"
                      className="w-full min-w-[500px]"
                      preserveAspectRatio="xMidYMid meet"
                    >
                      {/* Gradient defs */}
                      <defs>
                        <linearGradient id="waveFill" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.2" />
                          <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0.02" />
                        </linearGradient>
                      </defs>

                      {/* Grid lines */}
                      <line x1="60" y1="160" x2="680" y2="160" stroke="hsl(var(--border))" strokeWidth="1" />
                      <line x1="60" y1="30" x2="60" y2="160" stroke="hsl(var(--border))" strokeWidth="1" />

                      {/* Month labels */}
                      {MONTHS.map((m, i) => (
                        <text
                          key={m}
                          x={60 + (i / 12) * 620 + 620 / 24}
                          y="178"
                          textAnchor="middle"
                          className="fill-muted-foreground"
                          fontSize="10"
                          fontFamily="Inter, sans-serif"
                        >
                          {m}
                        </text>
                      ))}

                      {/* Y labels */}
                      <text x="50" y="165" textAnchor="end" className="fill-muted-foreground" fontSize="9" fontFamily="Inter">Low</text>
                      <text x="50" y="38" textAnchor="end" className="fill-muted-foreground" fontSize="9" fontFamily="Inter">High</text>

                      {/* Wave fill with gradient */}
                      <motion.path
                        d={generateFillPath(niche.peaks)}
                        fill="url(#waveFill)"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                      />

                      {/* Wave line */}
                      <motion.path
                        d={generateWavePath(niche.peaks)}
                        fill="none"
                        stroke="hsl(var(--accent))"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                      />

                      {/* Interactive peak markers */}
                      {niche.peaks.map((p, idx) => {
                        const cx = getPeakX(p.monthNumber);
                        const cy = 160 - p.intensity * 130;
                        const isHovered = hoveredPeak === idx;
                        return (
                          <g
                            key={idx}
                            onMouseEnter={() => setHoveredPeak(idx)}
                            onMouseLeave={() => setHoveredPeak(null)}
                            className="cursor-pointer"
                          >
                            {/* Hover area */}
                            <circle cx={cx} cy={cy} r="16" fill="transparent" />
                            {/* Visible dot */}
                            <circle
                              cx={cx}
                              cy={cy}
                              r={isHovered ? 7 : 5}
                              fill="hsl(var(--accent))"
                              stroke="hsl(var(--background))"
                              strokeWidth="2"
                              style={{ transition: "r 0.2s ease" }}
                            />
                            {/* Tooltip */}
                            {isHovered && (
                              <g>
                                <rect
                                  x={cx - 55}
                                  y={cy - 42}
                                  width="110"
                                  height="32"
                                  rx="6"
                                  fill="hsl(var(--card))"
                                  stroke="hsl(var(--border))"
                                  strokeWidth="1"
                                />
                                <text
                                  x={cx}
                                  y={cy - 28}
                                  textAnchor="middle"
                                  fill="hsl(var(--foreground))"
                                  fontSize="9"
                                  fontWeight="600"
                                  fontFamily="Inter"
                                >
                                  Peak: {p.peakDate}
                                </text>
                                <text
                                  x={cx}
                                  y={cy - 16}
                                  textAnchor="middle"
                                  fill="hsl(var(--accent))"
                                  fontSize="9"
                                  fontFamily="Inter"
                                >
                                  Intensity: {(p.intensity * 100).toFixed(0)}%
                                </text>
                              </g>
                            )}
                          </g>
                        );
                      })}

                      {/* 21-Day Trigger line with pulse */}
                      <g className="trigger-marker">
                        <line
                          x1={getTriggerX(peak.monthNumber)}
                          y1="25"
                          x2={getTriggerX(peak.monthNumber)}
                          y2="160"
                          stroke="hsl(var(--destructive))"
                          strokeWidth="1.5"
                          strokeDasharray="4 3"
                        />
                        <rect
                          x={getTriggerX(peak.monthNumber) - 42}
                          y="12"
                          width="84"
                          height="18"
                          rx="4"
                          fill="hsl(var(--destructive) / 0.15)"
                          stroke="hsl(var(--destructive) / 0.4)"
                          strokeWidth="1"
                        />
                        <text
                          x={getTriggerX(peak.monthNumber)}
                          y="24"
                          textAnchor="middle"
                          fill="hsl(var(--destructive))"
                          fontSize="9"
                          fontWeight="600"
                          fontFamily="Inter, sans-serif"
                        >
                          21-Day Trigger
                        </text>
                      </g>

                      {/* 21-day window highlight band */}
                      <rect
                        x={getTriggerX(peak.monthNumber)}
                        y="30"
                        width={getPeakX(peak.monthNumber) - getTriggerX(peak.monthNumber)}
                        height="130"
                        fill="hsl(var(--accent) / 0.06)"
                        rx="2"
                      />
                    </svg>
                  </div>

                  {/* Interpretation */}
                  <motion.div
                    className="space-y-3 max-w-2xl"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                  >
                    <p className="text-lg text-foreground font-medium">
                      <span className="font-bold">{niche.name}</span> search intent peaks in{" "}
                      <span className="text-accent font-bold">{peak.month}</span>.
                    </p>
                    <p className="text-base text-muted-foreground">
                      To capture that demand, you need to launch by{" "}
                      <span className="text-accent font-bold">{triggerDate}</span>{" "}
                      (21 days before peak).
                    </p>
                    <p className="text-sm text-muted-foreground">
                      That means <span className="text-accent font-bold">{daysLeft} days</span> to prepare your campaigns.
                    </p>

                    <motion.button
                      onClick={scrollToContact}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="mt-4 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-accent-foreground font-bold text-sm uppercase tracking-wider hover:bg-accent/90 transition-colors"
                    >
                      See Your Custom Growth Plan
                      <motion.span whileHover={{ x: 4 }}>
                        <ArrowRight className="w-4 h-4" />
                      </motion.span>
                    </motion.button>
                  </motion.div>
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
