import Navbar from "@/components/Navbar";
import { CommandPalette } from "@/components/CommandPalette";
import AboutSection from "@/components/AboutSection";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen">
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>
      <CommandPalette />
      <Navbar />
      <main id="main-content">
        <AboutSection />
      </main>
      <Footer />
    </div>
  );
};

export default About;
