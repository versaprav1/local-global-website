
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <footer className="bg-earth-950 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-earth-500 to-ocean-600"></div>
              <span className="text-xl font-display font-bold">
                Local<span className="text-ocean-500">Global</span>
              </span>
            </div>
            <p className="text-earth-300 mb-6">
              Connecting local producers with global markets through sustainable growth pathways.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-earth-300 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="text-earth-300 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" className="text-earth-300 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="text-earth-300 hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-earth-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#producers" className="text-earth-300 hover:text-white transition-colors">Featured Producers</a></li>
              <li><a href="#opportunities" className="text-earth-300 hover:text-white transition-colors">Opportunities</a></li>
              <li><a href="#resources" className="text-earth-300 hover:text-white transition-colors">Resources</a></li>
              <li><a href="#contact" className="text-earth-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Resources</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-earth-300 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#" className="text-earth-300 hover:text-white transition-colors">Market Reports</a></li>
              <li><a href="#" className="text-earth-300 hover:text-white transition-colors">Certification Guide</a></li>
              <li><a href="#" className="text-earth-300 hover:text-white transition-colors">Producer Community</a></li>
              <li><a href="#" className="text-earth-300 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Subscribe</h3>
            <p className="text-earth-300 mb-4">
              Stay updated with the latest opportunities and resources.
            </p>
            <div className="flex space-x-2">
              <Input 
                placeholder="Your email" 
                className="bg-earth-900 border-earth-800 text-white placeholder:text-earth-500"
              />
              <Button type="submit" size="icon">
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
        
        <Separator className="bg-earth-800 mb-8" />
        
        <div className="text-center text-earth-400 text-sm">
          <p>© 2025 LocalGlobal. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-8">
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
