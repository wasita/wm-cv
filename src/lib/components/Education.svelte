<script lang="ts">
  export let school: string;
  export let degree: string;
  export let location: string;
  export let date: string;
  export let committee: string = "";
  export let advisor: string = "";
  export let coadvisors: string = "";
</script>

<div class="mb-6">
  <div class="flex items-start justify-between">
    <div>
      <h3 class="text-lg font-bold">{school}</h3>
      <p class="text-gray-700">{degree}</p>
      {#if advisor}
        <p class="mt-1 text-sm text-gray-700">Advisor: {advisor}</p>
      {:else if coadvisors}
        <p class="mt-1 text-sm text-gray-700">Co-advisors: {coadvisors}</p>
      {/if}
      {#if committee}
        <p class="mt-1 text-sm text-gray-700">Committee: {committee}</p>
      {/if}
    </div>
    <div class="text-right">
      <p class="text-black">{date}</p>
      <p class="text-sm text-black">
        <i class="mr-1 fas fa-map-marker-alt"></i>
        {location}
      </p>
    </div>
  </div>
</div>
