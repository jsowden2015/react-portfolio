import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import { NAVIGATION_ITEMS, BREAKPOINTS } from '../config/constants';

const Header = ({ currentPage, setCurrentPage, isDarkMode, toggleDarkMode }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef(null);
  const buttonRef = useRef(null);

  const handleNavClick = (e, key) => {
    e.preventDefault();
    setCurrentPage(key);
    setIsMobileMenuOpen(false);
  };

  // Close menu when clicking outside or resizing to desktop
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isMobileMenuOpen &&
        navRef.current &&
        buttonRef.current &&
        !navRef.current.contains(event.target) &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleResize = () => {
      // Use breakpoint constant
      if (window.innerWidth > BREAKPOINTS.DESKTOP) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('resize', handleResize);
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobileMenuOpen]);

  return (
    <header id="header" role="banner">
      <a href="#main" className="logo" aria-label="Justin Sowden - Home">Justin Sowden</a>
      <button
        ref={buttonRef}
        className="mobile-menu-toggle"
        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        aria-label="Toggle mobile menu"
        aria-expanded={isMobileMenuOpen}
      >
        <i className={isMobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
      </button>
      <nav ref={navRef} id="nav" role="navigation" aria-label="Main navigation" className={isMobileMenuOpen ? 'mobile-open' : ''}>
        <ul className="links">
          {NAVIGATION_ITEMS.map((item) => (
            <li key={item.key} className={currentPage === item.key ? 'active' : ''}>
              <a 
                href={`#${item.key}`}
                onClick={(e) => handleNavClick(e, item.key)}
                aria-current={currentPage === item.key ? 'page' : undefined}
                aria-label={`Navigate to ${item.label} page`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <ul className="icons" aria-label="Social media links">
          <li>
            <button
              onClick={toggleDarkMode}
              className="icon dark-mode-toggle"
              aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
              title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              <i className={isDarkMode ? 'fas fa-sun' : 'fas fa-moon'}></i>
              <span className="label">{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
            </button>
          </li>
          <li>
            <a 
              href="https://www.linkedin.com/in/justin-sowden-361005184/" 
              className="icon brands fa-linkedin" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Visit Justin Sowden's LinkedIn profile (opens in new tab)"
            >
              <span className="label">LinkedIn</span>
            </a>
          </li>
          <li>
            <a 
              href="https://github.com/jsowden2015" 
              className="icon brands fa-github" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Visit Justin Sowden's GitHub profile (opens in new tab)"
            >
              <span className="label">GitHub</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

Header.propTypes = {
  currentPage: PropTypes.string.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  isDarkMode: PropTypes.bool.isRequired,
  toggleDarkMode: PropTypes.func.isRequired
};

export default Header;

