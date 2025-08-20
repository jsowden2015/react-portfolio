import React from 'react';

const ContactForm = () => (
  <form method="post" action="#">
    <div className="fields">
      <div className="field">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
      </div>
      <div className="field">
        <label htmlFor="email">Email</label>
        <input type="text" name="email" id="email" />
      </div>
      <div className="field">
        <label htmlFor="message">Message</label>
        <textarea name="message" id="message" rows="3"></textarea>
      </div>
    </div>
    <ul className="actions">
      <li><input type="submit" value="Send Message" /></li>
    </ul>
  </form>
);

const ContactInfo = ({ title, content, isLink = false }) => (
  <section>
    <h3>{title}</h3>
    {isLink ? (
      <p><a href="#">{content}</a></p>
    ) : (
      <p>{content}</p>
    )}
  </section>
);

const SocialLinks = () => (
  <section>
    <h3>Social</h3>
    <ul className="icons alt">
      <li><a href="#" className="icon brands alt fa-twitter"><span className="label">Twitter</span></a></li>
      <li><a href="#" className="icon brands alt fa-facebook-f"><span className="label">Facebook</span></a></li>
      <li><a href="#" className="icon brands alt fa-instagram"><span className="label">Instagram</span></a></li>
      <li><a href="#" className="icon brands alt fa-github"><span className="label">GitHub</span></a></li>
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
    <footer id="footer">
      <section>
        <ContactForm />
      </section>
      <section className="split contact">
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
