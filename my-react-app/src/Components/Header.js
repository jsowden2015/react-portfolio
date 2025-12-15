import React from 'react';
import { NAVIGATION_ITEMS } from '../config/constants';

const Header = ({ currentPage, setCurrentPage }) => {
  const handleNavClick = (e, key) => {
    e.preventDefault();
    setCurrentPage(key);
  };

  return (
    <header id="header" role="banner">
      <a href="#main" className="logo" aria-label="Justin Sowden - Home">Justin Sowden</a>
      <nav id="nav" role="navigation" aria-label="Main navigation">
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
            <a 
              href="https://twitter.com/justinsowden" 
              className="icon brands fa-twitter" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Visit Justin Sowden's Twitter profile (opens in new tab)"
            >
              <span className="label">Twitter</span>
            </a>
          </li>
          <li>
            <a 
              href="https://linkedin.com/in/justin-sowden" 
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
              href="https://github.com/justinsowden" 
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

export default Header;

