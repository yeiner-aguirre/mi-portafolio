import React, { useEffect, useRef } from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaDatabase, FaWordpress } from 'react-icons/fa';
import { MdDesignServices } from 'react-icons/md';
import { BiBrain } from 'react-icons/bi';

const Skills = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    const skillCards = document.querySelectorAll('.skill-card');
    skillCards.forEach((card) => observer.observe(card));

    return () => {
      skillCards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  const skills = [
    { 
      name: 'HTML5', 
      icon: FaHtml5, 
      color: 'text-orange-500',
      description: 'Dominio avanzado en la creación de estructuras web semánticas y accesibles.',
      proficiency: 100
    },
    { 
      name: 'CSS3', 
      icon: FaCss3Alt, 
      color: 'text-blue-500',
      description: 'Experto en diseño responsivo, animaciones y frameworks como Tailwind CSS.',
      proficiency: 90
    },
    { 
      name: 'JavaScript', 
      icon: FaJs, 
      color: 'text-yellow-500',
      description: 'Sólido conocimiento de ES6+, asincronía, y manipulación del DOM.',
      proficiency: 95
    },
    { 
      name: 'React', 
      icon: FaReact, 
      color: 'text-blue-400',
      description: 'Experiencia en desarrollo de aplicaciones SPA con hooks, context y Redux.',
      proficiency: 85
    },
    { 
      name: 'Node.js', 
      icon: FaNodeJs, 
      color: 'text-green-500',
      description: 'Creación de APIs RESTful, manejo de paquetes npm y Express.js.',
      proficiency: 80
    },
    { 
      name: 'Bases de Datos', 
      icon: FaDatabase, 
      color: 'text-indigo-500',
      description: 'Trabajo con SQL (MySQL, PostgreSQL) y NoSQL (MongoDB) para gestión de datos.',
      proficiency: 100
    },
    { 
      name: 'Diseño UX/UI', 
      icon: MdDesignServices, 
      color: 'text-pink-500',
      description: 'Creación de interfaces intuitivas y atractivas centradas en la experiencia del usuario.',
      proficiency: 95
    },
    { 
      name: 'WordPress', 
      icon: FaWordpress, 
      color: 'text-blue-700',
      description: 'Desarrollo de temas personalizados y plugins para sitios web dinámicos.',
      proficiency: 90
    },
    { 
      name: 'Inteligencia Artificial', 
      icon: BiBrain, 
      color: 'text-purple-600',
      description: 'Capacidad de diseñar y optimizar prompts para obtener resultados precisos y relevantes de modelos de IA.',
      proficiency: 100
    },
  ];

  return (
    <section id="habilidades" className="py-20 bg-gradient-to-br from-zinc-200 via-gray-300 to-gray-400 shadow-inner" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-center text-gray-800 mb-12 animate-pulse">
          Mis Habilidades
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="skill-card bg-slate-100 rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <div className="p-6 flex flex-col items-center">
                <skill.icon className={`text-6xl ${skill.color} mb-4 animate-bounce`} />
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">{skill.name}</h3>
                <p className="text-gray-600 text-center">
                  {skill.description}
                </p>
              </div>
              <div className="bg-gray-100 px-6 py-4">
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
                  <div 
                    className="bg-blue-600 h-2.5 rounded-full animate-grow" 
                    style={{ width: `${skill.proficiency}%` }}
                  ></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;