const { Brand } = require("../model");
const createError = require("../service/createError");

module.exports = async () => {
  const results = await Brand.find();
  if (!results) {
    throw createError(400, "no brands");
  }
  return results;
};
