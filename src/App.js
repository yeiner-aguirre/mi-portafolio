import React from 'react';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppContact from './components/WhatsAppContact';
import { Analytics } from '@vercel/analytics/react';


function App() {
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