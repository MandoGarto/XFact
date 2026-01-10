import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative flex overflow-hidden bg-gradient-hero pt-32 pb-24 md:min-h-screen md:items-center md:justify-center">
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
              Τεχνολογία στα μέτρα σου
            </span>
          </div>

          {/* Main headline */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 animate-fade-up delay-100">
            Χτίζουμε αξιόπιστες ψηφιακές
            <br className="hidden md:block" />
            <span className="text-gradient">λύσεις για επιχειρήσεις & ιδιώτες</span>
          </h1>

          {/* Subheadline */}
          <p className="text-base md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed animate-fade-up delay-200">
            Από μοντέρνα websites και e-shops μέχρι IT υποστήριξη. Η Garti Tech σας δίνει λύσεις που απλά… δουλεύουν.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up delay-300">
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Ζήτα Δωρεάν Προσφορά
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button variant="glass" size="xl" asChild>
              <Link to="/services">
                Δες Πακέτα & Τιμές
              </Link>
            </Button>
          </div>

          {/* Social Proof Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mt-12 md:mt-20 pt-6 md:pt-10 border-t border-border/50 animate-fade-up delay-400">
            <div>
              <div className="text-2xl md:text-3xl font-bold text-gradient mb-2">5★</div>
              <div className="text-sm text-muted-foreground">Μέση βαθμολογία</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-gradient mb-2">24h</div>
              <div className="text-sm text-muted-foreground">Απάντηση σε αίτημα</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-gradient mb-2">Value Offer</div>
              <div className="text-sm text-muted-foreground">Έξυπνα πακέτα που συμφέρουν</div>
            </div>
            <div>
              <div className="text-2xl md:text-3xl font-bold text-gradient mb-2">Websites από 450€</div>
              <div className="text-sm text-muted-foreground">Πλήρες λειτουργικό και responsive</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;