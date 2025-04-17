"use client"

import { useState, useEffect } from "react"
import { FaBars, FaTimes, FaBriefcase } from "react-icons/fa"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const navItems = [
    { name: "Sobre mí", href: "#sobre-mi" },
    { name: "Habilidades", href: "#habilidades" },
    { name: "Proyectos", href: "#proyectos" },
    { name: "Contacto", href: "#contacto" },
    { name: "Descargar CV", href: "/images/Cv yeiner Aguirre.pdf", download: true },
  ]

  // Estilo consistente del encabezado con un gradiente más sofisticado
  const headerStyle = "bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 shadow-lg"

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${headerStyle}`}>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700;800&family=Raleway:wght@600;700;800&display=swap');
        
        @keyframes portfolio-float {
          0% { transform: translateY(0) rotate(0deg) scale(1); filter: drop-shadow(0 0 3px rgba(75, 85, 99, 0.3)); }
          25% { transform: translateY(-4px) rotate(3deg) scale(1.02); filter: drop-shadow(0 0 6px rgba(75, 85, 99, 0.5)); }
          50% { transform: translateY(0) rotate(0deg) scale(1); filter: drop-shadow(0 0 10px rgba(75, 85, 99, 0.7)); }
          75% { transform: translateY(4px) rotate(-3deg) scale(1.02); filter: drop-shadow(0 0 6px rgba(75, 85, 99, 0.5)); }
          100% { transform: translateY(0) rotate(0deg) scale(1); filter: drop-shadow(0 0 3px rgba(75, 85, 99, 0.3)); }
        }
        
        @keyframes text-shimmer {
          0% { background-position: -200% 50%; }
          100% { background-position: 200% 50%; }
        }
        
        @keyframes subtle-glow {
          0% { text-shadow: 0 0 2px rgba(0, 0, 0, 0.1), 0 0 0px rgba(50, 50, 50, 0); }
          50% { text-shadow: 0 0 3px rgba(0, 0, 0, 0.2), 0 0 5px rgba(50, 50, 50, 0.1); }
          100% { text-shadow: 0 0 2px rgba(0, 0, 0, 0.1), 0 0 0px rgba(50, 50, 50, 0); }
        }
        
        .portfolio-icon {
          animation: portfolio-float 5s infinite ease-in-out;
          transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          filter: drop-shadow(0 0 5px rgba(75, 85, 99, 0.5));
        }
        
        .portfolio-icon:hover {
          transform: rotate(15deg) scale(1.2);
          filter: drop-shadow(0 0 12px rgba(75, 85, 99, 0.9));
        }
        
        .nav-link {
          position: relative;
          transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
        }
        
        .nav-link::before {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: linear-gradient(90deg, transparent, #000000, transparent);
          transform: scaleX(0);
          transform-origin: right;
          transition: transform 0.7s cubic-bezier(0.19, 1, 0.22, 1);
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.5), transparent);
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.4s cubic-bezier(0.19, 1, 0.22, 1) 0.2s;
        }
        
        .nav-link:hover::before {
          transform: scaleX(1);
          transform-origin: left;
        }
        
        .nav-link:hover::after {
          transform: scaleX(0.7);
          transform-origin: right;
        }
        
        .title-shimmer {
          background: linear-gradient(90deg, 
            #000000, #222222, #333333, #222222, #000000);
          background-size: 200% auto;
          animation: text-shimmer 5s linear infinite;
          -webkit-background-clip: text;
          background-clip: text;
          transition: all 0.7s cubic-bezier(0.19, 1, 0.22, 1);
          font-family: 'Cormorant Garamond', serif;
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
          font-weight: 800;
        }
        
        .title-shimmer:hover {
          letter-spacing: 1px;
          filter: drop-shadow(0 0 3px rgba(0, 0, 0, 0.5));
        }
        
        .mobile-menu-item {
          transition: all 0.4s cubic-bezier(0.19, 1, 0.22, 1);
        }
        
        .hamburger-icon {
          transition: all 0.5s cubic-bezier(0.19, 1, 0.22, 1);
          filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.3));
        }
        
        .hamburger-icon:hover {
          filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.8));
          transform: rotate(180deg);
        }
        
        /* Estilos de tipografía ultra elegante con texto más grueso y oscuro */
        .elegant-text {
          font-family: 'Raleway', sans-serif;
          letter-spacing: 0.04em;
          font-weight: 700 !important; /* Más grueso */
          color: #000000 !important; /* Más oscuro */
          animation: subtle-glow 3s infinite ease-in-out;
        }
        
        .nav-link:hover {
          transform: translateY(-3px);
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          background: linear-gradient(90deg, 
            rgba(0, 0, 0, 0.05), 
            rgba(0, 0, 0, 0.1), 
            rgba(0, 0, 0, 0.05));
          background-size: 200% auto;
          animation: text-shimmer 2s linear infinite;
          letter-spacing: 0.05em;
        }
        
        /* Decoración elegante */
        .elegant-decoration::before,
        .elegant-decoration::after {
          content: '';
          position: absolute;
          background: linear-gradient(90deg, transparent, rgba(0, 0, 0, 0.3), transparent);
          height: 1px;
          width: 100%;
          left: 0;
          transition: all 0.5s ease;
        }
        
        .elegant-decoration::before {
          top: 0;
          transform: scaleX(0.7);
        }
        
        .elegant-decoration::after {
          bottom: 0;
          transform: scaleX(0.4);
        }
        
        .elegant-decoration:hover::before {
          transform: scaleX(0.9);
        }
        
        .elegant-decoration:hover::after {
          transform: scaleX(0.6);
        }
        
        /* Estilos específicos para garantizar la visibilidad del menú móvil */
        @media (max-width: 768px) {
          .mobile-menu-button {
            display: flex !important;
            position: fixed !important;
            right: 20px !important;
            z-index: 100 !important;
          }
          
          .mobile-menu-container {
            display: block !important;
            position: absolute !important;
            width: 100% !important;
            left: 0 !important;
            top: 100% !important;
            z-index: 99 !important;
          }
        }
        
        /* Efecto de brillo al pasar el mouse */
        .nav-link:hover {
          color: #000 !important;
          background-color: rgba(200, 200, 200, 0.3);
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
          text-shadow: 0 0 1px rgba(0, 0, 0, 0.5);
          transform: translateY(-3px) scale(1.05);
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        
        /* Efecto de brillo para elementos del menú móvil */
        .mobile-menu-item:hover {
          background-color: rgba(200, 200, 200, 0.5);
          box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
          transform: translateX(5px);
          padding-left: 20px !important;
          border-left: 3px solid #000;
        }
      `}</style>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Decoración elegante superior */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent opacity-40 mt-1"></div>

        <div className="flex items-center justify-between h-24">
          <div className="flex-shrink-0 flex items-center">
            <div className="relative mr-3">
              <div className="absolute inset-0 bg-gray-700 rounded-full opacity-20 blur-md"></div>
              <FaBriefcase className="text-5xl text-gray-700 relative z-10 portfolio-icon" />
            </div>
            <a href="#" className="text-3xl md:text-4xl transition-all duration-700 transform hover:scale-105">
              <span className="title-shimmer text-transparent hidden md:inline-block">MI PORTAFOLIO</span>
            </a>
          </div>
          <nav className="hidden md:block">
            <ul className="flex space-x-4">
              {navItems.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className="px-5 py-2 rounded-md text-xl transition-all duration-500 relative overflow-hidden group nav-link elegant-text elegant-decoration"
                    download={item.download}
                  >
                    <span className="relative z-10">{item.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          {/* Botón hamburguesa con visibilidad garantizada */}
          <div className="block md:hidden mobile-menu-button" style={{ display: "flex !important" }}>
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-3 rounded-full text-black hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-600 transition-all duration-500 hamburger-icon"
              aria-expanded={isMenuOpen}
              style={{
                display: "flex",
                position: "relative",
                zIndex: 100,
              }}
            >
              <span className="sr-only">Abrir menú principal</span>
              {isMenuOpen ? (
                <FaTimes className="block h-8 w-8" aria-hidden="true" />
              ) : (
                <FaBars className="block h-8 w-8" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Decoración elegante inferior */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent opacity-40 mb-1"></div>
      </div>

      {/* Menú móvil con visibilidad garantizada */}
      <div
        className="md:hidden mobile-menu-container"
        style={{
          display: "block",
          position: "absolute",
          width: "100%",
          left: 0,
          top: "100%",
          maxHeight: isMenuOpen ? "1000px" : "0",
          opacity: isMenuOpen ? 1 : 0,
          overflow: "hidden",
          transition: "all 0.5s cubic-bezier(0.19, 1, 0.22, 1)",
          zIndex: 99,
        }}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gradient-to-b from-gray-400 to-gray-500 shadow-2xl rounded-b-lg">
          {navItems.map((item, index) => (
            <a
              key={item.name}
              href={item.href}
              className="text-black block px-4 py-3 rounded-md text-xl font-bold transition-all duration-300 hover:bg-gray-300 relative overflow-hidden nav-link mobile-menu-item elegant-text"
              onClick={toggleMenu}
              download={item.download}
              style={{
                transitionDelay: `${index * 70}ms`,
                opacity: isMenuOpen ? 1 : 0,
                transform: isMenuOpen ? "translateY(0)" : "translateY(-10px)",
                fontWeight: 700,
              }}
            >
              <span className="relative z-10">{item.name}</span>
            </a>
          ))}
        </div>
      </div>
    </header>
  )
}

export default Header
