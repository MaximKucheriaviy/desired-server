const { Schema, model } = require("mongoose");

const CategorySchema = new Schema({
  name: {
    type: "String",
  },
});

module.exports = model("Category", CategorySchema);
