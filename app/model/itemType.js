const { Schema, model } = require("mongoose");

const ItemTypeSchema = new Schema({
  name: String,
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },
  url: {
    type: String,
    default: "",
  },
});

module.exports = model("itemType", ItemTypeSchema);
