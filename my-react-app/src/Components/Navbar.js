import React from 'react';
import { IonIcon } from '@ionic/react';
import { menuOutline } from 'ionicons/icons';

const Navbar = () => {
  return (
    <nav>
      <h1>Justin Sowden</h1>
      <ul className="navigation">
        <li><a href="#about" className="nav-link">About</a></li>
        <li><a href="#skills" className="nav-link">Skills</a></li>
        <li><a href="#projects" className="nav-link">Projects</a></li>
        <li><a href="#contact" className="nav-link">Contact</a></li>
      </ul>
      <button className="burger-menu" id="burger-menu">
        <IonIcon className="bars" icon={menuOutline} />
      </button>
    </nav>
  );
};

export default Navbar;
