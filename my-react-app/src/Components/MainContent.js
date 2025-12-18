import React from 'react';
import { PORTFOLIO_PROJECTS, THEMES, ANIMATIONS } from '../config/constants';
import Contact from './Contact';

const MainContent = ({ currentPage }) => {
  const renderPortfolio = () => (
    <section className="posts" aria-label="Portfolio projects">
      <h1 className="sr-only">Portfolio</h1>
      {PORTFOLIO_PROJECTS.map((project, index) => (
        <article key={index}>
          <header>
            <span className="date" aria-label={`Project category: ${project.date}`}>{project.date}</span>
            <h2>
              {project.title}
            </h2>
          </header>
          <div className="image fit" role="img" aria-label={`${project.title} project image`}>
            <img src={project.image} alt={`${project.title} - ${project.description}`} />
          </div>
          <p>{project.description}</p>
          <ul className="actions special">
            <li>
              <button 
                type="button" 
                className="button"
                aria-label={`View full details for ${project.title}`}
              >
                Full Story
              </button>
            </li>
          </ul>
        </article>
      ))}
    </section>
  );

  const renderAbout = () => (
    <article className="post">
      <header className="major">
        <span className="date" aria-label="Section: About Me">About Me</span>
        <h1>Welcome to My Portfolio</h1>
        <p>
          I'm a passionate developer and designer creating modern web experiences.
          This portfolio showcases my work, skills, and projects.
        </p>
      </header>
      <div className="image main">
        <img src="/images/pic01.jpg" alt="Justin Sowden - Developer and Designer" />
      </div>
      <p>
        With a focus on clean code, user experience, and modern design principles,
        I create digital solutions that are both functional and beautiful.
      </p>
      <p>
        My expertise spans frontend and backend development, UI/UX design, and
        full-stack application development. I'm always learning and exploring
        new technologies to stay at the forefront of web development.
      </p>
    </article>
  );

  const renderContact = () => (
    <Contact theme={THEMES.light} animations={ANIMATIONS} />
  );

  const renderContent = () => {
    switch (currentPage) {
      case 'portfolio':
        return renderPortfolio();
      case 'generic':
        return renderAbout();
      case 'contact':
        return renderContact();
      default:
        return renderPortfolio();
    }
  };

  return (
    <main id="main" role="main" aria-label="Main content">
      {renderContent()}
    </main>
  );
};

export default MainContent;

