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
  imageSet: [ImageSchema],
  price: {
    type: Number,
    default: 0,
  },
  description: {
    type: String,
    default: "",
  },
  topStyle: {
    type: Schema.Types.ObjectId || null,
    ref: "style",
    default: null,
  },
  bottomStyle: {
    type: Schema.Types.ObjectId || null,
    ref: "style",
    default: null,
  },
});

module.exports = model("item", ItemSchema);
