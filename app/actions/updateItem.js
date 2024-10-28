const { Item } = require("../model");
const createError = require("../service/createError");
const crateError = require("../service/createError");

module.exports = async (id, fields) => {
  const result = Item.findByIdAndUpdate(id, fields, { new: true })
    .populate("type")
    .populate("category")
    .populate("brand");
  if (!result) {
    throw createError(400, "Update error");
  }
  return result;
};
