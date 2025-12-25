import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="relative py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden glass p-8 md:p-12 lg:p-16">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/5" />
            
            <div className="relative z-10 text-center">
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-fade-up">
                Get In Touch
              </span>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 animate-fade-up delay-100">
                Ready to Start Your{" "}
                <span className="text-gradient">Digital Journey?</span>
              </h2>
              
              <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10 animate-fade-up delay-200">
                Let's discuss how we can help your business grow online. Get in touch for a free consultation.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-up delay-300">
                <Button variant="hero" size="xl" asChild>
                  <a href="mailto:info@gartitech.com">
                    Start a Project
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </Button>
              </div>

              <div className="grid md:grid-cols-3 gap-6 pt-8 border-t border-border/50 animate-fade-up delay-400">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground">Email</span>
                  <a href="mailto:info@gartitech.com" className="font-medium hover:text-primary transition-colors">
                    info@gartitech.com
                  </a>
                </div>
                
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground">Phone</span>
                  <a href="tel:+306900000000" className="font-medium hover:text-primary transition-colors">
                    +30 690 000 0000
                  </a>
                </div>
                
                <div className="flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-2">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm text-muted-foreground">Location</span>
                  <span className="font-medium">Greece</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
