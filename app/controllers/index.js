const createBrand = require("./createBrandController");
const deleteBrand = require("./deleteBrandController");
const getAllBrands = require("./getAllBrandsController");
const getBrandById = require("./getBrandByIdController");

module.exports = {
  createBrand,
  deleteBrand,
  getBrandById,
  getAllBrands,
};
