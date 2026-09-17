import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import MainContent from './Components/MainContent';
import ErrorBoundary from './Components/ErrorBoundary';
import { APP_CONFIG } from './config/constants';

function App() {
  const [currentPage, setCurrentPage] = useState(APP_CONFIG.defaultPage);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    document.documentElement.classList.toggle('dark-mode', isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div id="wrapper" className={isDarkMode ? 'dark-mode' : ''}>
      <a
        href="#main"
        className="skip-to-main"
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
        <Header
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          isDarkMode={isDarkMode}
          toggleDarkMode={toggleDarkMode}
        />
        <MainContent
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </ErrorBoundary>
      <footer id="copyright">
        <p>&copy; {new Date().getFullYear()} Justin Sowden</p>
      </footer>
    </div>
  );
}

export default App;
