<script>
  import { getClient, query, mutation } from "svelte-apollo";
  import { gql } from "@apollo/client";

  const getMsg = gql`
    {
      serverMsg
    }
  `;

  const serverMsg = query(
    gql(`{
      serverMsg
  }
  `)
  );
</script>

<div style="text-align:center">
  <h2>Server Message</h2>
  <p>
    {#if $serverMsg.loading}
      Loading...
    {:else if $serverMsg.error}
      Error: {$serverMsg.error.message}
    {:else}
      {$serverMsg.data.serverMsg}
    {/if}
  </p>
</div>

<style>
</style>
