import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Problem from "@/components/landing/Problem";
import CoreOffer from "@/components/landing/CoreOffer";
import LeadPhilosophy from "@/components/landing/LeadPhilosophy";
import PhaseTwo from "@/components/landing/PhaseTwo";
import FitSection from "@/components/landing/FitSection";
import WhyItWorks from "@/components/landing/WhyItWorks";
import ContactForm from "@/components/landing/ContactForm";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <>
      <Header />
      <main className="pt-16">
        <Hero />
        <Problem />
        <CoreOffer />
        <LeadPhilosophy />
        <PhaseTwo />
        <FitSection />
        <WhyItWorks />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
};

export default Index;
