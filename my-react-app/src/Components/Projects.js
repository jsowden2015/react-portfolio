import React from 'react';

const Projects = () => {
  return (
    <section className="projects" id="projects">
      <h2 className="projects-title">Some of my Recent Projects</h2>
      <div className="projects-container">
        <div className="project-container project-card">
          <img
            src="assets/images/expenseTracker.png"
            alt="expense-tracker"
            loading="lazy"
            className="project-pic"
          />
          <h3 className="project-title">Expense Tracker</h3>
          <p className="project-details">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
            ratione vel inventore labore commodi modi quos culpa aut saepe!
            Alias!
          </p>
          <a href="#" target="_blank" className="project-link">Check it Out</a>
        </div>
        <div className="project-container project-card">
          <img
            src="assets/images/netflixClone.png"
            alt="netflic-clone"
            loading="lazy"
            className="project-pic"
          />
          <h3 className="project-title">Netflix Clone</h3>
          <p className="project-details">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
            ratione vel inventore labore commodi modi quos culpa aut saepe!
            Alias!
          </p>
          <a href="#" target="_blank" className="project-link">Check it Out</a>
        </div>
        <div className="project-container project-card">
          <img
            src="assets/images/greenyEarth.png"
            alt="greeny-earth"
            loading="lazy"
            className="project-pic"
          />
          <h3 className="project-title">Greeny Earth</h3>
          <p className="project-details">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas
            ratione vel inventore labore commodi modi quos culpa aut saepe!
            Alias!
          </p>
          <a href="#" target="_blank" className="project-link">Check it Out</a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
