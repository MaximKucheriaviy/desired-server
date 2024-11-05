const { Item, StoredItem } = require("../model");
const createError = require("../service/createError");

module.exports = async (groupCode) => {
  const result = await Item.findOne({ groupCode })
    .populate("brand")
    .populate("type")
    .populate("category");
  if (!result) {
    return result;
  }

  const storedItems = await StoredItem.find({ itemID: result._id });

  if (!storedItems) {
    throw createError(400, "No such item");
  }
  const obj = JSON.parse(JSON.stringify(result));
  obj.storedItems = storedItems;

  return obj;
};
