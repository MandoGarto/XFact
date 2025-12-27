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
        <title>Garti Tech — Website, IT Support, SEO & E-shops</title>
        <meta
          name="description"
          content="Χτίζουμε αξιόπιστες ψηφιακές λύσεις για επιχειρήσεις & ιδιώτες. Από μοντέρνα websites και e-shops μέχρι IT υποστήριξη. Πακέτα από 450€."
        />
        <meta name="keywords" content="web development, IT support, SEO, e-commerce, WooCommerce, website creation, Greece, κατασκευή ιστοσελίδων, eshop" />
        <link rel="canonical" href="https://garti.gr" />
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
