import React, { useState } from 'react';
import PropTypes from 'prop-types';
import emailjs from '@emailjs/browser';
import { Z_INDEX } from '../../config/constants';

const NOTIFICATION_CONFIG = {
    SUCCESS_COLOR: '#4CAF50',
    ERROR_COLOR: '#f44336',
    DURATION: 5000,
    POSITION: { top: '20px', right: '20px' }
};

const showNotification = (message, type = 'success') => {
    const notification = document.createElement('div');
    notification.setAttribute('role', 'alert');
    notification.setAttribute('aria-live', 'polite');
    const bgColor = type === 'success' ? NOTIFICATION_CONFIG.SUCCESS_COLOR : NOTIFICATION_CONFIG.ERROR_COLOR;
    notification.style.cssText = `position: fixed; top: ${NOTIFICATION_CONFIG.POSITION.top}; right: ${NOTIFICATION_CONFIG.POSITION.right}; background: ${bgColor}; color: white; padding: 1rem 2rem; border-radius: 8px; z-index: ${Z_INDEX.NOTIFICATION}; box-shadow: 0 4px 6px rgba(0,0,0,0.1); font-family: inherit;`;
    notification.textContent = message;
    document.body.appendChild(notification);
    setTimeout(() => {
        notification.remove();
    }, NOTIFICATION_CONFIG.DURATION);
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

    const EMAILJS_CONFIG = {
        SERVICE_ID: process.env.REACT_APP_EMAILJS_SERVICE_ID || 'your_service_id',
        TEMPLATE_ID: process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'your_template_id',
        PUBLIC_KEY: process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'your_public_key'
    };

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        if (
            EMAILJS_CONFIG.SERVICE_ID === 'your_service_id' ||
            EMAILJS_CONFIG.TEMPLATE_ID === 'your_template_id' ||
            EMAILJS_CONFIG.PUBLIC_KEY === 'your_public_key'
        ) {
            showNotification('Email service is not configured. Please set up EmailJS credentials.', 'error');
            setIsSubmitting(false);
            return;
        }

        try {
            emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
            await emailjs.send(EMAILJS_CONFIG.SERVICE_ID, EMAILJS_CONFIG.TEMPLATE_ID, {
                name: formData.name,
                email: formData.email,
                message: formData.message,
                title: 'Portfolio Contact Form',
                time: new Date().toLocaleString()
            });
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
            <ul className="actions" style={styles.actions}>
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

ContactForm.propTypes = {
    theme: PropTypes.object.isRequired,
    animations: PropTypes.object.isRequired
};

export default ContactForm;
