import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight } from "lucide-react";

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    business: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Thanks for reaching out",
      description: "We'll be in touch within 1-2 business days.",
    });

    setFormData({ name: "", email: "", business: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className="section-padding bg-primary" id="contact">
      <div className="container-wide">
        <div className="max-w-4xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-4xl font-display font-medium text-primary-foreground mb-6">
                Book a Seasonal Fit Call
              </h2>
              <p className="text-primary-foreground/80 leading-relaxed mb-6">
                This is an alignment conversation, not a sales pitch. We'll 
                discuss your business, your timing, and whether a seasonal 
                sprint makes sense for you.
              </p>
              <div className="space-y-4 text-primary-foreground/70 text-sm">
                <p>• 20–30 minute call</p>
                <p>• No pressure, no pitch decks</p>
                <p>• Honest assessment of fit</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <Input
                  type="text"
                  name="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-primary-foreground/40"
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  placeholder="Email address"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-primary-foreground/40"
                />
              </div>
              <div>
                <Input
                  type="text"
                  name="business"
                  placeholder="Business name & industry"
                  value={formData.business}
                  onChange={handleChange}
                  required
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-primary-foreground/40"
                />
              </div>
              <div>
                <Textarea
                  name="message"
                  placeholder="Tell us about your peak season and what you're looking for..."
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-primary-foreground/40 resize-none"
                />
              </div>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-accent hover:bg-accent/90 text-accent-foreground"
                size="lg"
              >
                {isSubmitting ? "Sending..." : "Reserve Your Seasonal Fit Call"}
                {!isSubmitting && <ArrowRight className="ml-2 w-4 h-4" />}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
