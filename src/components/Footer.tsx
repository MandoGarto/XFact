import { Monitor, ShoppingCart, Wrench, Search, Shield, Mail } from "lucide-react";

const Footer = () => {
  const services = [
    { label: "Websites", href: "#services" },
    { label: "E-Commerce", href: "#services" },
    { label: "IT Support", href: "#services" },
    { label: "SEO", href: "#services" },
    { label: "Maintenance", href: "#services" },
  ];

  const links = [
    { label: "Home", href: "/" },
    { label: "Services", href: "#services" },
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
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
              <span className="font-bold text-xl">Garti Tech</span>
            </a>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Practical digital solutions for businesses that want to thrive online.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
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
            <h4 className="font-semibold mb-4">Quick Links</h4>
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
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:info@gartitech.com"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4" />
                  info@gartitech.com
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
            Made with ❤️ in Greece
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
