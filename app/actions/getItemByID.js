const { Item } = require("../model");
const createError = require("../service/createError");

module.exports = async (id) => {
  const result = await Item.findById(id)
    .populate("brand")
    .populate("type")
    .populate("category");
  if (!result) {
    throw createError(400, "No such item");
  }
  return result;
};
