const { Schema, model } = require("mongoose");

const Size = new Schema({
  name: String,
  count: Number,
});

const StoredItem = new Schema({
  itemID: {
    type: Schema.Types.ObjectId,
    ref: "item",
  },
  color: String,
  colorName: String,
  sizes: {
    type: [Size],
    default: [],
  },
});

module.exports = model("storedItem", StoredItem);
