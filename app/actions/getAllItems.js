const { Item } = require("../model");
const createError = require("../service/createError");
const mongoose = require("mongoose");

module.exports = async (params, page, limit) => {
  const { category, type, sortType, minp, maxp } = params;

  let sortQuery = { name: 1 };
  switch (sortType) {
    case "HPS":
      sortQuery = { price: 1 };
      break;
    case "LPS":
      sortQuery = { price: -1 };
      break;
  }

  const p = {};
  if (category) {
    p.category = mongoose.Types.ObjectId(category);
  }
  if (type) {
    p.type = mongoose.Types.ObjectId(type);
  }

  const aggQuery = [
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
  ];

  const priceLimits = await Item.aggregate([
    ...aggQuery,
    {
      $group: {
        _id: null,
        maxPrice: { $max: "$price" },
        minPrice: { $min: "$price" },
      },
    },
  ]);

  if (minp && maxp && Number.parseInt(minp) < Number.parseInt(maxp)) {
    aggQuery.push({
      $match: {
        price: { $gte: Number.parseInt(minp), $lte: Number.parseInt(maxp) },
      },
    });
  }

  let count = await Item.aggregate([...aggQuery, { $count: "count" }]);
  if (count.length > 0) {
    count = count[0].count;
  } else {
    count = 0;
  }

  const result = await Item.aggregate([
    ...aggQuery,
    { $sort: sortQuery },
    { $skip: (page - 1) * limit },
    { $limit: Number.parseInt(limit) },
  ]);

  if (!result) {
    throw createError(400, "Error items");
  }
  return {
    data: result,
    count,
    maxPrice: priceLimits[0] ? priceLimits[0].maxPrice : null,
    minPrice: priceLimits[0] ? priceLimits[0].minPrice : null,
    page: page,
    perPage: limit,
    totalPages: Math.ceil(count / limit),
  };
};
