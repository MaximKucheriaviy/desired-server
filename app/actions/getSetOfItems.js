const { Item } = require("../model");
const createError = require("../service/createError");
const mongoose = require("mongoose");

module.exports = async (set = []) => {
  set = set.map((item) => mongoose.Types.ObjectId(item));
  const result = await Item.aggregate([
    {
      $match: {
        _id: { $in: set },
      },
    },
    {
      $lookup: {
        from: "categories",
        localField: "category",
        foreignField: "_id",
        as: "category",
      },
    },
    {
      $lookup: {
        from: "itemtypes",
        localField: "type",
        foreignField: "_id",
        as: "type",
      },
    },
    {
      $lookup: {
        from: "storeditems",
        localField: "_id",
        foreignField: "itemID",
        as: "storedItems",
      },
    },
  ]);

  if (!result) {
    throw createError(400, "Error items");
  }
  return result;
};
