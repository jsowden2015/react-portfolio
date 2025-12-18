import React from 'react';
import { PORTFOLIO_PROJECTS } from '../config/constants';
import ProjectCard from './ProjectCard';

const Portfolio = () => {
  return (
    <>
      <article className="post featured">
        <header className="major">
          <h1 className="name-gradient">Justin Sowden</h1>
          <p>Full Stack Developer</p>
        </header>
      </article>
      <section className="posts" aria-label="Portfolio projects">
        <h1 className="sr-only">Portfolio</h1>
        {PORTFOLIO_PROJECTS.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </section>
    </>
  );
};

export default Portfolio;

