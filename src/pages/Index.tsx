
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProducerSection from "@/components/ProducerSection";
import OpportunitySection from "@/components/OpportunitySection";
import ResourcesSection from "@/components/ResourcesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ProducerSection />
      <OpportunitySection />
      <ResourcesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
