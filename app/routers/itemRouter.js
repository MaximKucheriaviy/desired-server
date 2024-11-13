const { Router } = require("express");
const {
  createItem,
  getItemByID,
  getAllItems,
  deleteItem,
  updateItem,
  updateItemImage,
  addImageToSet,
  deleteImageFromSet,
  uploadNewItems,
  getSetOfItems,
} = require("../controllers");
const { uploader } = require("../middlewares");
const router = Router();

router.post("/", uploader.single("Image"), createItem);
router.post("/csv/new", uploader.single("data"), uploadNewItems);
router.get("/:id", getItemByID);
router.get("/", getAllItems);
router.post("/set", getSetOfItems);
router.delete("/", deleteItem);
router.patch("/:id", updateItem);
router.patch("/image/:id", uploader.single("Image"), updateItemImage);
router.patch("/imageset/:id", uploader.single("Image"), addImageToSet);
router.patch("/imageset/delete/:id", deleteImageFromSet);

module.exports = router;
