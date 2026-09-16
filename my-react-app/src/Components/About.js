import React from 'react';
import { ABOUT, SOCIAL_LINKS } from '../config/constants';

const About = () => {
  const linkedInLink = SOCIAL_LINKS.find((link) => link.icon === 'fa-linkedin');
  const LINKEDIN_URL = linkedInLink
    ? linkedInLink.href
    : 'https://www.linkedin.com/in/justin-sowden-361005184/';

  return (
    <article className="post about">
      <header className="major">
        <h2 className="name-gradient">About Justin Sowden</h2>
        <p>{ABOUT.headline}</p>
      </header>

      <p>{ABOUT.summary}</p>

      <h3 className="about-section-title">Highlights</h3>
      <ul className="about-highlights">
        {ABOUT.highlights.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h3 className="about-section-title">Technical skills</h3>
      <ul className="project-tags about-skills" aria-label="Technical skills">
        {ABOUT.skills.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>

      <p>
        For more information about my experience, education, and professional background, please
        visit my{' '}
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Justin Sowden's LinkedIn profile (opens in new tab)"
        >
          LinkedIn profile
        </a>
        .
      </p>
    </article>
  );
};

export default About;
