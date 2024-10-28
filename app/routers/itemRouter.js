const { Router } = require("express");
const {
  createItem,
  getItemByID,
  getAllItems,
  deleteItem,
  updateItem,
} = require("../controllers");
const { uploader } = require("../middlewares");
const router = Router();

router.post("/", uploader.single("Image"), createItem);
router.get("/:id", getItemByID);
router.get("/", getAllItems);
router.delete("/", deleteItem);
router.patch("/:id", updateItem);

module.exports = router;
