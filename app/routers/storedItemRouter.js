const { Router } = require("express");
const { createStoredItem } = require("../controllers");
const router = Router();

router.post("/", createStoredItem);

module.exports = router;
