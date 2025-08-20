import React from 'react';
import LandingPage from './LandingPage';
import BlogPost from './BlogPost';
import GridLayout from './GridLayout';

const MainContent = ({ currentPage }) => {
  const pages = {
    massively: LandingPage,
    generic: BlogPost,
    elements: GridLayout
  };

  const CurrentPageComponent = pages[currentPage] || LandingPage;

  return (
    <div id="main" className="main">
      <CurrentPageComponent />
    </div>
  );
};

export default MainContent;
