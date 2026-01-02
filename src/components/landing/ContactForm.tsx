import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight, Check } from "lucide-react";
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
    business: "",
    website: "",
    seasonalOffer: "",
    adHistory: "",
    budgetConfirm: false,
    responseConfirm: false,
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Application Received!",
      description: "Check your email for next steps. We'll be in touch within 24 hours to schedule your strategy session.",
    });

    setFormData({
      name: "",
      email: "",
      business: "",
      website: "",
      seasonalOffer: "",
      adHistory: "",
      budgetConfirm: false,
      responseConfirm: false,
      message: "",
    });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value,
    }));
  };

  const inputClasses =
    "bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-accent focus:ring-accent/20";

  return (
    <section className="section-padding bg-primary" id="contact">
      <div className="container-wide">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-medium text-primary-foreground mb-6 uppercase tracking-wide">
              Qualify for a Seasonal Sprint
            </h2>
            <p className="text-primary-foreground/80 leading-relaxed max-w-2xl mx-auto text-lg">
              We only accept 3 new sprints per month. Complete this 60-second check to see if your business is ready for a high-intensity lead cycle.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Basic Info */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block font-display text-primary-foreground text-sm uppercase tracking-wider mb-2">
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
                <label className="block font-display text-primary-foreground text-sm uppercase tracking-wider mb-2">
                  Email Address
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
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block font-display text-primary-foreground text-sm uppercase tracking-wider mb-2">
                  Business Name & Industry
                </label>
                <Input
                  type="text"
                  name="business"
                  placeholder="e.g., Peak Fitness - Gym"
                  value={formData.business}
                  onChange={handleChange}
                  required
                  className={inputClasses}
                />
              </div>
              <div>
                <label className="block font-display text-primary-foreground text-sm uppercase tracking-wider mb-2">
                  Current Business Website
                </label>
                <Input
                  type="url"
                  name="website"
                  placeholder="https://yourbusiness.com"
                  value={formData.website}
                  onChange={handleChange}
                  className={inputClasses}
                />
                <p className="text-primary-foreground/50 text-xs mt-1.5">
                  We'll perform a preliminary audit of your current digital presence before our call.
                </p>
              </div>
            </div>

            {/* Seasonal Hook Dropdown */}
            <div>
              <label className="block font-display text-primary-foreground text-sm uppercase tracking-wider mb-2">
                Do You Have a Specific Seasonal Offer or Promotion Ready?
              </label>
              <Select
                value={formData.seasonalOffer}
                onValueChange={(value) =>
                  setFormData((prev) => ({ ...prev, seasonalOffer: value }))
                }
              >
                <SelectTrigger className={`${inputClasses} w-full`}>
                  <SelectValue placeholder="Select an option..." />
                </SelectTrigger>
                <SelectContent className="bg-card border-border">
                  <SelectItem value="yes">Yes, I have one ready</SelectItem>
                  <SelectItem value="need-help">I need help creating one</SelectItem>
                  <SelectItem value="not-yet">Not yet</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Ad History Radio */}
            <div>
              <label className="block font-display text-primary-foreground text-sm uppercase tracking-wider mb-3">
                Have You Run Paid Ads in the Past 12 Months?
              </label>
              <RadioGroup
                value={formData.adHistory}
                onValueChange={(value) =>
                  setFormData((prev) => ({ ...prev, adHistory: value }))
                }
                className="flex flex-col gap-3"
              >
                <label className="flex items-center gap-3 cursor-pointer group">
                  <RadioGroupItem
                    value="yes-success"
                    className="border-primary-foreground/40 text-primary-foreground data-[state=checked]:border-accent data-[state=checked]:text-accent"
                  />
                  <span className="text-primary-foreground/80 group-hover:text-primary-foreground transition-colors">
                    Yes, successfully
                  </span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <RadioGroupItem
                    value="yes-failed"
                    className="border-primary-foreground/40 text-primary-foreground data-[state=checked]:border-accent data-[state=checked]:text-accent"
                  />
                  <span className="text-primary-foreground/80 group-hover:text-primary-foreground transition-colors">
                    Yes, but they failed
                  </span>
                </label>
                <label className="flex items-center gap-3 cursor-pointer group">
                  <RadioGroupItem
                    value="no-first-time"
                    className="border-primary-foreground/40 text-primary-foreground data-[state=checked]:border-accent data-[state=checked]:text-accent"
                  />
                  <span className="text-primary-foreground/80 group-hover:text-primary-foreground transition-colors">
                    No, this is my first time
                  </span>
                </label>
              </RadioGroup>
            </div>

            {/* Budget & Capacity Confirmations */}
            <div className="space-y-4">
              <label className="block font-display text-primary-foreground text-sm uppercase tracking-wider mb-2">
                Confirm Your Readiness
              </label>
              <label className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  name="budgetConfirm"
                  checked={formData.budgetConfirm}
                  onChange={handleChange}
                  className="mt-1 h-5 w-5 rounded border-primary-foreground/40 bg-transparent text-accent focus:ring-accent focus:ring-offset-0"
                />
                <span className="text-primary-foreground/80 group-hover:text-primary-foreground transition-colors">
                  I can commit a minimum of <strong className="text-primary-foreground">$2,000/month</strong> in ad spend during my peak season.
                </span>
              </label>
              <label className="flex items-start gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  name="responseConfirm"
                  checked={formData.responseConfirm}
                  onChange={handleChange}
                  className="mt-1 h-5 w-5 rounded border-primary-foreground/40 bg-transparent text-accent focus:ring-accent focus:ring-offset-0"
                />
                <span className="text-primary-foreground/80 group-hover:text-primary-foreground transition-colors">
                  I (or my team) can respond to new leads within <strong className="text-primary-foreground">24 hours</strong>.
                </span>
              </label>
            </div>

            {/* Additional Notes */}
            <div>
              <label className="block font-display text-primary-foreground text-sm uppercase tracking-wider mb-2">
                Anything Else We Should Know?
              </label>
              <Textarea
                name="message"
                placeholder="Tell us about your peak season timing, goals, or any questions..."
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className={`${inputClasses} resize-none`}
              />
            </div>

            {/* Value-Add Note */}
            <div className="bg-accent/10 border border-accent rounded-lg p-3 text-center">
              <p className="text-primary-foreground leading-relaxed">
                <strong className="text-accent">Note:</strong> Our service includes the construction of a custom, high-conversion lead funnel. We don't just send traffic to your existing homepage; we build a dedicated environment designed to turn clicks into customers.
              </p>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-display uppercase tracking-wider text-lg"
              size="lg"
            >
              {isSubmitting ? "Submitting..." : "Reserve Your Strategy Session"}
              {!isSubmitting && <ArrowRight className="ml-2 w-5 h-5" />}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
