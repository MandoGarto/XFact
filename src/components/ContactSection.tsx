import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

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
                Επικοινωνία
              </span>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 animate-fade-up delay-100">
                Έτοιμος να{" "}
                <span className="text-gradient">ξεκινήσεις;</span>
              </h2>
              
              <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-10 animate-fade-up delay-200">
                Φτιάξε ένα website ή λύσε άμεσα το IT πρόβλημα που σε απασχολεί.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up delay-300">
                <Button variant="hero" size="xl" asChild>
                  <a href="https://garti.gr/contact">
                    Επικοινωνήστε μαζί μας
                    <ArrowRight className="w-5 h-5" />
                  </a>
                </Button>
                <Button variant="glass" size="xl" asChild>
                  <a href="#services">
                    Δείτε τα πακέτα
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
