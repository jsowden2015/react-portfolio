<script>
  /** @type {{ date: string; title: string; image: string; description: string; repoUrl?: string }} */
  let { project, index = 0 } = $props();

  const titleLines = $derived(project.title.split('\n'));
  const imgSrc = $derived(
    `${import.meta.env.BASE_URL}${project.image}`.replace(/([^:]\/)\/+/g, '$1')
  );
</script>

<article>
  <header>
    <span class="date" aria-label="Project category: {project.date}">
      {project.date}
    </span>
    <h2>
      {#each titleLines as line, i (i)}
        {line}{#if i < titleLines.length - 1}<br />{/if}
      {/each}
    </h2>
  </header>
  <div class="image fit" role="img" aria-label="{project.title} project image">
    <img src={imgSrc} alt="{project.title} - {project.description}" />
  </div>
  <p>{project.description}</p>
  <ul class="actions special">
    <li>
      {#if project.repoUrl}
        <a
          href={project.repoUrl}
          target="_blank"
          rel="noopener noreferrer"
          class="button"
          aria-label="View {project.title} repository on GitHub"
        >
          View on GitHub
        </a>
      {:else}
        <button
          type="button"
          class="button"
          aria-label="View full details for {project.title}"
        >
          Full Story
        </button>
      {/if}
    </li>
  </ul>
</article>
