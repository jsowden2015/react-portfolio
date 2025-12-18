import React from 'react';
import PropTypes from 'prop-types';
import { THEMES, ANIMATIONS, PAGE_KEYS } from '../config/constants';
import Portfolio from './Portfolio';
import About from './About';
import Contact from './Contact';

const MainContent = ({ currentPage, isDarkMode }) => {
  const renderContent = () => {
    switch (currentPage) {
      case PAGE_KEYS.PORTFOLIO:
        return <Portfolio />;
      case PAGE_KEYS.ABOUT:
        return <About />;
      case PAGE_KEYS.CONTACT:
        return <Contact theme={isDarkMode ? THEMES.dark : THEMES.light} animations={ANIMATIONS} />;
      default:
        return <Portfolio />;
    }
  };

  return (
    <main id="main" role="main" aria-label="Main content">
      {renderContent()}
    </main>
  );
};

MainContent.propTypes = {
  currentPage: PropTypes.string.isRequired,
  isDarkMode: PropTypes.bool.isRequired
};

export default MainContent;

