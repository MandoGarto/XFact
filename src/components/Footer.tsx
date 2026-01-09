import { Mail, Phone } from "lucide-react";

const Footer = () => {
  const services = [
    { label: "Website Design", href: "/services" },
    { label: "E-Shop Development", href: "/services" },
    { label: "IT Support", href: "/services" },
    { label: "SEO Services", href: "/services" },
    { label: "Πακέτα Συντήρησης", href: "/services" },
  ];

  const links = [
    { label: "Αρχική", href: "/" },
    { label: "Υπηρεσίες", href: "/services" },
    { label: "FAQ", href: "/#faq" },
    { label: "Επικοινωνία", href: "/contact" },
  ];

  return (
    <footer className="relative py-16 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="/" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">G</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl">Garti Tech</span>
                <span className="text-xs text-muted-foreground">Τεχνολογία στα μέτρα σου</span>
              </div>
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Πρακτικές ψηφιακές λύσεις για επιχειρήσεις που θέλουν να ευδοκιμήσουν online.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Υπηρεσίες</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.label}>
                  <a
                    href={service.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {service.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Γρήγοροι Σύνδεσμοι</h4>
            <ul className="space-y-3">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">Επικοινωνία</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+306975523655"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  +30 697 552 3655
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@garti.gr"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  contact@garti.gr
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Garti Tech Services. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            GartiCode
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
