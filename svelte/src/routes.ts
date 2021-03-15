import Home from "./Routes/Home.svelte";
import Create from "./Routes/Create.svelte";
import pageNotFound from "./Routes/404.svelte";

export default {
  "/": Home,
  "/create/": Create,
  "*": pageNotFound,
};
