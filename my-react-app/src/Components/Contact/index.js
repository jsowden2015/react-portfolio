import React from 'react';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import SocialLinks from './SocialLinks';
import { CONTACT, CONTACT_INFO } from '../../config/constants';

const Contact = () => {
  return (
    <article className="contact">
      <header className="page-header">
        <h1>{CONTACT.title}</h1>
        <p className="page-lede">{CONTACT.lede}</p>
      </header>

      <div className="contact-layout">
        <section className="contact-form-panel" aria-labelledby="contact-form-heading">
          <h2 id="contact-form-heading">Send a message</h2>
          <ContactForm />
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
