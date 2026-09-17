import React from 'react';
import PropTypes from 'prop-types';

const ContactInfo = ({ title, content, isLink = false }) => {
  const getHref = () => {
    if (!isLink) return undefined;
    if (title === 'Phone') return `tel:${content}`;
    if (title === 'Email') return `mailto:${content}`;
    return undefined;
  };

  const href = getHref();

  return (
    <div className="contact-info-item">
      <h3>{title}</h3>
      {href ? (
        <p>
          <a href={href} aria-label={`${title}: ${content}`}>
            {content}
          </a>
        </p>
      ) : (
        <p>{content}</p>
      )}
    </div>
  );
};

ContactInfo.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  isLink: PropTypes.bool
};

export default ContactInfo;
