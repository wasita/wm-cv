<script lang="ts">
  export let title: string = "";
</script>

<div class="mb-8">
  <h2 class="mb-4 text-xl font-bold uppercase border-b border-gray-300">
    {title}
  </h2>
  <slot />
</div>
