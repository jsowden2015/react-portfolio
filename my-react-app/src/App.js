import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import MainContent from './Components/MainContent';
import ErrorBoundary from './Components/ErrorBoundary';
import { APP_CONFIG, PAGE_KEYS, Z_INDEX } from './config/constants';

function App() {
  const [currentPage, setCurrentPage] = useState(APP_CONFIG.defaultPage);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Check localStorage for saved preference, default to light mode
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    // Save preference to localStorage
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    // Apply dark mode class to body/html
    if (isDarkMode) {
      document.documentElement.classList.add('dark-mode');
    } else {
      document.documentElement.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div id="wrapper" className={`fade-in ${isDarkMode ? 'dark-mode' : ''}`}>
      <div className="bg" aria-hidden="true"></div>
      {/* Skip to main content link for screen readers */}
      <a 
        href="#main" 
        className="skip-to-main"
        style={{ 
          position: 'absolute', 
          left: '-9999px', 
          zIndex: Z_INDEX.NOTIFICATION,
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
      <ErrorBoundary>
        <Header currentPage={currentPage} setCurrentPage={setCurrentPage} isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <MainContent currentPage={currentPage} isDarkMode={isDarkMode} />
      </ErrorBoundary>
      
      {/* Copyright */}
      <div id="copyright">
        <ul><li>&copy; Justin Sowden</li></ul>
      </div>
    </div>
  );
}

export default App;
