const getItemById = require("./getItemByID");
const createError = require("../service/createError");
const { Item } = require("../model");

module.exports = async (id, imageID) => {
  const item = await getItemById(id);
  if (!item) {
    throw createError(400, "Image upload error");
  }
  item.imageSet = item.imageSet.filter((item) => item._id !== imageID);
  const result = await Item.findByIdAndUpdate(id, { imageSet: item.imageSet });
  return result;
};
