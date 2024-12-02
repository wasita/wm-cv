<script lang="ts">
  export let name: string = "";
  export let email: string = "";
  export let website: string = "";
  export let github: string = "";
</script>

<div class="mb-12 text-center">
  <h1 class="mb-4 text-4xl font-semibold tracking-wide text-bi-wisteria">
    {name}
  </h1>
  <div class="flex justify-center gap-4 text-gray-600">
    <a href="mailto:{email}" class="text-bi-cornflower">{email}</a>
    <span>|</span>
    <a href={website} class="text-bi-cornflower">website</a>
    <span>|</span>
    <a href={github} class="text-bi-cornflower">github</a>
  </div>
</div>
