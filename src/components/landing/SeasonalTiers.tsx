import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { DollarSign, Settings, Palette, Rocket, Check, Shield, Lock, ArrowRight } from "lucide-react";

const tiers = [
  {
    id: "pipeline",
    label: "TIER 1",
    name: "LEAD PIPELINE",
    tagline: "Pay Once. Get Leads. That's It.",
    selectorText: "I just want leads. I'll handle the rest.",
    belief: "\"Agencies are too expensive / I can't afford another monthly bill\"",
    price: "$2,500 – $4,500",
    priceNote: "one-time, 30–45 days",
    monthly: null,
    monthlyNote: null,
    icon: DollarSign,
    colorClass: "bg-tier-blue",
    textClass: "text-tier-blue-foreground",
    borderClass: "border-tier-blue",
    btnClass: "bg-tier-blue hover:bg-tier-blue/90 text-tier-blue-foreground",
    badge: null,
    intro: "You want leads. You don't want another monthly bill killing your profit margin.",
    forYou: [
      "You have a sales team (or you handle follow-up yourself)",
      "You want to test if seasonal advertising actually works",
      "You're tired of \"retainer\" agencies that lock you in for a year",
      "You'd rather pay once and own the data",
    ],
    deliver: [
      "15-min audit of your funnel (your biggest leak)",
      "Ad campaign built on winning angles (not generic)",
      "Weekly lead delivery (clean list, your email)",
      "30-day optimization (we kill what doesn't work)",
      "Handover: Full campaign docs + lead data",
    ],
    youDo: "Get the leads. Follow up with them. Close them. That's it.",
    bottomLine: "You pay $2,500–$4,500 once. If the leads convert, you're making 10x that in revenue. If they don't, you didn't bet the farm on a retainer.",
    bestFor: "Solo operators, small teams, budget-conscious, want to test first.",
    cta: "Learn More About Lead Pipeline",
  },
  {
    id: "nurture",
    label: "TIER 2",
    name: "LEAD + NURTURE",
    tagline: "Get Leads. We Handle the Follow-Up.",
    selectorText: "I want leads but I need follow-up handled.",
    belief: "\"I don't have time to follow up / I need a system to manage leads\"",
    price: "$4,500 – $7,500",
    priceNote: "sprint",
    monthly: "$299/mo",
    monthlyNote: "system",
    icon: Settings,
    colorClass: "bg-tier-teal",
    textClass: "text-tier-teal-foreground",
    borderClass: "border-tier-teal",
    btnClass: "bg-tier-teal hover:bg-tier-teal/90 text-tier-teal-foreground",
    badge: "MOST POPULAR",
    intro: "You get leads. But then what? Too many local service owners let leads go cold because they're busy with current clients.",
    forYou: [
      "You're tired of manually emailing leads (it doesn't scale)",
      "You want leads automatically followed up on (even when you sleep)",
      "You need a system that separates hot leads from window shoppers",
      "You want to see which leads are actually ready to buy",
    ],
    deliver: [
      "Everything in Tier 1",
      "Your hosted lead CRM (your data, your control)",
      "Automated email sequences (we write them, they go automatically)",
      "SMS reminders (second touch if email doesn't get opened)",
      "Lead scoring (we tag leads: hot, warm, cold)",
      "Monthly dashboard (you see exactly what's working)",
    ],
    workflow: [
      "Lead fills form",
      "Auto-welcome email (24 hours)",
      "Auto-follow-up email (day 3)",
      "Auto-SMS reminder (if they didn't open email)",
      "You see a \"hot lead\" alert (so you call them fast)",
    ],
    youDo: "Call the hot leads. Close them.",
    bottomLine: "You pay $299/mo for a system that never sleeps. That system turns more leads into customers than you could manually. It pays for itself on 1–2 extra closed deals per month.",
    bestFor: "Growing teams, busy owners, want to professionalize, need a system.",
    cta: "Learn More About Lead + Nurture",
  },
  {
    id: "custom",
    label: "TIER 3",
    name: "LEAD + NURTURE + CUSTOM SITE",
    tagline: "Get Leads. We Handle Follow-Up. Your Brand Stands Out.",
    selectorText: "I want the full package with a custom site.",
    belief: "\"My business looks generic / I need to stand out and look professional\"",
    price: "$7,500 – $15,000",
    priceNote: "sprint + custom site",
    monthly: "$399/mo",
    monthlyNote: "system",
    icon: Palette,
    colorClass: "bg-tier-purple",
    textClass: "text-tier-purple-foreground",
    borderClass: "border-tier-purple",
    btnClass: "bg-tier-purple hover:bg-tier-purple/90 text-tier-purple-foreground",
    badge: "PREMIUM",
    intro: "Your competitors are using generic landing page templates. You're not.",
    forYou: [
      "You want to look professional / premium (not cheap)",
      "You want a landing page that matches your brand (not cookie-cutter)",
      "You want serious proof (testimonials, results, authority)",
      "You're ready to compete on perception, not just price",
    ],
    deliver: [
      "Everything in Tier 2",
      "Custom landing page (built specifically for YOUR business)",
      "Brand-aligned design (your colors, your story, your voice)",
      "Proof built in (testimonials, before/after, your authority)",
      "Conversion optimized (tested, not guessed)",
      "Smart form (form → CRM → automatic scoring)",
      "A/B testing ready (you can test headlines, offers, etc.)",
      "Quarterly strategy calls (we check in, optimize, scale)",
    ],
    whyMatters: [
      "\"This business looks professional\" (not a knockoff)",
      "\"I trust this person\" (not a random agency)",
      "\"This is for me\" (specific to my problem)",
    ],
    youDo: null,
    bottomLine: "You invest in a custom page once ($7.5–15k). That page then sells for you every single day. Your $399/mo nurture system keeps leads engaged. You close more customers with less effort.",
    bestFor: "Established local businesses, want to own their brand, ready to invest.",
    cta: "Learn More About Custom Site",
  },
  {
    id: "full",
    label: "TIER 4",
    name: "FULL AGENTIC STACK",
    tagline: "Dominate Your Market. We Scale With You.",
    selectorText: "I'm ready to dominate. Let's partner.",
    belief: "\"I want a real growth partner / I'm ready to scale beyond what I'm doing\"",
    price: "$15,000 – $30,000",
    priceNote: "sprint + build",
    monthly: "$599/mo",
    monthlyNote: "full system + strategy",
    icon: Rocket,
    colorClass: "bg-tier-gold",
    textClass: "text-tier-gold-foreground",
    borderClass: "border-tier-gold",
    btnClass: "bg-tier-gold hover:bg-tier-gold/90 text-tier-gold-foreground",
    badge: "MARKET LEADER",
    intro: "You're not just looking for leads. You're looking to build a real business.",
    forYou: [
      "You want to dominate your market (not just compete)",
      "You're ready for ongoing partnership (not a one-time sprint)",
      "You want someone to handle growth full-time (not part-time)",
      "You're willing to invest to build something that lasts",
      "You want to scale beyond one location / one service",
    ],
    deliver: [
      "Everything in Tier 3",
      "Multi-channel orchestration (Meta + Google + email + SMS, all connected)",
      "AI-powered lead routing (hot leads to you immediately, warm to nurture)",
      "Retainer partnership (after sprint, we optimize ongoing)",
      "Bi-weekly strategy calls (we stay aligned with your growth)",
      "Creative testing framework (we test variations, scale winners)",
      "Market expansion plan (how to grow beyond your current service/location)",
      "Your dedicated growth strategist (one point of contact)",
    ],
    different: [
      "We don't just run ads and disappear",
      "We check in every 2 weeks (not once a month)",
      "We care about profit, not just leads",
      "We help you scale beyond the constraints you have now",
    ],
    youDo: null,
    bottomLine: "You invest $15–30k upfront. You invest $599/mo ongoing. In return, you get a growth partner who's obsessed with your success. That partner helps you 10x your business over 12 months.",
    bestFor: "Leaders who want to build, scale-focused, ready to compete at highest level.",
    cta: "Learn More About Full Stack",
  },
];

