const { updateItem } = require("../actions");

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { fields } = req.body;
    const result = await updateItem(id, fields);
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
};
