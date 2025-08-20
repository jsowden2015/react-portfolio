import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import MainContent from './Components/MainContent';
import Footer from './Components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('massively');

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
      <div className="bg"></div>
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
