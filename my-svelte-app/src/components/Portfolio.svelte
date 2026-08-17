<script>
  import { PORTFOLIO_PROJECTS } from '../lib/config.js';
  import ProjectCard from './ProjectCard.svelte';
</script>

<article class="post featured">
  <header class="major">
    <h1 class="name-gradient">Justin Sowden</h1>
    <p>Full Stack Developer</p>
  </header>
</article>
<section class="posts" aria-label="Portfolio projects">
  <h1 class="sr-only">Portfolio</h1>
  {#each PORTFOLIO_PROJECTS as project, index (index)}
    <ProjectCard {project} {index} />
  {/each}
</section>
