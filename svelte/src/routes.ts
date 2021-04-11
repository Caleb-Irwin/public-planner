import Home from "./Routes/Home.svelte";
import Create from "./Routes/Create.svelte";
import pageNotFound from "./Routes/404.svelte";
import About from "./Routes/About.svelte";

export const routes = {
  "/": Home,
  "/create/": Create,
  "/about/": About,
  "*": pageNotFound,
};

// added by me
export const menuBarOptions: {
  location: keyof typeof routes;
  name: string;
}[] = [
  { location: "/", name: "Find" },
  { location: "/create/", name: "Create" },
  { location: "/about/", name: "About" },

];
