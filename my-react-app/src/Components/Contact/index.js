import React from 'react';
import PropTypes from 'prop-types';
import ContactForm from './ContactForm';
import ContactInfo from './ContactInfo';
import SocialLinks from './SocialLinks';

const contactInfo = [
    {
        title: 'Address',
        content: 'Boston, MA (Remote)',
        isAlt: true
    }
];

const Contact = ({ theme, animations }) => {
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
            background: 'rgba(255, 255, 255, 0.05)',
            borderRadius: '20px',
            padding: '2rem',
            border: `1px solid ${theme.border}`,
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)'
        },
        infoSection: {
            background: 'rgba(255, 255, 255, 0.05)',
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

Contact.propTypes = {
    theme: PropTypes.object.isRequired,
    animations: PropTypes.object.isRequired
};

export default Contact;
