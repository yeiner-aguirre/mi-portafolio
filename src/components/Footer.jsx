import React from 'react';
import { FaHeart, FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Sobre Mí', href: '#sobre-mi' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Habilidades', href: '#habilidades' },
    { name: 'Contacto', href: '#contacto' }
  ];

  return (
    <footer className="relative bg-gradient-to-r from-gray-900 to-blue-900 text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Enlaces Rápidos
            </h3>
            <ul className="grid grid-cols-2 gap-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href}
                    className="group relative inline-block text-lg text-gray-300 transition-colors duration-300 ease-in-out hover:text-white"
                  >
                    <span className="relative z-10">{link.name}</span>
                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Media */}
          <div className="space-y-6">
            <h3 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Redes Sociales
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://github.com/yeiner-aguirre"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center p-3 px-4 py-2 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-indigo-500 rounded-full shadow-md hover:shadow-lg w-40"
              >
                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-indigo-500 group-hover:translate-x-0 ease">
                  <FaGithub className="w-5 h-5" />
                </span>
                <span className="absolute flex items-center justify-center w-full h-full text-indigo-500 transition-all duration-300 transform group-hover:translate-x-full ease text-sm">GitHub</span>
                <span className="relative invisible">GitHub</span>
              </a>
              <a
                href="https://www.linkedin.com/in/yeiner-estiven-aguirre-quirama-a9b700238/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative inline-flex items-center justify-center p-3 px-4 py-2 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-indigo-500 rounded-full shadow-md hover:shadow-lg w-40"
              >
                <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-indigo-500 group-hover:translate-x-0 ease">
                  <FaLinkedin className="w-5 h-5" />
                </span>
                <span className="absolute flex items-center justify-center w-full h-full text-indigo-500 transition-all duration-300 transform group-hover:translate-x-full ease text-sm">LinkedIn</span>
                <span className="relative invisible">LinkedIn</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400 text-lg">
            © {currentYear} Yeiner Quirama. Todos los derechos reservados.
          </p>
          <p className="mt-4 text-gray-400 text-lg flex items-center justify-center">
            Hecho con <FaHeart className="text-red-500 mx-2 animate-pulse" /> en [La union, Antioquia]
          </p>
        </div>
      </div>

      {/* Animated background */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-transparent to-white opacity-30 animate-pulse"></div>
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500 rounded-full filter blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-purple-500 rounded-full filter blur-3xl opacity-20 animate-float animation-delay-2000"></div>

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .group:hover .group-hover\\:scale-x-100 {
          transform: scaleX(1);
        }
      `}</style>
    </footer>
  );
};

export default Footer;