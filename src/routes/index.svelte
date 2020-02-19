<script context="module">
  import config from "../lib/config.js";
  import { createClient, FrontPageQuery } from "../lib/data.js";
  import NodeTeaser from "./_NodeTeaser.svelte";

  export async function preload() {
    const client = createClient(this.fetch);
    const nodes = await client.query({
      query: FrontPageQuery
      // variables: { limit: 100, offset: 0 }
    });
    return { nodes: nodes.data.nodeQuery.entities, count: nodes.count };
  }
</script>

<script>
  export let nodes;
  export let count;
</script>

<svelte:head>
  <title>{config.site_name}</title>
</svelte:head>

<h1>{config.site_name}</h1>

<div class="row">
  {#each nodes as node}
    <NodeTeaser {node} />
  {/each}
</div>
