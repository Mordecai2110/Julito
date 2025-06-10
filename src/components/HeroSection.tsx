
import React from "react";

const HeroSection = () => {
  const scrollToPortfolio = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const portfolioSection = document.getElementById("portafolio");
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-beige-light to-beige"
    >
      <div className="absolute inset-0 z-0 opacity-40">
        <div className="absolute right-0 bottom-0 w-3/4 h-3/4 bg-warm-light rounded-full blur-3xl transform translate-x-1/4 translate-y-1/4"></div>
        <div className="absolute left-0 top-0 w-2/3 h-2/3 bg-beige-dark/30 rounded-full blur-3xl transform -translate-x-1/4 -translate-y-1/4"></div>
      </div>
      
      <div className="container mx-auto px-4 z-10 text-center animate-fade-in">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-primary font-playfair">
          Trinidad Julian
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl mb-8 max-w-3xl mx-auto text-warm-gray">
          Diseño páginas de alto impacto visual, enfocadas en resultados y
          adaptadas a tu estilo.
        </p>
        <a
          href="#portafolio"
          onClick={scrollToPortfolio}
          className="btn-primary inline-block text-lg"
        >
          Ver mis trabajos
        </a>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#sobre-mi" className="text-primary/70 hover:text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
