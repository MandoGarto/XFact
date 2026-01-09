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
        <title>Κατασκευή Ιστοσελίδων & E-shop | Garti Tech - Από 450€</title>
        <meta
          name="description"
          content="Κατασκευή ιστοσελίδων από 450€, e-shop από 1000€ & IT υποστήριξη. 50+ ολοκληρωμένα projects. Δωρεάν εκτίμηση σε 24 ώρες."
        />
        <meta name="keywords" content="κατασκευή ιστοσελίδων, κατασκευή eshop, web design Ελλάδα, IT support, SEO, WooCommerce, website από 450 ευρώ" />
        <link rel="canonical" href="https://garti.gr" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Κατασκευή Ιστοσελίδων & E-shop | Garti Tech" />
        <meta property="og:description" content="Κατασκευή ιστοσελίδων από 450€, e-shop από 1000€. Δωρεάν εκτίμηση σε 24 ώρες." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://garti.gr" />
        <meta property="og:locale" content="el_GR" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Κατασκευή Ιστοσελίδων & E-shop | Garti Tech" />
        <meta name="twitter:description" content="Κατασκευή ιστοσελίδων από 450€, e-shop από 1000€. Δωρεάν εκτίμηση." />
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
