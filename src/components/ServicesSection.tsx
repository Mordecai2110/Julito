
import React from "react";
import { Laptop, Briefcase, CalendarDays, Layout } from "lucide-react";

const ServiceCard = ({
  title,
  description,
  icon: Icon,
}: {
  title: string;
  description: string;
  icon: React.ElementType;
}) => {
  return (
    <div className="bg-white p-6 md:p-8 rounded-xl shadow-md hover:shadow-lg transition-all border border-beige">
      <div className="mb-4 text-primary bg-beige inline-block p-3 rounded-xl">
        <Icon size={32} />
      </div>
      <h3 className="text-xl md:text-2xl font-medium mb-3 font-playfair">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const ServicesSection = () => {
  const services = [
    {
      title: "Landing Pages",
      description:
        "Páginas de aterrizaje optimizadas para conversión que capturan la atención y generan resultados inmediatos.",
      icon: Laptop,
    },
    {
      title: "Sitios de Portafolio",
      description:
        "Portafolios elegantes y profesionales que destacan tu trabajo y habilidades de forma impactante.",
      icon: Layout,
    },
    {
      title: "Páginas de Eventos",
      description:
        "Sitios para bodas y eventos que combinan estética y funcionalidad para crear experiencias memorables.",
      icon: CalendarDays,
    },
    {
      title: "Sitios Corporativos",
      description:
        "Páginas corporativas de una sola sección que comunican con claridad la esencia de tu negocio.",
      icon: Briefcase,
    },
  ];

  return (
    <section id="servicios" className="section-padding bg-beige-light">
      <div className="container mx-auto text-center">
        <h2 className="section-title">Mis Servicios</h2>
        <p className="section-subtitle">
          Diseño y desarrollo sitios web personalizados que se adaptan perfectamente a tus necesidades.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mt-12">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
