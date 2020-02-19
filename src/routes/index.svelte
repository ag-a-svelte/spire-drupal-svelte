<script>
  import config from "../lib/config";
  import { pagetrans } from "../lib/data.js";
</script>

<style>
  figure {
    text-align: center;
    margin: 0 auto;
    font-weight: 100;
    font-size: 200%;
  }

  img {
    width: 100%;
    max-width: 400px;
    margin: 0 0 1em 0;
  }

  p {
    margin: 1em auto;
  }

  .container {
    display: flex;
  }

  @media (min-width: 480px) {
    h1 {
      font-size: 4em;
    }
  }
</style>

<svelte:head>
  <title>{config.site_name}</title>
</svelte:head>

<main transition:pagetrans>
  <h1>{config.site_name}</h1>

  <div class="container">
    <figure class="col">
      <figcaption>Svelte &amp; Sapper</figcaption>
      <img src="slides/svelte-logo.png" alt="Svelte logo" />
    </figure>

    <figure class="col">
      <figcaption>Drupal</figcaption>
      <img src="slides/drupal 8 logo CMYK 300.png" alt="Drupal logo" />
    </figure>
  </div>

  <p>
    Demo site for decoupled
    <a href="https://drupal.org" target="_blank">Drupal</a>
    +
    <a href="https://sapper.svelte.dev" target="_blank">Sapper</a>
    +
    <a href="https://svelte.dev" target="_blank">Svelte</a>
    .
  </p>

  <ul>
    <li>
      <a
        href="https://bitbucket.org/spinspire/drupal-sapper-svelte-demo"
        target="_blank">
        Git repo and README with more info
      </a>
    </li>
    <li>
      <a href="/slides/index.html" target="_blank">Presentation slides</a>
    </li>
    <li>
      <a href="https://youtube.com/spinspire" target="_blank">
        Demo screencast video (COMING SOON)
      </a>
    </li>
  </ul>
</main>