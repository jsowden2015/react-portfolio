<script>
  import { SOCIAL_LINKS } from '../lib/config.js';

  const linkedInLink = SOCIAL_LINKS.find((l) => l.icon === 'fa-linkedin');
  const LINKEDIN_URL =
    linkedInLink?.href ??
    'https://www.linkedin.com/in/justin-sowden-361005184/';
</script>

<article class="post">
  <header class="major">
    <h2 class="name-gradient">About Justin Sowden</h2>
    <p>
      Software Developer @ Eliassen Group (100% Remote) | BS | Greater Boston
    </p>
  </header>
  <p>
    Full Stack Developer with 4+ years' experience designing and building scalable
    web applications using Angular (v13/14) and Java (Spring Boot). Skilled in
    developing RESTful APIs, managing source control with Git, and integrating
    frontend applications with backend services.
  </p>
  <p>
    Adept at mentoring junior developers, collaborating in Agile/Scrum teams, and
    delivering responsive, maintainable code. Experienced in RxJS state management,
    unit testing with Jasmine/Karma, and using Docker for local database development
    environments.
  </p>
  <p>
    For more information about my experience, education, and professional background,
    please visit my
    <a
      href={LINKEDIN_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Visit Justin Sowden's LinkedIn profile (opens in new tab)"
    >
      LinkedIn profile
    </a>.
  </p>
</article>
