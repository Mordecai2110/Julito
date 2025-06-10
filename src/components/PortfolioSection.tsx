
import React from "react";
import { ExternalLink } from "lucide-react";

type Project = {
  title: string;
  category: string;
  description: string;
  image: string;
  url: string;
};

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="group rounded-xl overflow-hidden shadow-md bg-white transition-all hover:shadow-xl">
      <div className="overflow-hidden h-56 md:h-64">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <span className="text-sm text-primary font-medium">{project.category}</span>
        <h3 className="text-xl font-medium mt-1 mb-2 font-playfair">{project.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{project.description}</p>
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-secondary inline-flex items-center text-sm"
        >
          Ver sitio
          <ExternalLink size={16} className="ml-2" />
        </a>
      </div>
    </div>
  );
};

const PortfolioSection = () => {
  const projects: Project[] = [
    {
      title: "ROTI",
      category: "Landing Page",
      description:
        "ROTI PA",
      image: "https://images.unsplash.com/photo-1500673922987-e212871fec22?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      url: "https://thecrazyempanadas.vercel.app/",
    },
    {
      title: "TechSolutions Pro",
      category: "Sitio Corporativo",
      description:
        "Página one-page para una consultora tecnológica con diseño minimalista y enfoque en la presentación de servicios.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
      url: "#",
    },
    {
      title: "Julia & Martín - Boda",
      category: "Página de Evento",
      description:
        "Sitio web para boda con RSVP, ubicación, cronograma y galería de fotos. Diseño elegante acorde a la estética del evento.",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      url: "#",
    },
    {
      title: "Lucía García Fotografía",
      category: "Portafolio",
      description:
        "Portfolio profesional para fotógrafa con galería de imágenes, testimonios y sistema de contacto para nuevos clientes.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      url: "#",
    },
    {
      title: "Creativo Studio",
      category: "Sitio Corporativo",
      description:
        "Rediseño de sitio web para estudio de diseño con animaciones suaves y showcases interactivos de proyectos destacados.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1115&q=80",
      url: "#",
    },
    {
      title: "Enzar Digital",
      category: "Landing Page",
      description:
        "Landing page para agencia de marketing digital con enfoque en la generación de leads y diseño optimizado para conversión.",
      image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      url: "#",
    },
  ];

  return (
    <section id="portafolio" className="section-padding bg-white">
      <div className="container mx-auto text-center">
        <h2 className="section-title">Mi Portafolio</h2>
        <p className="section-subtitle">
          Explora algunos de mis proyectos más destacados y descubre cómo puedo ayudarte a crear tu próximo sitio web.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
