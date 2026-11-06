import React from 'react';
import ContactInfo from './ContactInfo';
import SocialLinks from './SocialLinks';
import { CONTACT, CONTACT_INFO, SOCIAL_LINKS } from '../../config/constants';

const LINKEDIN = SOCIAL_LINKS.find((link) => link.label === 'LinkedIn');

const Contact = () => {
  return (
    <article className="contact">
      <header className="page-header">
        <h1>{CONTACT.title}</h1>
        <p className="page-lede">{CONTACT.lede}</p>
      </header>

      <div className="contact-layout">
        <section className="contact-panel" aria-labelledby="contact-linkedin-heading">
          <h2 id="contact-linkedin-heading">Message me on LinkedIn</h2>
          <p>Send a note there and I will reply on LinkedIn.</p>
          {LINKEDIN && (
            <a
              className="button"
              href={LINKEDIN.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              Message on LinkedIn
            </a>
          )}
        </section>

        <aside className="contact-aside" aria-label="Direct contact">
          <h2 className="about-section-title">Direct</h2>
          {CONTACT_INFO.map((info) => (
            <ContactInfo
              key={info.title}
              title={info.title}
              content={info.content}
              isLink={info.isLink}
            />
          ))}
          <SocialLinks />
        </aside>
      </div>
    </article>
  );
};

export default Contact;
