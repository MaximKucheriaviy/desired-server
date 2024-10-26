const { deleteItem } = require("../actions");

module.exports = async (req, res, next) => {
  try {
    const { id } = req.body;
    const item = await deleteItem(id);
    res.json(item);
  } catch (err) {
    next(err);
  }
};
