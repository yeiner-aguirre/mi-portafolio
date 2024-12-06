import React, { useEffect, useRef } from 'react';
import { FaBook, FaPlane, FaFutbol, FaGamepad, FaCogs, FaMusic, FaBirthdayCake, FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

const AboutMe = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const personalInfo = [
    { label: 'Edad', value: '24 años', icon: FaBirthdayCake },
    { label: 'Residencia', value: 'La Unión, Antioquia', icon: FaMapMarkerAlt },
    { label: 'Correo', value: 'yeineraguirre36@gmail.com', icon: FaEnvelope },
    { label: 'Teléfono', value: '314 763 07 41', icon: FaPhone },
  ];

  const interests = [
    { name: 'Viajes', icon: FaPlane },
    { name: 'Lectura', icon: FaBook },
    { name: 'Deportes', icon: FaFutbol },
    { name: 'Juegos', icon: FaGamepad },
    { name: 'Crear', icon: FaCogs },
    { name: 'Música', icon: FaMusic },
  ];

  return (
    <section id="sobre-mi" className="py-20 bg-gradient-to-br from-gray-100 to-blue-50" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <h2 className="text-5xl font-bold text-center text-gray-800 mb-16">
          Sobre mí
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Profile Section */}
          <div className="lg:col-span-1">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-2xl transform rotate-3"></div>
              <img
                src="/images/perfil.png"
                alt="Yeiner Estiven Aguirre Quirama"
                className="absolute inset-0 w-full h-full object-cover rounded-2xl shadow-2xl transform -rotate-3 transition-transform duration-300 hover:rotate-0"
              />
            </div>
            <div className="mt-8 text-center">
              <h3 className="text-3xl font-semibold text-gray-800">
                Yeiner Estiven Aguirre Quirama
              </h3>
              <p className="text-xl font-medium text-blue-600 mt-2">
                Desarrollador Web Full-Stack
              </p>
            </div>
          </div>

          {/* About and Personal Info */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-2xl shadow-xl p-8 transition-all duration-300 hover:shadow-2xl">
              <p className="text-lg text-gray-700 leading-relaxed">
                Soy un apasionado desarrollador web full-stack con un fuerte deseo de crear experiencias digitales
                innovadoras y atractivas. Mi viaje en el mundo del desarrollo comenzó con una curiosidad insaciable
                por entender cómo funcionan las cosas detrás de las pantallas que usamos todos los días. Me esfuerzo
                por combinar creatividad y tecnología para construir soluciones web únicas y eficientes.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {personalInfo.map((item) => (
                <div
                  key={item.label}
                  className="bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:bg-blue-50"
                >
                  <div className="flex items-center space-x-4">
                    <div className="bg-blue-100 p-3 rounded-full">
                      <item.icon className="text-2xl text-blue-600" />
                    </div>
                    <div>
                      <h5 className="text-sm font-semibold text-gray-600">{item.label}</h5>
                      <p className="text-base text-blue-700 font-medium break-words">{item.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Interests Section */}
        <div className="mt-20">
          <h4 className="text-3xl font-semibold text-gray-800 mb-10 text-center">Mis Intereses</h4>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8">
            {interests.map((interest) => (
              <div
                key={interest.name}
                className="bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-blue-50 flex flex-col items-center"
              >
                <div className="bg-blue-100 p-4 rounded-full mb-4">
                  <interest.icon className="text-3xl text-blue-600" />
                </div>
                <span className="text-base font-medium text-gray-700 text-center">{interest.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;