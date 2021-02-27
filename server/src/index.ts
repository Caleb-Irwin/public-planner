import * as express from "express";
import * as redis from "redis";
import * as compression from "compression";
import * as path from "path";
import { promises } from "fs";

//* Initalizes express and config
// express init
const app = express();
// defines port
const port = 5000;

//* Middleware
// adds 'smart' compression
app.use(compression());
// static files
app.use("/", express.static(path.join(__dirname, "../../svelte/public/")));

//* Routes
app.get("/", async (req, res) => {
  res.sendFile("../../svelte/public/index.html");
});

//* Listening
// tells electron to listen to predefined port
app.listen(port, "localhost", () => {
  // notifys express is listening and which port it is
  console.log(`Listening on port ${port}!`);
});
