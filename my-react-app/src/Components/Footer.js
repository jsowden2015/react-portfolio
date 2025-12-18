import React from 'react';

const ContactForm = () => (
  <form method="post" action="#" aria-label="Contact form">
    <div className="fields">
      <div className="field">
        <label htmlFor="footer-name">Name</label>
        <input 
          type="text" 
          name="name" 
          id="footer-name" 
          required
          aria-required="true"
          aria-label="Your name"
        />
      </div>
      <div className="field">
        <label htmlFor="footer-email">Email</label>
        <input 
          type="email" 
          name="email" 
          id="footer-email" 
          required
          aria-required="true"
          aria-label="Your email address"
        />
      </div>
      <div className="field">
        <label htmlFor="footer-message">Message</label>
        <textarea 
          name="message" 
          id="footer-message" 
          rows="3"
          required
          aria-required="true"
          aria-label="Your message"
        ></textarea>
      </div>
    </div>
    <ul className="actions">
      <li>
        <input 
          type="submit" 
          value="Send Message" 
          aria-label="Submit contact form"
        />
      </li>
    </ul>
  </form>
);

const ContactInfo = ({ title, content, isLink = false }) => {
  const getHref = () => {
    if (title === 'Phone') {
      return `tel:${content}`;
    } else if (title === 'Email') {
      return `mailto:${content}`;
    }
    return '#';
  };

  return (
    <section>
      <h3>{title}</h3>
      {isLink ? (
        <p>
          <a 
            href={getHref()}
            aria-label={`${title}: ${content}`}
          >
            {content}
          </a>
        </p>
      ) : (
        <p>{content}</p>
      )}
    </section>
  );
};

const SocialLinks = () => (
  <section aria-label="Social media links">
    <h3>Social</h3>
    <ul className="icons alt" role="list">
      <li>
        <a 
          href="https://www.linkedin.com/in/justin-sowden-361005184/" 
          className="icon brands alt fa-linkedin" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Visit Justin Sowden's LinkedIn profile (opens in new tab)"
        >
          <span className="label">LinkedIn</span>
        </a>
      </li>
      <li>
        <a 
          href="https://github.com/jsowden2015" 
          className="icon brands alt fa-github" 
          target="_blank" 
          rel="noopener noreferrer"
          aria-label="Visit Justin Sowden's GitHub profile (opens in new tab)"
        >
          <span className="label">GitHub</span>
        </a>
      </li>
    </ul>
  </section>
);

const Footer = () => {
  const contactInfo = [
    {
      title: 'Address',
      content: '1234 Somewhere Road #87257\nNashville, TN 00000-0000',
      isAlt: true
    },
    {
      title: 'Phone',
      content: '(000) 000-0000',
      isLink: true
    },
    {
      title: 'Email',
      content: 'info@untitled.tld',
      isLink: true
    }
  ];

  return (
    <footer id="footer" role="contentinfo" aria-label="Site footer">
      <section aria-label="Contact form section">
        <ContactForm />
      </section>
      <section className="split contact" aria-label="Contact information">
        {contactInfo.map((info, index) => (
          <ContactInfo 
            key={index}
            title={info.title}
            content={info.content}
            isLink={info.isLink}
          />
        ))}
        <SocialLinks />
      </section>
    </footer>
  );
};

export default Footer;
