import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { PAGE_KEYS } from '../config/constants';
import Portfolio from './Portfolio';
import About from './About';
import Contact from './Contact';

const MainContent = ({ currentPage, setCurrentPage }) => {
  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: prefersReduced ? 'auto' : 'smooth' });
  }, [currentPage]);

  const renderContent = () => {
    switch (currentPage) {
      case PAGE_KEYS.PORTFOLIO:
        return <Portfolio setCurrentPage={setCurrentPage} />;
      case PAGE_KEYS.ABOUT:
        return <About />;
      case PAGE_KEYS.CONTACT:
        return <Contact />;
      default:
        return <Portfolio setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <main id="main" role="main" aria-label="Main content">
      <div key={currentPage} className="page-enter">
        {renderContent()}
      </div>
    </main>
  );
};

MainContent.propTypes = {
  currentPage: PropTypes.string.isRequired,
  setCurrentPage: PropTypes.func.isRequired
};

export default MainContent;
