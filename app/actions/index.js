const getAllCategories = require("./getAllCategories");

const getItemTypes = require("./getItemTypes");

const createBrand = require("./createBrand");
const deleteBrand = require("./deleteBrand");
const getAllBrands = require("./getAllBrands");
const getBrandById = require("./getBrandById");

const createItem = require("./createItem");
const getItemById = require("./getItemByID");
const getAllItems = require("./getAllItems");
const deleteItem = require("./deleteItem");

module.exports = {
  getItemTypes,
  getAllCategories,
  createBrand,
  deleteBrand,
  getAllBrands,
  getBrandById,
  createItem,
  getItemById,
  getAllItems,
  deleteItem,
};
