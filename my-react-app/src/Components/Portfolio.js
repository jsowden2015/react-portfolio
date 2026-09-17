import React from 'react';
import PropTypes from 'prop-types';
import { HERO, PAGE_KEYS, PORTFOLIO_PROJECTS } from '../config/constants';
import ProjectCard from './ProjectCard';

const Portfolio = ({ setCurrentPage }) => {
  const featuredProject = PORTFOLIO_PROJECTS.find((project) => project.featured);
  const supportingProjects = PORTFOLIO_PROJECTS.filter((project) => !project.featured);

  return (
    <>
      <article className="hero">
        <p className="hero-kicker">{HERO.kicker}</p>
        <h1>{HERO.name}</h1>
        <p className="hero-role">{HERO.role}</p>
        <p className="hero-lead">{HERO.lead}</p>
        <ul className="actions hero-actions">
          <li>
            <button
              type="button"
              className="button"
              onClick={() => setCurrentPage(PAGE_KEYS.CONTACT)}
            >
              {HERO.cta}
            </button>
          </li>
        </ul>
      </article>
      <section className="work-index" aria-labelledby="work-heading">
        <h2 id="work-heading" className="section-heading">Selected work</h2>
        {featuredProject && (
          <ProjectCard project={featuredProject} featured />
        )}
        {supportingProjects.length > 0 && (
          <div className="work-supporting">
            {supportingProjects.map((project) => (
              <ProjectCard key={project.repoUrl || project.title} project={project} />
            ))}
          </div>
        )}
      </section>
    </>
  );
};

Portfolio.propTypes = {
  setCurrentPage: PropTypes.func.isRequired
};

export default Portfolio;
