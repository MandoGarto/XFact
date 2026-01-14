import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Μας έφτιαξαν ένα σύγχρονο site με μενού, online παραγγελίες και όμορφο design. Η επικοινωνία ήταν άψογη και το αποτέλεσμα ακριβώς αυτό που θέλαμε.",
    author: "Baghetto",
    role: "Street Food Restaurant",
  },
  {
    quote: "Επαγγελματικό site με gallery έργων και φόρμα επικοινωνίας. Γρήγορη παράδοση, άμεσες διορθώσεις και εξαιρετική συνεργασία.",
    author: "RenovaTech",
    role: "Οικοδομικές Εργασίες",
  },
  {
    quote: "Το site φορτώνει γρήγορα και δουλεύει σωστά σε κινητό. Αυτό ζητούσαμε.",
    author: "Νίκος Κ.",
    role: "Freelancer",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 animate-fade-up">
            Τι λένε οι{" "}
            <span className="text-gradient">πελάτες</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${(index + 2) * 100}ms` }}
            >
              <Quote className="w-10 h-10 text-primary/20 mb-4" />
              <p className="text-foreground/90 mb-6 leading-relaxed italic">
                «{testimonial.quote}»
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-sm font-semibold text-primary">
                    {testimonial.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <span className="font-medium block">{testimonial.author}</span>
                  <span className="text-xs text-muted-foreground">{testimonial.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
