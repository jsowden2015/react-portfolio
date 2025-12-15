import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import MainContent from './Components/MainContent';
import Footer from './Components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('portfolio');

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
