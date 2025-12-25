import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      {/* Grid pattern background */}
      <div className="absolute inset-0 grid-pattern opacity-50" />
      
      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/15 rounded-full blur-3xl animate-pulse-glow delay-500" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 animate-fade-up">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground/80">
              Practical Digital Solutions
            </span>
          </div>

          {/* Main headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-up delay-100">
            Build Your Digital
            <br />
            <span className="text-gradient">Presence with Ease</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-fade-up delay-200">
            We help small businesses, startups, and professionals get online and operate securely — without the technical complexity.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up delay-300">
            <Button variant="hero" size="xl" asChild>
              <a href="#contact">
                Get Started
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="glass" size="xl" asChild>
              <a href="#services">
                View Services
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-20 pt-10 border-t border-border/50 animate-fade-up delay-400">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">100+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">5+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
