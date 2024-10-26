const { Router } = require("express");
const {
  createBrand,
  deleteBrand,
  getAllBrands,
  getBrandById,
} = require("../controllers");
const router = Router();

router.post("/", createBrand);
router.delete("/", deleteBrand);
router.get("/", getAllBrands);
router.get("/:id", getBrandById);

module.exports = router;
