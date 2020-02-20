<script context="module">
  import {
    createClient,
    NodeByPathQuery,
    getNodeURL,
    pagetrans
  } from "../../lib/data.js";
  import SubmittedBy from "./_SubmittedBy.svelte";
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
  .field-tags label {
    font-weight: bold;
  }
</style>

<svelte:head>
  <title>{node.title}</title>
</svelte:head>

<main data-nid={node.nid} class="container" transition:pagetrans>
  <h1 class="title">{node.title}</h1>
  <div>
    <SubmittedBy {node} />
  </div>
  <hr />
  <img
    src={node.fieldImage.url}
    alt={node.fieldImage.alt}
    title={node.fieldImage.title} />
  <div>
    {@html node.body.processed}
  </div>
  <div class="field-tags">
    <label class="mr-1 float-left">Tags: </label>
    <ul class="list-inline">
      {#each node.fieldTags as tag}
        <li class="list-inline-item">{tag.entity.entityLabel}</li>
      {/each}
    </ul>
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
  <p>
    Member for: {moment.duration(moment().diff(moment.unix(author.created))).humanize()}
  </p>
</main>
