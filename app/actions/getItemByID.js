const { Item, StoredItem } = require("../model");
const createError = require("../service/createError");
const mongoose = require("mongoose");

module.exports = async (id) => {
  const result = await Item.aggregate([
    { $match: { _id: mongoose.Types.ObjectId(id) } },
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
    throw createError(400, "No such item");
  }

  return result[0];
};
