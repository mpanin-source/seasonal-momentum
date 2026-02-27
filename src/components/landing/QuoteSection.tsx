import { motion } from "framer-motion";

interface QuoteSectionProps {
  variant: "full" | "short" | "confidence";
}

const QuoteSection = ({ variant }: QuoteSectionProps) => {
  if (variant === "full") {
    return (
      <section id="philosophy-quote" className="section-padding bg-background">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto rounded-2xl p-8 md:p-12 border-l-4 border-accent shadow-sm"
          style={{ background: "hsl(var(--accent) / 0.05)" }}
        >
          <p className="text-lg md:text-xl leading-relaxed text-foreground mb-4">
            ROAS, Return On Ad Spend, is one of the most misunderstood metrics in paid ads.
            People chase big numbers without understanding what they actually mean. Context matters.
            You need to know your close rates, deal size, and lifetime value before judging performance.
            Otherwise, you're making decisions in the dark.
          </p>
          <p className="text-lg md:text-xl leading-relaxed text-foreground">
            ROAS isn't about bragging rights. It's about clarity. When you understand your full
            customer journey, the numbers don't lie. And neither do we.
          </p>
          <p className="text-sm text-muted-foreground mt-4 italic">— Creative Core</p>
        </motion.div>
      </section>
    );
  }

  if (variant === "short") {
    return (
      <section id="reinforcement-quote" className="py-8 bg-background">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto px-6 py-4 text-center border-t-2 border-b-2 border-accent"
        >
          <p className="text-lg md:text-xl italic text-foreground">
            When you understand your full customer journey, the numbers don't lie. And neither do we.
          </p>
          <p className="text-sm text-muted-foreground mt-3 italic">— Creative Core Philosophy</p>
        </motion.div>
      </section>
    );
  }

  // confidence variant
  return (
    <section id="confidence-quote" className="section-padding bg-background">
      <motion.div
        initial={{ opacity: 0, scale: 1.02 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto rounded-xl p-6 md:p-8"
        style={{ background: "hsl(var(--primary) / 0.1)" }}
      >
        <p className="text-lg md:text-xl font-bold text-foreground">
          Is your ROAS good but your bank account doesn't feel it?
        </p>
        <p className="text-base md:text-lg text-foreground my-3">
          Here's the issue: You're optimizing the wrong metric.
        </p>
        <p className="text-lg font-bold text-accent">
          We don't chase vanity numbers. We chase profit.
        </p>
        <button
          onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
          className="mt-4 text-sm text-accent hover:text-accent/80 transition-colors font-medium"
        >
          Ready to see what's actually working? →
        </button>
      </motion.div>
    </section>
  );
};

export default QuoteSection;
