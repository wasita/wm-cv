<script lang="ts">
  export let info: string = "";
  export let details: string = "";
  export let date: string = "";
</script>

<div class="mb-4">
  <div class="flex justify-between">
    {info} <br />
    {details}
    <div class="text-right">
      <p class="text-black">{date}</p>
    </div>
  </div>
</div>
