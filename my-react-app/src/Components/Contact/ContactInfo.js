import React from 'react';
import PropTypes from 'prop-types';

const ContactInfo = ({ title, content, isLink = false, theme, animations, index }) => {
    const getHref = () => {
        if (!isLink) return '#';
        if (title === 'Phone') return `tel:${content}`;
        if (title === 'Email') return `mailto:${content}`;
        return '#';
    };
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
                        href={getHref()}
                        style={styles.link}
                        aria-label={`${title}: ${content}`}
                        onClick={title !== 'Phone' && title !== 'Email' ? (e) => e.preventDefault() : undefined}
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

ContactInfo.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    isLink: PropTypes.bool,
    theme: PropTypes.object.isRequired,
    animations: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired
};

export default ContactInfo;
