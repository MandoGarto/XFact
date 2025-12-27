import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "Η συνεργασία ήταν άψογη. Το site μας είναι λειτουργικό και όμορφο, όπως ακριβώς το φανταζόμασταν",
    author: "Αντώνης Μ.",
  },
  {
    quote: "Η ομάδα της Garti κατανοεί πραγματικά τις ανάγκες μας. Τα προβλήματα IT λύθηκαν γρήγορα και με σαφήνεια.",
    author: "Ελένη Δ.",
  },
  {
    quote: "Η σελίδα μας δουλεύει τέλεια και η εμπειρία βελτιώθηκε πολύ",
    author: "Νίκος Κ.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="relative py-24 lg:py-32 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4 animate-fade-up">
            Μαρτυρίες
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 animate-fade-up delay-100">
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
                <span className="font-medium">{testimonial.author}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
