import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './Components/Header';
import MainContent from './Components/MainContent';
import ErrorBoundary from './Components/ErrorBoundary';
import { APP_CONFIG } from './config/constants';
import {
  hashForPage,
  isPageHashTarget,
  isValidPage,
  pageFromHash
} from './utils/pageHash';

function App() {
  const [currentPage, setCurrentPageState] = useState(
    () => pageFromHash() ?? APP_CONFIG.defaultPage
  );
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    document.documentElement.classList.toggle('dark-mode', isDarkMode);
  }, [isDarkMode]);

  useEffect(() => {
    if (!pageFromHash()) {
      window.history.replaceState(
        null,
        '',
        hashForPage(APP_CONFIG.defaultPage)
      );
    }

    const handleHashChange = () => {
      if (isPageHashTarget()) {
        return;
      }
      setCurrentPageState(pageFromHash() ?? APP_CONFIG.defaultPage);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const setCurrentPage = (page) => {
    const next = isValidPage(page) ? page : APP_CONFIG.defaultPage;
    setCurrentPageState(next);

    const nextHash = hashForPage(next);
    if (window.location.hash !== nextHash) {
      window.location.hash = next;
    }
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const handleSkipToMain = (e) => {
    e.preventDefault();
    const main = document.getElementById('main');
    if (!main) {
      return;
    }
    main.setAttribute('tabIndex', '-1');
    main.focus({ preventScroll: true });
  };

  return (
    <div id="wrapper" className={isDarkMode ? 'dark-mode' : ''}>
      <a
        href="#main"
        className="skip-to-main"
        onClick={handleSkipToMain}
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
