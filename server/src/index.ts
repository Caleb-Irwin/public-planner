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
//html string
let htmlStr =
  "<h1>Server Error (htmlStr not updated from start up). Try reloading!</h1>";
let timeLastUpdated: number = Date.now();
let updateHtmlStr = async (force = false) => {
  if (force || Date.now() < timeLastUpdated + 15000) {
    timeLastUpdated = Date.now();
    let tempHtmlStr = (
      await promises.readFile("./build/index.html")
    ).toString();
    htmlStr = tempHtmlStr;
  }
};
updateHtmlStr(true);

//* Middleware
// adds 'smart' compression
app.use(compression());
// static files
app.use("/", express.static(path.join(__dirname, "../.../svelte/public/")));

//* Routes
app.get("/*", async (req, res) => {
  res.set("Content-Type", "text/html");
  res.end();
  updateHtmlStr();
});

//* Listening
// tells electron to listen to predefined port
app.listen(port, "localhost", () => {
  // notifys express is listening and which port it is
  console.log(`Listening on port ${port}!`);
});
