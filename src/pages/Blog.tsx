import Navbar from "@/components/Navbar";
import { CommandPalette } from "@/components/CommandPalette";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";

const Blog = () => {
  return (
    <div className="min-h-screen">
      <a href="#main-content" className="skip-to-content">
        Skip to main content
      </a>
      <CommandPalette />
      <Navbar />
      <main id="main-content">
        <BlogSection />
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
