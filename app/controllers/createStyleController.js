const { createStyle } = require("../actions");

module.exports = async (req, res, next) => {
  try {
    const { name, type } = req.body;
    const result = await createStyle(name, type);
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
};
