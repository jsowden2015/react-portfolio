<script>
  import { NAVIGATION_ITEMS, BREAKPOINTS } from '../lib/config.js';

  let {
    currentPage = $bindable(),
    isDarkMode = $bindable(),
  } = $props();

  let isMobileMenuOpen = $state(false);
  /** @type {HTMLElement | undefined} */
  let navRef;
  /** @type {HTMLButtonElement | undefined} */
  let buttonRef;

  function toggleDarkMode() {
    isDarkMode = !isDarkMode;
  }

  /**
   * @param {MouseEvent} e
   * @param {string} key
   */
  function handleNavClick(e, key) {
    e.preventDefault();
    currentPage = key;
    isMobileMenuOpen = false;
  }

  $effect(() => {
    if (!isMobileMenuOpen) return;
    function handleClickOutside(/** @type {MouseEvent} */ event) {
      const t = /** @type {Node} */ (event.target);
      if (
        navRef &&
        buttonRef &&
        !navRef.contains(t) &&
        !buttonRef.contains(t)
      ) {
        isMobileMenuOpen = false;
      }
    }
    function handleResize() {
      if (window.innerWidth > BREAKPOINTS.DESKTOP) {
        isMobileMenuOpen = false;
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('resize', handleResize);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('resize', handleResize);
    };
  });
</script>

<header id="header">
  <a href="#main" class="logo" aria-label="Justin Sowden - Home">Justin Sowden</a>
  <button
    bind:this={buttonRef}
    type="button"
    class="mobile-menu-toggle"
    onclick={() => (isMobileMenuOpen = !isMobileMenuOpen)}
    aria-label="Toggle mobile menu"
    aria-expanded={isMobileMenuOpen}
  >
    <i class={isMobileMenuOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
  </button>
  <nav
    bind:this={navRef}
    id="nav"
    aria-label="Main navigation"
    class:mobile-open={isMobileMenuOpen}
  >
    <ul class="links">
      {#each NAVIGATION_ITEMS as item (item.key)}
        <li class:active={currentPage === item.key}>
          <a
            href="#{item.key}"
            onclick={(e) => handleNavClick(e, item.key)}
            aria-current={currentPage === item.key ? 'page' : undefined}
            aria-label="Navigate to {item.label} page"
          >
            {item.label}
          </a>
        </li>
      {/each}
    </ul>
    <ul class="icons" aria-label="Social media links">
      <li>
        <button
          type="button"
          onclick={toggleDarkMode}
          class="icon dark-mode-toggle"
          aria-label="Switch to {isDarkMode ? 'light' : 'dark'} mode"
          title={isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          <i class={isDarkMode ? 'fas fa-sun' : 'fas fa-moon'}></i>
          <span class="label">{isDarkMode ? 'Light Mode' : 'Dark Mode'}</span>
        </button>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/justin-sowden-361005184/"
          class="icon brands fa-linkedin"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Justin Sowden's LinkedIn profile (opens in new tab)"
        >
          <span class="label">LinkedIn</span>
        </a>
      </li>
      <li>
        <a
          href="https://github.com/jsowden2015"
          class="icon brands fa-github"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit Justin Sowden's GitHub profile (opens in new tab)"
        >
          <span class="label">GitHub</span>
        </a>
      </li>
    </ul>
  </nav>
</header>
