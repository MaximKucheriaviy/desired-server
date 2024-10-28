const { StoredItem } = require("../model");
const createError = require("../service/createError");

module.exports = async (id) => {
  const result = await StoredItem.findByIdAndDelete(id);
  if (!result) {
    throw createError(400, "No such stored item");
  }
  return result;
};
