const app = require("./app");
const mongoose = require("mongoose");
const { Category, ItemType } = require("./app/model");
const fs = require("fs/promises");
require("dotenv").config();

const { PORT, DB_INFO } = process.env;

console.log("App started");

app.listen(Number(PORT), () => {
  console.log("Server started on port " + PORT);
});

mongoose.set("strictQuery", false);
mongoose
  .set("debug", true)
  .connect(DB_INFO)
  .then(async () => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log(err);
  });
