import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, Monitor, Zap, Shield, Package } from "lucide-react";

const websitePackages = [
  {
    name: "Basic Website",
    price: "450 €",
    features: [
      "Πλήρως responsive ιστοσελίδα",
      "Home + έως 3 σελίδες",
      "Βασικό SEO",
      "Ταχύτητα φόρτωσης (basic)",
      "SSL + Hosting",
      "10 ημέρες υποστήριξη",
    ],
    cta: "Ζήτα Προσφορά",
    popular: false,
  },
  {
    name: "Standard Website",
    price: "750 €",
    features: [
      "Responsive design για όλες τις συσκευές",
      "Home + έως 7 σελίδες",
      "Βελτιστοποίηση εικόνων & ταχύτητας",
      "Βασικό SEO",
      "Gallery / Portfolio",
      "Analytics + Search Console",
      "Backups & ασφάλεια",
      "20 ημέρες υποστήριξη",
    ],
    cta: "Επιλογή Πακέτου",
    popular: true,
  },
  {
    name: "Pro Website",
    price: "1200 €",
    features: [
      "Home + έως 10 σελίδες υψηλής ποιότητας",
      "Full SEO (On-Page + Technical + Schema)",
      "Βελτιστοποίηση ταχύτητας (advanced)",
      "Πολυγλωσσικότητα (έως 2 γλώσσες)",
      "Backups & firewall ασφάλεια",
      "Google Analytics + Search Console",
      "30 ημέρες υποστήριξη",
    ],
    cta: "Ζήτα Προσφορά",
    popular: false,
  },
  {
    name: "E-Shop",
    price: "1000 – 2400 €",
    features: [
      "WooCommerce με έως 40 προϊόντα",
      "Stripe / PayPal / Viva Wallet",
      "Full SEO για προϊόντα",
      "Ταχύτητα φόρτωσης & optimized images",
      "Κουπόνια & προσφορές",
      "GDPR friendly",
      "Εκπαίδευση διαχείρισης",
    ],
    cta: "Δημιούργησε το E-Shop",
    popular: false,
  },
];

const itServices = [
  {
    icon: Monitor,
    name: "Format & Επανεγκατάσταση Windows",
    price: "40€",
    features: [
      "Καθαρή εγκατάσταση Windows",
      "Drivers",
      "Βασικά προγράμματα",
      "Έλεγχος λειτουργίας",
    ],
  },
  {
    icon: Zap,
    name: "Βελτιστοποίηση Υπολογιστή (PC / Laptop)",
    price: "30€",
    features: [
      "Καθαρισμός συστήματος",
      "Αφαίρεση άχρηστων εφαρμογών",
      "Βελτίωση ταχύτητας & εκκίνησης",
    ],
  },
  {
    icon: Shield,
    name: "Αφαίρεση Ιών & Κακόβουλου Λογισμικού",
    price: "40€",
    features: [
      "Πλήρης έλεγχος ασφαλείας",
      "Καθαρισμός ιών & malware",
      "Θωράκιση συστήματος",
      "Εγκατάσταση Antivirus",
    ],
  },
  {
    icon: Package,
    name: "Πακέτο Full IT Services",
    price: "100€",
    features: [
      "Format & Επανεγκατάσταση Windows",
      "Βελτιστοποίηση Υπολογιστή (PC / Laptop)",
      "Αφαίρεση Ιών & Κακόβουλου Λογισμικού",
    ],
    popular: true,
  },
];

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Παροχές | Garti Tech Services</title>
        <meta
          name="description"
          content="Πακέτα υπηρεσιών ιστοσελίδων, e-shop και IT υποστήριξης. Από 450€ για websites, 1000€ για e-shops και 30€ για IT services."
        />
      </Helmet>

      <Header />

      <main className="pt-32 pb-20">
        {/* Hero Section */}
        <section className="container mx-auto px-4 mb-20">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Πακέτα <span className="text-gradient">Υπηρεσιών</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Επιλέξτε το πακέτο που ταιριάζει στις ανάγκες σας. Όλα τα πακέτα
              περιλαμβάνουν ποιοτική δουλειά και υποστήριξη.
            </p>
          </div>
        </section>

        {/* Website Packages */}
        <section className="container mx-auto px-4 mb-24">
          <h2 className="text-3xl font-bold text-center mb-12">
            Πακέτα Ιστοσελίδων & E-Shop
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {websitePackages.map((pkg) => (
              <div
                key={pkg.name}
                className={`glass rounded-2xl p-6 relative transition-all duration-300 hover:scale-[1.02] ${
                  pkg.popular ? "ring-2 ring-primary" : ""
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                      Best Value
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                  <div className="text-3xl font-bold text-gradient">
                    {pkg.price}
                  </div>
                </div>
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant={pkg.popular ? "hero" : "glass"}
                  className="w-full"
                  asChild
                >
                  <a href="/#contact">{pkg.cta}</a>
                </Button>
              </div>
            ))}
          </div>
        </section>

        {/* IT Services */}
        <section className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">
            🔧 Επιπλέον IT Υπηρεσίες
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Τεχνική υποστήριξη για τον υπολογιστή σας με άμεση εξυπηρέτηση και
            εγγυημένα αποτελέσματα.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {itServices.map((service) => (
              <div
                key={service.name}
                className={`glass rounded-2xl p-6 relative transition-all duration-300 hover:scale-[1.02] ${
                  service.popular ? "ring-2 ring-primary" : ""
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                      Value Offer
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                    <service.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{service.name}</h3>
                  <div className="text-2xl font-bold text-gradient">
                    {service.price}
                  </div>
                </div>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 mt-20">
          <div className="glass rounded-3xl p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Έχεις ερωτήσεις;
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Επικοινώνησε μαζί μας για να συζητήσουμε το project σου και να
              βρούμε την καλύτερη λύση για εσένα.
            </p>
            <Button variant="hero" size="lg" asChild>
              <a href="/#contact">Επικοινωνία</a>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Services;
