import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import MainContent from './Components/MainContent';
import Footer from './Components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('portfolio');

  useEffect(() => {
    // Set background images dynamically
    const bgElement = document.querySelector('#wrapper > .bg');
    if (bgElement) {
      const overlayUrl = process.env.PUBLIC_URL + '/images/overlay.png';
      const bgUrl = process.env.PUBLIC_URL + '/images/bg.jpg';
      bgElement.style.backgroundImage = `url("${overlayUrl}"), linear-gradient(0deg, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1)), url("${bgUrl}")`;
    }
  }, []);

  return (
    <div id="wrapper" className="fade-in">
      <div className="bg" aria-hidden="true"></div>
      {/* Skip to main content link for screen readers */}
      <a 
        href="#main" 
        className="skip-to-main"
        style={{ 
          position: 'absolute', 
          left: '-9999px', 
          zIndex: 999,
          top: '0',
          background: '#000', 
          color: '#fff', 
          padding: '1rem',
          textDecoration: 'none'
        }}
        onFocus={(e) => {
          e.target.style.left = '0';
        }}
        onBlur={(e) => {
          e.target.style.left = '-9999px';
        }}
      >
        Skip to main content
      </a>
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <MainContent currentPage={currentPage} />
      <Footer />
      
      {/* Copyright */}
      <div id="copyright">
        <ul><li>&copy; Justin Sowden</li></ul>
      </div>
    </div>
  );
}

export default App;
