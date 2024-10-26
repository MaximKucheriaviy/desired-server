const { Schema, model } = require("mongoose");
const ImageSchema = require("./ImageSchema");

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
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },
  type: {
    type: Schema.Types.ObjectId,
    ref: "itemType",
  },
  image: {
    type: ImageSchema,
  },
  price: {
    type: Number,
    default: 0,
  },
});

module.exports = model("item", ItemSchema);
