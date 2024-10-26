const { getAllBrands } = require("../actions");

module.exports = async (req, res, next) => {
  try {
    const result = await getAllBrands();
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
};
