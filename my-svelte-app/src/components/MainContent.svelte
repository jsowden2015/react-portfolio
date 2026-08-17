<script>
  import { PAGE_KEYS, THEMES, ANIMATIONS } from '../lib/config.js';
  import Portfolio from './Portfolio.svelte';
  import About from './About.svelte';
  import Contact from './Contact.svelte';

  let { currentPage = '', isDarkMode = false } = $props();

  const theme = $derived(isDarkMode ? THEMES.dark : THEMES.light);
</script>

<main id="main" aria-label="Main content">
  {#if currentPage === PAGE_KEYS.PORTFOLIO}
    <Portfolio />
  {:else if currentPage === PAGE_KEYS.ABOUT}
    <About />
  {:else if currentPage === PAGE_KEYS.CONTACT}
    <Contact {theme} animations={ANIMATIONS} />
  {:else}
    <Portfolio />
  {/if}
</main>
