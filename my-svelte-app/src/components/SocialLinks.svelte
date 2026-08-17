<script>
  import { SOCIAL_LINKS } from '../lib/config.js';

  /** @type {{ theme: Record<string, string>; animations: { fadeIn: Record<string, string> } }} */
  let { theme, animations } = $props();

  const socialIcons = SOCIAL_LINKS.filter(
    (link) => link.icon === 'fa-linkedin' || link.icon === 'fa-github'
  );

  let hoveredIcon = $state(/** @type {string | null} */ (null));

  const sectionStyle = $derived({
    marginBottom: '2rem',
    ...animations.fadeIn,
    animationDelay: '1.2s',
  });

  const titleStyle = $derived({
    fontSize: '1.2rem',
    fontWeight: 600,
    color: theme.text,
    margin: '0 0 1rem 0',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
  });

  const iconsListStyle = {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    display: 'flex',
    gap: '1rem',
    flexWrap: 'wrap',
  };

  function iconStyle(isHovered) {
    return {
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
      transform: isHovered ? 'scale(1.1) rotate(5deg)' : 'scale(1) rotate(0deg)',
      boxShadow: isHovered ? theme.shadow : '0 4px 15px rgba(0, 0, 0, 0.2)',
    };
  }
</script>

<section style={sectionStyle}>
  <h3 style={titleStyle}>Social</h3>
  <ul class="icons alt" style={iconsListStyle}>
    {#each socialIcons as social (social.label)}
      <li>
        <a
          href={social.href}
          class="icon brands alt {social.icon}"
          style={iconStyle(hoveredIcon === social.label)}
          onmouseenter={() => (hoveredIcon = social.label)}
          onmouseleave={() => (hoveredIcon = null)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="{social.label} (opens in new tab)"
        >
          <span class="label">{social.label}</span>
        </a>
      </li>
    {/each}
  </ul>
</section>
