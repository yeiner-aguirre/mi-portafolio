import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm('servicio', 'template_4czufji', form.current, 'Jt-eJEsDc_ANwaj26')
      .then((result) => {
        console.log(result.text);
        setIsSubmitted(true);
        setIsSubmitting(false);
      }, (error) => {
        console.log(error.text);
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contacto" className="py-20 bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-extrabold text-center mb-12 animate-pulse">
          Contáctame
        </h2>
        <div className="max-w-3xl mx-auto bg-gray-800 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-xl overflow-hidden shadow-2xl border border-gray-700">
          {!isSubmitted ? (
            <form ref={form} onSubmit={sendEmail} className="p-8 space-y-6">
              <div>
                <label htmlFor="user_name" className="block text-sm font-medium text-gray-200 mb-1">Nombre</label>
                <input
                  type="text"
                  name="user_name"
                  id="user_name"
                  required
                  className="w-full px-4 py-2 rounded-md bg-gray-700 bg-opacity-50 border border-gray-600 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-white placeholder-gray-400"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label htmlFor="user_email" className="block text-sm font-medium text-gray-200 mb-1">Correo electrónico</label>
                <input
                  type="email"
                  name="user_email"
                  id="user_email"
                  required
                  className="w-full px-4 py-2 rounded-md bg-gray-700 bg-opacity-50 border border-gray-600 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-white placeholder-gray-400"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-1">Mensaje</label>
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  required
                  className="w-full px-4 py-2 rounded-md bg-gray-700 bg-opacity-50 border border-gray-600 focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-white placeholder-gray-400"
                  placeholder="Tu mensaje aquí..."
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 rounded-md bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar mensaje'}
                </button>
              </div>
            </form>
          ) : (
            <div className="p-8 text-center">
              <svg className="mx-auto h-16 w-16 text-indigo-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <h3 className="text-2xl font-bold mb-4">¡Mensaje enviado con éxito!</h3>
              <p className="text-gray-300">Gracias por contactarme. Me comunicaré contigo pronto.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;