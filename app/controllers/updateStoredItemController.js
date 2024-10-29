const { updateStoreItem } = require("../actions");

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { fields } = req.body;
    const result = await updateStoreItem(id, fields);
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
};
