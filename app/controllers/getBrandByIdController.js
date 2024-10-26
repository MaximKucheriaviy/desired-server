const { getBrandById } = require("../actions");

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await getBrandById(id);
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
};
