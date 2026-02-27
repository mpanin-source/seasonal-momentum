import Header from "@/components/landing/Header";
import Hero from "@/components/landing/Hero";
import Q1GrowthWindows from "@/components/landing/Q1GrowthWindows";
import Problem from "@/components/landing/Problem";
import CoreOffer from "@/components/landing/CoreOffer";
import LeadPhilosophy from "@/components/landing/LeadPhilosophy";
import PhaseTwo from "@/components/landing/PhaseTwo";
import AuthorityLayer from "@/components/landing/AuthorityLayer";
import FitSection from "@/components/landing/FitSection";
import WhyItWorks from "@/components/landing/WhyItWorks";
import SeasonalTiers from "@/components/landing/SeasonalTiers";
import ContactForm from "@/components/landing/ContactForm";
import Footer from "@/components/landing/Footer";
import QuoteSection from "@/components/landing/QuoteSection";
import AlaCarteSection from "@/components/landing/AlaCarteSection";

const Index = () => {
  return (
    <>
      <Header />
      <main className="pt-16">
        <Hero />
        <Q1GrowthWindows />
        <Problem />
        <QuoteSection variant="full" />
        <CoreOffer />
        <LeadPhilosophy />
        <PhaseTwo />
        <AuthorityLayer />
        <FitSection />
        <WhyItWorks />
        <QuoteSection variant="short" />
        <AlaCarteSection />
        <SeasonalTiers />
        <QuoteSection variant="confidence" />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
};

export default Index;
