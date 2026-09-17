import React from 'react';
import { ABOUT, SOCIAL_LINKS } from '../config/constants';

const About = () => {
  const linkedInUrl =
    SOCIAL_LINKS.find((link) => link.icon === 'fa-linkedin')?.href ||
    'https://www.linkedin.com/in/justin-sowden-361005184/';

  return (
    <article className="about">
      <header className="page-header">
        <p className="page-kicker">{ABOUT.kicker}</p>
        <h1>{ABOUT.title}</h1>
        <p className="page-lede">{ABOUT.lede}</p>
      </header>

      <p className="about-summary">{ABOUT.summary}</p>

      <section className="about-block" aria-labelledby="about-experience">
        <h2 id="about-experience" className="about-section-title">
          Experience
        </h2>
        <div className="about-role">
          <p className="about-role-title">
            {ABOUT.experience.role}
            <span className="about-role-org"> · {ABOUT.experience.org}</span>
          </p>
          <p className="about-role-detail">{ABOUT.experience.detail}</p>
        </div>
        <ul className="about-highlights">
          {ABOUT.highlights.map((item) => (
            <li key={item.title}>
              <strong>{item.title}</strong>
              <span>{item.detail}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="about-block" aria-labelledby="about-skills">
        <h2 id="about-skills" className="about-section-title">
          Skills
        </h2>
        <div className="about-skill-groups">
          {ABOUT.skillGroups.map((group) => (
            <div key={group.label} className="about-skill-group">
              <h3>{group.label}</h3>
              <ul className="project-tags" aria-label={`${group.label} skills`}>
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <p className="about-footer">
        Full history on{' '}
        <a
          href={linkedInUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Justin Sowden's LinkedIn profile (opens in new tab)"
        >
          LinkedIn
        </a>
        .
      </p>
    </article>
  );
};

export default About;
