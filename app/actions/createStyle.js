const { Style } = require("../model");
const createError = require("../service/createError");

module.exports = async (name, type) => {
  const result = await Style.create({ name, type });
  if (!result) {
    throw createError(400, "Style creation error");
  }
  return result;
};
