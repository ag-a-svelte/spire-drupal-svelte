<script>
  export let pg = 0;
  export let max;
  export let prefetch = true;
  import { stores } from "@sapper/app";
  const { page } = stores();
  const rel = prefetch ? "prefetch" : "";
</script>

<div class="text-center mt-2">
  {#if pg > 0}
    <a href="{$page.path}?pg={pg - 1}" class="btn btn-primary btn-sm" {rel}>
      <i class="material-icons">keyboard_arrow_left</i>
      Prev
    </a>
  {:else}
    <span class="btn btn-secondary btn-sm">
      <i class="material-icons">keyboard_arrow_left</i>
      Prev
    </span>
  {/if}
  {#if pg < Math.floor(max)}
    <a href="{$page.path}?pg={pg + 1}" class="btn btn-primary btn-sm" {rel}>
      Next
      <i class="material-icons">keyboard_arrow_right</i>
    </a>
  {:else}
    <span class="btn btn-secondary btn-sm">
      Next
      <i class="material-icons">keyboard_arrow_right</i>
    </span>
  {/if}
</div>
