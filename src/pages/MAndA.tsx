import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Hero } from "@/components/mna/Hero";
import { TrustStrip } from "@/components/mna/TrustStrip";
import { ProcessPipeline } from "@/components/mna/ProcessPipeline";
import { ListingsPreview } from "@/components/mna/ListingsPreview";
import { AudienceSplit } from "@/components/mna/AudienceSplit";
import { SecuritySection } from "@/components/mna/SecuritySection";
import { ConfidentialIntake } from "@/components/mna/ConfidentialIntake";
import { MnaFaq } from "@/components/mna/MnaFaq";
import { FinalCta } from "@/components/mna/FinalCta";

const MAndA = () => {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <a href="#intake" className="skip-to-content">
        Skip to intake form
      </a>
      <Navbar />
      <main>
        <Hero />
        <AudienceSplit />
        <TrustStrip />
        <ProcessPipeline />
        <ListingsPreview />
        <SecuritySection />
        <ConfidentialIntake />
        <MnaFaq />
        <FinalCta />
      </main>
      <Footer />
    </div>
  );
};

export default MAndA;
