const { Item } = require("../model");
const createError = require("../service/createError");
const { deleteResource } = require("../service/cloudinaryLoader");

module.exports = async (id) => {
  console.log(id);

  const result = await Item.findByIdAndDelete(id);
  if (!result) {
    throw createError(400, "No such item");
  }
  await deleteResource(result.image.id);
  return result;
};
