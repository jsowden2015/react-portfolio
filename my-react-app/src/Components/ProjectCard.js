import React from 'react';
import PropTypes from 'prop-types';

const ProjectCard = ({ project, featured = false }) => {
  const titleLines = project.title.split('\n');
  const hasActions = Boolean(project.repoUrl || project.demoUrl);
  const categoryLabel = featured ? `Featured · ${project.date}` : project.date;

  return (
    <article className={`project-card${featured ? ' project-card--featured' : ''}`}>
      <header>
        <span className="date" aria-label={`Project category: ${categoryLabel}`}>
          {categoryLabel}
        </span>
        <h2>
          {titleLines.map((line, i) => (
            <React.Fragment key={`${line}-${i}`}>
              {line}
              {i < titleLines.length - 1 && <br />}
            </React.Fragment>
          ))}
        </h2>
      </header>
      <div className="image fit">
        <img
          src={`${process.env.PUBLIC_URL}/${project.image}`}
          alt={project.imageAlt || project.title.replace(/\n/g, ' ')}
          loading="lazy"
        />
      </div>
      {project.outcome && <p className="project-outcome">{project.outcome}</p>}
      <p className="project-description">{project.description}</p>
      {project.tags?.length > 0 && (
        <ul className="project-tags" aria-label="Technologies used">
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      )}
      {hasActions && (
        <ul className="actions">
          {project.demoUrl && (
            <li>
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="button"
                aria-label={`View live demo of ${titleLines[0]}`}
              >
                Live demo
              </a>
            </li>
          )}
          {project.repoUrl && (
            <li>
              <a
                href={project.repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`button${project.demoUrl ? ' secondary' : ''}`}
                aria-label={`View ${titleLines[0]} repository on GitHub`}
              >
                View on GitHub
              </a>
            </li>
          )}
        </ul>
      )}
    </article>
  );
};

ProjectCard.propTypes = {
  featured: PropTypes.bool,
  project: PropTypes.shape({
    date: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    imageAlt: PropTypes.string,
    outcome: PropTypes.string,
    description: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string),
    repoUrl: PropTypes.string,
    demoUrl: PropTypes.string,
    featured: PropTypes.bool
  }).isRequired
};

export default ProjectCard;
