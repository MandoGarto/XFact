import { Mail, Phone, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import TrustBadges from "./TrustBadges";

const Footer = () => {
  const services = [
    "Website Design",
    "E-Shop Development",
    "IT Support",
    "SEO Services",
  ];

  const links = [
    { label: "Αρχική", href: "/" },
    { label: "Υπηρεσίες", href: "/services" },
    { label: "Portfolio", href: "/projects" },
    { label: "Επικοινωνία", href: "/contact" },
  ];

  return (
    <footer className="relative pt-20 pb-8 border-t border-border overflow-hidden">
      {/* Background accents */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Trust Badges */}
        <TrustBadges />
        {/* Top section with logo */}
        <div className="flex items-center gap-4 mb-16 pb-12 border-b border-border/50">
          <Logo className="w-14 h-14" />
          <p className="text-muted-foreground">Τεχνολογία στα μέτρα σου</p>
        </div>

        {/* Main grid */}
        <div className="grid md:grid-cols-4 gap-10 mb-16">
          {/* Services */}
          <div>
            <h4 className="font-semibold mb-6 text-sm uppercase tracking-wider text-primary">Υπηρεσίες</h4>
            <ul className="space-y-4">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-muted-foreground">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-6 text-sm uppercase tracking-wider text-primary">Σύνδεσμοι</h4>
            <ul className="space-y-4">
              {links.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2 group"
                  >
                    <span>{link.label}</span>
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-6 text-sm uppercase tracking-wider text-primary">Επικοινωνία</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+306975523655"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  <span>+30 697 552 3655</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:contact@garti.gr"
                  className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  <span>contact@garti.gr</span>
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Garti Tech Services.
          </p>
          <p className="text-sm text-muted-foreground font-medium">
            GartiCode
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;