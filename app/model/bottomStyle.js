const { Schema, model } = require("mongoose");

const BottomStyle = new Schema({
  name: String,
});

module.exports = model("bottomStyle", BottomStyle);
