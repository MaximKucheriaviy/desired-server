const { createStoredItem } = require("../actions");

module.exports = async (req, res, next) => {
  try {
    const { itemID, color, colorName, sizes, count } = req.body;
    const result = await createStoredItem({
      itemID,
      color,
      colorName,
      sizes,
      count,
    });
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
};
