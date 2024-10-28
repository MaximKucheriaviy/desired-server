const { StoredItem } = require("../model");
const storedItem = require("../model/storedItem");
const createError = require("../service/createError");

module.exports = async ({ itemID, color, colorName, sizes, count }) => {
  const result = await StoredItem.create({
    itemID,
    color,
    colorName,
    sizes,
    count,
  });
  if (!result) {
    throw createError(400, "Stored item creation error");
  }
  return result;
};
