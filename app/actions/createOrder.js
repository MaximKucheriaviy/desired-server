const { Order } = require("../model");
const createError = require("../service/createError");

module.exports = async ({
  name,
  sername,
  phone,
  deliveryData,
  paymentType,
  items,
}) => {
  const result = await Order.create({
    name,
    sername,
    phone,
    deliveryData,
    paymentType,
    items,
  });

  if (!result) {
    throw createError(400, "Create oreder error");
  }
  return result;
};
