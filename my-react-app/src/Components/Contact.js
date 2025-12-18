import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

// Helper function to show notifications
const showNotification = (message, type = 'success') => {
  const notification = document.createElement('div');
  notification.setAttribute('role', 'alert');
  notification.setAttribute('aria-live', 'polite');
  const bgColor = type === 'success' ? '#4CAF50' : '#f44336';
  notification.style.cssText = `position: fixed; top: 20px; right: 20px; background: ${bgColor}; color: white; padding: 1rem 2rem; border-radius: 8px; z-index: 10000; box-shadow: 0 4px 6px rgba(0,0,0,0.1); font-family: inherit;`;
  notification.textContent = message;
  document.body.appendChild(notification);
  setTimeout(() => {
    notification.remove();
  }, 5000);
};

const ContactForm = ({ theme, animations }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  // EmailJS configuration - these should be set as environment variables
  const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'your_service_id';
  const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'your_template_id';
  const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'your_public_key';

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Check if EmailJS is configured
    if (SERVICE_ID === 'your_service_id' || TEMPLATE_ID === 'your_template_id' || PUBLIC_KEY === 'your_public_key') {
      showNotification('Email service is not configured. Please set up EmailJS credentials.', 'error');
      setIsSubmitting(false);
      return;
    }

    try {
      // Initialize EmailJS with public key
      emailjs.init(PUBLIC_KEY);

      // Send email using EmailJS
      // Variable names match your EmailJS template: {{name}}, {{email}}, {{message}}, {{title}}, {{time}}
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        name: formData.name,
        email: formData.email,
        message: formData.message,
        title: 'Portfolio Contact Form',
        time: new Date().toLocaleString()
      });

      // Success
      showNotification('Thank you for your message! I\'ll get back to you soon.', 'success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      showNotification('Sorry, there was an error sending your message. Please try again later.', 'error');
    } finally {
      setIsSubmitting(false);
    }
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
    getInputStyle: (fieldName) => ({
      padding: '0.75rem 1rem',
      border: focusedField === fieldName
        ? `2px solid ${theme.primary}` 
        : `2px solid rgba(102, 126, 234, 0.4)`,
      borderRadius: '8px',
      background: 'rgba(255, 255, 255, 0.95)',
      color: theme.text,
      fontSize: '1rem',
      transition: 'all 0.3s ease',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      outline: 'none',
      boxShadow: focusedField === fieldName
        ? `0 0 0 3px rgba(102, 126, 234, 0.1)` 
        : 'none'
    }),
    textarea: {
      padding: '0.75rem 1rem',
      border: focusedField === 'message' 
        ? `2px solid ${theme.primary}` 
        : `2px solid rgba(102, 126, 234, 0.4)`,
      borderRadius: '8px',
      background: 'rgba(255, 255, 255, 0.95)',
      color: theme.text,
      fontSize: '1rem',
      resize: 'vertical',
      minHeight: '120px',
      transition: 'all 0.3s ease',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      outline: 'none',
      boxShadow: focusedField === 'message' 
        ? `0 0 0 3px rgba(102, 126, 234, 0.1)` 
        : 'none'
    },
    actions: {
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%'
    },
    actionItem: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    submitButton: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '1rem 2rem',
      background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`,
      color: theme.textLight,
      border: 'none',
      borderRadius: '12px',
      fontSize: '1rem',
      fontWeight: 700,
      letterSpacing: '0.02em',
      cursor: isSubmitting ? 'not-allowed' : 'pointer',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      transform: isHovered ? 'translateY(-2px)' : 'translateY(0)',
      boxShadow: isHovered ? theme.shadow : '0 4px 15px rgba(0, 0, 0, 0.2)',
      opacity: isSubmitting ? 0.7 : 1,
      minWidth: '150px',
      textAlign: 'center',
      textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)'
    }
  };

  return (
    <form 
      method="post" 
      action="#" 
      style={styles.form} 
      onSubmit={handleSubmit}
      aria-label="Contact form"
      noValidate
    >
      <div className="fields" style={styles.fields}>
        <div className="field" style={styles.field}>
          <label htmlFor="name" style={styles.label}>Name</label>
          <input 
            type="text" 
            name="name" 
            id="name" 
            value={formData.name}
            onChange={handleInputChange}
            onFocus={() => setFocusedField('name')}
            onBlur={() => setFocusedField(null)}
            style={styles.getInputStyle('name')}
            required
            aria-required="true"
            aria-label="Your name"
            aria-invalid={false}
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
            onFocus={() => setFocusedField('email')}
            onBlur={() => setFocusedField(null)}
            style={styles.getInputStyle('email')}
            required
            aria-required="true"
            aria-label="Your email address"
            aria-invalid={false}
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
          onFocus={() => setFocusedField('message')}
          onBlur={() => setFocusedField(null)}
          style={styles.textarea}
          required
          aria-required="true"
          aria-label="Your message"
          aria-invalid={false}
        ></textarea>
      </div>
      <ul className="actions" style={styles.actions} role="list">
        <li style={styles.actionItem}>
          <button 
            type="submit"
            style={styles.submitButton}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            disabled={isSubmitting}
            aria-label="Submit contact form"
            aria-busy={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
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
      opacity: 0.9,
      lineHeight: 1.6,
      margin: 0,
      fontSize: '1rem'
    },
    link: {
      color: theme.primary,
      textDecoration: 'none',
      transition: 'color 0.3s ease',
      fontWeight: 600,
      opacity: 1
    }
  };

  return (
    <section style={styles.section}>
      <h3 style={styles.title}>{title}</h3>
      {isLink ? (
        <p style={styles.content}>
          <a 
            href={title === 'Phone' ? `tel:${content}` : title === 'Email' ? `mailto:${content}` : '#'} 
            style={styles.link}
            aria-label={`${title}: ${content}`}
          >
            {content}
          </a>
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
    { icon: 'fa-linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/justin-sowden-361005184/' },
    { icon: 'fa-github', label: 'GitHub', href: 'https://github.com/jsowden2015' }
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
      content: 'Boston, MA (Remote)',
      isAlt: true
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
        <section style={styles.formSection} aria-label="Contact form section">
          <h2 style={{ color: theme.text, marginBottom: '2rem' }}>Send Message</h2>
          <ContactForm theme={theme} animations={animations} />
        </section>
        
        <section style={styles.infoSection} aria-label="Contact information section">
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
