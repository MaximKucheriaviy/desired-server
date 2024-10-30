const { getAllStyles } = require("../actions");

module.exports = async (req, res, next) => {
  try {
    const result = await getAllStyles();
    res.json(result);
  } catch (err) {
    next(err);
  }
};
