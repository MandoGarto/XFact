import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Phone, Mail, Instagram, AlertTriangle } from 'lucide-react';

const Contact = () => {
  return (
    <>
      <Helmet>
        <title>Επικοινωνία | Garti - Κατασκευή Ιστοσελίδων</title>
        <meta name="description" content="Επικοινωνήστε μαζί μας για κατασκευή ιστοσελίδων, e-shop και IT υπηρεσίες. Τηλέφωνο, email και Instagram." />
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
            <div className="max-w-2xl mx-auto space-y-8">
              
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                  Στοιχεία Επικοινωνίας
                </h2>
                <p className="text-muted-foreground mb-8">
                  Επικοινωνήστε μαζί μας με όποιον τρόπο σας εξυπηρετεί καλύτερα.
                </p>
              </div>

              {/* Form disabled notice */}
              <div className="flex items-start gap-3 p-4 bg-accent/10 border border-accent/30 rounded-xl">
                <AlertTriangle className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                <p className="text-sm text-muted-foreground">
                  Η φόρμα επικοινωνίας είναι προσωρινά εκτός λειτουργίας λόγω τεχνικών προβλημάτων. Παρακαλούμε επικοινωνήστε μαζί μας μέσω τηλεφώνου, email ή Instagram.
                </p>
              </div>

              <div className="space-y-4">
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

                <a 
                  href="https://instagram.com/gartijr" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl hover:border-primary/50 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Instagram className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Instagram DM</p>
                    <p className="font-semibold text-foreground">@gartijr</p>
                  </div>
                </a>
              </div>

              <p className="text-sm text-primary/80 flex items-center gap-2">
                <span className="inline-block w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Συνήθως απαντάμε σε 3-5 ώρες
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Contact;