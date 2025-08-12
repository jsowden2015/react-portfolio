import React from 'react';

const Header = ({ currentPage, setCurrentPage }) => {
  return (
    <>
      {/* Header */}
      <header id="header">
        <a href="#" className="logo">Massively</a>
      </header>

      {/* Nav */}
      <nav id="nav">
        <ul className="links">
          <li className={currentPage === 'massively' ? 'active' : ''}>
            <a href="#" onClick={() => setCurrentPage('massively')}>This is Massively</a>
          </li>
          <li className={currentPage === 'generic' ? 'active' : ''}>
            <a href="#" onClick={() => setCurrentPage('generic')}>Generic Page</a>
          </li>
          <li className={currentPage === 'elements' ? 'active' : ''}>
            <a href="#" onClick={() => setCurrentPage('elements')}>Elements Reference</a>
          </li>
        </ul>
        <ul className="icons">
          <li><a href="#" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
          <li><a href="#" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
          <li><a href="#" className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
          <li><a href="#" className="icon brands fa-github"><span className="label">GitHub</span></a></li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
