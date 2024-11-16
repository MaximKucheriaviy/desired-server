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
const updateItem = require("./updateItem");
const addImageToSet = require("./addImageToSet");
const deleteImageFromSet = require("./deleteImageFromSet");
const getItemByGroupCode = require("./getItemByGrounpCode");
const getSetOfItems = require("./getSetOfItems");

const createStoredItem = require("./createStoredItem");
const deleteStoredItem = require("./deleteStoredItem");
const updateStoreItem = require("./updateStoredItem");

const createStyle = require("./createStyle");
const getAllStyles = require("./getAllStyles");
const deleteStyle = require("./deleteStyle");
const getTopStyles = require("./getTopStyles");
const getBottomStyles = require("./getBottomStyles");

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
  updateItem,
  createStoredItem,
  deleteStoredItem,
  updateStoreItem,
  createStyle,
  getAllStyles,
  deleteStyle,
  addImageToSet,
  deleteImageFromSet,
  getItemByGroupCode,
  getSetOfItems,
  getTopStyles,
  getBottomStyles,
};
