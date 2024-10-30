const { deleteStyle } = require("../actions");

module.exports = async (req, res, next) => {
  try {
    const { _id } = req.body;
    const result = await deleteStyle(_id);
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
};
