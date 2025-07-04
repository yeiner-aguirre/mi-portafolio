import React, { useEffect, useRef, useState } from 'react';
import {
  FaBook, FaPlane, FaFutbol, FaGamepad, FaCogs, FaMusic,
  FaBirthdayCake, FaMapMarkerAlt, FaEnvelope, FaPhone
} from 'react-icons/fa';

const AboutMe = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animatedItems, setAnimatedItems] = useState(new Set());

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animar elementos secuencialmente
          setTimeout(() => setAnimatedItems(prev => new Set([...prev, 'title'])), 100);
          setTimeout(() => setAnimatedItems(prev => new Set([...prev, 'profile'])), 400);
          setTimeout(() => setAnimatedItems(prev => new Set([...prev, 'description'])), 700);
          setTimeout(() => setAnimatedItems(prev => new Set([...prev, 'personal-info'])), 1000);
          setTimeout(() => setAnimatedItems(prev => new Set([...prev, 'interests-title'])), 1300);
          setTimeout(() => setAnimatedItems(prev => new Set([...prev, 'interests'])), 1600);
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
    { name: 'Viajes', icon: FaPlane, color: 'from-slate-600 to-slate-800' },
    { name: 'Lectura', icon: FaBook, color: 'from-emerald-600 to-teal-700' },
    { name: 'Deportes', icon: FaFutbol, color: 'from-amber-600 to-orange-700' },
    { name: 'Juegos', icon: FaGamepad, color: 'from-violet-600 to-purple-700' },
    { name: 'Crear', icon: FaCogs, color: 'from-rose-600 to-pink-700' },
    { name: 'Música', icon: FaMusic, color: 'from-indigo-600 to-blue-700' },
  ];

  return (
    <section
      id="sobre-mi"
      className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-gray-100 via-gray-200 to-gray-300 text-gray-800 relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-20 sm:-top-40 -right-20 sm:-right-40 w-40 h-40 sm:w-80 sm:h-80 bg-slate-400/8 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-20 sm:-bottom-40 -left-20 sm:-left-40 w-40 h-40 sm:w-80 sm:h-80 bg-neutral-400/8 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-r from-slate-300/5 to-gray-300/5 rounded-full blur-3xl animate-ping"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        {/* Enhanced Animated Title */}
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ease-out transform ${
          animatedItems.has('title') 
            ? 'opacity-100 translate-y-0 scale-100' 
            : 'opacity-0 translate-y-8 scale-95'
        }`}>
          <div className="relative inline-block">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-700 via-gray-800 to-neutral-700 mb-4 sm:mb-6 tracking-tight font-serif relative px-4">
              Desarrollador Web Full-Stack
              <div className="absolute -inset-2 bg-gradient-to-r from-slate-600/10 to-gray-600/10 rounded-2xl blur-xl opacity-60"></div>
            </h2>
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-20 sm:w-32 h-1 bg-gradient-to-r from-slate-600 via-gray-700 to-neutral-600 rounded-full"></div>
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-10 sm:w-16 h-0.5 bg-gradient-to-r from-slate-400 to-gray-500 rounded-full"></div>
          </div>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mt-6 sm:mt-8 font-medium tracking-wide max-w-3xl mx-auto px-4">
            "Transformando ideas en experiencias digitales extraordinarias."
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 lg:gap-12">
          {/* Enhanced Profile Section with Sophisticated Frame */}
          <div className={`xl:col-span-1 transition-all duration-1000 ease-out delay-300 transform ${
            animatedItems.has('profile') 
              ? 'opacity-100 translate-x-0 scale-100' 
              : 'opacity-0 -translate-x-8 scale-95'
          }`}>
            <div className="relative w-full aspect-square max-w-sm sm:max-w-md mx-auto group">
              {/* Sophisticated layered frame */}
              <div className="absolute inset-0 bg-gradient-to-br from-slate-300 via-gray-300 to-neutral-300 rounded-2xl sm:rounded-3xl transform rotate-1 shadow-2xl"></div>
              <div className="absolute inset-1 bg-gradient-to-br from-white to-gray-50 rounded-2xl sm:rounded-3xl transform -rotate-0.5 shadow-xl"></div>
              <div className="absolute inset-2 sm:inset-3 bg-gradient-to-br from-slate-200 to-gray-200 rounded-xl sm:rounded-2xl shadow-inner"></div>
              
              {/* Profile image container */}
              <div className="absolute inset-4 sm:inset-6 bg-gradient-to-br from-slate-100 to-gray-100 rounded-xl sm:rounded-2xl shadow-lg transform transition-all duration-500 group-hover:scale-105 flex items-center justify-center overflow-hidden">
                <img 
                  src="/images/perfil.png" 
                  alt="Yeiner Estiven Aguirre Quirama" 
                  className="w-full h-full object-cover rounded-xl sm:rounded-2xl transition-all duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Elegant floating accents */}
              <div className="absolute -top-2 sm:-top-3 -right-2 sm:-right-3 w-4 h-4 sm:w-6 sm:h-6 bg-gradient-to-br from-slate-500 to-gray-600 rounded-full shadow-lg opacity-80"></div>
              <div className="absolute -bottom-2 sm:-bottom-3 -left-2 sm:-left-3 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-br from-neutral-500 to-slate-600 rounded-full shadow-lg opacity-80"></div>
              <div className="absolute top-1/4 -right-1 sm:-right-2 w-2 h-2 sm:w-3 sm:h-3 bg-gradient-to-br from-gray-400 to-slate-500 rounded-full shadow-md opacity-60"></div>
              <div className="absolute bottom-1/4 -left-1 sm:-left-2 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-br from-slate-400 to-gray-500 rounded-full shadow-md opacity-60"></div>
            </div>
            
            <div className="mt-6 sm:mt-8 text-center">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-2">
                Yeiner Estiven Aguirre Quirama
              </h3>
              <p className="text-base sm:text-lg lg:text-xl font-medium text-transparent bg-clip-text bg-gradient-to-r from-slate-700 to-gray-700">
                Conoce más sobre mi trayectoria profesional
              </p>
              <div className="mt-4 flex justify-center space-x-2">
                <div className="w-2 h-2 bg-slate-500 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-gray-500 rounded-full animate-pulse delay-200"></div>
                <div className="w-2 h-2 bg-neutral-500 rounded-full animate-pulse delay-400"></div>
              </div>
            </div>
          </div>

          {/* Enhanced About and Personal Info */}
          <div className="xl:col-span-2 space-y-6 sm:space-y-8">
            {/* Description with enhanced styling */}
            <div className={`transition-all duration-1000 ease-out delay-500 transform ${
              animatedItems.has('description') 
                ? 'opacity-100 translate-y-0 scale-100' 
                : 'opacity-0 translate-y-8 scale-95'
            }`}>
              <div className="bg-white/70 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 transition-all duration-300 hover:shadow-2xl hover:bg-white/80 border border-white/20 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-r from-slate-500/5 to-gray-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="flex items-center mb-4">
                    <div className="w-1 h-6 sm:h-8 bg-gradient-to-b from-slate-600 to-gray-600 rounded-full mr-3 sm:mr-4"></div>
                    <h4 className="text-xl sm:text-2xl font-bold text-gray-800">Mi Historia</h4>
                  </div>
                  <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
                    Soy un apasionado desarrollador web full-stack con un fuerte deseo de crear experiencias digitales
                    innovadoras y atractivas. Mi viaje en el mundo del desarrollo comenzó con una curiosidad insaciable
                    por entender cómo funcionan las cosas detrás de las pantallas que usamos todos los días. Me esfuerzo
                    por combinar creatividad y tecnología para construir soluciones web únicas y eficientes.
                  </p>
                </div>
              </div>
            </div>

            {/* Personal info with staggered animations */}
            <div className={`transition-all duration-1000 ease-out delay-700 transform ${
              animatedItems.has('personal-info') 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-8'
            }`}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {personalInfo.map((item, index) => (
                  <div
                    key={item.label}
                    className={`bg-white/70 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 transition-all duration-500 hover:shadow-xl hover:bg-white/80 border border-white/20 group transform hover:scale-105 ${
                      animatedItems.has('personal-info') 
                        ? 'opacity-100 translate-y-0' 
                        : 'opacity-0 translate-y-4'
                    }`}
                    style={{ transitionDelay: `${800 + index * 100}ms` }}
                  >
                    <div className="flex items-center space-x-3 sm:space-x-4">
                      <div className="bg-gradient-to-br from-slate-600 to-gray-700 p-2 sm:p-3 rounded-full shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 flex-shrink-0">
                        <item.icon className="text-lg sm:text-2xl text-white" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h5 className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wide">{item.label}</h5>
                        <p className="text-sm sm:text-base text-gray-800 font-medium break-words">{item.value}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Interests Section */}
        <div className="mt-16 sm:mt-20">
          <div className={`text-center mb-8 sm:mb-12 transition-all duration-1000 ease-out transform ${
            animatedItems.has('interests-title') 
              ? 'opacity-100 translate-y-0 scale-100' 
              : 'opacity-0 translate-y-8 scale-95'
          }`}>
            <h4 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-700 via-gray-800 to-neutral-700 mb-4 font-serif">
              Mis Intereses
            </h4>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Las cosas que me apasionan y me inspiran cada día
            </p>
          </div>
          
          <div className={`grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 lg:gap-8 transition-all duration-1000 ease-out ${
            animatedItems.has('interests') 
              ? 'opacity-100 translate-y-0' 
              : 'opacity-0 translate-y-8'
          }`}>
            {interests.map((interest, index) => (
              <div
                key={interest.name}
                className={`bg-white/70 backdrop-blur-md rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 transition-all duration-500 hover:scale-110 hover:shadow-2xl flex flex-col items-center border border-white/20 group cursor-pointer transform hover:-translate-y-2 ${
                  animatedItems.has('interests') 
                    ? 'opacity-100 translate-y-0 rotate-0' 
                    : 'opacity-0 translate-y-4 rotate-3'
                }`}
                style={{ transitionDelay: `${1200 + index * 100}ms` }}
              >
                <div className={`bg-gradient-to-br ${interest.color} p-3 sm:p-4 rounded-full mb-3 sm:mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-110 group-hover:rotate-12`}>
                  <interest.icon className="text-xl sm:text-2xl lg:text-3xl text-white" />
                </div>
                <span className="text-sm sm:text-base font-medium text-gray-800 text-center group-hover:text-gray-900 transition-colors duration-300">
                  {interest.name}
                </span>
                <div className="w-0 h-0.5 bg-gradient-to-r from-slate-600 to-gray-600 group-hover:w-full transition-all duration-300 mt-2 rounded-full"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;