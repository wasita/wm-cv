<script lang="ts">
  export let title: string;
</script>

<div class="mb-8">
  <h2 class="text-xl font-bold border-b border-gray-300 mb-4 uppercase">{title}</h2>
  <slot />
</div>