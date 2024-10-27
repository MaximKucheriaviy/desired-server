const { createItem } = require("../actions");
const { upload } = require("../service/cloudinaryLoader");

module.exports = async (req, res, next) => {
  try {
    const imageInfo = await upload(req.file.path);
    const { name, brand, category, type, price } = req.body;
    const result = await createItem({
      name,
      price,
      brand,
      category,
      type,
      imageID: imageInfo.public_id,
      imageUrl: imageInfo.secure_url,
    });
    res.status(201).json(result);
  } catch (err) {
    next(err);
  }
};
