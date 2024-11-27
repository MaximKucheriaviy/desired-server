const { createOrder } = require("../actions");

module.exports = async (req, res, next) => {
  try {
    const result = await createOrder(req.body);
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
};
