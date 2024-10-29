const { StoredItem } = require("../model");
const createError = require("../service/createError");

module.exports = async (id, fields) => {
  const result = StoredItem.findByIdAndUpdate(id, fields, { new: true });

  if (!result) {
    throw createError(400, "Update error");
  }
  return result;
};
