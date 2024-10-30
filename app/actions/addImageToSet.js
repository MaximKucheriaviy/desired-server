const getItemById = require("./getItemByID");
const createError = require("../service/createError");
const { Item } = require("../model");

module.exports = async (id, imageID, url) => {
  const item = await getItemById(id);
  item.imageSet.push({ id: imageID, url });
  if (!item) {
    throw createError(400, "Image upload error");
  }

  const result = await Item.findByIdAndUpdate(id, { imageSet: item.imageSet });
  return result;
};
