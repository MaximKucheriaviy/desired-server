const { Router } = require("express");
const { createItem, getItemByID } = require("../controllers");
const { uploader } = require("../middlewares");
const router = Router();

router.post("/", uploader.single("Image"), createItem);
router.get("/:id", getItemByID);

module.exports = router;
