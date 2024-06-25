import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Socials from './components/Socials';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';

import './App.css'; // Global CSS file if needed

const App = () => (
  <div className="App">
    <Navbar />
    <HeroSection />
    <Skills />
    <Projects />
    <Contact />
    <Socials />
    <ScrollToTop />
    <Footer />
  </div>
);

export default App;
