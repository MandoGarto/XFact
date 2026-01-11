import { Monitor, ShoppingCart, Wrench, Search, Settings } from "lucide-react";

const services = [
  {
    icon: Monitor,
    title: "Website Design",
    description: "Responsive, γρήγορα sites ιδανικά για μικρές επιχειρήσεις και επαγγελματίες.",
  },
  {
    icon: Wrench,
    title: "IT Support",
    description: "Καθαρή εγκατάσταση Windows, βελτιστοποίηση ταχύτητας και πλήρης προστασία από ιούς.",
  },
  {
    icon: Search,
    title: "SEO Services",
    description: "Τεχνικό & on-page SEO, ταχύτητα φόρτωσης και στρατηγική για περισσότερη οργανική επισκεψιμότητα.",
  },
  {
    icon: ShoppingCart,
    title: "E-Shop Development",
    description: "WooCommerce e-shops με ασφαλείς πληρωμές, διαχείριση προϊόντων και SEO-friendly δομή.",
  },
  {
    icon: Settings,
    title: "Πακέτα Συντήρησης",
    description: "Backups, updates, monitoring και υποστήριξη για να μη σπαταλάς χρόνο με τεχνικά θέματα.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="relative py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 animate-fade-up">
            Όλα όσα χρειάζεστε για να{" "}
            <span className="text-gradient">πάτε online</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto animate-fade-up delay-100">
            Από websites μέχρι IT support, παρέχουμε πρακτικές λύσεις που βοηθούν την επιχείρησή σας να ευδοκιμήσει online.
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
