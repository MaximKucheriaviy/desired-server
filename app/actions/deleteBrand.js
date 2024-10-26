const { Brand } = require("../model");
const createError = require("../service/createError");

module.exports = async (id) => {
  const result = await Brand.findByIdAndDelete(id);
  if (!result) {
    throw createError(400, "Already exist");
  }
  return result;
};
