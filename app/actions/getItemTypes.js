const { ItemType } = require("../model");

module.exports = async (category) => {
  const result = await ItemType.find({ category });
  return result;
};
