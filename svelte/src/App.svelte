<script lang="ts">
  import { setClient } from "svelte-apollo";
  import { ApolloClient, InMemoryCache } from "@apollo/client";
  import GetServerMsg from "./GetServerMessage.svelte";

  const cache = new InMemoryCache();

  const client = new ApolloClient({
    cache: cache,
    uri: "http://localhost:5000/api",
    name: "Svelte Client",
  });

  setClient(client);
</script>

<main>
  <h1>Public Planner</h1>
  <div id="subtitle">
    <p class="width">
      Have you ever wanted to tell strangers that you will be a certain place at
      a certain time anonymously? Well now you can! Public Planner is great for
      dog parks and was inspired by <a
        href="https://stackoverflow.blog/2021/02/12/podcast-312-were-building-a-web-app-got-any-advice/"
        >this</a
      > episode of The Stack Overflow Podcast.
    </p>
    <GetServerMsg />
    <p class="width">
      Created by <a href="https://calebirwin.ca/">Caleb Irwin</a> to learn how to
      use Redis and Express, and how to build Svelte apps.
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
