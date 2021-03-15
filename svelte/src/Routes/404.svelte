<script lang="ts">
  export let params;
</script>

<div>
  <h1>404 Error</h1>
  <h2>Page {params ? `"/${params.wild}"` : ""} not found!</h2>
</div>
