const { Router } = require("express");
const { getAllCategories, getItemTypes } = require("../controllers");
const router = Router();

router.get("/categories", getAllCategories);
router.get("/categories/types/:id", getItemTypes);

module.exports = router;
