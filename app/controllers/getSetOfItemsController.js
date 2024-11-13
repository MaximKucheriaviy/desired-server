const { getSetOfItems } = require("../actions");
const createError = require("../service/createError");

module.exports = async (req, res, next) => {
  try {
    const { set } = req.body;
    if (!set) {
      throw createError(400, "no set");
    }
    const result = await getSetOfItems(set);
    res.json(result);
  } catch (err) {
    next(err);
  }
};
