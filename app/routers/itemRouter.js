const { Router } = require("express");
const {
  createItem,
  getItemByID,
  getAllItems,
  deleteItem,
  updateItem,
  updateItemImage,
} = require("../controllers");
const { uploader } = require("../middlewares");
const router = Router();

router.post("/", uploader.single("Image"), createItem);
router.get("/:id", getItemByID);
router.get("/", getAllItems);
router.delete("/", deleteItem);
router.patch("/:id", updateItem);
router.patch("/image/:id", uploader.single("Image"), updateItemImage);

module.exports = router;
