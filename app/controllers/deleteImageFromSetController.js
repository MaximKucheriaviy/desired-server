const { deleteImageFromSet } = require("../actions");
const { deleteResource } = require("../service/cloudinaryLoader");

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { imageID, publickID } = req.body;

    await deleteResource(publickID);
    const result = deleteImageFromSet(id, imageID);
    res.json(result);
  } catch (err) {
    next(err);
  }
};
