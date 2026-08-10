<script lang="ts">
  export let preWM: string = "";
  export let WM: string = "Mahaphanit, W.";
  export let postWM: string = "";
  export let title: string = "";
  export let year: string = "In Prep";
  export let journal: string = "";
  export let twoAuthors: boolean = false;
  export let URL: string = "";
</script>

<div class="mb-2">
  <div>
    {#if twoAuthors}
      <span class="font-bold">{WM}</span>{` & ${postWM} (${year}). ${title}`}
    {:else}
      {#if preWM}{`${preWM} `}{/if}<span class="font-bold">{WM}</span>{`, ${postWM} (${year}). ${title}`}
    {/if}
    <br />
    <span class="italic">{journal}</span>
    {#if URL}
      <a href={URL} class="text-teal-400">[PDF]</a>
    {/if}
  </div>
</div>
