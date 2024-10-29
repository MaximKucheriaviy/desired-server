const { Router } = require("express");
const {
  createStoredItem,
  deleteStoredItem,
  updateStoredItem,
} = require("../controllers");
const router = Router();

router.post("/", createStoredItem);
router.delete("/", deleteStoredItem);
router.patch("/:id", updateStoredItem);

module.exports = router;
