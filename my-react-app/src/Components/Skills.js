import React from 'react';
import 'animate.css';

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <h2 className="skill-header">My Top Skills</h2>
      <div className="skills-wrapper">
        <div className="first-set animate__animated animate__pulse">
          <img
            src="icons/icons8-html-5.svg"
            alt=""
            loading="lazy"
            className="icon icon-card"
          />
          <img
            src="icons/icons8-css3.svg"
            alt=""
            loading="lazy"
            className="icon icon-card"
          />
          <img
            src="icons/icons8-javascript.svg"
            alt=""
            loading="lazy"
            className="icon icon-card"
          />
        </div>
        <div className="second-set animate__animated animate__pulse">
          <img
            src="icons/icons8-bootstrap.svg"
            alt=""
            loading="lazy"
            className="icon icon-card"
          />
          <img
            src="icons/icons8-react-native.svg"
            alt=""
            loading="lazy"
            className="icon icon-card"
          />
          <img
            src="icons/icons8-git.svg"
            alt=""
            loading="lazy"
            className="icon icon-card"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
