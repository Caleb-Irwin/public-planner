import { connect, connection, set, model, Schema, Document } from "mongoose";
import { Kitten } from "./models/kitten";
require("dotenv").config();

set("runValidators", true);
connect(process.env.mongodb, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = connection;
db.on("error", (err) => console.log(err));
db.once("open", async () => {
  console.log("connection open");

  let fluffy = new Kitten({ name: "Fluffy" });
  fluffy.save(function (err, fluffy) {
    if (err) return console.error(err);
    fluffy.speak();
  });
});
