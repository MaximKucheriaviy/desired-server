const { getAllItems } = require("../actions");

module.exports = async (req, res, next) => {
  try {
    const { page = 1, limit = 10, ...params } = req.query;
    const result = await getAllItems(params, page, limit);
    res.json(result);
  } catch (err) {
    next(err);
  }
};
