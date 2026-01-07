import { Zap, Shield, Clock, Users } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Γρήγορη παράδοση",
    description: "Sites σε λίγες μέρες",
  },
  {
    icon: Shield,
    title: "Ασφάλεια & GDPR",
    description: "Πρακτικές που προστατεύουν",
  },
  {
    icon: Clock,
    title: "Ταχύτητα",
    description: "Βελτιστοποίηση φόρτωσης",
  },
  {
    icon: Users,
    title: "Υποστήριξη για όλους",
    description: "Ακόμη και αν είσαι άσχετος",
  },
];

const WhyChooseSection = () => {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 right-0 w-1/2 h-96 bg-primary/5 rounded-l-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-fade-up">
              Why Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 animate-fade-up delay-100">
              Γιατί να επιλέξετε την
              <br />
              <span className="text-gradient">Garti Tech</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 animate-fade-up delay-200">
              Συνδυάζουμε τεχνογνωσία, απλότητα και υποστήριξη — ώστε να επικεντρώνεστε στη δουλειά σας και όχι στην τεχνολογία.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div
                  key={feature.title}
                  className="flex items-start gap-4 animate-fade-up"
                  style={{ animationDelay: `${(index + 3) * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-fade-up delay-300">
            <div className="relative rounded-2xl overflow-hidden glass p-8">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
              <div className="relative z-10">
                <div className="text-sm font-medium text-primary mb-2">Προτεινόμενο πακέτο</div>
                <div className="text-2xl font-bold mb-4">Standard Website</div>
                <p className="text-muted-foreground mb-6">
                  Responsive site έως 7 σελίδες με SEO, SSL hosting, υψηλή ταχύτητα & 20 ημέρες υποστήριξη
                </p>
                <div className="text-4xl font-bold text-gradient">Από 450€</div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
