import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
  <title>Κατασκευή Ιστοσελίδων & E-shop | Garti Tech</title>
  <meta
    name="description"
    content="Δημιουργούμε μοντέρνες ιστοσελίδες και e-shop, παρέχουμε ολοκληρωμένη IT υποστήριξη και λύσεις cybersecurity. Δωρεάν εκτίμηση σε 24 ώρες για να αναπτύξεις την επιχείρησή σου online!"
  />
  <meta
    name="keywords"
    content="κατασκευή ιστοσελίδων, κατασκευή eshop, web design Ελλάδα, IT support, cybersecurity, SEO, responsive website, digital solutions"
  />
  <link rel="canonical" href="https://garti.gr" />

  {/* Open Graph */}
  <meta property="og:title" content="Κατασκευή Ιστοσελίδων & E-shop | Garti Tech" />
  <meta
    property="og:description"
    content="Αναβάθμισε την παρουσία της επιχείρησής σου με μοντέρνες ιστοσελίδες, e-shop και ολοκληρωμένες IT λύσεις. Ζήτα δωρεάν εκτίμηση σε 24 ώρες!"
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://garti.gr" />
  <meta property="og:locale" content="el_GR" />

  {/* Twitter */}
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="Κατασκευή Ιστοσελίδων & E-shop | Garti Tech" />
  <meta
    name="twitter:description"
    content="Αναβάθμισε την παρουσία της επιχείρησής σου με ιστοσελίδες, e-shop και ολοκληρωμένη IT υποστήριξη. Δωρεάν εκτίμηση σε 24 ώρες!"
  />
</Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <ServicesSection />
          <WhyChooseSection />
          <TestimonialsSection />
          <FAQSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
