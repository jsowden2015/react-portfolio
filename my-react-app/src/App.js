import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import HeroSection from './Components/HeroSection';
import MoreAbout from './Components/MoreAbout';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Socials from './Components/Socials';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <MoreAbout />
      <Skills />
      <Projects />
      <Contact />
      <Socials />
      <Footer />
    </div>
  );
}

export default App;
