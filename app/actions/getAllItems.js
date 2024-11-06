const { Item } = require("../model");
const createError = require("../service/createError");

module.exports = async (params, page, limit) => {
  const count = await Item.count(params);

  const result = await Item.find(params)
    .skip(limit * (page - 1))
    .limit(limit)
    .populate("brand")
    .populate("type")
    .populate("category")
    .populate("topStyle")
    .populate("bottomStyle");

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
