const { Brand } = require("../model");
const createError = require("../service/createError");

module.exports = async (id) => {
  const result = await Brand.findById(id);
  if (!result) {
    throw createError(400, "No such brand");
  }
  return result;
};
