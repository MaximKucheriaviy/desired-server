const { Schema, model } = require("mongoose");

const StoredItem = new Schema({
  itemID: {
    type: Schema.Types.ObjectId,
    ref: "item",
  },
  barcode: {
    type: String,
    unique: true,
  },
  count: Number,
  article: String,
  price: Number,
  priceUSD: Number,
  size: String,
});

module.exports = model("storedItem", StoredItem);
