<script lang="ts">
  export let info: string = "";
  export let details: string = "";
  export let date: string = "";
  export let URL: string = "";
</script>

<div class="mb-4">
  <div class="flex items-start justify-between">
    <div>
      {#if URL}
        <a href={URL} class="text-teal-400">{info}</a>
      {:else}
        {info}
      {/if}
      <br />
      {details}
    </div>
    <div class="text-right">
      <p class="text-black">{date}</p>
    </div>
  </div>
</div>
