import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { MissionStory } from "@/components/MissionStory";
import { HowItWorks } from "@/components/HowItWorks";
import { Benefits } from "@/components/Benefits";
import { Testimonials } from "@/components/Testimonials";
import { Services } from "@/components/Services";
import { LeadForm } from "@/components/LeadForm";
import { Footer } from "@/components/Footer";

const Index = () => {
  const scrollToForm = () => {
    const formElement = document.getElementById('contact-form');
    if (formElement) {
      formElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation onCtaClick={scrollToForm} />
      <main className="pt-20">
        <Hero onCtaClick={scrollToForm} />
        <div id="mission">
          <MissionStory />
        </div>
        <div id="how-it-works">
          <HowItWorks />
        </div>
        <Benefits />
        <Testimonials />
        <div id="services">
          <Services />
        </div>
        <LeadForm />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
