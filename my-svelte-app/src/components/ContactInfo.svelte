<script>
  /** @type {{ title: string; content: string; isLink?: boolean; theme: Record<string, string>; animations: { fadeIn: Record<string, string> }; index: number }} */
  let { title, content, isLink = false, theme, animations, index } = $props();

  function getHref() {
    if (!isLink) return '#';
    if (title === 'Phone') return `tel:${content}`;
    if (title === 'Email') return `mailto:${content}`;
    return '#';
  }

  const sectionStyle = $derived({
    marginBottom: '2rem',
    ...animations.fadeIn,
    animationDelay: `${0.8 + index * 0.1}s`,
  });

  const titleStyle = $derived({
    fontSize: '1.2rem',
    fontWeight: 600,
    color: theme.text,
    margin: '0 0 0.5rem 0',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  });

  const contentStyle = $derived({
    color: theme.text,
    opacity: 0.9,
    lineHeight: 1.6,
    margin: 0,
    fontSize: '1rem',
  });

  const linkStyle = $derived({
    color: theme.primary,
    textDecoration: 'none',
    transition: 'color 0.3s ease',
    fontWeight: 600,
    opacity: 1,
  });
</script>

<section style={sectionStyle}>
  <h3 style={titleStyle}>{title}</h3>
  {#if isLink}
    <p style={contentStyle}>
      <a
        href={getHref()}
        style={linkStyle}
        aria-label="{title}: {content}"
        onclick={(e) => {
          if (title !== 'Phone' && title !== 'Email') e.preventDefault();
        }}
      >
        {content}
      </a>
    </p>
  {:else}
    <p style={contentStyle}>{content}</p>
  {/if}
</section>
