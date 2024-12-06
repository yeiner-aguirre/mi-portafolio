import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaBriefcase } from 'react-icons/fa';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'Sobre mí', href: '#sobre-mi' },
    { name: 'Habilidades', href: '#habilidades' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Contacto', href: '#contacto' },
    { name: 'Descargar CV', href: '/images/Cv yeiner Aguirre.pdf', download: true },
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${
      isScrolled ? 'bg-white bg-opacity-90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <style jsx>{`
        @keyframes portfolio-animation {
          0% { transform: scale(1) rotate(0deg); }
          25% { transform: scale(1.1) rotate(-15deg); }
          50% { transform: scale(1.2) rotate(15deg); }
          75% { transform: scale(1.1) rotate(-15deg); }
          100% { transform: scale(1) rotate(0deg); }
        }
        .portfolio-icon {
          animation: portfolio-animation 3s infinite;
        }
        .portfolio-icon:hover {
          animation-play-state: paused;
        }
      `}</style>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex-shrink-0 flex items-center">
            <div className="relative mr-2">
              <div className="absolute inset-0 bg-blue-200 rounded-full opacity-50 blur-md"></div>
              <FaBriefcase className="text-4xl text-blue-600 relative z-10 portfolio-icon" />
            </div>
            <a href="#" className="text-3xl md:text-4xl font-extrabold text-blue-600 hover:text-blue-800 transition-colors duration-300 transform hover:scale-105">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse">
                MI PORTAFOLIO
              </span>
            </a>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-1">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="text-gray-800 hover:text-blue-600 px-4 py-2 rounded-md text-lg font-medium transition-all duration-300 hover:bg-blue-100 hover:shadow-md transform hover:-translate-y-1 relative overflow-hidden group"
                    download={item.download}
                  >
                    <span className="relative z-10">{item.name}</span>
                    <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-3 rounded-full text-blue-600 hover:text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500 transition-all duration-300 transform hover:rotate-180"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menú principal</span>
              {isMenuOpen ? (
                <FaTimes className="block h-7 w-7" aria-hidden="true" />
              ) : (
                <FaBars className="block h-7 w-7" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil */}
      <div 
        className={`md:hidden transition-all duration-500 ease-in-out ${
          isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-800 hover:text-blue-600 block px-4 py-3 rounded-md text-lg font-medium transition-all duration-300 hover:bg-blue-100 hover:shadow-md relative overflow-hidden group"
              onClick={toggleMenu}
              download={item.download}
            >
              <span className="relative z-10">{item.name}</span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;