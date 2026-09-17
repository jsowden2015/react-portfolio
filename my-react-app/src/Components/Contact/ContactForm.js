import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { CONTACT_EMAIL } from '../../config/constants';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const EMAILJS_CONFIG = {
  SERVICE_ID: process.env.REACT_APP_EMAILJS_SERVICE_ID || 'your_service_id',
  TEMPLATE_ID: process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'your_template_id',
  PUBLIC_KEY: process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'your_public_key'
};

const isEmailJsConfigured = () =>
  EMAILJS_CONFIG.SERVICE_ID !== 'your_service_id' &&
  EMAILJS_CONFIG.TEMPLATE_ID !== 'your_template_id' &&
  EMAILJS_CONFIG.PUBLIC_KEY !== 'your_public_key';

const validate = (formData) => {
  const errors = {};

  if (!formData.name.trim()) {
    errors.name = 'Name is required.';
  }

  if (!formData.email.trim()) {
    errors.email = 'Email is required.';
  } else if (!EMAIL_PATTERN.test(formData.email.trim())) {
    errors.email = 'Enter a valid email address.';
  }

  if (!formData.message.trim()) {
    errors.message = 'Message is required.';
  } else if (formData.message.trim().length < 10) {
    errors.message = 'Message should be at least 10 characters.';
  }

  return errors;
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    const nextErrors = validate(formData);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    if (!isEmailJsConfigured()) {
      setStatus({
        type: 'error',
        message: `Email service is not configured yet. Please email ${CONTACT_EMAIL} directly.`
      });
      return;
    }

    setIsSubmitting(true);

    try {
      emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
      await emailjs.send(EMAILJS_CONFIG.SERVICE_ID, EMAILJS_CONFIG.TEMPLATE_ID, {
        name: formData.name.trim(),
        email: formData.email.trim(),
        message: formData.message.trim(),
        title: 'Portfolio Contact Form',
        time: new Date().toLocaleString()
      });
      setStatus({
        type: 'success',
        message: "Thanks — I'll get back to you soon."
      });
      setFormData({ name: '', email: '', message: '' });
      setErrors({});
    } catch (error) {
      console.error('EmailJS error:', error);
      const detail = error?.text || error?.message;
      setStatus({
        type: 'error',
        message: detail
          ? `Sorry, there was an error sending your message: ${detail}`
          : 'Sorry, there was an error sending your message. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      {status && (
        <p
          className={`contact-status contact-status--${status.type}`}
          role="status"
          aria-live="polite"
        >
          {status.message}
        </p>
      )}

      <div className="contact-fields">
        <div className="contact-field">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleInputChange}
            autoComplete="name"
            required
            aria-required="true"
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? 'name-error' : undefined}
          />
          {errors.name && (
            <p id="name-error" className="contact-field-error" role="alert">
              {errors.name}
            </p>
          )}
        </div>

        <div className="contact-field">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleInputChange}
            autoComplete="email"
            required
            aria-required="true"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'email-error' : undefined}
          />
          {errors.email && (
            <p id="email-error" className="contact-field-error" role="alert">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div className="contact-field">
        <label htmlFor="message">Message</label>
        <textarea
          name="message"
          id="message"
          rows="6"
          value={formData.message}
          onChange={handleInputChange}
          required
          aria-required="true"
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? 'message-error' : undefined}
        />
        {errors.message && (
          <p id="message-error" className="contact-field-error" role="alert">
            {errors.message}
          </p>
        )}
      </div>

      <div className="contact-actions">
        <button type="submit" className="button" disabled={isSubmitting} aria-busy={isSubmitting}>
          {isSubmitting ? 'Sending…' : 'Send message'}
        </button>
      </div>
    </form>
  );
};

export default ContactForm;
