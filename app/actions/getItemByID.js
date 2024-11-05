const { Item, StoredItem } = require("../model");
const createError = require("../service/createError");

module.exports = async (id) => {
  const result = await Item.findById(id)
    .populate("brand")
    .populate("type")
    .populate("category");
  if (!result) {
    throw createError(400, "No such item");
  }

  const storedItems = await StoredItem.find({ itemID: id });
  if (!storedItems) {
    throw createError(400, "No such item");
  }

  obj.storedItems = storedItems;

  return obj;
};
