<script>
  import { APP_CONFIG } from './lib/config.js';
  import Header from './components/Header.svelte';
  import MainContent from './components/MainContent.svelte';

  function loadDarkMode() {
    if (typeof localStorage === 'undefined') return false;
    try {
      const s = localStorage.getItem('darkMode');
      return s ? JSON.parse(s) : false;
    } catch {
      return false;
    }
  }

  let currentPage = $state(APP_CONFIG.defaultPage);
  let isDarkMode = $state(loadDarkMode());

  $effect(() => {
    document.documentElement.classList.toggle('dark-mode', isDarkMode);
    try {
      localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
    } catch {
      /* ignore */
    }
  });

  const year = new Date().getFullYear();
</script>

<div id="wrapper" class="fade-in" class:dark-mode={isDarkMode}>
  <div class="bg" aria-hidden="true"></div>
  <a href="#main" class="skip-to-main">Skip to main content</a>
  <Header bind:currentPage bind:isDarkMode />
  <MainContent {currentPage} {isDarkMode} />
  <div id="copyright">
    <ul>
      <li>&copy; {year} Justin Sowden</li>
    </ul>
  </div>
</div>
