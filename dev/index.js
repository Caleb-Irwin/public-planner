// jshint esversion: 8
const express = require("express");
const path = require("path");
const proxy = require("express-http-proxy");
require("dotenv").config();

console.log("Only run with npm run start");

//* Initializes express and config
// express init
const app = express();
// defines port
const port = parseInt(process.env.PORT) || 5000;

//* Middleware
// static files
app.use(
  "/",
  express.static(path.join(__dirname, "./build/public/"), {
    index: "index.html",
  })
);
// api
app.use("/api", proxy("localhost:20555"));

//* Listening
// tells electron to listen to predefined port
app.listen(port, () => {
  // notifys express is listening and which port it is
  console.log(`Listening on port ${port}!`);
});
