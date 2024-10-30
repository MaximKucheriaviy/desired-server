const { getAllStyles } = require("../actions");

module.exports = async (req, res, next) => {
  try {
    const result = await getAllStyles();
    const arr = result.filter((item) => item.type === "top");
    res.json(arr);
  } catch (err) {
    next(err);
  }
};
