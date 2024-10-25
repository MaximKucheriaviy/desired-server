const { Schema, model } = require("mongoose");

const ItemTypeSchema = new Schema({
  name: String,
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
  },
});

module.exports = model("itemType", ItemTypeSchema);
