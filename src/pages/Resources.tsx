import Navbar from "@/components/Navbar";
import { CommandPalette } from "@/components/CommandPalette";
import ResourcesSection from "@/components/ResourcesSection";
import Footer from "@/components/Footer";

const Resources = () => {
  return (
    <div className="min-h-screen">
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>
      <CommandPalette />
      <Navbar />
      <main id="main-content">
        <ResourcesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Resources;
