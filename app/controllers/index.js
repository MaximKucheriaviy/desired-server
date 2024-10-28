const getAllCategories = require("./getAllCategoriesController");

const getItemTypes = require("./getItemTypesController");

const createBrand = require("./createBrandController");
const deleteBrand = require("./deleteBrandController");
const getAllBrands = require("./getAllBrandsController");
const getBrandById = require("./getBrandByIdController");

const createItem = require("./createItemController");
const getItemByID = require("./getItemByIdController");
const getAllItems = require("./getAllItemsController");
const deleteItem = require("./deleteItemController");
const updateItem = require("./updateItemController");

const createStoredItem = require("./createStoredItemController");

module.exports = {
  getItemTypes,
  getAllCategories,
  createBrand,
  deleteBrand,
  getBrandById,
  getAllBrands,
  createItem,
  getItemByID,
  getAllItems,
  deleteItem,
  updateItem,
  createStoredItem,
};
