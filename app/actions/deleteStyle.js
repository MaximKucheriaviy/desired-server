const { Style } = require("../model");
const createError = require("../service/createError");

module.exports = async (id) => {
  const result = await Style.findByIdAndDelete(id);
  if (!result) {
    throw createError(400, "Already exist");
  }
  return result;
};
