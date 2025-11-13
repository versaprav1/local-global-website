
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { CheckCircle2, MapPin, MessageSquare, PhoneCall } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    isSubmitting: false,
    isSubmitted: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState(prev => ({ ...prev, isSubmitting: true }));
    
    // Simulate form submission
    setTimeout(() => {
      setFormState(prev => ({ 
        ...prev, 
        isSubmitting: false,
        isSubmitted: true,
        name: "",
        email: "",
        company: "",
        message: ""
      }));
      
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you as soon as possible.",
      });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-ocean-50/80 dark:bg-ocean-950/20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <Badge variant="outline" className="mb-4">Let's Connect</Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Grow Your Business?</h2>
          <p className="text-muted-foreground text-lg">
            Connect with our team to find the right opportunities for your products.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          <Card className="border shadow-lg overflow-hidden">
            <CardContent className="p-0">
              <div className="bg-gradient-to-br from-ocean-600 to-primary h-48 relative">
                <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_bottom_left,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>
              </div>
              <div className="p-8 -mt-24">
                <div className="bg-card shadow-lg rounded-xl p-6 mb-6">
                  <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                        <MapPin className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Our Location</p>
                        <p className="text-muted-foreground">123 Market Street, Suite 456, Portland, OR 97201</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                        <PhoneCall className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Phone Number</p>
                        <p className="text-muted-foreground">(555) 123-4567</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 flex-shrink-0">
                        <MessageSquare className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium">Email Address</p>
                        <p className="text-muted-foreground">contact@localglobal.com</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="text-center">
                  <h4 className="text-lg font-semibold mb-3">Connect With Us</h4>
                  <div className="flex justify-center space-x-4">
                    <a href="#" className="w-10 h-10 bg-card border rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                    </a>
                    <a href="#" className="w-10 h-10 bg-card border rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                    </a>
                    <a href="#" className="w-10 h-10 bg-card border rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    </a>
                    <a href="#" className="w-10 h-10 bg-card border rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border">
            <CardContent className="p-8">
              {formState.isSubmitted ? (
                <div className="text-center py-12">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
                  <p className="text-muted-foreground mb-6">
                    We've received your message and will get back to you soon.
                  </p>
                  <Button 
                    onClick={() => setFormState(prev => ({ ...prev, isSubmitted: false }))}
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
                        <Input 
                          id="name"
                          name="name"
                          placeholder="Your name"
                          value={formState.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                        <Input 
                          id="email"
                          name="email"
                          type="email"
                          placeholder="your@email.com"
                          value={formState.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium mb-2">Company / Farm Name</label>
                      <Input 
                        id="company"
                        name="company"
                        placeholder="Your business name"
                        value={formState.company}
                        onChange={handleChange}
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">Your Message</label>
                      <Textarea 
                        id="message"
                        name="message"
                        placeholder="Tell us about your products and what you're looking for..."
                        rows={5}
                        value={formState.message}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <Button 
                      type="submit" 
                      className="w-full"
                      disabled={formState.isSubmitting}
                    >
                      {formState.isSubmitting ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
