import React from 'react';
import 'animate.css';

const HeroSection = () => {
  return (
    <section className="hero" id="about">
      <img
        src="assets/images/wfh_1.svg"
        alt="jane-doe"
        loading="lazy"
        className="hero-img"
      />
      <div className="bio animate__animated animate__shakeX">
        <h2 className="bio-title">About Me</h2>
        <p className="bio-text">
          As a Software Developer, I collaborate closely with my teammates to deliver
          reliable and frequent software enhancements for web applications.
          I use my expertise in Angular, JavaScript, and HTML5 to generate efficient and well-structured
          code that meets customer requirements and exceeds expectations.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
