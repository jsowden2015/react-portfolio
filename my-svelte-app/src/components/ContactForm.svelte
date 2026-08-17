<script>
  import emailjs from '@emailjs/browser';
  import { Z_INDEX } from '../lib/config.js';

  /** @type {{ theme: Record<string, string>; animations: { fadeIn: Record<string, string> } }} */
  let { theme, animations } = $props();

  const NOTIFICATION = {
    SUCCESS_COLOR: '#4CAF50',
    ERROR_COLOR: '#f44336',
    DURATION: 5000,
    POSITION: { top: '20px', right: '20px' },
  };

  /**
   * @param {string} message
   * @param {'success' | 'error'} type
   */
  function showNotification(message, type = 'success') {
    const el = document.createElement('div');
    el.setAttribute('role', 'alert');
    el.setAttribute('aria-live', 'polite');
    const bg =
      type === 'success' ? NOTIFICATION.SUCCESS_COLOR : NOTIFICATION.ERROR_COLOR;
    el.style.cssText = `position: fixed; top: ${NOTIFICATION.POSITION.top}; right: ${NOTIFICATION.POSITION.right}; background: ${bg}; color: white; padding: 1rem 2rem; border-radius: 8px; z-index: ${Z_INDEX.NOTIFICATION}; box-shadow: 0 4px 6px rgba(0,0,0,0.1); font-family: inherit;`;
    el.textContent = message;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), NOTIFICATION.DURATION);
  }

  const EMAILJS_CONFIG = {
    SERVICE_ID:
      import.meta.env.VITE_EMAILJS_SERVICE_ID || 'your_service_id',
    TEMPLATE_ID:
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'your_template_id',
    PUBLIC_KEY:
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key',
  };

  let name = $state('');
  let email = $state('');
  let message = $state('');
  let isSubmitting = $state(false);
  let isHovered = $state(false);
  /** @type {string | null} */
  let focusedField = $state(null);

  async function handleSubmit(/** @type {SubmitEvent} */ e) {
    e.preventDefault();
    isSubmitting = true;

    if (
      EMAILJS_CONFIG.SERVICE_ID === 'your_service_id' ||
      EMAILJS_CONFIG.TEMPLATE_ID === 'your_template_id' ||
      EMAILJS_CONFIG.PUBLIC_KEY === 'your_public_key'
    ) {
      showNotification(
        'Email service is not configured. Please set up EmailJS credentials.',
        'error'
      );
      isSubmitting = false;
      return;
    }

    try {
      emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          name,
          email,
          message,
          title: 'Portfolio Contact Form',
          time: new Date().toLocaleString(),
        }
      );
      showNotification(
        "Thank you for your message! I'll get back to you soon.",
        'success'
      );
      name = '';
      email = '';
      message = '';
    } catch (err) {
      console.error('EmailJS error:', err);
      showNotification(
        'Sorry, there was an error sending your message. Please try again later.',
        'error'
      );
    } finally {
      isSubmitting = false;
    }
  }

  function inputStyle(fieldName) {
    return {
      padding: '0.75rem 1rem',
      border:
        focusedField === fieldName
          ? `2px solid ${theme.primary}`
          : '2px solid rgba(102, 126, 234, 0.4)',
      borderRadius: '8px',
      background: 'rgba(255, 255, 255, 0.95)',
      color: theme.text,
      fontSize: '1rem',
      transition: 'all 0.3s ease',
      backdropFilter: 'blur(10px)',
      WebkitBackdropFilter: 'blur(10px)',
      outline: 'none',
      boxShadow:
        focusedField === fieldName
          ? '0 0 0 3px rgba(102, 126, 234, 0.1)'
          : 'none',
    };
  }

  const textareaStyle = $derived({
    padding: '0.75rem 1rem',
    border:
      focusedField === 'message'
        ? `2px solid ${theme.primary}`
        : '2px solid rgba(102, 126, 234, 0.4)',
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
    boxShadow:
      focusedField === 'message'
        ? '0 0 0 3px rgba(102, 126, 234, 0.1)'
        : 'none',
  });

  const submitStyle = $derived({
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
    textShadow: '0 1px 2px rgba(0, 0, 0, 0.1)',
  });
</script>

<form
  method="post"
  action="#"
  style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '1.5rem',
    ...animations.fadeIn,
    animationDelay: '0.6s',
  }}
  onsubmit={handleSubmit}
  aria-label="Contact form"
  novalidate
>
  <div
    class="fields"
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '1rem',
    }}
  >
    <div class="field" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <label
        for="sv-name"
        style={{
          fontSize: '0.9rem',
          fontWeight: 600,
          color: theme.text,
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
        }}>Name</label>
      <input
        id="sv-name"
        type="text"
        name="name"
        bind:value={name}
        onfocus={() => (focusedField = 'name')}
        onblur={() => (focusedField = null)}
        style={inputStyle('name')}
        required
        aria-required="true"
        aria-label="Your name"
      />
    </div>
    <div class="field" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <label
        for="sv-email"
        style={{
          fontSize: '0.9rem',
          fontWeight: 600,
          color: theme.text,
          textTransform: 'uppercase',
          letterSpacing: '0.05em',
        }}>Email</label>
      <input
        id="sv-email"
        type="email"
        name="email"
        bind:value={email}
        onfocus={() => (focusedField = 'email')}
        onblur={() => (focusedField = null)}
        style={inputStyle('email')}
        required
        aria-required="true"
        aria-label="Your email address"
      />
    </div>
  </div>
  <div class="field" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
    <label
      for="sv-message"
      style={{
        fontSize: '0.9rem',
        fontWeight: 600,
        color: theme.text,
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
      }}>Message</label>
    <textarea
      id="sv-message"
      name="message"
      rows="6"
      bind:value={message}
      onfocus={() => (focusedField = 'message')}
      onblur={() => (focusedField = null)}
      style={textareaStyle}
      required
      aria-required="true"
      aria-label="Your message"
    ></textarea>
  </div>
  <ul
    class="actions"
    style={{
      listStyle: 'none',
      margin: 0,
      padding: 0,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
    }}
  >
    <li style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <button
        type="submit"
        style={submitStyle}
        onmouseenter={() => (isHovered = true)}
        onmouseleave={() => (isHovered = false)}
        disabled={isSubmitting}
        aria-label="Submit contact form"
        aria-busy={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </button>
    </li>
  </ul>
</form>
