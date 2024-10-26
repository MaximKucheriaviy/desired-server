const { getAllCategories } = require("../actions");

module.exports = async (req, res, next) => {
  try {
    const result = await getAllCategories();
    res.json(result);
  } catch (err) {
    next(err);
  }
};
