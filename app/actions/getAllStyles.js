const { Style } = require("../model");
const createError = require("../service/createError");

module.exports = async () => {
  const results = await Style.find();

  if (!results) {
    throw createError(400, "no styles");
  }
  return results;
};
