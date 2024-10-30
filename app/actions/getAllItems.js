const { Item } = require("../model");
const createError = require("../service/createError");

module.exports = async () => {
  const result = Item.find()
    .populate("brand")
    .populate("type")
    .populate("category")
    .populate("topStyle")
    .populate("bottomStyle");

  if (!result) {
    throw createError(400, "Error items");
  }
  return result;
};
