import React from 'react';
import PropTypes from 'prop-types';

const ProjectCard = ({ project, index }) => {
  return (
    <article>
      <header>
        <span className="date" aria-label={`Project category: ${project.date}`}>
          {project.date}
        </span>
        <h2>
          {project.title.split('\n').map((line, i) => (
            <React.Fragment key={i}>
              {line}
              {i < project.title.split('\n').length - 1 && <br />}
            </React.Fragment>
          ))}
        </h2>
      </header>
      <div className="image fit" role="img" aria-label={`${project.title} project image`}>
        <img 
          src={`${process.env.PUBLIC_URL}/${project.image}`} 
          alt={`${project.title} - ${project.description}`} 
        />
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
  );
};

ProjectCard.propTypes = {
  project: PropTypes.shape({
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    repoUrl: PropTypes.string
  }).isRequired,
  index: PropTypes.number.isRequired
};

export default ProjectCard;

