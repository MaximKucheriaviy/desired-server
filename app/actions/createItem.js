const { Item } = require("../model");
const createError = require("../service/createError");

module.exports = async ({ name, brand, category, type, imageUrl, imageID }) => {
  const response = await Item.create({
    name,
    brand,
    category,
    type,
    image: { id: imageID, url: imageUrl },
  });

  if (!response) {
    throw createError(401, "Wrond data");
  }
  return response;
};
