import React, { useState } from 'react';

const ContactForm = ({ theme, animations }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
      alert('Thank you for your message! I\'ll get back to you soon.');
    }, 2000);
  };

  const styles = {
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1.5rem',
      ...animations.fadeIn,
      animationDelay: '0.6s'
    },
    fields: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '1rem'
    },
    field: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem'
    },
    label: {
      fontSize: '0.9rem',
      fontWeight: 600,
      color: theme.text,
      textTransform: 'uppercase',
      letterSpacing: '0.05em'
    },
    input: {
      padding: '0.75rem 1rem',
      border: `1px solid ${theme.border}`,
      borderRadius: '8px',
      background: 'rgba(255, 255, 255, 0.1)',
      color: theme.text,
      fontSize: '1rem',
      transition: 'all 0.3s ease',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)'
    },
    textarea: {
      padding: '0.75rem 1rem',
      border: `1px solid ${theme.border}`,
      borderRadius: '8px',
      background: 'rgba(255, 255, 255, 0.1)',
      color: theme.text,
      fontSize: '1rem',
      resize: 'vertical',
      minHeight: '120px',
      transition: 'all 0.3s ease',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)'
    },
    actions: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      justifyContent: 'center'
    },
    submitButton: {
      padding: '1rem 2rem',
      background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`,
      color: theme.textLight,
      border: 'none',
      borderRadius: '12px',
      fontSize: '1rem',
      fontWeight: 600,
      cursor: isSubmitting ? 'not-allowed' : 'pointer',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
      boxShadow: isHovered ? theme.shadow : '0 4px 15px rgba(0, 0, 0, 0.2)',
      opacity: isSubmitting ? 0.7 : 1
    }
  };

  return (
    <form method="post" action="#" style={styles.form} onSubmit={handleSubmit}>
      <div className="fields" style={styles.fields}>
        <div className="field" style={styles.field}>
          <label htmlFor="name" style={styles.label}>Name</label>
          <input 
            type="text" 
            name="name" 
            id="name" 
            value={formData.name}
            onChange={handleInputChange}
            style={styles.input}
            required
          />
        </div>
        <div className="field" style={styles.field}>
          <label htmlFor="email" style={styles.label}>Email</label>
          <input 
            type="email" 
            name="email" 
            id="email" 
            value={formData.email}
            onChange={handleInputChange}
            style={styles.input}
            required
          />
        </div>
      </div>
      <div className="field" style={styles.field}>
        <label htmlFor="message" style={styles.label}>Message</label>
        <textarea 
          name="message" 
          id="message" 
          rows="6"
          value={formData.message}
          onChange={handleInputChange}
          style={styles.textarea}
          required
        ></textarea>
      </div>
      <ul className="actions" style={styles.actions}>
        <li>
          <input 
            type="submit" 
            value={isSubmitting ? 'Sending...' : 'Send Message'}
            style={styles.submitButton}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            disabled={isSubmitting}
          />
        </li>
      </ul>
    </form>
  );
};

const ContactInfo = ({ title, content, isLink = false, theme, animations, index }) => {
  const styles = {
    section: {
      marginBottom: '2rem',
      ...animations.fadeIn,
      animationDelay: `${0.8 + index * 0.1}s`
    },
    title: {
      fontSize: '1.2rem',
      fontWeight: 600,
      color: theme.text,
      margin: '0 0 0.5rem 0',
      textTransform: 'uppercase',
      letterSpacing: '0.05em'
    },
    content: {
      color: theme.text,
      opacity: 0.8,
      lineHeight: 1.6,
      margin: 0
    },
    link: {
      color: theme.primary,
      textDecoration: 'none',
      transition: 'color 0.3s ease'
    }
  };

  return (
    <section style={styles.section}>
      <h3 style={styles.title}>{title}</h3>
      {isLink ? (
        <p style={styles.content}>
          <a href="#" style={styles.link}>{content}</a>
        </p>
      ) : (
        <p style={styles.content}>{content}</p>
      )}
    </section>
  );
};

const SocialLinks = ({ theme, animations }) => {
  const [hoveredIcon, setHoveredIcon] = useState(null);

  const socialIcons = [
    { icon: 'fa-twitter', label: 'Twitter', href: 'https://twitter.com/justinsowden' },
    { icon: 'fa-linkedin', label: 'LinkedIn', href: 'https://linkedin.com/in/justin-sowden' },
    { icon: 'fa-github', label: 'GitHub', href: 'https://github.com/justinsowden' },
    { icon: 'fa-envelope', label: 'Email', href: 'mailto:justin@example.com' }
  ];

  const styles = {
    section: {
      marginBottom: '2rem',
      ...animations.fadeIn,
      animationDelay: '1.2s'
    },
    title: {
      fontSize: '1.2rem',
      fontWeight: 600,
      color: theme.text,
      margin: '0 0 1rem 0',
      textTransform: 'uppercase',
      letterSpacing: '0.05em'
    },
    icons: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      gap: '1rem',
      flexWrap: 'wrap'
    },
    icon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '2.5rem',
      height: '2.5rem',
      color: theme.textLight,
      textDecoration: 'none',
      borderRadius: '50%',
      background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`,
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      transform: hoveredIcon ? 'scale(1.1) rotate(5deg)' : 'scale(1) rotate(0deg)',
      boxShadow: hoveredIcon ? theme.shadow : '0 4px 15px rgba(0, 0, 0, 0.2)'
    }
  };

  return (
    <section style={styles.section}>
      <h3 style={styles.title}>Social</h3>
      <ul className="icons alt" style={styles.icons}>
        {socialIcons.map((social, index) => (
          <li key={social.label}>
            <a 
              href={social.href}
              className={`icon brands alt ${social.icon}`}
              style={styles.icon}
              onMouseEnter={() => setHoveredIcon(social.label)}
              onMouseLeave={() => setHoveredIcon(null)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="label">{social.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

const Contact = ({ theme, animations }) => {
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

  const styles = {
    contact: {
      padding: '3rem 2rem',
      ...animations.fadeIn,
      animationDelay: '0.4s'
    },
    header: {
      textAlign: 'center',
      marginBottom: '3rem',
      ...animations.fadeIn,
      animationDelay: '0.2s'
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: 800,
      margin: '0 0 1rem 0',
      background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`,
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    subtitle: {
      fontSize: '1.1rem',
      color: theme.text,
      opacity: 0.8,
      lineHeight: 1.6
    },
    container: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
      gap: '3rem',
      alignItems: 'start',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    formSection: {
      background: `rgba(255, 255, 255, 0.05)`,
      borderRadius: '20px',
      padding: '2rem',
      border: `1px solid ${theme.border}`,
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)'
    },
    infoSection: {
      background: `rgba(255, 255, 255, 0.05)`,
      borderRadius: '20px',
      padding: '2rem',
      border: `1px solid ${theme.border}`,
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)'
    }
  };

  return (
    <div style={styles.contact}>
      <div style={styles.header}>
        <h1 style={styles.title}>Get In Touch</h1>
        <p style={styles.subtitle}>
          Ready to start a project or just want to chat? I'd love to hear from you!
        </p>
      </div>
      
      <div style={styles.container}>
        <section style={styles.formSection}>
          <h2 style={{ color: theme.text, marginBottom: '2rem' }}>Send Message</h2>
          <ContactForm theme={theme} animations={animations} />
        </section>
        
        <section style={styles.infoSection}>
          <h2 style={{ color: theme.text, marginBottom: '2rem' }}>Contact Information</h2>
          {contactInfo.map((info, index) => (
            <ContactInfo 
              key={index}
              title={info.title}
              content={info.content}
              isLink={info.isLink}
              theme={theme}
              animations={animations}
              index={index}
            />
          ))}
          <SocialLinks theme={theme} animations={animations} />
        </section>
      </div>
    </div>
  );
};

export default Contact;
