<script lang="ts">
  import { getIdFromName, parseIdFromName, detailedIdValid } from "../Utils/id";
  export let createMode: boolean = false;
  export let showValidation: boolean = false;
  export let checkDatabase: boolean = true;
  export let textField = "";
  export let id: string | null;
  $: id = getIdFromName(textField);
  $: validator = detailedIdValid(parseIdFromName(textField));
  function handleSubmit() {}
</script>

<div>
  <input
    bind:value={textField}
    name="nameInput"
    maxlength="30"
    size="25"
    placeholder="Name (or ID)"
  />
  {#if !createMode}
    <button on:click={handleSubmit}>&#8594;</button>
    {#if id?.length}
      <p>ID: "{id}"</p>
    {/if}
  {/if}
  {#if showValidation}
    <ul>
      {#each validator.reasons as validation}
        <li>{validation.passed}: {validation.label}</li>
      {/each}
    </ul>
  {/if}
</div>

<style>
  button {
    color: white;
    background: #ff875f;
  }
  ul {
    list-style-type: none;
  }
</style>
