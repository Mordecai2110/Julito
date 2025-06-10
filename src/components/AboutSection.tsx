
import React from "react";

const AboutSection = () => {
  return (
    <section id="sobre-mi" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="md:w-2/5">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src=""
                alt="Trinidad Julian - Diseñador Web"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
          <div className="md:w-3/5">
            <h2 className="section-title text-left">Sobre mí</h2>
            <p className="text-lg mb-6">
              Soy Trinidad Julian,
            </p>
            <p className="text-lg mb-6">
            
            </p>
            <p className="text-lg">

            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
