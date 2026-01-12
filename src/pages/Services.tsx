import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check, Monitor, Zap, Shield, Package } from "lucide-react";
import { Link } from "react-router-dom";

const websitePackages = [
  {
    name: "Starter Website",
    price: "450 €",
    features: [
      "Πλήρως responsive ιστοσελίδα",
      "Home + έως 3 σελίδες",
      "Βασικό SEO",
      "Modern UI",
      "Social links / CTA",
      "Ασφαλής hosting με SSL",
      "Ταχύτητα φόρτωσης (basic)",
      "10 ημέρες υποστήριξη",
    ],
    optionalAddons: [
      { name: "Backup", paid: true },
      { name: "Gallery", paid: true },
      { name: "Contact form", paid: true },
    ],
    cta: "Αγορά πακέτου",
    popular: false,
  },
  {
    name: "Business Website",
    price: "800 €",
    features: [
      "Πλήρως responsive ιστοσελίδα",
      "Home + έως 7 σελίδες",
      "Advanced SEO",
      "Custom design",
      "Performance optimization",
      "Google Analytics / Search Console",
      "Ασφαλής hosting με SSL",
      "Backups & Monitoring",
      "20 ημέρες υποστήριξη",
    ],
    optionalAddons: [
      { name: "Gallery / Portfolio", paid: false },
    ],
    cta: "Αγορά πακέτου",
    popular: true,
  },
  {
    name: "Pro Website",
    price: "1100 €",
    priceNote: "Ιδανικό για επιχειρήσεις με αυξημένες απαιτήσεις",
    features: [
      "Πλήρως responsive ιστοσελίδα",
      "Home + έως 10 σελίδες υψηλής ποιότητας",
      "Full SEO",
      "Ασφαλής hosting με SSL",
      "Βελτιστοποίηση εικόνων & ταχύτητας",
      "Πολυγλωσσικότητα (έως 2 γλώσσες)",
      "Backups & Monitoring",
      "30 ημέρες υποστήριξη",
    ],
    optionalAddons: [
      { name: "Επιπλέον γλώσσες", paid: true },
    ],
    cta: "Αγορά πακέτου",
    popular: false,
  },
  {
    name: "E-Shop",
    price: "1000 - 2000 €",
    priceNote: "Τελική τιμή ανάλογα με λειτουργίες & προϊόντα",
    features: [
      "WooCommerce με έως 40 προϊόντα",
      "Stripe / PayPal / Viva Wallet",
      "Full SEO για προϊόντα",
      "Ταχύτητα φόρτωσης & optimized images",
      "Κουπόνια & προσφορές",
      "GDPR friendly",
    ],
    cta: "Αγορά πακέτου",
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
        <link rel="canonical" href="https://garti.gr/services" />
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
                    <span className="text-sm font-normal text-muted-foreground">Από </span>
                    {pkg.price}
                  </div>
                  {'priceNote' in pkg && pkg.priceNote && (
                    <p className="text-xs text-muted-foreground mt-1 italic">{pkg.priceNote}</p>
                  )}
                </div>
                <ul className="space-y-3 mb-4">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                {/* Optional Addons Section */}
                {'optionalAddons' in pkg && pkg.optionalAddons && pkg.optionalAddons.length > 0 && (
                  <div className="border-t border-border pt-4 mb-4">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-3">Προαιρετικά</p>
                    <ul className="space-y-2">
                      {pkg.optionalAddons.map((addon: { name: string; paid: boolean }) => (
                        <li key={addon.name} className="flex items-center justify-between gap-2">
                          <span className="text-sm text-muted-foreground">{addon.name}</span>
                          {addon.paid ? (
                            <span className="text-xs font-medium text-amber-500 bg-amber-500/10 px-2 py-0.5 rounded">
                              Επί πληρωμή
                            </span>
                          ) : (
                            <span className="text-xs font-medium text-green-500 bg-green-500/10 px-2 py-0.5 rounded">
                              Δωρεάν
                            </span>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                
                <Button
                  variant={pkg.popular ? "hero" : "glass"}
                  className="w-full"
                  asChild
                >
                  <Link to="/contact">{pkg.cta}</Link>
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

      </main>

      <Footer />
    </>
  );
};

export default Services;
