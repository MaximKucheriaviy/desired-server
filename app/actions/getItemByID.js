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

  const STA = JSON.parse(JSON.stringify(storedItems));
  STA.map((staItem, index) => {
    staItem.totalCount = storedItems[index].sizes.reduce(
      (acc, size) => acc + size.count,
      0
    );
    return staItem;
  });
  const obj = JSON.parse(JSON.stringify(result));
  obj.storedItems = STA;

  return obj;
};
