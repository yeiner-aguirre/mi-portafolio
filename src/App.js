import React, { useEffect } from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppContact from './components/WhatsAppContact';
import { Analytics } from '@vercel/analytics/react';

function App() {
  useEffect(() => {
    const sendWhatsApp = async () => {
      const token = process.env.REACT_APP_ULTRA_TOKEN;
      const instance = process.env.REACT_APP_ULTRA_INSTANCE;
      const phone = process.env.REACT_APP_WHATSAPP_NUMBER;

      try {
        await fetch(`https://api.ultramsg.com/${instance}/messages/chat`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            token: token,
            to: phone,
            body: '👋 ¡Nuevo visitante en tu portafolio!',
          }),
        });
      } catch (error) {
        console.error('Error al enviar mensaje de WhatsApp:', error);
      }
    };

    sendWhatsApp();
  }, []);

  return (
    <div className="App">
      <Header />
      <main className="pt-20">
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
        <WhatsAppContact phoneNumber="573147630741" />
      </main>
      <Analytics />
      {/* Aquí puedes añadir más componentes o secciones según sea necesario */}
    </div>
  );
}

export default App;
