import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Phone, Mail, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch('https://formspree.io/f/xzddppnr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          _subject: 'Νέο μήνυμα από τη φόρμα επικοινωνίας',
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      if (!res.ok) throw new Error('Formspree error');

      toast({
        title: 'Το μήνυμα στάλθηκε!',
        description: 'Θα επικοινωνήσουμε μαζί σας σύντομα.',
      });

      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      toast({
        title: 'Σφάλμα αποστολής',
        description: 'Κάτι πήγε στραβά. Δοκιμάστε ξανά.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <Helmet>
        <title>Επικοινωνία | Garti - Κατασκευή Ιστοσελίδων</title>
        <meta
          name="description"
          content="Επικοινωνήστε μαζί μας για κατασκευή ιστοσελίδων, e-shop και IT υπηρεσίες."
        />
      </Helmet>

      <Header />

      <main className="min-h-screen bg-background">
        <section className="py-20 md:py-28 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Επικοινωνήστε μαζί μας
            </h1>
            <p className="text-xl text-muted-foreground">
              Είμαστε εδώ για να απαντήσουμε σε κάθε ερώτησή σας
            </p>
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              {/* Info */}
              <div className="space-y-6">
                <a
                  href="tel:+306975523655"
                  className="flex items-center gap-4 p-4 border rounded-xl"
                >
                  <Phone className="text-primary" />
                  <span>+30 697 552 3655</span>
                </a>

                <a
                  href="mailto:contact@garti.gr"
                  className="flex items-center gap-4 p-4 border rounded-xl"
                >
                  <Mail className="text-primary" />
                  <span>contact@garti.gr</span>
                </a>
              </div>

              {/* Form */}
              <div className="bg-card border rounded-2xl p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Honeypot (anti-spam) */}
                  <input type="text" name="_gotcha" className="hidden" />

                  <Input
                    name="name"
                    required
                    placeholder="Ονοματεπώνυμο"
                    value={formData.name}
                    onChange={handleChange}
                  />

                  <Input
                    name="email"
                    type="email"
                    required
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                  />

                  <Input
                    name="phone"
                    placeholder="Τηλέφωνο"
                    value={formData.phone}
                    onChange={handleChange}
                  />

                  <Textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Το μήνυμά σας"
                    value={formData.message}
                    onChange={handleChange}
                  />

                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Αποστολή...' : <>
                      Αποστολή <Send className="ml-2 h-4 w-4" />
                    </>}
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Contact;