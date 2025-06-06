import React, { useState, useEffect, useRef } from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const projectRefs = useRef([]);

  const projects = [
    {
      title: "APP del tiempo",
      description: "Aplicación que utiliza tu ubicación para proporcionar información sobre el clima y las condiciones meteorológicas.",
      image: "/images/tiempo.png?height=1000&width=1000",
      github: "https://github.com/yeiner-aguirre/aplicacion-clima.git",
      live: "https://app-del-tiempo.onrender.com"
    },
    {
      title: "RICK AND MORTY",
      description: "Wiki de personajes: Información detallada sobre cada personaje, incluyendo su dimensión, apariciones y estado actual.",
      image: "/images/rick.png?height=1000&width=1000",
      github: "https://github.com/yeiner-aguirre/rick-and-morty.git",
      live: "https://rick-and-morty-eight-brown.vercel.app/"
    },
    {
      title: "POKEDEX",
      description: "Juego de cartas coleccionables Pokémon: Conoce a fondo a tus Pokémon favoritos.",
      image: "/images/pokemon.png?height=1000&width=1000",
      github: "https://github.com/yeiner-aguirre/pokedex.git",
      live: "https://pokedex-by-yeiner.vercel.app/"
    },
    {
      title: "CHATBOT IA",
      description: "Interactua con una IA local y hazle preguntas de todo tipo.",
      image: "/images/chatbot.png?height=1000&width=1000",
      github: "https://github.com/yeiner-aguirre/ChatBot.git",
      live: "https://chat-bot-yeiner.vercel.app/"
    },
    {
      title: "BLOG-POLI",
      description: "Aplicacion web creada en la cual te puedes registrar, adquirir un usuario e interactuar con post interesantes de otros usuarios y crear los tuyos sobre tus temas de interes favoritos.",
      image: "/images/blog.png?height=400&width=600",
      github: "https://github.com/yeiner-aguirre/blog-poli.git",
      live: "http://elpoli-blog.wuaze.com/?i=1"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
          } else {
            entry.target.classList.remove('animate-fade-in-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      projectRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  const nextProject = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentProject((prev) => (prev + 1) % projects.length);
    }
  };

  const prevProject = () => {
    if (!isAnimating) {
      setIsAnimating(true);
      setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [currentProject]);

  return (
    <section id="proyectos" className="py-20 bg-gradient-to-br from-gray-900 to-blue-900 text-white overflow-hidden">
      <div className="container mx-auto px-8 sm:px-12 lg:px-16">
        <h2 className="text-5xl font-extrabold text-center mb-12 animate-pulse">
          Mis Proyectos
        </h2>
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentProject * 100}%)` }}
            >
              {projects.map((project, index) => (
                <div 
                  key={index} 
                  className="w-full flex-shrink-0 px-4 md:px-8"
                  ref={(el) => (projectRefs.current[index] = el)}
                >
                  <div 
                    className={`bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl overflow-hidden shadow-2xl transition-all duration-500 ${
                      isHovered ? 'scale-98' : 'scale-100'
                    } hover:shadow-blue-glow hover:-translate-y-1`}
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                  >
                    <div className="overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-64 object-cover transition-transform duration-500 transform hover:scale-110" 
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-2xl font-bold mb-2 animate-bounce">{project.title}</h3>
                      <p className="text-gray-300 mb-4">{project.description}</p>
                      <div className="flex justify-center space-x-4">
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition-all duration-300 ease-in-out hover:scale-105"
                        >
                          <FaGithub className="mr-2" /> GitHub
                        </a>
                        <a 
                          href={project.live} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center px-4 py-2 bg-blue-600 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-blue-500 active:bg-blue-800 focus:outline-none focus:border-blue-700 focus:ring ring-blue-300 disabled:opacity-25 transition-all duration-300 ease-in-out hover:scale-105"
                        >
                          <FaExternalLinkAlt className="mr-2" /> Ver Proyecto
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <button 
            onClick={prevProject} 
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all duration-300 hover:scale-110 z-10"
            disabled={isAnimating}
          >
            &#10094;
          </button>
          <button 
            onClick={nextProject} 
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-all duration-300 hover:scale-110 z-10"
            disabled={isAnimating}
          >
            &#10095;
          </button>
        </div>
        <div className="flex justify-center mt-6 space-x-2">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentProject(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentProject === index ? 'bg-blue-500 scale-125' : 'bg-gray-400 hover:bg-blue-300'
              }`}
            />
          ))}
        </div>
      </div>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        .shadow-blue-glow {
          box-shadow: 0 0 15px rgba(59, 130, 246, 0.5), 0 0 30px rgba(59, 130, 246, 0.3);
        }
      `}</style>
    </section>
  );
};

export default Projects;