
import React from "react";
import { Instagram, Linkedin, Twitter, Facebook, Youtube, Download } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="bg-primary text-white">
      <div className="section-padding">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h3 className="text-xl font-bold font-playfair mb-2">DisenioWeb</h3>
              <p className="text-white/80">
                Diseño web profesional y efectivo
              </p>
            </div>
            
            <div className="flex flex-col items-center md:items-end">
              <div className="flex space-x-4 mb-4">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-white/80 transition-colors"
                >
                  <Instagram size={20} />
                  <span className="sr-only">Instagram</span>
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-white/80 transition-colors"
                >
                  <Linkedin size={20} />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-white/80 transition-colors"
                >
                  <Twitter size={20} />
                  <span className="sr-only">Twitter</span>
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-white/80 transition-colors"
                >
                  <Facebook size={20} />
                  <span className="sr-only">Facebook</span>
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-white/80 transition-colors"
                >
                  <Youtube size={20} />
                  <span className="sr-only">Youtube</span>
                </a>
              </div>
              
              <a
                href="#"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-white text-primary text-sm hover:bg-white/90 transition-colors"
              >
                <Download size={16} />
                Descargar CV
              </a>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="text-white/60">
              &copy; {new Date().getFullYear()} DisenioWeb. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
