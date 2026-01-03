import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, Target } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    customerValue: "",
    serviceArea: "",
    hasAutomation: "",
    peakWindow: "",
    additionalNotes: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Diagnostic Request Received!",
      description: "Your personalized 15-minute video diagnostic will be delivered to your inbox within 48 hours.",
    });

    setFormData({
      name: "",
      email: "",
      website: "",
      customerValue: "",
      serviceArea: "",
      hasAutomation: "",
      peakWindow: "",
      additionalNotes: "",
    });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const inputClasses =
    "bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-accent focus:ring-accent/30 h-12";

  return (
    <section className="relative py-20 md:py-28 bg-[hsl(var(--hero-dark))]" id="contact">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--accent)/0.08),transparent_70%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,hsl(var(--hero-dark)/0.5))]" />
      
      <div className="container-wide relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            {/* Title with bullseye icon */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-accent mb-6 uppercase tracking-wide flex items-center justify-center gap-1">
              <span>GET YOUR FREE C</span>
              <Target className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-accent inline-block" strokeWidth={2.5} />
              <span>REDIAGNOSTIC</span>
            </h2>
            
            {/* Headline */}
            <p className="text-xl md:text-2xl text-white font-medium mb-4">
              Stop guessing. Get a 15-minute surgical breakdown of your 2026 local market dominance.
            </p>
            
            {/* Sub-headline */}
            <p className="text-white/60 text-base md:text-lg">
              We audit your <span className="text-accent font-medium">Model</span>, <span className="text-accent font-medium">Market</span>, <span className="text-accent font-medium">Message</span>, <span className="text-accent font-medium">Media</span>, <span className="text-accent font-medium">Machine</span>, <span className="text-accent font-medium">Metrics</span>, and <span className="text-accent font-medium">Momentum</span>—for free.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Group 1: Basics */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center text-accent font-display font-bold text-sm">
                  1
                </div>
                <h3 className="font-display text-white uppercase tracking-wider text-sm">The Basics</h3>
              </div>
              
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-white/70 text-xs uppercase tracking-wider mb-2">
                    Your Name
                  </label>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label className="block text-white/70 text-xs uppercase tracking-wider mb-2">
                    Business Email
                  </label>
                  <Input
                    type="email"
                    name="email"
                    placeholder="you@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={inputClasses}
                  />
                </div>
                <div>
                  <label className="block text-white/70 text-xs uppercase tracking-wider mb-2">
                    Website URL
                  </label>
                  <Input
                    type="url"
                    name="website"
                    placeholder="https://yourbusiness.com"
                    value={formData.website}
                    onChange={handleChange}
                    className={inputClasses}
                  />
                </div>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-white/10" />

            {/* Group 2: Diagnostic Inputs */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center text-accent font-display font-bold text-sm">
                  2
                </div>
                <h3 className="font-display text-white uppercase tracking-wider text-sm">Diagnostic Inputs</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white/70 text-xs uppercase tracking-wider mb-2">
                    Average Project/Customer Value
                  </label>
                  <Select
                    value={formData.customerValue}
                    onValueChange={(value) =>
                      setFormData((prev) => ({ ...prev, customerValue: value }))
                    }
                  >
                    <SelectTrigger className={`${inputClasses} w-full`}>
                      <SelectValue placeholder="Select a range..." />
                    </SelectTrigger>
                    <SelectContent className="bg-card border-border">
                      <SelectItem value="under-500">Under $500</SelectItem>
                      <SelectItem value="500-1000">$500 - $1,000</SelectItem>
                      <SelectItem value="1000-2500">$1,000 - $2,500</SelectItem>
                      <SelectItem value="2500-5000">$2,500 - $5,000</SelectItem>
                      <SelectItem value="5000-plus">$5,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <label className="block text-white/70 text-xs uppercase tracking-wider mb-2">
                    Primary Service Area (Zip/City)
                  </label>
                  <Input
                    type="text"
                    name="serviceArea"
                    placeholder="e.g., 90210 or Los Angeles, CA"
                    value={formData.serviceArea}
                    onChange={handleChange}
                    className={inputClasses}
                  />
                </div>
              </div>

              <div>
                <label className="block text-white/70 text-xs uppercase tracking-wider mb-3">
                  Are you currently running any automated follow-up (SMS/Email)?
                </label>
                <RadioGroup
                  value={formData.hasAutomation}
                  onValueChange={(value) =>
                    setFormData((prev) => ({ ...prev, hasAutomation: value }))
                  }
                  className="flex gap-6"
                >
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <RadioGroupItem
                      value="yes"
                      className="border-white/30 text-white data-[state=checked]:border-accent data-[state=checked]:text-accent"
                    />
                    <span className="text-white/70 group-hover:text-white transition-colors">
                      Yes
                    </span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <RadioGroupItem
                      value="no"
                      className="border-white/30 text-white data-[state=checked]:border-accent data-[state=checked]:text-accent"
                    />
                    <span className="text-white/70 group-hover:text-white transition-colors">
                      No
                    </span>
                  </label>
                </RadioGroup>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-white/10" />

            {/* Group 3: Timing */}
            <div className="space-y-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center text-accent font-display font-bold text-sm">
                  3
                </div>
                <h3 className="font-display text-white uppercase tracking-wider text-sm">Timing</h3>
              </div>
              
              <div>
                <label className="block text-white/70 text-xs uppercase tracking-wider mb-2">
                  When is your next peak seasonal window?
                </label>
                <Select
                  value={formData.peakWindow}
                  onValueChange={(value) =>
                    setFormData((prev) => ({ ...prev, peakWindow: value }))
                  }
                >
                  <SelectTrigger className={`${inputClasses} w-full md:w-1/2`}>
                    <SelectValue placeholder="Select your peak season..." />
                  </SelectTrigger>
                  <SelectContent className="bg-card border-border">
                    <SelectItem value="jan-mar">January - March (Q1)</SelectItem>
                    <SelectItem value="apr-jun">April - June (Q2)</SelectItem>
                    <SelectItem value="jul-sep">July - September (Q3)</SelectItem>
                    <SelectItem value="oct-dec">October - December (Q4)</SelectItem>
                    <SelectItem value="year-round">Year-Round</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-white/70 text-xs uppercase tracking-wider mb-2">
                  Anything else we should know? (Optional)
                </label>
                <Textarea
                  name="additionalNotes"
                  placeholder="Tell us about your goals, challenges, or questions..."
                  value={formData.additionalNotes}
                  onChange={handleChange}
                  rows={3}
                  className={`${inputClasses} h-auto resize-none`}
                />
              </div>
            </div>

            {/* Submit Button with neon glow */}
            <div className="pt-4">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-display uppercase tracking-wider text-lg h-14 relative overflow-hidden group"
                size="lg"
                style={{
                  boxShadow: '0 0 30px hsl(var(--accent) / 0.5), 0 0 60px hsl(var(--accent) / 0.3), inset 0 1px 0 hsl(var(--accent-foreground) / 0.1)',
                }}
              >
                {/* Animated glow overlay */}
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                
                <span className="relative flex items-center justify-center gap-2">
                  {isSubmitting ? "Submitting..." : "RECOVER MY REVENUE"}
                  {!isSubmitting && <ArrowRight className="w-5 h-5" />}
                </span>
              </Button>

              {/* Note below button */}
              <p className="text-center text-white/50 text-sm mt-4">
                Your 15-minute video diagnostic will be delivered to your inbox within 48 hours.
              </p>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
