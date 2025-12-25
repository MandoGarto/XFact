import { Monitor, ShoppingCart, Wrench, Search, Shield, HeadphonesIcon } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Website Creation",
    description: "Modern, responsive websites optimized for performance and user experience.",
  },
  {
    icon: ShoppingCart,
    title: "E-Shop Development",
    description: "Complete online stores with WooCommerce and payment integration.",
  },
  {
    icon: Wrench,
    title: "IT Support",
    description: "Setup, optimization, security, and troubleshooting for all your tech.",
  },
  {
    icon: Search,
    title: "SEO Services",
    description: "Technical and on-page SEO to boost your organic visibility.",
  },
  {
    icon: Shield,
    title: "Security & Maintenance",
    description: "Backups, updates, security monitoring, and ongoing support.",
  },
  {
    icon: HeadphonesIcon,
    title: "Dedicated Support",
    description: "Human-friendly communication for non-technical users.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-fade-up">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 animate-fade-up delay-100">
            Everything You Need to{" "}
            <span className="text-gradient">Go Digital</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-up delay-200">
            From websites to IT support, we provide practical solutions that help your business thrive online.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative p-8 rounded-2xl bg-gradient-card border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-glow animate-fade-up"
              style={{ animationDelay: `${(index + 2) * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
