const { Router } = require("express");
const {
  createStyle,
  getAllStyles,
  deleteStyle,
  getTopStyle,
  getBottomStyle,
} = require("../controllers");
const router = Router();

router.post("/", createStyle);
router.delete("/", deleteStyle);
router.get("/", getAllStyles);
router.get("/top", getTopStyle);
router.get("/bottom", getBottomStyle);

// router.get("/:id", getBrandById);

module.exports = router;
