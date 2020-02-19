<script context="module">
  import config from "../../lib/config.js";
  import { createClient, FrontPageQuery, pagetrans } from "../../lib/data.js";
  import NodeTeaser from "./_NodeTeaser.svelte";
  import Paginator from "./_Paginator.svelte";

  const limit = 10;

  export async function preload({ query }) {
    const client = createClient(this.fetch);
    let pg = 0;
    if (query.pg && !isNaN(query.pg)) {
      pg = parseInt(query.pg);
    }
    const offset = pg * limit;
    const nodes = await client.query({
      query: FrontPageQuery,
      variables: { limit, offset }
    });
    return {
      nodes: nodes.data.nodeQuery.entities,
      count: nodes.data.nodeQuery.count,
      pg
    };
  }
</script>

<script>
  export let nodes;
  export let count;
  export let pg;
  let max = parseInt(count) / limit;
</script>

<svelte:head>
  <title>{config.site_name}</title>
</svelte:head>

<main transition:pagetrans>
  <h1>{config.site_name}</h1>

  <div class="row">
    {#each nodes as node}
      <NodeTeaser {node} />
    {/each}
  </div>

  <Paginator {pg} {max} />
</main>