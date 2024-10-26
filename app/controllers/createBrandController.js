const { createBrand } = require("../actions");

module.exports = async (req, res, next) => {
  try {
    const { name } = req.body;
    const result = await createBrand(name);
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
};
