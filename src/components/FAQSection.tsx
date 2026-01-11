import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Σε πόσο χρόνο παραδίδετε ένα website;",
    answer: "Συνήθως 15-30 εργάσιμες ημέρες, ανάλογα με την πολυπλοκότητα και το υλικό που θα μας δώσετε.",
  },
  {
    question: "Μπορείτε να αναλάβετε συντήρηση;",
    answer: "Ναι προσφέρουμε πακέτα συντήρησης με updates, backups και υποστήριξη.",
  },
  {
    question: "Τι χρειάζεστε από μένα για να ξεκινήσουμε;",
    answer: "Κείμενα, λογότυπο (αν υπάρχει), φωτογραφίες και λίγα λόγια για την επιχείρηση. Αν δεν έχεις, σε βοηθάμε εμείς.",
  },
  {
    question: "Ποιοι τρόποι πληρωμής υποστηρίζονται στο e-shop;",
    answer: "Stripe, PayPal, Viva Wallet και τραπεζική κατάθεση. Επίσης υποστήριξη κουπονιών/προσφορών.",
  },
  {
    question: "Προσφέρετε SEO από την αρχή;",
    answer: "Ναι όλα τα πακέτα περιλαμβάνουν βασικό SEO. Υπάρχει και Full SEO service για μεγαλύτερη ανάπτυξη.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="relative py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 animate-fade-up">
              Συχνές{" "}
              <span className="text-gradient">Ερωτήσεις</span>
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-2xl border border-border bg-card px-6 animate-fade-up"
                style={{ animationDelay: `${(index + 2) * 100}ms` }}
              >
                <AccordionTrigger className="text-left font-semibold hover:text-primary transition-colors py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
