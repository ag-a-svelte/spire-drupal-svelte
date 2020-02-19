<script>
  export let node;
  import SubmittedBy from "./_SubmittedBy.svelte";
  import { getNodeURL } from "../../lib/data.js";
</script>

<style>
  div.summary {
    max-height: 5em;
    overflow-y: hidden;
    text-overflow: ellipsis;
  }
</style>

<div data-nid={node.nid} class="col-sm-12 col-md-6">
  <h2 class="title">{node.title}</h2>
  <div>
    <SubmittedBy {node} />
  </div>
  <div class="summary">
    {@html node.body.summaryProcessed || node.body.processed}
  </div>
  <a rel=prefetch class="btn btn-primary btn-sm" href={getNodeURL(node)}>Read more &nbsp;<i class="material-icons">send</i></a>
</div>
