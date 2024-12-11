const { Order } = require("../model");
const createError = require("../service/createError");

module.exports = async () => {
  const result = await Order.find();
  if (!result) {
    throw createError(400, "no orders");
  }
  return result;
};
