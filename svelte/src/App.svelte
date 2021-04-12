<script lang="ts">
  import Router, { location, link } from "svelte-spa-router";
  import { setClient } from "svelte-apollo";
  import { ApolloClient, InMemoryCache } from "@apollo/client";

  import GetServerMsg from "./Components/GetServerMessage.svelte";
  import { routes, menuBarOptions } from "./routes";

  const cache = new InMemoryCache();

  const client = new ApolloClient({
    cache: cache,
    uri: "/api/",
    name: "Svelte Client",
  });

  setClient(client);
</script>

<main>
  <h1>Public Planner</h1>
  <div id="subtitle">
    <h2>
      {#each menuBarOptions as option, i}
        {i === 0 ? "" : " | "}
        {#if $location === option.location}
          {option.name}
        {:else}
          <a href={option.location} use:link>{option.name}</a>
        {/if}
      {/each}
    </h2>
    <!-- <GetServerMsg /> -->
    <Router {routes} />
    <p class="width">
      Created by <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://calebirwin.ca/">Caleb Irwin</a
      > to learn how to use Redis and Express, and how to build Svelte apps.
    </p>
  </div>
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4em;
    font-weight: 100;
    margin-bottom: 0px;
  }
  #subtitle {
    display: flex;
    justify-content: center;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
  }
  .width {
    max-width: 700px;
  }
  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
