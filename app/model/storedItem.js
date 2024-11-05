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
  barcode: String,
  count: Number,
  article: String,
  price: Number,
  priceUSD: Number,
});

module.exports = model("storedItem", StoredItem);
