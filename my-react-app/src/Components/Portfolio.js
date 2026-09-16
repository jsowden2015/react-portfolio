import React from 'react';
import PropTypes from 'prop-types';
import { PAGE_KEYS, PORTFOLIO_PROJECTS, SOCIAL_LINKS } from '../config/constants';
import ProjectCard from './ProjectCard';

const GITHUB_URL = SOCIAL_LINKS.find((link) => link.icon === 'fa-github')?.href;

const Portfolio = ({ setCurrentPage }) => {
  return (
    <>
      <article className="post featured">
        <header className="major">
          <h1 className="name-gradient">Justin Sowden</h1>
          <p>Full Stack Developer</p>
          <p className="hero-lead">
            Building polished web apps with React, Angular, TypeScript, and thoughtful UX —
            based in Mountain View, CA, open to remote.
          </p>
        </header>
        <ul className="actions special hero-actions">
          <li>
            <button
              type="button"
              className="button"
              onClick={() => setCurrentPage(PAGE_KEYS.CONTACT)}
            >
              Get in touch
            </button>
          </li>
          {GITHUB_URL && (
            <li>
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="button secondary"
              >
                View GitHub
              </a>
            </li>
          )}
        </ul>
      </article>
      <section className="posts" aria-label="Portfolio projects">
        <h2 className="sr-only">Portfolio</h2>
        {PORTFOLIO_PROJECTS.map((project) => (
          <ProjectCard key={project.repoUrl || project.title} project={project} />
        ))}
      </section>
    </>
  );
};

Portfolio.propTypes = {
  setCurrentPage: PropTypes.func.isRequired
};

export default Portfolio;
