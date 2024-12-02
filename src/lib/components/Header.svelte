<script lang="ts">
  export let name: string = "";
  export let email: string = "";
  export let website: string = "";
  export let github: string = "";
</script>

<div class="mb-12 text-center">
  <h1 class="mb-4 text-5xl font-semibold tracking-wide text-fuchsia-400">
    {name}
  </h1>
  <div class="flex justify-center gap-4 text-gray-600">
    <a href="mailto:{email}" class="text-indigo-300">{email}</a>
    <span>|</span>
    <a href={website} class="text-indigo-300">website</a>
    <span>|</span>
    <a href={github} class="text-indigo-300">github</a>
  </div>
</div>
