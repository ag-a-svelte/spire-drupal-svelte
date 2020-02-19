<script>
  export let node;
  const entity = node.uid.entity;
  import { getUserURL } from "../lib/data.js";
  const url = getUserURL(node.uid.entity);
  import moment from "moment";
</script>

<style>
  img.author {
    height: 3rem;
    width: 3rem;
  }
</style>

<small>
  {#if entity.userPicture && entity.userPicture.url}
    <a href={url}>
      <img
        class="float-right author rounded-circle"
        src={!!entity.userPicture && entity.userPicture.url}
        title={entity.userPicture.alt || entity.name}
        alt={entity.userPicture.alt || entity.name} />
    </a>
  {/if}
  Submitted by
  <span class="author">
    <a href={url}>{node.uid.entity.name}</a>
  </span>
  on
  <span class="date">{moment.unix(node.created).format('llll')}</span>
</small>