const comparisonRows = [
  { label: "Sprint Cost", values: ["$2.5–4.5k", "$4.5–7.5k", "$7.5–15k", "$15–30k"] },
  { label: "Monthly Cost", values: ["$0", "$299", "$399", "$599"] },
  { label: "Lead Delivery", values: ["✓ Email", "✓ Email + CRM", "✓ Email + CRM", "✓ Multi-channel"] },
  { label: "Follow-up System", values: ["You handle it", "Automated", "Automated", "Automated + Strategy"] },
  { label: "Custom Site", values: ["—", "—", "✓", "✓"] },
  { label: "Lead Scoring", values: ["—", "✓", "✓", "✓"] },
  { label: "Strategy Calls", values: ["—", "—", "Quarterly", "Bi-weekly"] },
  { label: "Best If", values: ["Testing, lean", "Growing, busy", "Ready to scale", "Market leader"] },
];

const tierColors = [
  "text-tier-blue",
  "text-tier-teal",
  "text-tier-purple",
  "text-tier-gold",
];

const SeasonalTiers = () => {
  const [activeTier, setActiveTier] = useState<string | null>(null);
  const cardRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const scrollToTier = (id: string) => {
    setActiveTier(id);
    cardRefs.current[id]?.scrollIntoView({ behavior: "smooth", block: "center" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="tiers" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            CHOOSE YOUR SEASONAL GROWTH PATH
          </h2>
          <p className="font-body text-lg text-muted-foreground max-w-2xl mx-auto">
            Pick the sprint that matches where you are right now
          </p>
        </motion.div>

        {/* Tier Selector */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mb-16"
        >
          <p className="text-center font-display text-xl text-foreground mb-6">
            WHICH SOUNDS MOST LIKE YOU?
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {tiers.map((tier) => (
              <button
                key={tier.id}
                onClick={() => scrollToTier(tier.id)}
                className={`p-4 rounded-lg border-2 transition-all duration-200 text-left font-body text-sm leading-relaxed ${
                  activeTier === tier.id
                    ? `${tier.borderClass} bg-background shadow-elevated`
                    : "border-border hover:border-muted-foreground/30 bg-card"
                }`}
              >
                <span className="font-semibold block mb-1 text-foreground">{tier.label}</span>
                <span className="text-muted-foreground">{tier.selectorText}</span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Tier Cards */}
        <div className="space-y-12">
          {tiers.map((tier, i) => {
            const Icon = tier.icon;
            return (
              <motion.div
                key={tier.id}
                ref={(el) => { cardRefs.current[tier.id] = el; }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.05 }}
                className={`rounded-2xl overflow-hidden ${tier.colorClass} ${tier.textClass} ${
                  tier.id === "full" ? "ring-2 ring-tier-gold/50" : ""
                }`}
              >
                <div className="p-8 md:p-12">
                  {/* Badge */}
                  {tier.badge && (
                    <span className="inline-block px-3 py-1 text-xs font-semibold font-body tracking-wider rounded-full bg-white/20 backdrop-blur mb-4">
                      {tier.badge}
                    </span>
                  )}

                  {/* Header */}
                  <div className="flex items-start gap-4 mb-6">
                    <div className="p-3 rounded-xl bg-white/15">
                      <Icon size={28} />
                    </div>
                    <div>
                      <p className="font-body text-sm tracking-wider opacity-80 mb-1">{tier.label} · {tier.name}</p>
                      <h3 className="font-display text-3xl md:text-4xl">{tier.tagline}</h3>
                    </div>
                  </div>

                  {/* Belief */}
                  <p className="font-body text-sm italic opacity-70 mb-6">
                    Limiting belief we solve: {tier.belief}
                  </p>

                  {/* Price */}
                  <div className="bg-white/10 rounded-xl p-5 mb-8 inline-block">
                    <span className="font-display text-3xl md:text-4xl">{tier.price}</span>
                    <span className="font-body text-sm ml-2 opacity-80">({tier.priceNote})</span>
                    {tier.monthly && (
                      <div className="mt-1">
                        <span className="font-display text-2xl">+ {tier.monthly}</span>
                        <span className="font-body text-sm ml-2 opacity-80">({tier.monthlyNote})</span>
                      </div>
                    )}
                  </div>

                  {/* Content Grid */}
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Left */}
                    <div className="space-y-6">
                      <p className="font-body text-base leading-relaxed">{tier.intro}</p>

                      <div>
                        <p className="font-display text-lg mb-3">THIS IS FOR YOU IF:</p>
                        <ul className="space-y-2">
                          {tier.forYou.map((item, j) => (
                            <li key={j} className="flex items-start gap-2 font-body text-sm leading-relaxed">
                              <Check size={16} className="mt-0.5 flex-shrink-0 opacity-80" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {tier.youDo && (
                        <div className="bg-white/10 rounded-lg p-4">
                          <p className="font-display text-sm mb-1">WHAT YOU DO:</p>
                          <p className="font-body text-sm">→ {tier.youDo}</p>
                        </div>
                      )}
                    </div>

                    {/* Right */}
                    <div className="space-y-6">
                      <div>
                        <p className="font-display text-lg mb-3">WHAT WE DELIVER:</p>
                        <ul className="space-y-2">
                          {tier.deliver.map((item, j) => (
                            <li key={j} className="flex items-start gap-2 font-body text-sm leading-relaxed">
                              <Check size={16} className="mt-0.5 flex-shrink-0 opacity-80" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Workflow (Tier 2) */}
                      {"workflow" in tier && (tier as any).workflow && (
                        <div className="bg-white/10 rounded-lg p-4">
                          <p className="font-display text-sm mb-2">HOW IT WORKS:</p>
                          <ul className="space-y-1">
                            {(tier as any).workflow.map((step: string, j: number) => (
                              <li key={j} className="font-body text-sm">→ {step}</li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Why matters (Tier 3) */}
                      {"whyMatters" in tier && (tier as any).whyMatters && (
                        <div className="bg-white/10 rounded-lg p-4">
                          <p className="font-display text-sm mb-2">WHEN SOMEONE LANDS ON YOUR PAGE, THEY THINK:</p>
                          <ul className="space-y-1">
                            {(tier as any).whyMatters.map((item: string, j: number) => (
                              <li key={j} className="font-body text-sm">{item}</li>
                            ))}
                          </ul>
                          <p className="font-body text-sm mt-2 opacity-80">
                            That trust = higher conversion rate = more customers from same ad spend
                          </p>
                        </div>
                      )}

                      {/* Different (Tier 4) */}
                      {"different" in tier && (tier as any).different && (
                        <div className="bg-white/10 rounded-lg p-4">
                          <p className="font-display text-sm mb-2">THIS IS DIFFERENT:</p>
                          <ul className="space-y-1">
                            {(tier as any).different.map((item: string, j: number) => (
                              <li key={j} className="font-body text-sm">→ {item}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Bottom line */}
                  <div className="mt-8 pt-6 border-t border-white/20">
                    <p className="font-display text-sm mb-2">THE BOTTOM LINE:</p>
                    <p className="font-body text-sm leading-relaxed max-w-3xl">{tier.bottomLine}</p>
                    <p className="font-body text-xs mt-3 opacity-70">
                      Best for: {tier.bestFor}
                    </p>
                  </div>

                  {/* CTA */}
                  <button
                    onClick={scrollToContact}
                    className="mt-6 px-8 py-3 rounded-lg bg-white/20 hover:bg-white/30 backdrop-blur font-display text-lg tracking-wider transition-all duration-200 flex items-center gap-2"
                  >
                    {tier.cta}
                    <ArrowRight size={18} />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="font-display text-3xl md:text-4xl text-foreground text-center mb-8">
            WHICH TIER IS RIGHT FOR YOU?
          </h3>
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full min-w-[640px]">
              <thead>
                <tr className="bg-card">
                  <th className="text-left p-4 font-display text-sm text-foreground">Feature</th>
                  {tiers.map((t, i) => (
                    <th key={t.id} className={`p-4 font-display text-sm text-center ${tierColors[i]}`}>
                      {t.label}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-background" : "bg-card/50"}>
                    <td className="p-4 font-body text-sm font-medium text-foreground">{row.label}</td>
                    {row.values.map((val, j) => (
                      <td key={j} className="p-4 font-body text-sm text-center text-muted-foreground">
                        {val}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="font-display text-3xl md:text-4xl text-foreground mb-4">
            READY TO PICK YOUR PATH?
          </h3>
          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-6">
            <Lock size={14} />
            <span className="font-body text-sm">No commitment required — let's just talk.</span>
          </div>
          <button
            onClick={scrollToContact}
            className="px-10 py-4 rounded-lg bg-accent text-accent-foreground font-display text-xl tracking-wider hover:bg-accent/90 transition-all duration-200 flex items-center gap-3 mx-auto shadow-elevated"
          >
            CHOOSE YOUR TIER
            <ArrowRight size={20} />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default SeasonalTiers;
