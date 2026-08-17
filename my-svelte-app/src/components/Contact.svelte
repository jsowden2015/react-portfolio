<script>
  import ContactForm from './ContactForm.svelte';
  import ContactInfo from './ContactInfo.svelte';
  import SocialLinks from './SocialLinks.svelte';

  /** @type {{ theme: Record<string, string>; animations: typeof import('../lib/config.js').ANIMATIONS }} */
  let { theme, animations } = $props();

  const contactInfo = [
    { title: 'Address', content: 'Boston, MA (Remote)', isLink: false },
  ];

  const contactStyle = $derived({
    padding: '3rem 2rem',
    ...animations.fadeIn,
    animationDelay: '0.4s',
  });

  const headerStyle = $derived({
    textAlign: 'center',
    marginBottom: '3rem',
    ...animations.fadeIn,
    animationDelay: '0.2s',
  });

  const titleStyle = $derived({
    fontSize: '2.5rem',
    fontWeight: 800,
    margin: '0 0 1rem 0',
    background: `linear-gradient(135deg, ${theme.primary}, ${theme.secondary})`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
  });

  const subtitleStyle = $derived({
    fontSize: '1.1rem',
    color: theme.text,
    opacity: 0.8,
    lineHeight: 1.6,
  });

  const containerStyle = $derived({
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
    gap: '3rem',
    alignItems: 'start',
    maxWidth: '1200px',
    margin: '0 auto',
  });

  const panelStyle = $derived({
    background: 'rgba(255, 255, 255, 0.05)',
    borderRadius: '20px',
    padding: '2rem',
    border: `1px solid ${theme.border}`,
    backdropFilter: 'blur(10px)',
    WebkitBackdropFilter: 'blur(10px)',
  });
</script>

<div style={contactStyle}>
  <div style={headerStyle}>
    <h1 style={titleStyle}>Get In Touch</h1>
    <p style={subtitleStyle}>
      Ready to start a project or just want to chat? I'd love to hear from you!
    </p>
  </div>

  <div style={containerStyle}>
    <section style={panelStyle} aria-label="Contact form section">
      <h2 style={{ color: theme.text, marginBottom: '2rem' }}>Send Message</h2>
      <ContactForm {theme} {animations} />
    </section>

    <section style={panelStyle} aria-label="Contact information section">
      <h2 style={{ color: theme.text, marginBottom: '2rem' }}>Contact Information</h2>
      {#each contactInfo as info, index (info.title)}
        <ContactInfo
          title={info.title}
          content={info.content}
          isLink={info.isLink}
          {theme}
          {animations}
          {index}
        />
      {/each}
      <SocialLinks {theme} {animations} />
    </section>
  </div>
</div>
