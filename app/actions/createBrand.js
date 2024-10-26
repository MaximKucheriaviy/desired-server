const { Brand } = require("../model");
const createError = require("../service/createError");

module.exports = async (name) => {
  const results = await Brand.findOne({ name });
  if (results) {
    throw createError(400, "Already exist");
  }
  return await Brand.create({ name });
};
