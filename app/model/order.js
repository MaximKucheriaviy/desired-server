const { Schema, model } = require("mongoose");
const storedItem = require("./storedItem");
const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);

const Order = new Schema({
  name: String,
  sername: String,
  phone: String,
  deliveryType: {
    type: String,
    default: "NP",
  },
  deliveryData: String,
  paymentType: {
    String,
    enum: ["bank", "receive"],
  },
  items: {
    type: [Schema.Types.ObjectId],
    ref: storedItem,
  },
});

Order.plugin(AutoIncrement, { inc_field: "ordernNumber" });

module.exports = model("order", Order);
