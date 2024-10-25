const { Schema, model } = require("mongoose");
const brand = require("./brand");

const ItemSchema = new Schema({
  name: {
    type: "String",
    require: true,
  },
  ordersCount: {
    type: Number,
    default: 0,
  },
  brand: {
    type: Schema.Types.ObjectId,
    ref: "brand",
  },
});

module.exports = model("item", ItemSchema);
