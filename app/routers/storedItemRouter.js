const { Router } = require("express");
const { createStoredItem, deleteStoredItem } = require("../controllers");
const router = Router();

router.post("/", createStoredItem);
router.delete("/", deleteStoredItem);

module.exports = router;
