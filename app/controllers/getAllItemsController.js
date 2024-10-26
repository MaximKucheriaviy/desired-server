const { getAllItems } = require("../actions");

module.exports = async (req, res, next) => {
  try {
    const result = await getAllItems();
    res.json(result);
  } catch (err) {
    next(err);
  }
};
