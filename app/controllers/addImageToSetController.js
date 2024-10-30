const { addImageToSet } = require("../actions");
const { upload } = require("../service/cloudinaryLoader");

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const imageInfo = await upload(req.file.path);
    const result = await addImageToSet(
      id,
      imageInfo.public_id,
      imageInfo.secure_url
    );
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
};
