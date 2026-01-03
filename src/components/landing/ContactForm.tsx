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
    "bg-[#1A1A1A] border border-white/20 text-[#FFFFFF] placeholder:text-[#888888] focus:border-accent focus:ring-accent/30 focus:ring-1 h-12 transition-colors duration-200";

  const sevenMs = ["Model", "Market", "Message", "Media", "Machine", "Metrics", "Momentum"];

  return (
    <section className="relative py-20 md:py-28 bg-[hsl(var(--hero-dark))]" id="contact">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(var(--accent)/0.08),transparent_70%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,hsl(var(--hero-dark)/0.5))]" />
      
      {/* Container with max-width constraint */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10 md:mb-14">
            {/* Title with bullseye icon - responsive scaling with tight kerning */}
            <h2 className="font-display font-bold text-accent uppercase flex flex-wrap items-center justify-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mb-6" style={{ letterSpacing: '-0.05em' }}>
              <span>GET YOUR FREE C</span>
              <Target 
                className="text-accent inline-block flex-shrink-0 -mx-[0.08em]" 
                style={{ width: '0.8em', height: '0.8em' }}
                strokeWidth={2.5} 
              />
              <span>REDIAGNOSTIC</span>
            </h2>
            
            {/* Headline */}
            <p className="text-lg sm:text-xl md:text-2xl text-[#FFFFFF]/90 font-medium mb-5">
              Stop guessing. Get a 15-minute surgical breakdown of your 2026 local market dominance.
            </p>
            
            {/* Sub-headline */}
            <p className="text-[#FFFFFF]/90 text-sm sm:text-base md:text-lg mb-6">
              We audit your 7 pillars—for free:
            </p>
            
            {/* Diagnostic Pills with flex-wrap and glow */}
            <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
              {sevenMs.map((m) => (
                <span 
                  key={m} 
                  className="bg-[#1a1a1a] border border-accent/60 text-accent font-medium text-xs sm:text-sm uppercase tracking-wider px-4 py-1.5 rounded-full"
                  style={{ boxShadow: '0 0 10px rgba(0, 150, 255, 0.2)' }}
                >
                  {m}
                </span>
              ))}
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8 pt-[60px]">
            {/* Group 1: Basics */}
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center text-accent font-display font-bold text-xs sm:text-sm">
                  1
                </div>
                <h3 className="font-display text-accent uppercase tracking-wider text-sm sm:text-base">The Basics</h3>
              </div>
              
              {/* Single column on mobile, 2 columns on desktop */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                  <label className="block text-[#FFFFFF]/90 text-xs uppercase tracking-wider mb-2 font-medium">
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
                  <label className="block text-[#FFFFFF]/90 text-xs uppercase tracking-wider mb-2 font-medium">
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
                <div className="md:col-span-2">
                  <label className="block text-[#FFFFFF]/90 text-xs uppercase tracking-wider mb-2 font-medium">
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
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center text-accent font-display font-bold text-xs sm:text-sm">
                  2
                </div>
                <h3 className="font-display text-accent uppercase tracking-wider text-sm sm:text-base">Diagnostic Inputs</h3>
              </div>
              
              {/* Single column on mobile, 2 columns on desktop */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[#FFFFFF]/90 text-xs uppercase tracking-wider mb-2 font-medium">
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
                  <label className="block text-[#FFFFFF]/90 text-xs uppercase tracking-wider mb-2 font-medium">
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
                <label className="block text-[#FFFFFF]/90 text-xs uppercase tracking-wider mb-3 font-medium">
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
                      className="border-white/40 text-white data-[state=checked]:border-accent data-[state=checked]:text-accent"
                    />
                    <span className="text-white/80 group-hover:text-white transition-colors">
                      Yes
                    </span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <RadioGroupItem
                      value="no"
                      className="border-white/40 text-white data-[state=checked]:border-accent data-[state=checked]:text-accent"
                    />
                    <span className="text-white/80 group-hover:text-white transition-colors">
                      No
                    </span>
                  </label>
                </RadioGroup>
              </div>
            </div>

            {/* Divider */}
            <div className="border-t border-white/10" />

            {/* Group 3: Timing */}
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center text-accent font-display font-bold text-xs sm:text-sm">
                  3
                </div>
                <h3 className="font-display text-accent uppercase tracking-wider text-sm sm:text-base">Timing</h3>
              </div>
              
              <div>
                <label className="block text-[#FFFFFF]/90 text-xs uppercase tracking-wider mb-2 font-medium">
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
                <label className="block text-[#FFFFFF]/90 text-xs uppercase tracking-wider mb-2 font-medium">
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

            {/* Submit Button with neon glow and hover effects */}
            <div className="pt-4">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent text-accent-foreground font-display uppercase tracking-wider text-base sm:text-lg h-12 sm:h-14 relative overflow-hidden group transition-all duration-300 ease-out hover:scale-[1.05]"
                size="lg"
                style={{
                  boxShadow: '0 0 30px hsl(var(--accent) / 0.5), 0 0 60px hsl(var(--accent) / 0.3), inset 0 1px 0 hsl(var(--accent-foreground) / 0.1)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 40px hsl(var(--accent) / 0.7), 0 0 80px hsl(var(--accent) / 0.5), inset 0 1px 0 hsl(var(--accent-foreground) / 0.1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 30px hsl(var(--accent) / 0.5), 0 0 60px hsl(var(--accent) / 0.3), inset 0 1px 0 hsl(var(--accent-foreground) / 0.1)';
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
              <p className="text-center text-[#FFFFFF]/60 text-xs sm:text-sm mt-4">
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
