<script lang="ts">
  export let name: string;
  export let email: string;
  export let website: string;
  export let github: string;
</script>

<div class="text-center mb-12">
  <h1 class="text-5xl font-light text-purple-400 tracking-wide mb-4">{name}</h1>
  <div class="text-gray-600 flex justify-center gap-4">
    <a href="mailto:{email}" class="hover:text-purple-400">{email}</a>
    <span>|</span>
    <a href={website} class="hover:text-purple-400">website</a>
    <span>|</span>
    <a href={github} class="hover:text-purple-400">github</a>
  </div>
</div>