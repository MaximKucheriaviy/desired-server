const { updateItem } = require("../actions");
const { upload, deleteResource } = require("../service/cloudinaryLoader");

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { imageId } = req.body;
    await deleteResource(imageId);
    const imageInfo = await upload(req.file.path);
    const result = await updateItem(id, {
      image: { id: imageInfo.public_id, url: imageInfo.secure_url },
    });
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
};
