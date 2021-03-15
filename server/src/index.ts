import * as express from "express";
import * as compression from "compression";
import * as path from "path";
import client from "./redis";
import graphql from "./graphql";

//* Initalizes express and config
// express init
const app = express();
// defines port
const port = 5000;

//* Middleware
// adds 'smart' compression
app.use(compression());
// static files
app.use(
  "/static/",
  express.static(path.join(__dirname, "../../svelte/public/"), {
    index: "index.html",
  })
);
// graphql
app.use("/api", graphql);

//* Routes

app.get("/*", async (req, res) => {
  res.sendFile(path.join(__dirname, "../../svelte/public/index.html"));
});

//* Listening
// tells electron to listen to predefined port
app.listen(port, "localhost", () => {
  // notifys express is listening and which port it is
  console.log(`Listening on port ${port}!`);
});
