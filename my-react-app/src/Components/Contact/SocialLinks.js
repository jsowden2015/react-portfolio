import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { SOCIAL_LINKS } from '../../config/constants';

const SocialLinks = ({ theme, animations }) => {
    const [hoveredIcon, setHoveredIcon] = useState(null);

    const socialIcons = SOCIAL_LINKS.filter(
        (link) => link.icon === 'fa-linkedin' || link.icon === 'fa-github'
    );

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
                {socialIcons.map((social) => (
                    <li key={social.label}>
                        <a
                            href={social.href}
                            className={`icon brands alt ${social.icon}`}
                            style={styles.icon}
                            onMouseEnter={() => setHoveredIcon(social.label)}
                            onMouseLeave={() => setHoveredIcon(null)}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${social.label} (opens in new tab)`}
                        >
                            <span className="label">{social.label}</span>
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
};

SocialLinks.propTypes = {
    theme: PropTypes.object.isRequired,
    animations: PropTypes.object.isRequired
};

export default SocialLinks;
