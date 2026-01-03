import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, ArrowLeft, Target, HelpCircle, Loader2, Flame } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const ContactForm = () => {
  const { toast } = useToast();
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [analyzingProgress, setAnalyzingProgress] = useState(0);
  
  const [formData, setFormData] = useState({
    // Step 1: Identity
    name: "",
    email: "",
    website: "",
    // Step 2: Infrastructure
    customerValue: "",
    serviceArea: "",
    hasAutomation: "",
    competitor: "",
    // Step 3: Opportunity
    peakWindow: "",
    additionalNotes: "",
  });

  // Calculate which pills should glow based on completed fields
  const getPillStatus = (pillName: string): boolean => {
    switch (pillName) {
      case "Model":
        return !!formData.customerValue;
      case "Market":
        return !!formData.serviceArea || !!formData.competitor;
      case "Message":
        return !!formData.website;
      case "Media":
        return !!formData.email;
      case "Machine":
        return !!formData.hasAutomation;
      case "Metrics":
        return !!formData.peakWindow;
      case "Momentum":
        return !!formData.additionalNotes;
      default:
        return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setAnalyzingProgress(0);

    // Simulate analyzing progress
    const progressInterval = setInterval(() => {
      setAnalyzingProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 200);

    // Wait 3 seconds for animation
    await new Promise((resolve) => setTimeout(resolve, 3000));
    clearInterval(progressInterval);
    setAnalyzingProgress(100);
    
    setIsSubmitting(false);
    setShowSuccess(true);

    toast({
      title: "Protocol Initiated!",
      description: "Your surgical breakdown is being recorded.",
    });
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

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.name && formData.email;
      case 2:
        return formData.competitor; // Competitor is required
      case 3:
        return true;
      default:
        return false;
    }
  };

  const inputClasses =
    "bg-[#1A1A1A] border border-[#333333] text-[#FFFFFF] placeholder:text-[#888888] focus:border-accent focus:ring-accent/40 focus:ring-2 focus:shadow-[0_0_10px_rgba(0,150,255,0.3)] h-12 transition-all duration-200";
  
  const labelClasses = "block text-[#FFFFFF] text-xs uppercase tracking-wider mb-2 font-medium";

  const sevenMs = ["Model", "Market", "Message", "Media", "Machine", "Metrics", "Momentum"];

  // Success State
  if (showSuccess) {
    return (
      <section className="relative py-20 md:py-28 bg-[hsl(220,20%,8%)]" id="contact">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(217,91%,53%,0.1),transparent_70%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,hsl(220,20%,5%,0.5))]" />
        
        <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="animate-fade-in">
              <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center"
                style={{ boxShadow: '0 0 40px hsl(var(--accent) / 0.5)' }}>
                <Target className="w-10 h-10 text-accent" />
              </div>
              
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-accent uppercase mb-4">
                PROTOCOL INITIATED
              </h2>
              
              <p className="text-xl sm:text-2xl text-[#FFFFFF]/90 mb-6">
                Your surgical breakdown is being recorded.
              </p>
              
              <p className="text-[#FFFFFF]/60 text-sm sm:text-base">
                Expect your personalized 15-minute video diagnostic in your inbox within 48 hours.
              </p>
              
              {/* All pills glowing */}
              <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto mt-10">
                {sevenMs.map((m) => (
                  <span 
                    key={m} 
                    className="bg-accent/20 border border-accent text-accent font-medium text-xs sm:text-sm uppercase tracking-wider px-4 py-1.5 rounded-full animate-pulse"
                    style={{ boxShadow: '0 0 15px rgba(0, 150, 255, 0.5)' }}
                  >
                    {m}
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
              {/* Animated scanning effect */}
              <div className="relative w-32 h-32 mx-auto mb-8">
                <div className="absolute inset-0 rounded-full border-2 border-accent/30" />
                <div className="absolute inset-0 rounded-full border-2 border-accent border-t-transparent animate-spin" />
                <div className="absolute inset-4 rounded-full border-2 border-accent/50 border-b-transparent animate-spin" style={{ animationDirection: 'reverse', animationDuration: '1.5s' }} />
                <div className="absolute inset-8 rounded-full bg-accent/10 flex items-center justify-center">
                  <Target className="w-8 h-8 text-accent animate-pulse" />
                </div>
              </div>
              
              <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-accent uppercase mb-4">
                Analyzing Systems...
              </h2>
              
              {/* Progress bar */}
              <div className="max-w-md mx-auto mb-6">
                <div className="h-2 bg-[#1A1A1A] rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-accent transition-all duration-200 rounded-full"
                    style={{ 
                      width: `${Math.min(analyzingProgress, 100)}%`,
                      boxShadow: '0 0 10px hsl(var(--accent) / 0.8)'
                    }}
                  />
                </div>
              </div>
              
              <div className="space-y-2 text-[#FFFFFF]/60 text-sm">
                <p className={analyzingProgress > 20 ? 'text-accent' : ''}>✓ Scanning market position...</p>
                <p className={analyzingProgress > 40 ? 'text-accent' : ''}>✓ Analyzing competitor landscape...</p>
                <p className={analyzingProgress > 60 ? 'text-accent' : ''}>✓ Evaluating automation gaps...</p>
                <p className={analyzingProgress > 80 ? 'text-accent' : ''}>✓ Calculating revenue opportunities...</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative py-20 md:py-28 bg-[hsl(220,20%,8%)]" id="contact">
      {/* Background effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(217,91%,53%,0.1),transparent_70%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,hsl(220,20%,5%,0.5))]" />
      
      {/* Container with max-width constraint */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-6 md:mb-8">
            {/* Primary Call-Out with Fire Icon */}
            <div className="flex flex-col items-center mb-6">
              <div className="flex items-center justify-center gap-2 mb-2">
                <Flame className="w-6 h-6 sm:w-7 sm:h-7 text-accent animate-pulse" style={{ filter: 'drop-shadow(0 0 8px hsl(var(--accent) / 0.8))' }} />
                <span className="font-display text-accent uppercase text-xl sm:text-2xl md:text-3xl tracking-wider font-bold">
                  READY TO SCALE?
                </span>
                <Flame className="w-6 h-6 sm:w-7 sm:h-7 text-accent animate-pulse" style={{ filter: 'drop-shadow(0 0 8px hsl(var(--accent) / 0.8))' }} />
              </div>
              <h2 className="font-display text-accent uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-wider font-bold">
                GET YOUR FREE SEASONAL GROWTH AUDIT
              </h2>
            </div>
            
            {/* Sub-Headline */}
            <p className="text-base sm:text-lg md:text-xl text-[#FFFFFF]/90 mb-5 max-w-2xl mx-auto leading-relaxed">
              Stop guessing. Get an actionable 15-minute roadmap to dominate your local market and start capturing more high-intent leads every single month.
            </p>
          </div>

          {/* Sticky Protocol Pills */}
          <div className="sticky top-0 z-20 bg-[hsl(220,20%,8%)]/95 backdrop-blur-sm py-4 mb-8 -mx-4 px-4 border-b border-white/10">
            <p className="text-accent text-xs sm:text-sm text-center mb-3 uppercase tracking-widest font-bold">
              OUR 7-POINT SYSTEM FOR GUARANTEED SCALE:
            </p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              {sevenMs.map((m) => {
                const isActive = getPillStatus(m);
                return (
                  <span 
                    key={m} 
                    className={`font-medium text-[10px] sm:text-xs uppercase tracking-wider px-3 py-1 sm:px-4 sm:py-1.5 rounded-full transition-all duration-500 ${
                      isActive 
                        ? 'bg-accent/20 border border-accent text-accent animate-pulse' 
                        : 'bg-[#1a1a1a] border border-accent/30 text-accent/60'
                    }`}
                    style={{ 
                      boxShadow: isActive 
                        ? '0 0 15px rgba(0, 150, 255, 0.5)' 
                        : '0 0 10px rgba(0, 150, 255, 0.1)' 
                    }}
                  >
                    {m}
                  </span>
                );
              })}
            </div>
          </div>

          {/* Step Indicator - Clear & Centered */}
          <div className="text-center mb-4">
            <p className="text-[#FFFFFF]/70 text-xs uppercase tracking-wider mb-3">
              Fast 3-Step Process
            </p>
          </div>
          <div className="flex items-center justify-center gap-2 sm:gap-4 mb-6">
            {[1, 2, 3].map((step) => (
              <div key={step} className="flex items-center">
                <div 
                  className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center font-display text-base sm:text-lg font-bold transition-all duration-300 ${
                    step === currentStep 
                      ? 'bg-accent text-accent-foreground' 
                      : step < currentStep 
                        ? 'bg-accent/30 text-accent border-2 border-accent' 
                        : 'bg-[#1A1A1A] text-[#888888] border-2 border-[#333333]'
                  }`}
                  style={step === currentStep ? { boxShadow: '0 0 25px hsl(var(--accent) / 0.6)' } : {}}
                >
                  {step}
                </div>
                {step < 3 && (
                  <div className={`w-8 sm:w-16 md:w-20 h-1 mx-1 sm:mx-2 rounded-full transition-all duration-300 ${
                    step < currentStep ? 'bg-accent' : 'bg-[#333333]'
                  }`} />
                )}
              </div>
            ))}
          </div>

          {/* Step Labels */}
          <div className="text-center mb-8">
            <span className="text-accent font-display uppercase tracking-wider text-sm sm:text-base font-bold">
              Step {currentStep}: {currentStep === 1 ? 'Identity' : currentStep === 2 ? 'Infrastructure' : 'Opportunity'}
            </span>
          </div>

          <TooltipProvider>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Step 1: Identity */}
              {currentStep === 1 && (
                <div className="space-y-5 animate-fade-in">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center text-accent font-display font-bold text-xs sm:text-sm">
                      1
                    </div>
                    <h3 className="font-display text-accent uppercase tracking-wider text-sm sm:text-base">Identity</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
                      <label className={labelClasses}>Business Email *</label>
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
                      <label className={labelClasses}>Website URL</label>
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
              )}

              {/* Step 2: Infrastructure */}
              {currentStep === 2 && (
                <div className="space-y-5 animate-fade-in">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center text-accent font-display font-bold text-xs sm:text-sm">
                      2
                    </div>
                    <h3 className="font-display text-accent uppercase tracking-wider text-sm sm:text-base">Infrastructure</h3>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <label className="text-[#FFFFFF] text-xs uppercase tracking-wider font-medium">
                          Average Project/Customer Value
                        </label>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <HelpCircle className="w-4 h-4 text-[#888888] hover:text-accent cursor-help transition-colors" />
                          </TooltipTrigger>
                          <TooltipContent className="max-w-xs bg-[#1A1A1A] border-accent/30 text-[#FFFFFF]">
                            <p className="text-sm">Why we ask: This helps us calculate your potential revenue recovery and prioritize high-impact recommendations.</p>
                          </TooltipContent>
                        </Tooltip>
                      </div>
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
                      <label className={labelClasses}>Primary Service Area (Zip/City)</label>
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

                  {/* Competitor Field - Required */}
                  <div>
                    <label className={labelClasses}>
                      Who is your #1 local competitor? *
                    </label>
                    <Input
                      type="text"
                      name="competitor"
                      placeholder="Company name or website"
                      value={formData.competitor}
                      onChange={handleChange}
                      required
                      className={inputClasses}
                    />
                    <p className="text-[#888888] text-xs mt-2 italic">
                      We use this for your market-gap analysis
                    </p>
                  </div>

                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <label className="text-[#FFFFFF] text-xs uppercase tracking-wider font-medium">
                        Are you currently running any automated follow-up (SMS/Email)?
                      </label>
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <HelpCircle className="w-4 h-4 text-[#888888] hover:text-accent cursor-help transition-colors" />
                        </TooltipTrigger>
                        <TooltipContent className="max-w-xs bg-[#1A1A1A] border-accent/30 text-[#FFFFFF]">
                          <p className="text-sm">Why we ask: Automation gaps are often the biggest revenue leaks. This tells us where to focus your diagnostic.</p>
                        </TooltipContent>
                      </Tooltip>
                    </div>
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
              )}

              {/* Step 3: Opportunity */}
              {currentStep === 3 && (
                <div className="space-y-5 animate-fade-in">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-accent/20 border border-accent/40 flex items-center justify-center text-accent font-display font-bold text-xs sm:text-sm">
                      3
                    </div>
                    <h3 className="font-display text-accent uppercase tracking-wider text-sm sm:text-base">Opportunity</h3>
                  </div>
                  
                  <div>
                    <label className={labelClasses}>When is your next peak seasonal window?</label>
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
                    <label className={labelClasses}>Anything else we should know? (Optional)</label>
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
              )}

              {/* Navigation Buttons */}
              <div className="pt-6 flex items-center justify-between gap-4">
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="flex items-center gap-2 text-[#FFFFFF]/60 hover:text-accent transition-colors text-sm font-medium"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    Back
                  </button>
                ) : (
                  <div />
                )}

                {currentStep < 3 ? (
                  <Button
                    type="button"
                    onClick={nextStep}
                    disabled={!canProceed()}
                    className="bg-accent text-accent-foreground font-display uppercase tracking-wider text-sm h-12 px-8 relative overflow-hidden group transition-all duration-300 ease-out hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                    style={{
                      boxShadow: '0 0 20px hsl(var(--accent) / 0.4)',
                    }}
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    <span className="relative flex items-center gap-2">
                      Next
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Button>
                ) : (
                  <Button
                    type="submit"
                    className="bg-accent text-accent-foreground font-display uppercase tracking-wider text-base sm:text-lg h-12 sm:h-14 px-8 sm:px-12 relative overflow-hidden group transition-all duration-300 ease-out hover:scale-[1.05]"
                    style={{
                      boxShadow: '0 0 30px hsl(var(--accent) / 0.5), 0 0 60px hsl(var(--accent) / 0.3)',
                    }}
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    <span className="relative flex items-center gap-2">
                      RECOVER MY REVENUE
                      <ArrowRight className="w-5 h-5" />
                    </span>
                  </Button>
                )}
              </div>

              {/* Step note */}
              {currentStep === 3 && (
                <p className="text-center text-[#FFFFFF]/60 text-xs sm:text-sm mt-4">
                  Your 15-minute video diagnostic will be delivered to your inbox within 48 hours.
                </p>
              )}
            </form>
          </TooltipProvider>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
