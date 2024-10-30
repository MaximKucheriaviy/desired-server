const { Schema, model } = require("mongoose");

const Style = new Schema({
  name: String,
  type: {
    type: String,
    enum: ["top", "bottom"],
    default: "top",
  },
});

module.exports = model("style", Style);
