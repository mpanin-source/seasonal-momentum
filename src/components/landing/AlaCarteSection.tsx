import { useState } from "react";
import { motion } from "framer-motion";
import { Globe, Database, Settings, ArrowRight, Check, X as XIcon } from "lucide-react";

const scrollToContact = () => {
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
};

const scrollToTiers = () => {
  document.getElementById("tiers")?.scrollIntoView({ behavior: "smooth" });
};

type NurtureOption = "existing" | "hosted" | "managed";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const AlaCarteSection = () => {
  const [nurtureOption, setNurtureOption] = useState<NurtureOption>("existing");

  const nurturepricing: Record<NurtureOption, { label: string; price: string; desc: string }> = {
    existing: {
      label: "Your Existing CRM",
      price: "$199/month",
      desc: "HubSpot, Pipedrive, Mailchimp, etc.",
    },
    hosted: {
      label: "We Host the CRM",
      price: "$1,500 setup + $299/month",
      desc: "We store + nurture leads for you.",
    },
    managed: {
      label: "Managed System",
      price: "$99/month",
      desc: "Leads stored in our managed system.",
    },
  };

  const nurtureExtras: Record<NurtureOption, string[]> = {
    existing: ["Integration with your current CRM", "Sync automation"],
    hosted: ["Database (your data, your control)", "Custom branding on emails"],
    managed: ["Shared inbox + notes", "Can export anytime"],
  };

  return (
    <section id="ala-carte" className="section-padding bg-background">
      <div className="container-wide">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-display font-black text-foreground tracking-wider uppercase mb-4">
            JUST ONE PIECE? WE'VE GOT THAT TOO.
          </h2>
          <p className="text-lg text-muted-foreground">
            Pick exactly what you need. No bundle required.
          </p>
        </motion.div>

        {/* 3 Cards with stagger */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12"
        >
          {/* Card 1: Landing Page */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)" }}
            className="rounded-2xl p-8 md:p-10 text-tier-blue-foreground flex flex-col transition-shadow"
            style={{ background: "hsl(var(--tier-blue))" }}
          >
            <Globe className="w-8 h-8 mb-4 opacity-80" />
            <h3 className="font-display text-2xl font-black tracking-wider uppercase mb-1">
              JUST WANT THE <span className="italic">WEBSITE</span>?
            </h3>
            <p className="text-sm opacity-80 mb-4">Custom landing page, zero fluff.</p>
            <p className="text-xl font-display font-bold mb-1">$450 – $1,200 <span className="text-sm font-body font-normal opacity-70">one-time</span></p>
            <p className="text-xs opacity-60 mb-4">(depending on features + integrations)</p>

            <p className="text-sm italic opacity-70 mb-4">
              "You're running ads but your website isn't converting."
            </p>

            {/* Included */}
            <div className="rounded-lg p-4 mb-3 border border-white/30 shadow-md" style={{ background: "rgba(255,255,255,0.08)", boxShadow: "0 0 15px hsl(var(--accent) / 0.15)" }}>
              <p className="text-xs uppercase tracking-wider font-bold mb-2 opacity-90">What You Get</p>
              {["Custom landing page (your brand, your offer)", "Mobile responsive + conversion optimized", "Form with lead capture (CRM or email)", "Performance baseline (Lighthouse score)", "5-day turnaround"].map((item, i) => (
                <div key={i} className="flex items-start gap-2 mb-1.5">
                  <Check className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-accent" />
                  <span className="text-xs leading-relaxed opacity-95">{item}</span>
                </div>
              ))}
            </div>

            {/* Not Included */}
            <div className="rounded-lg p-4 mb-4" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)" }}>
              <p className="text-xs uppercase tracking-wider font-bold mb-2 opacity-50">Not Included</p>
              {["Ads or paid media strategy", "Lead nurture automation", "CRM setup (you use your own)"].map((item, i) => (
                <div key={i} className="flex items-start gap-2 mb-1.5">
                  <XIcon className="w-3 h-3 mt-0.5 flex-shrink-0 opacity-40" />
                  <span className="text-xs opacity-50">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-xs opacity-60 mb-4">
              <span className="font-semibold">Best for:</span> Quick wins, testing new offers, low-commitment
            </p>

            <motion.button
              onClick={scrollToContact}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-auto w-full py-3 rounded-xl font-display font-bold text-sm uppercase tracking-wider bg-white/20 hover:bg-white/30 transition-colors flex items-center justify-center gap-2"
            >
              GET MY LANDING PAGE
              <motion.span initial={{ x: 0 }} whileHover={{ x: 4 }}>
                <ArrowRight className="w-4 h-4" />
              </motion.span>
            </motion.button>
          </motion.div>

          {/* Card 2: CRM Setup */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)" }}
            className="rounded-2xl p-8 md:p-10 text-tier-teal-foreground flex flex-col transition-shadow"
            style={{ background: "hsl(var(--tier-teal))" }}
          >
            <Database className="w-8 h-8 mb-4 opacity-80" />
            <h3 className="font-display text-2xl font-black tracking-wider uppercase mb-1">
              HAVE A WEBSITE BUT NEED A <span className="italic">CRM</span>?
            </h3>
            <p className="text-sm opacity-80 mb-4">We set it up. We automate it. Done.</p>
            <p className="text-xl font-display font-bold mb-1">$1,500 setup + $199/mo</p>
            <p className="text-xs opacity-60 mb-4">&nbsp;</p>

            <p className="text-sm italic opacity-70 mb-4">
              "You're getting leads but losing them. No follow-up system."
            </p>

            <div className="rounded-lg p-4 mb-3 border border-white/30 shadow-md" style={{ background: "rgba(255,255,255,0.08)", boxShadow: "0 0 15px hsl(var(--accent) / 0.15)" }}>
              <p className="text-xs uppercase tracking-wider font-bold mb-2 opacity-90">What You Get</p>
              {["CRM setup (your data, your control)", "Email + SMS automation sequences", "Lead scoring (hot/warm/cold automatic)", "Monthly performance dashboard", "Connected to your landing page/forms"].map((item, i) => (
                <div key={i} className="flex items-start gap-2 mb-1.5">
                  <Check className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-accent" />
                  <span className="text-xs leading-relaxed opacity-95">{item}</span>
                </div>
              ))}
            </div>

            <div className="rounded-lg p-4 mb-4" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)" }}>
              <p className="text-xs uppercase tracking-wider font-bold mb-2 opacity-50">Not Included</p>
              {["Custom landing page", "Ad setup or paid strategy", "Authority Layer (social content)"].map((item, i) => (
                <div key={i} className="flex items-start gap-2 mb-1.5">
                  <XIcon className="w-3 h-3 mt-0.5 flex-shrink-0 opacity-40" />
                  <span className="text-xs opacity-50">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-xs opacity-60 mb-4">
              <span className="font-semibold">Best for:</span> Teams with leads but no system, growing too fast
            </p>

            <motion.button
              onClick={scrollToContact}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-auto w-full py-3 rounded-xl font-display font-bold text-sm uppercase tracking-wider bg-white/20 hover:bg-white/30 transition-colors flex items-center justify-center gap-2"
            >
              SET UP MY CRM + AUTOMATION
              <motion.span initial={{ x: 0 }} whileHover={{ x: 4 }}>
                <ArrowRight className="w-4 h-4" />
              </motion.span>
            </motion.button>
          </motion.div>

          {/* Card 3: Nurture */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -4, boxShadow: "0 20px 40px rgba(0, 0, 0, 0.2)" }}
            className="rounded-2xl p-8 md:p-10 text-tier-purple-foreground flex flex-col transition-shadow"
            style={{ background: "hsl(var(--tier-purple))" }}
          >
            <Settings className="w-8 h-8 mb-4 opacity-80" />
            <h3 className="font-display text-2xl font-black tracking-wider uppercase mb-1">
              HAVE LEADS BUT NEED <span className="italic">NURTURE</span>?
            </h3>
            <p className="text-sm opacity-80 mb-4">We automate the follow-up. You close the deals.</p>

            {/* Pricing Tabs with enhanced selection */}
            <div className="flex gap-1 mb-3 rounded-lg overflow-hidden bg-white/10 p-0.5">
              {(["existing", "hosted", "managed"] as NurtureOption[]).map((opt) => (
                <motion.button
                  key={opt}
                  onClick={() => setNurtureOption(opt)}
                  whileTap={{ scale: 0.95 }}
                  className={`flex-1 text-[10px] py-1.5 px-1 rounded-md font-semibold uppercase tracking-wider transition-all ${
                    nurtureOption === opt
                      ? "bg-white/25 shadow-sm shadow-accent/30"
                      : "hover:bg-white/10"
                  }`}
                >
                  {opt === "existing" ? "Your CRM" : opt === "hosted" ? "We Host" : "Managed"}
                </motion.button>
              ))}
            </div>

            <motion.div
              key={nurtureOption}
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              <p className="text-xl font-display font-bold mb-0.5">{nurturepricing[nurtureOption].price}</p>
              <p className="text-xs opacity-60 mb-4">{nurturepricing[nurtureOption].desc}</p>
            </motion.div>

            <p className="text-sm italic opacity-70 mb-4">
              "I get leads from multiple sources but no system connects them."
            </p>

            <div className="rounded-lg p-4 mb-3 border border-white/30 shadow-md" style={{ background: "rgba(255,255,255,0.08)", boxShadow: "0 0 15px hsl(var(--accent) / 0.15)" }}>
              <p className="text-xs uppercase tracking-wider font-bold mb-2 opacity-90">What You Get (All Options)</p>
              {["Email + SMS automation sequences", "Lead scoring (auto hot/warm/cold)", "Conditional follow-up (smart routing)", "Monthly performance dashboard", "Unsubscribe management + compliance"].map((item, i) => (
                <div key={i} className="flex items-start gap-2 mb-1.5">
                  <Check className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-accent" />
                  <span className="text-xs leading-relaxed opacity-95">{item}</span>
                </div>
              ))}
              {nurtureExtras[nurtureOption].map((item, i) => (
                <div key={`extra-${i}`} className="flex items-start gap-2 mb-1.5">
                  <Check className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-accent" />
                  <span className="text-xs leading-relaxed opacity-95 font-semibold">{item}</span>
                </div>
              ))}
            </div>

            <div className="rounded-lg p-4 mb-4" style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)" }}>
              <p className="text-xs uppercase tracking-wider font-bold mb-2 opacity-50">Not Included</p>
              {["Landing page", "Ads or paid media", "Lead sourcing (you bring the leads)"].map((item, i) => (
                <div key={i} className="flex items-start gap-2 mb-1.5">
                  <XIcon className="w-3 h-3 mt-0.5 flex-shrink-0 opacity-40" />
                  <span className="text-xs opacity-50">{item}</span>
                </div>
              ))}
            </div>

            <p className="text-xs opacity-60 mb-4">
              <span className="font-semibold">Best for:</span> Solopreneurs, referral-heavy businesses
            </p>

            <motion.button
              onClick={scrollToContact}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="mt-auto w-full py-3 rounded-xl font-display font-bold text-sm uppercase tracking-wider bg-white/20 hover:bg-white/30 transition-colors flex items-center justify-center gap-2"
            >
              AUTOMATE MY FOLLOW-UP
              <motion.span initial={{ x: 0 }} whileHover={{ x: 4 }}>
                <ArrowRight className="w-4 h-4" />
              </motion.span>
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Section Footer */}
        <div className="text-center space-y-3">
          <p className="text-muted-foreground">Still not sure which fits?</p>
          <button onClick={scrollToContact} className="text-accent hover:text-accent/80 font-semibold transition-colors text-sm">
            GET A QUICK DIAGNOSTIC →
          </button>
          <p className="text-muted-foreground">Or ready to do it all?</p>
          <button onClick={scrollToTiers} className="text-accent hover:text-accent/80 font-semibold transition-colors text-sm">
            EXPLORE SEASONAL SPRINTS →
          </button>
        </div>
      </div>
    </section>
  );
};

export default AlaCarteSection;
