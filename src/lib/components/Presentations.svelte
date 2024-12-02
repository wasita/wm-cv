<script lang="ts">
  export let preWM: string = "";
  export let WM: string = "Mahaphanit, W.";
  export let postWM: string = "";
  export let title: string = "";
  export let year: string = "";
  export let venue: string = "";
  export let location: string = "";
  export let poster: boolean = false;
  export let twoAuthors: boolean = false;
</script>

<div class="mb-4">
  <div>
    {#if twoAuthors}
      <span class="font-bold">{WM}</span> & {postWM}
      ({year}).
      {title}
    {:else}
      {preWM}
      {#if poster}
        <span class="font-bold">{WM}</span>,
      {:else}
        <span class="font-bold">{WM}</span>
      {/if}
      {postWM} ({year}).
      {title}
    {/if}
    {#if poster}
      Presented at the {venue}, {location}.
    {:else}
      {venue}, {location}
    {/if}
  </div>
</div>
