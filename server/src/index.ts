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
app.use(
  "/",
  express.static(path.join(__dirname, "../../svelte/public/"), {
    index: "index.html",
  })
);

//* Routes
app.post("/api/:mp/admin/create", (req, res) => {
  res.end();
});

app.put("/api/:p/admin/edit", (req, res) => {
  res.end();
});

app.delete("/api/:p/admin/delete", (req, res) => {
  res.end();
});

app.get("/api/:p", async (req, res) => {
  res.end();
});

app.post("/api/:m/add", (req, res) => {
  res.end();
});
//* Listening
// tells electron to listen to predefined port
app.listen(port, "localhost", () => {
  // notifys express is listening and which port it is
  console.log(`Listening on port ${port}!`);
});
