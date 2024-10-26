const createBrand = require("./createBrandController");
const deleteBrand = require("./deleteBrandController");
const getAllBrands = require("./getAllBrandsController");
const getBrandById = require("./getBrandByIdController");

const createItem = require("./createItemController");
const getItemByID = require("./getItemByIdController");

module.exports = {
  createBrand,
  deleteBrand,
  getBrandById,
  getAllBrands,
  createItem,
  getItemByID,
};
