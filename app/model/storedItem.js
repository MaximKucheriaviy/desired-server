const { Schema, model } = require("mongoose");

const StoredItem = new Schema({
  itemID: {
    type: Schema.Types.ObjectId,
    ref: "item",
  },
  color: String,
  colorName: String,
  sizes: [String],
  count: {
    type: Number,
    default: 0,
  },
});

module.exports = model("storedItem", StoredItem);
