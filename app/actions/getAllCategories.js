const { Category } = require("../model");
const createError = require("../service/createError");

module.exports = async () => {
  const result = await Category.find();
  if (!result) {
    throw createError(400, "no brands");
  }
  return result;
};
