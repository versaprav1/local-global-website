
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import VerticalsSection from "@/components/VerticalsSection";
import ServicesGrid from "@/components/ServicesGrid";
import TreatmentCentersSection from "@/components/TreatmentCentersSection";
import SpecialistsSection from "@/components/SpecialistsSection";
import ResourcesSection from "@/components/ResourcesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <VerticalsSection />
      <ServicesGrid />
      <TreatmentCentersSection />
      <SpecialistsSection />
      <ResourcesSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
