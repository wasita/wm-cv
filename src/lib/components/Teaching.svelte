<script lang="ts">
  export let title: string = "";
  export let location: string = "";
  export let date: string = "";
  export let department: string = "";
  export let website: string = "";
  export let course: string = "";
  export let professor: string = "";
  export let details: string[] = [];
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
    <p class="mt-1 text-black">
      {#if website}
        <p class="text-black">
          <a href={website} class="text-teal-400">{course}</a>
        </p>
      {:else}
        {course}
      {/if}
    </p>
    <p class="mt-1 text-sm text-black">Professor: {professor}</p>
  </div>
  {#if details.length > 0}
    <p class="mt-2 text-sm text-black">
      {#each details as detail}
        {detail}<br />
      {/each}
    </p>
  {/if}
</div>
