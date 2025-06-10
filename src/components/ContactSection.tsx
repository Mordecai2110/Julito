import React from "react";
import { MessageSquare } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contacto" className="section-padding bg-white">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="section-title">Contacto</h2>
          <p className="section-subtitle">
            ¿Hacemos tu próxima web? Cuéntame sobre tu proyecto y hagámoslo realidad.
          </p>
        </div>

        <div className="mt-12 flex justify-center">
          <div className="w-full md:w-1/2 bg-beige-light rounded-xl p-8">
            <h3 className="text-2xl font-medium mb-6 font-playfair">
              Contacto directo
            </h3>
            <p className="text-gray-600 mb-8">
              Prefiero hablar directamente? Puedes contactarme por WhatsApp o
              enviarme un email. Responderé lo más pronto posible.
            </p>

            <div className="space-y-6">
              <a
                href="https://wa.me/123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow transition-all"
              >
                <div className="bg-green-500 p-3 rounded-full text-white mr-4">
                  <MessageSquare size={20} />
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">WhatsApp</h4>
                  <p className="text-gray-600">+34 123 456 789</p>
                </div>
              </a>

              <a
                href="mailto:contacto@disenador.com"
                className="flex items-center p-4 bg-white rounded-lg shadow-sm hover:shadow transition-all"
              >
                <div className="bg-primary p-3 rounded-full text-white mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Email</h4>
                  <p className="text-gray-600">contacto@disenador.com</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
