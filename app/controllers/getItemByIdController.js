const { getItemById } = require("../actions");

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await getItemById(id);
    res.json(result);
  } catch (err) {
    next(err);
  }
};
