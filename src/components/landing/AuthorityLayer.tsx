import { motion } from "framer-motion";
import { Play, Palette, Video, Globe } from "lucide-react";

const videoCards = [
  {
    title: "THE EXPERT SERIES",
    label: "Scripted by Us | Filmed by Client",
    gradient: "from-accent/20 to-accent/5",
  },
  {
    title: "THE REELS ACCELERATOR",
    label: "High-End Edit | Organic Reach",
    gradient: "from-accent/15 to-accent/5",
  },
  {
    title: "THE MARKET DOMINATOR",
    label: "Visual Branding | Scale",
    gradient: "from-accent/20 to-accent/10",
  },
];

const offerings = [
  {
    icon: Palette,
    title: "PERFORMANCE BRANDING",
    description:
      "We don't just make logos; we build conversion-centric visual systems. A professional identity refresh designed to look high-end on every landing page and ad we run.",
  },
  {
    icon: Video,
    title: "CONTENT-AS-A-SERVICE (CaaS)",
    description:
      "We provide the viral scripts and research; you provide the face. Our team handles the professional post-production, captions, and distribution across Reels, TikTok, and Shorts.",
  },
  {
    icon: Globe,
    title: "ORGANIC MULTIPLIER",
    description:
      "Build a regional presence that scales beyond your local zip code. Warm up your cold leads with consistent, high-value organic content that lowers your overall CAC.",
  },
];

const scrollToForm = (e: React.MouseEvent) => {
  e.preventDefault();
  const formSection = document.getElementById("diagnostic");
  if (formSection) {
    formSection.scrollIntoView({ behavior: "smooth" });
  }
};

const AuthorityLayer = () => {
  return (
    <section className="relative py-20 md:py-28 bg-charcoal overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--accent)) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container-wide px-6 md:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 bg-accent/20 text-accent text-xs font-medium tracking-widest rounded-full mb-6">
            THE AUTHORITY LAYER
          </span>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-accent mb-6 tracking-wide">
            STOP BEING A COMMODITY.
            <br />
            START BEING THE AUTHORITY.
          </h2>
          <p className="text-lg md:text-xl text-white/70 max-w-3xl mx-auto font-body">
            Paid ads bring the volume; organic authority brings the trust. We
            build the visual identity and content engine that makes your leads
            close faster and your brand dominate the local feed.
          </p>
        </motion.div>

        {/* Video Showcase Carousel */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-20"
        >
          <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide -mx-6 px-6 md:mx-0 md:px-0 md:justify-center">
            {videoCards.map((card, index) => (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                whileHover={{ scale: 1.03, y: -5 }}
                className="flex-shrink-0 snap-center"
              >
                <div
                  className={`relative w-56 md:w-64 aspect-[9/16] rounded-2xl bg-gradient-to-b ${card.gradient} border border-accent/30 overflow-hidden group cursor-pointer`}
                >
                  {/* Play button overlay */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-accent/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-accent/30">
                      <Play className="w-7 h-7 text-white fill-white ml-1" />
                    </div>
                  </div>

                  {/* Card label */}
                  <div className="absolute bottom-0 inset-x-0 p-4 bg-gradient-to-t from-charcoal/95 to-transparent pt-12">
                    <h3 className="font-display text-lg text-white tracking-wide mb-1">
                      {card.title}
                    </h3>
                    <p className="text-xs text-white/60 font-body">
                      {card.label}
                    </p>
                  </div>

                  {/* Decorative lines */}
                  <div className="absolute top-4 left-4 right-4 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Three High-Value Offerings */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {offerings.map((offering, index) => (
            <motion.div
              key={offering.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="bg-white/5 border border-white/10 rounded-xl p-6 hover:border-accent/40 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center mb-4 group-hover:bg-accent/30 transition-colors">
                <offering.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-xl text-white tracking-wide mb-3">
                {offering.title}
              </h3>
              <p className="text-white/60 font-body text-sm leading-relaxed">
                {offering.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <a
            href="#diagnostic"
            onClick={scrollToForm}
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-body text-lg transition-colors group"
          >
            Build authority while you scale. Ask about the Multiplier in your
            Audit
            <span className="group-hover:translate-x-1 transition-transform">
              →
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default AuthorityLayer;
