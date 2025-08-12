import React from 'react';
import LandingPage from './LandingPage';
import BlogPost from './BlogPost';
import GridLayout from './GridLayout';

const MainContent = ({ currentPage }) => {
  const renderContent = () => {
    switch (currentPage) {
      case 'massively':
        return <LandingPage />;
      case 'generic':
        return <BlogPost />;
      case 'elements':
        return <GridLayout />;
      default:
        return <LandingPage />;
    }
  };

  return (
    <div id="main" className="main">
      {renderContent()}
    </div>
  );
};

export default MainContent;
