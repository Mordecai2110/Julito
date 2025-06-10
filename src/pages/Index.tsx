import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { initScrollReveal } from "@/utils/ScrollReveal";

const Index = () => {
  useEffect(() => {
    // Inicializar el efecto de ScrollReveal
    initScrollReveal();
  }, []);

  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <ContactSection />
      <FooterSection />
      <ScrollToTopButton />
    </div>
  );
};

export default Index;
