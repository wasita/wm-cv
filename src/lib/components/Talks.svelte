<script lang="ts">
  export let WM: string = "Mahaphanit, W.";
  export let title: string = "";
  export let year: string = "";
  export let venue: string = "";
</script>

<div class="mb-4">
  <div>
    <span class="font-bold">{WM}</span>
    ({year})
    {title}
    {venue}
  </div>
</div>
