
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import { CommandPalette } from "@/components/CommandPalette";
import VerticalsSection from "@/components/VerticalsSection";
import ServicesGrid from "@/components/ServicesGrid";
import SpecialistsSection from "@/components/SpecialistsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import MapView from "@/components/MapView";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Skip to main content for accessibility */}
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>
      <CommandPalette />
      <Navbar />
      <Hero />
      <main id="main-content">
      <VerticalsSection />
      <ServicesGrid />
      <SpecialistsSection />
      <TestimonialsSection />
      <MapView />
      <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
