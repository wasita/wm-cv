<script lang="ts">
  export let preWM: string = "";
  export let postWM: string = "";
  export let WM: string = "Mahaphanit, W.";
  export let title: string = "";
  export let year: string = "";
  export let journal: string = "";
  export let twoAuthors: boolean = false;
  export let URL: string = "";
</script>

<div class="mb-2">
  <div>
    {#if twoAuthors}
      <span class="font-bold">{WM}</span> & {postWM}
      ({year})
      {title}
      <span class="italic">{journal}</span>
    {:else}
      {preWM}
      <span class="font-bold">{WM}</span>,
      {postWM}
      ({year})
      {title}
      <span class="italic">{journal}</span>
    {/if}
    {#if URL}
      <a href={URL} class="text-purple-400 hover:text-cyan-300">[PDF]</a>
    {/if}
  </div>
</div>
