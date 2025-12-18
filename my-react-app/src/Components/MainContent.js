import React from 'react';
import { PORTFOLIO_PROJECTS, THEMES, ANIMATIONS } from '../config/constants';
import Contact from './Contact';

const MainContent = ({ currentPage, isDarkMode }) => {
  const renderPortfolio = () => (
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
        <article key={index}>
          <header>
            <span className="date" aria-label={`Project category: ${project.date}`}>{project.date}</span>
            <h2>
              {project.title}
            </h2>
          </header>
          <div className="image fit" role="img" aria-label={`${project.title} project image`}>
            <img src={`${process.env.PUBLIC_URL}/${project.image}`} alt={`${project.title} - ${project.description}`} />
          </div>
          <p>{project.description}</p>
          <ul className="actions special">
            <li>
              {project.repoUrl ? (
                <a 
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button"
                  aria-label={`View ${project.title} repository on GitHub`}
                >
                  View on GitHub
                </a>
              ) : (
                <button 
                  type="button" 
                  className="button"
                  aria-label={`View full details for ${project.title}`}
                >
                  Full Story
                </button>
              )}
            </li>
          </ul>
        </article>
      ))}
      </section>
    </>
  );

  const renderAbout = () => (
    <article className="post">
      <header className="major">
        <h2 className="name-gradient">About Justin Sowden</h2>
        <p>
          Software Developer @ Eliassen Group (100% Remote) | BS | Greater Boston
        </p>
      </header>
      <p>
        Full Stack Developer with 4+ years' experience designing and building scalable web applications using Angular (v13/14) and Java (Spring Boot). Skilled in developing RESTful APIs, managing source control with Git, and integrating frontend applications with backend services.
      </p>
      <p>
        Adept at mentoring junior developers, collaborating in Agile/Scrum teams, and delivering responsive, maintainable code. Experienced in RxJS state management, unit testing with Jasmine/Karma, and using Docker for local database development environments.
      </p>
      <p>
        For more information about my experience, education, and professional background, please visit my{' '}
        <a 
          href="https://www.linkedin.com/in/justin-sowden-361005184/" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Visit Justin Sowden's LinkedIn profile (opens in new tab)"
        >
          LinkedIn profile
        </a>.
      </p>
    </article>
  );

  const renderContact = () => (
    <Contact theme={isDarkMode ? THEMES.dark : THEMES.light} animations={ANIMATIONS} />
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

