const { getAllBrands } = require("../actions");

module.exports = async (req, res, next) => {
  try {
    const { _id } = req.body;
    const result = await getAllBrands(_id);
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
};
