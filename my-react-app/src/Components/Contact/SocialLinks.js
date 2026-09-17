import React from 'react';
import { SOCIAL_LINKS } from '../../config/constants';

const SocialLinks = () => {
  const socialIcons = SOCIAL_LINKS.filter(
    (link) => link.icon === 'fa-linkedin' || link.icon === 'fa-github'
  );

  return (
    <div className="contact-info-item">
      <h3>Social</h3>
      <ul className="contact-social" aria-label="Social links">
        {socialIcons.map((social) => (
          <li key={social.label}>
            <a
              href={social.href}
              className={`icon brands ${social.icon}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${social.label} (opens in new tab)`}
            >
              <span className="label">{social.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
