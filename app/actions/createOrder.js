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
  const d = Date.now();
  console.log(d);

  const result = await Order.create({
    name,
    sername,
    phone,
    deliveryData,
    paymentType,
    items,
    date: Date.now(),
  });

  if (!result) {
    throw createError(400, "Create oreder error");
  }
  return result;
};
