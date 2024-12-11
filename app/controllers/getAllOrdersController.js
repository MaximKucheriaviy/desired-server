const { getAllOrders } = require("../actions");

module.exports = async (req, res, next) => {
  try {
    const result = await getAllOrders();
    res.json(result);
  } catch (err) {
    next(err);
  }
};
