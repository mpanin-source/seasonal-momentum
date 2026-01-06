import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, Target, Shield, Clock, CheckCircle2 } from "lucide-react";
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
  const [showSuccess, setShowSuccess] = useState(false);
  const [analyzingProgress, setAnalyzingProgress] = useState(0);
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    monthlyRevenue: "",
  });

  const auditPoints = [
    { letter: "M", title: "Model", description: "Is your offer structured for seasonal scale?" },
    { letter: "M", title: "Market", description: "Are you targeting high-intent 'Seasonal Clusters'?" },
    { letter: "M", title: "Message", description: "Does your copy trigger neuro-seasonal urgency?" },
    { letter: "M", title: "Media", description: "Is your creative 'Authority-Grade' or generic?" },
    { letter: "M", title: "Machine", description: "Is your CRM capturing and tagging every lead?" },
    { letter: "M", title: "Metrics", description: "Are you tracking ROI or just vanity clicks?" },
    { letter: "M", title: "Momentum", description: "Do you have a 12-month predictive roadmap?" },
  ];

  const revenueOptions = [
    { value: "under-50k", label: "Under $50k/month" },
    { value: "50k-100k", label: "$50k – $100k/month" },
    { value: "100k-250k", label: "$100k – $250k/month" },
    { value: "250k-500k", label: "$250k – $500k/month" },
    { value: "500k-plus", label: "$500k+/month" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setAnalyzingProgress(0);

    const progressInterval = setInterval(() => {
      setAnalyzingProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 200);

    await new Promise((resolve) => setTimeout(resolve, 3000));
    clearInterval(progressInterval);
    setAnalyzingProgress(100);
    
    setIsSubmitting(false);
    setShowSuccess(true);

    toast({
      title: "Audit Request Received!",
      description: "Your personalized funnel breakdown is on its way.",
    });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const canSubmit = formData.name && formData.email && formData.website && formData.monthlyRevenue;

  const inputClasses =
    "bg-[#1A1A1A] border border-[#333333] text-[#FFFFFF] placeholder:text-[#888888] focus:border-primary focus:ring-primary/40 focus:ring-2 focus:shadow-[0_0_10px_rgba(0,150,255,0.3)] h-12 transition-all duration-200";
  
  const labelClasses = "block text-[#FFFFFF] text-xs uppercase tracking-wider mb-2 font-medium";

  // Success State
  if (showSuccess) {
    return (
      <section className="relative py-20 md:py-28 bg-[hsl(220,20%,8%)]" id="contact">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(217,91%,53%,0.1),transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,hsl(220,20%,5%,0.5))]" />
        
        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="animate-fade-in">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center"
                style={{ boxShadow: '0 0 40px hsl(var(--primary) / 0.5)' }}>
                <Target className="w-10 h-10 text-primary" />
              </div>
              
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-primary uppercase mb-4">
                AUDIT REQUEST RECEIVED
              </h2>
              
              <p className="text-xl sm:text-2xl text-[#FFFFFF]/90 mb-6">
                Your personalized 7-Point Core Funnel Audit will be delivered within 48 hours, 
                complete with your custom Seasonal Blueprint and immediate action items.
              </p>
              
              <p className="text-[#FFFFFF]/60 text-sm sm:text-base">
                Check your inbox for confirmation.
              </p>
              
              <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto mt-10">
                {auditPoints.map((point, index) => (
                  <span 
                    key={index} 
                    className="bg-primary/20 border border-primary text-primary font-medium text-xs sm:text-sm uppercase tracking-wider px-4 py-1.5 rounded-full animate-pulse"
                    style={{ boxShadow: '0 0 15px rgba(0, 150, 255, 0.5)' }}
                  >
                    {point.title}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Loading/Analyzing State
  if (isSubmitting) {
    return (
      <section className="relative py-20 md:py-28 bg-[hsl(220,20%,8%)]" id="contact">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(217,91%,53%,0.1),transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,hsl(220,20%,5%,0.5))]" />
        
        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="animate-fade-in">
              <div className="relative w-32 h-32 mx-auto mb-8">
                <div className="absolute inset-0 rounded-full border-2 border-primary/30" />
                <div className="absolute inset-0 rounded-full border-2 border-primary border-t-transparent animate-spin" />
                <div className="absolute inset-4 rounded-full border-2 border-primary/50 border-b-transparent animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }} />
                <div className="absolute inset-8 rounded-full bg-primary/10 flex items-center justify-center">
                  <Target className="w-8 h-8 text-primary animate-pulse" />
                </div>
              </div>
              
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-primary uppercase mb-4">
                Analyzing Your Funnel...
              </h2>
              
              <div className="max-w-md mx-auto mb-6">
                <div className="h-2 bg-[#1A1A1A] rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary transition-all duration-200 rounded-full"
                    style={{ 
                      width: `${Math.min(analyzingProgress, 100)}%`,
                      boxShadow: '0 0 10px hsl(var(--primary) / 0.8)'
                    }}
                  />
                </div>
              </div>
              
              <div className="space-y-2 text-[#FFFFFF]/60 text-sm">
                <p className={analyzingProgress > 15 ? 'text-primary' : ''}>✓ Evaluating your Model...</p>
                <p className={analyzingProgress > 30 ? 'text-primary' : ''}>✓ Analyzing your Market...</p>
                <p className={analyzingProgress > 45 ? 'text-primary' : ''}>✓ Reviewing your Message...</p>
                <p className={analyzingProgress > 60 ? 'text-primary' : ''}>✓ Auditing your Media...</p>
                <p className={analyzingProgress > 75 ? 'text-primary' : ''}>✓ Inspecting your Machine...</p>
                <p className={analyzingProgress > 90 ? 'text-primary' : ''}>✓ Checking your Metrics & Momentum...</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-20 md:py-28 bg-[hsl(220,20%,8%)]" id="contact">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(217,91%,53%,0.1),transparent_70%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,hsl(220,20%,5%,0.5))]" />
      
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="font-display text-primary uppercase text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-wider font-bold mb-6">
              GET YOUR FREE 7-POINT CORE FUNNEL AUDIT
            </h2>
            
            <p className="text-lg sm:text-xl text-[#FFFFFF]/90 max-w-3xl mx-auto leading-relaxed">
              In 15 minutes, we'll show you exactly where your funnel is leaking traffic, trust, and profit—and 
              provide the "Seasonal Blueprint" to fix it this quarter. No fluff. No sales pitch. Just a data-backed roadmap.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            {/* Left Column: 7-Point Checklist */}
            <div>
              <h3 className="font-display text-primary uppercase text-lg tracking-wider mb-6 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5" />
                The 7 Elements We Audit:
              </h3>
              
              <div className="space-y-4">
                {auditPoints.map((point, index) => (
                  <div 
                    key={index}
                    className="flex items-start gap-4 p-4 bg-[#0d0d0d] rounded-lg border border-[#222] hover:border-primary/30 transition-colors"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center shrink-0">
                      <span className="text-primary font-display font-bold text-sm">{index + 1}</span>
                    </div>
                    <div>
                      <h4 className="text-[#FFFFFF] font-semibold mb-1">{point.title}</h4>
                      <p className="text-[#888888] text-sm">{point.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Lead Capture Form */}
            <div>
              <div className="bg-[#0d0d0d] border border-[#222] rounded-xl p-6 sm:p-8">
                <h3 className="font-display text-[#FFFFFF] uppercase text-lg tracking-wider mb-6 text-center">
                  Request Your Audit
                </h3>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className={labelClasses}>Your Name *</label>
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
                    <label className={labelClasses}>Work Email *</label>
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
                    <label className={labelClasses}>Website URL *</label>
                    <Input
                      type="url"
                      name="website"
                      placeholder="https://yourbusiness.com"
                      value={formData.website}
                      onChange={handleChange}
                      required
                      className={inputClasses}
                    />
                  </div>

                  <div>
                    <label className={labelClasses}>Current Monthly Revenue *</label>
                    <Select 
                      value={formData.monthlyRevenue} 
                      onValueChange={(value) => setFormData(prev => ({ ...prev, monthlyRevenue: value }))}
                    >
                      <SelectTrigger className={inputClasses}>
                        <SelectValue placeholder="Select your revenue range" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#1A1A1A] border-[#333333]">
                        {revenueOptions.map((option) => (
                          <SelectItem 
                            key={option.value} 
                            value={option.value}
                            className="text-[#FFFFFF] focus:bg-primary/20 focus:text-[#FFFFFF]"
                          >
                            {option.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <Button
                    type="submit"
                    disabled={!canSubmit}
                    className="w-full h-14 text-base font-bold uppercase tracking-wider bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{ boxShadow: canSubmit ? '0 0 30px hsl(var(--primary) / 0.5)' : 'none' }}
                  >
                    SEND MY FUNNEL AUDIT
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </form>

                {/* Trust Signals */}
                <div className="mt-6 pt-6 border-t border-[#222] space-y-4">
                  <div className="flex items-center gap-3 text-[#888888] text-sm">
                    <Shield className="w-4 h-4 text-primary shrink-0" />
                    <span>Your data is 100% secure. We only audit what you share.</span>
                  </div>
                  
                  <div className="flex items-center gap-3 text-sm">
                    <Clock className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-[#888888]">
                      <span className="text-primary font-semibold">Limited Capacity:</span> Due to the depth of our audits, 
                      we only accept 5 new requests per week. Currently: <span className="text-primary font-bold">2 spots remaining</span>.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;