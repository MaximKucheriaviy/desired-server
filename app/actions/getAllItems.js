const { Item } = require("../model");
const createError = require("../service/createError");
const mongoose = require("mongoose");

module.exports = async (params, page, limit) => {
  const count = await Item.count(params);
  const { category, type } = params;
  const p = {};
  if (category) {
    p.category = mongoose.Types.ObjectId(category);
  }
  if (type) {
    p.type = mongoose.Types.ObjectId(type);
  }

  const result = await Item.aggregate([
    { $match: p },
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
    {
      $unwind: "$category",
    },
    {
      $unwind: "$type",
    },
    {
      $unwind: "$storedItems",
    },
    {
      $group: {
        _id: "$_id",
        name: { $first: "$name" },
        ordersCount: { $first: "$ordersCount" },
        category: { $first: "$category" },
        description: { $first: "$description" },
        type: { $first: "$type" },
        color: { $first: "$color" },
        brand: { $first: "$brand" },
        image: { $first: "$image" },
        imageSet: { $first: "$image" },
        topStyle: { $first: "$topStyle" },
        bottomStyle: { $first: "$bottomStyle" },
        groupCode: { $first: "$groupCode" },
        price: { $max: "$storedItems.priceUSD" },
      },
    },
    { $sort: { price: -1 } },
    { $skip: (page - 1) * limit },
    { $limit: Number.parseInt(limit) },
  ]);
  console.log(result);

  if (!result) {
    throw createError(400, "Error items");
  }
  return {
    data: result,
    count: count,
    page: page,
    perPage: limit,
    totalPages: Math.ceil(count / limit),
  };
};
