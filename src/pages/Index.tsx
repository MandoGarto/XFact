import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyChooseSection from "@/components/WhyChooseSection";
import PricingSection from "@/components/PricingSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Garti Tech Services | Web Development, IT Support & SEO Solutions</title>
        <meta
          name="description"
          content="Garti Tech builds practical digital and IT solutions for small businesses, startups, and professionals. Web development, e-commerce, IT support, SEO, and maintenance packages starting from €450."
        />
        <meta name="keywords" content="web development, IT support, SEO, e-commerce, WooCommerce, website creation, Greece" />
        <link rel="canonical" href="https://gartitech.com" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <HeroSection />
          <ServicesSection />
          <WhyChooseSection />
          <PricingSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
