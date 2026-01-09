import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Target, CheckCircle } from "lucide-react";

const reasons = [
  "Εξατομικευμένες λύσεις που ταιριάζουν στις ανάγκες σας",
  "Άμεση και αξιόπιστη τεχνική υποστήριξη",
  "Χρήση κορυφαίων τεχνολογιών και πρακτικών ασφαλείας",
  "Εμπειρία και επαγγελματισμός σε κάθε έργο",
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>Σχετικά με την Garti Tech | Website, IT Support, SEO</title>
        <meta
          name="description"
          content="Στην Garti Tech, συνδυάζουμε τεχνογνωσία και πάθος για να παρέχουμε ολοκληρωμένες λύσεις πληροφορικής και ψηφιακής παρουσίας."
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
                Στην Garti Tech, συνδυάζουμε τεχνογνωσία και πάθος για να παρέχουμε ολοκληρωμένες λύσεις πληροφορικής και ψηφιακής παρουσίας. Είτε είστε μικρή επιχείρηση, startup ή ιδιώτης, η ομάδα μας είναι εδώ για να στηρίξει την ανάπτυξή σας με υπηρεσίες που καλύπτουν από website design έως cybersecurity και SEO.
              </p>
            </div>

            {/* Cards */}
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-16">
              {/* Mission Card */}
              <div className="relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 animate-fade-up delay-200">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-primary" />
                </div>
                <h2 className="text-2xl font-bold mb-4 text-gradient">
                  Η Αποστολή μας
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Να φέρουμε την τεχνολογία πιο κοντά σε κάθε επιχείρηση και άτομο, προσφέροντας λύσεις απλές, ασφαλείς και αποτελεσματικές.
                </p>
              </div>

              {/* Why Choose Us Card */}
              <div className="relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 animate-fade-up delay-300">
                <h2 className="text-2xl font-bold mb-6 text-gradient">
                  Γιατί να μας επιλέξετε
                </h2>
                <ul className="space-y-4">
                  {reasons.map((reason, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{reason}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center animate-fade-up delay-400">
            <Button variant="hero" size="xl" asChild>
              <a href="/contact">
                Επικοινωνήστε μαζί μας
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default About;
