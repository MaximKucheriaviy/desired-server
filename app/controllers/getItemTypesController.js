const { getItemTypes } = require("../actions");

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await getItemTypes(id);
    res.json(result);
  } catch (err) {
    next(err);
  }
};
