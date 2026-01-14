import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Phone, Mail, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState, useRef } from 'react';
import { useToast } from '@/hooks/use-toast';
import { z } from 'zod';

// Validation schema
const contactSchema = z.object({
  name: z.string()
    .min(2, 'Το όνομα πρέπει να έχει τουλάχιστον 2 χαρακτήρες')
    .max(100, 'Το όνομα δεν μπορεί να υπερβαίνει τους 100 χαρακτήρες')
    .trim(),
  email: z.string()
    .email('Μη έγκυρη διεύθυνση email')
    .max(255, 'Το email δεν μπορεί να υπερβαίνει τους 255 χαρακτήρες'),
  phone: z.string()
    .optional()
    .refine(val => !val || /^[+]?[0-9\s()\-]+$/.test(val), 'Μη έγκυρος αριθμός τηλεφώνου')
    .refine(val => !val || val.length <= 20, 'Ο αριθμός τηλεφώνου είναι πολύ μεγάλος'),
  message: z.string()
    .min(10, 'Το μήνυμα πρέπει να έχει τουλάχιστον 10 χαρακτήρες')
    .max(2000, 'Το μήνυμα δεν μπορεί να υπερβαίνει τους 2000 χαρακτήρες')
    .trim()
});

type ContactFormData = z.infer<typeof contactSchema>;

type FormErrors = {
  [K in keyof ContactFormData]?: string;
};

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isRateLimited, setIsRateLimited] = useState(false);
  const lastSubmitTime = useRef<number>(0);
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState<FormErrors>({});

  const validateForm = (): boolean => {
    const result = contactSchema.safeParse(formData);
    
    if (!result.success) {
      const fieldErrors: FormErrors = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof ContactFormData;
        if (!fieldErrors[field]) {
          fieldErrors[field] = err.message;
        }
      });
      setErrors(fieldErrors);
      return false;
    }
    
    setErrors({});
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Rate limiting - prevent submissions within 30 seconds
    const now = Date.now();
    if (now - lastSubmitTime.current < 30000) {
      toast({
        title: "Παρακαλώ περιμένετε",
        description: "Μπορείτε να στείλετε νέο μήνυμα σε λίγα δευτερόλεπτα.",
        variant: "destructive"
      });
      return;
    }

    // Validate form
    if (!validateForm()) {
      toast({
        title: "Σφάλμα επικύρωσης",
        description: "Παρακαλώ διορθώστε τα σφάλματα στη φόρμα.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/xzddppnr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone?.trim() || '',
          message: formData.message.trim()
        })
      });

      if (response.ok) {
        lastSubmitTime.current = Date.now();
        setIsRateLimited(true);
        setTimeout(() => setIsRateLimited(false), 30000);
        
        toast({
          title: "Το μήνυμα στάλθηκε!",
          description: "Θα επικοινωνήσουμε μαζί σας σύντομα.",
        });
        setFormData({ name: '', email: '', phone: '', message: '' });
        setErrors({});
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      toast({
        title: "Σφάλμα",
        description: "Κάτι πήγε στραβά. Δοκιμάστε ξανά.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for this field when user starts typing
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  return (
    <>
      <Helmet>
        <title>Επικοινωνία | Garti - Κατασκευή Ιστοσελίδων</title>
        <meta name="description" content="Επικοινωνήστε μαζί μας για κατασκευή ιστοσελίδων, e-shop και IT υπηρεσίες. Τηλέφωνο, email και φόρμα επικοινωνίας." />
        <link rel="canonical" href="https://garti.gr/contact" />
      </Helmet>
      
      <Header />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-primary/10 to-background">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Επικοινωνήστε μαζί μας
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Είμαστε εδώ για να απαντήσουμε σε κάθε ερώτησή σας
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
              
              {/* Contact Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    Στοιχεία Επικοινωνίας
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Επικοινωνήστε μαζί μας με όποιον τρόπο σας εξυπηρετεί καλύτερα.
                  </p>
                </div>

                <div className="space-y-6">
                  <a 
                    href="tel:+306975523655" 
                    className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Τηλέφωνο</p>
                      <p className="font-semibold text-foreground">+30 697 552 3655</p>
                    </div>
                  </a>

                  <a 
                    href="mailto:contact@garti.gr" 
                    className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors group"
                  >
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-semibold text-foreground">contact@garti.gr</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Contact Form */}
              <div className="bg-card border border-border rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Φόρμα Επικοινωνίας
                </h2>
                <p className="text-muted-foreground mb-4">
                  Συμπληρώστε τη φόρμα και θα επικοινωνήσουμε μαζί σας σύντομα.
                </p>
                <p className="text-sm text-primary/80 mb-8 flex items-center gap-2">
                  <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  Συνήθως απαντάμε σε 3-5 ώρες
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Honeypot field for spam protection */}
                  <input 
                    type="text" 
                    name="_gotcha" 
                    style={{ display: 'none' }} 
                    tabIndex={-1} 
                    autoComplete="off"
                  />
                  
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Ονοματεπώνυμο *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      maxLength={100}
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Το όνομά σας"
                      className={`w-full ${errors.name ? 'border-destructive focus-visible:ring-destructive' : ''}`}
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="mt-1 text-sm text-destructive">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      maxLength={255}
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className={`w-full ${errors.email ? 'border-destructive focus-visible:ring-destructive' : ''}`}
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="mt-1 text-sm text-destructive">{errors.email}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Τηλέφωνο
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      maxLength={20}
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+30 210 0000000"
                      className={`w-full ${errors.phone ? 'border-destructive focus-visible:ring-destructive' : ''}`}
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? 'phone-error' : undefined}
                    />
                    {errors.phone && (
                      <p id="phone-error" className="mt-1 text-sm text-destructive">{errors.phone}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Μήνυμα *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      maxLength={2000}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Πώς μπορούμε να σας βοηθήσουμε;"
                      rows={5}
                      className={`w-full resize-none ${errors.message ? 'border-destructive focus-visible:ring-destructive' : ''}`}
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                    />
                    {errors.message && (
                      <p id="message-error" className="mt-1 text-sm text-destructive">{errors.message}</p>
                    )}
                  </div>

                  <Button 
                    type="submit" 
                    variant="hero" 
                    className="w-full"
                    disabled={isSubmitting || isRateLimited}
                  >
                    {isSubmitting ? (
                      "Αποστολή..."
                    ) : isRateLimited ? (
                      "Περιμένετε..."
                    ) : (
                      <>
                        Αποστολή Μηνύματος
                        <Send className="ml-2 h-4 w-4" />
                      </>
                    )}
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