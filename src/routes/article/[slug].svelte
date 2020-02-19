<script context="module">
  import { createClient, NodeByPathQuery, getNodeURL } from "../../lib/data.js";
  import SubmittedBy from "../_SubmittedBy.svelte";
  import moment from "moment";

  export async function preload({ path }) {
    const client = createClient(this.fetch);
    const node = await client.query({
      query: NodeByPathQuery,
      variables: { path }
    });
    return { node: node.data.route.entity };
  }
</script>

<script>
  export let node;
  let author = node.uid.entity;
</script>

<style>
img.author {
  width: 10rem;
  height: 10rem;
}
</style>

<svelte:head>
  <title>{node.title}</title>
</svelte:head>

<div data-nid={node.nid} class="container">
  <h1 class="title">{node.title}</h1>
  <div>
    <SubmittedBy {node} />
  </div>
  <hr />
  <div>
    {@html node.body.processed}
  </div>
  <hr />
  {#if !!author.userPicture}
  <img
    class="float-right author rounded-circle"
    src={author.userPicture.url}
    title={author.userPicture.alt || author.name}
    alt={author.userPicture.alt || author.name} />
  {/if}
  <h2>Author: {author.name}</h2>
  <p>Member for: {moment.duration(moment().diff(moment.unix(author.created))).humanize()}</p>
</div>
