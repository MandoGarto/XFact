import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const packages = [
  {
    name: "Starter",
    price: "€450",
    description: "Perfect for individuals and small projects",
    features: [
      "Responsive website (up to 5 pages)",
      "Basic SEO optimization",
      "Contact form integration",
      "Mobile-friendly design",
      "1 month support",
    ],
    popular: false,
  },
  {
    name: "Business",
    price: "€950",
    description: "Ideal for growing businesses",
    features: [
      "Everything in Starter",
      "Up to 10 pages",
      "E-commerce ready",
      "Advanced SEO package",
      "SSL certificate",
      "3 months support",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For established businesses with complex needs",
    features: [
      "Everything in Business",
      "Unlimited pages",
      "Custom integrations",
      "Priority support",
      "Maintenance package",
      "Dedicated account manager",
    ],
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="relative py-24 lg:py-32 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-fade-up">
            Pricing
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 animate-fade-up delay-100">
            Simple, Transparent{" "}
            <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-up delay-200">
            Packages suited to small budgets with no hidden fees.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg, index) => (
            <div
              key={pkg.name}
              className={`relative p-8 rounded-2xl border transition-all duration-300 animate-fade-up ${
                pkg.popular
                  ? "bg-gradient-card border-primary shadow-glow scale-105"
                  : "bg-card border-border hover:border-primary/50"
              }`}
              style={{ animationDelay: `${(index + 2) * 100}ms` }}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-gradient-primary text-primary-foreground text-sm font-semibold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-xl font-semibold mb-2">{pkg.name}</h3>
                <p className="text-muted-foreground text-sm mb-4">{pkg.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-4xl font-bold text-gradient">{pkg.price}</span>
                  {pkg.price !== "Custom" && (
                    <span className="text-muted-foreground">/project</span>
                  )}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-primary" />
                    </div>
                    <span className="text-sm text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                variant={pkg.popular ? "hero" : "outline"}
                className="w-full"
                size="lg"
                asChild
              >
                <a href="#contact">Get Started</a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
