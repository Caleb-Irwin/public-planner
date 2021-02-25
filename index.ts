import * as express from "express";
import * as redis from "redis";
import * as compression from "compression";
import * as path from "path";

//* Initalizes express and config
// express init
const app = express();
// defines port
const port = 5000;

//* Middleware
// adds 'smart' compression
app.use(compression());
// static files
app.use("/static", express.static(path.join(__dirname, "../static")));

//* Routes
app.get("/*", (req, res) => {
  res.send("Hello, world!");
});

//* Listening
// tells electron to listen to predefined port
app.listen(port, "localhost", () => {
  // notifys express is listening and which port it is
  console.log(`Listening on port ${port}!`);
});
