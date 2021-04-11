<script lang="ts">
  export let onlyValidate: boolean = false;
  export let validatiors: ((
    id: string
  ) => Promise<{ state: "valid" | "invalid" | "n/a"; msg: string }>)[] = [];
  export let onlyShowInvalid: boolean = true;
  export let checkDatabase: boolean = true;

  let textField = "";
  function handleSubmit() {
    
  }
  let id = "";
  $: id = textField
    .toLowerCase()
    .replace(/[^a-z \d-]/g, "") //leaves only a-z, 0-9, and -
    .replace(/-+/g, " ") // changes all sets of - to one space
    .trim()
    .replace(/ +/g, "-"); // changes all sets of spaces to one -
</script>

<div>
  <input
    bind:value={textField}
    name="nameInput"
    maxlength="30"
    size="25"
    placeholder="Name (or ID)"
  />
  {#if !onlyValidate}
    <button on:click={handleSubmit}>&#8594;</button>
  {/if}
  {#if id.length}
    <p>ID: "{id}"</p>
  {/if}
</div>

<style>
  button {
    color: white;
    background: #ff875f;
  }
</style>
