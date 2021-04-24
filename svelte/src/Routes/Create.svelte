<script lang="ts">
  import PlannerInput from "../Components/PlannerInput.svelte";
  let name = "";
  let id = "";
</script>

<div>
  <form>
    <!-- <label for="nameInput">Name:</label> -->
    <PlannerInput
      createMode={true}
      showValidation={true}
      bind:textField={name}
      bind:id
    />
    {#if id !== null}
      <h4>
        Display Name: {name}<br /> Planner Id: {id}
      </h4>
    {/if}
  </form>
</div>
