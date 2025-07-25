import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import ScrollToTopButton from "@/components/ScrollToTopButton";
import { initScrollReveal } from "@/utils/ScrollReveal";
import StartScreen from "./StartScreen";

const Index = () => {
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (started) {
      // Inicializar el efecto de ScrollReveal una vez iniciada la misión
      initScrollReveal();
    }
  }, [started]);

  if (!started) {
    return <StartScreen onStart={() => setStarted(true)} />;
  }

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
