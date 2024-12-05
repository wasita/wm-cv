<script lang="ts">
  export let title: string = "";
  export let organization: string = "";
  export let location: string = "";
  export let date: string = "";
  export let department: string = "";
  export let website: string = ""; // Default to empty string to avoid errors
  export let advisor: string = ""; // Default to empty string
  export let coadvisor: string = ""; // Default to empty string
  export let details: string[] = []; // Default to an empty array
</script>

<div class="mb-6">
  <div class="flex items-start justify-between">
    <div>
      <h3 class="text-lg font-bold">{title}</h3>
      {#if department}
        <p class="text-black">
          {department}
        </p>
      {/if}
      {#if website}
        <p class="text-black">
          <a href={website} class="text-teal-400">{organization}</a>
        </p>
      {:else}
        <p class="text-black">{organization}</p>
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
  <div>
    {#if advisor}
      <p class="mt-1 text-sm text-black">Advisor: {advisor}</p>
    {/if}
    {#if coadvisor}
      <p class="mt-1 text-sm text-black">
        Co-advisors & Collaborators: {coadvisor}
      </p>
    {/if}
  </div>
  {#if details.length > 0}
    <p class="mt-2 text-sm text-black">
      {#each details as detail}
        {detail}<br />
      {/each}
    </p>
  {/if}
</div>
