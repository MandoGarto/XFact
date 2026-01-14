import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Target, CheckCircle, Users, Lightbulb } from "lucide-react";

const reasons = [
  "Προσωπική επικοινωνία χωρίς αυτοματοποιημένες απαντήσεις",
  "Γρήγορη παράδοση και άμεσες διορθώσεις",
  "Καθαρός κώδικας και σύγχρονες τεχνολογίες",
  "Σταθερές τιμές χωρίς κρυφές χρεώσεις",
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>Σχετικά με την Garti Tech | Website, IT Support, SEO</title>
        <meta
          name="description"
          content="Η Garti Tech δημιουργεί ιστοσελίδες και e-shop με έμφαση στην ποιότητα, την ταχύτητα και την ασφάλεια. Μάθετε περισσότερα για την προσέγγισή μας."
        />
        <link rel="canonical" href="https://garti.gr/about" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main className="pt-32 pb-24">
          <div className="container mx-auto px-4">
            {/* Hero */}
            <div className="max-w-4xl mx-auto text-center mb-20">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 animate-fade-up">
                Σχετικά με την{" "}
                <span className="text-gradient">Garti Tech</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed animate-fade-up delay-100">
                Είμαστε μια μικρή ομάδα που αναλαμβάνει κατασκευή ιστοσελίδων και τεχνική υποστήριξη για μικρές επιχειρήσεις και ελεύθερους επαγγελματίες. Δουλεύουμε απευθείας μαζί σας — χωρίς ενδιάμεσους ή περίπλοκες διαδικασίες.
              </p>
            </div>

            {/* Cards */}
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
              {/* Mission Card */}
              <div className="relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 animate-fade-up delay-200">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-4 text-gradient">
                  Η Προσέγγισή μας
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Ακούμε τι χρειάζεστε, προτείνουμε λύσεις που έχουν νόημα για εσάς, και παραδίδουμε ένα site που δουλεύει — χωρίς υπερβολές και άσκοπα features.
                </p>
              </div>

              {/* Values Card */}
              <div className="relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 animate-fade-up delay-250">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Lightbulb className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-4 text-gradient">
                  Τι μας ξεχωρίζει
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Δουλεύουμε με WordPress, WooCommerce και custom λύσεις. Κάθε project φτιάχνεται με βάση τις δικές σας ανάγκες — όχι από έτοιμο template.
                </p>
              </div>

              {/* Why Choose Us Card */}
              <div className="relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 animate-fade-up delay-300">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Users className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-4 text-gradient">
                  Γιατί εμάς
                </h2>
                <ul className="space-y-3">
                  {reasons.map((reason, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground text-sm">{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default About;
