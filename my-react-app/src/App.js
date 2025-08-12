import React, { useState } from 'react';
import './App.css';
import Header from './Components/Header';
import MainContent from './Components/MainContent';
import Footer from './Components/Footer';

function App() {
  const [currentPage, setCurrentPage] = useState('massively');

  return (
    <div id="wrapper" className="fade-in">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <MainContent currentPage={currentPage} />
      <Footer />
      
      {/* Copyright */}
      <div id="copyright">
        <ul><li>&copy; Untitled</li><li>Design: <a href="https://html5up.net">HTML5 UP</a></li></ul>
      </div>
    </div>
  );
}

export default App;
