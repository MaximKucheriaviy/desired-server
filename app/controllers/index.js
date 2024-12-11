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
const addImageToSet = require("./addImageToSetController");
const deleteImageFromSet = require("./deleteImageFromSetController");
const getSetOfItems = require("./getSetOfItemsController");

const createStoredItem = require("./createStoredItemController");
const deleteStoredItem = require("./deleteStoreItemController");
const updateStoredItem = require("./updateStoredItemController");
const updateItemImage = require("./updateItemImageController");

const createStyle = require("./createStyleController");
const getAllStyles = require("./getAllStylesController");
const deleteStyle = require("./deleteStyleController");
const getTopStyle = require("./getTopStyleController");
const getBottomStyle = require("./getBottomStyleController");

const uploadNewItems = require("./uploadNewItems");

const createOrder = require("./createOrderController");
const getAllOrders = require("./getAllOrdersController");
module.exports = {
  getItemTypes,
  getAllCategories,
  createBrand,
  deleteBrand,
  getBrandById,
  getAllBrands,
  createItem,
  updateItemImage,
  getItemByID,
  getAllItems,
  deleteItem,
  updateItem,
  createStoredItem,
  deleteStoredItem,
  updateStoredItem,
  createStyle,
  getAllStyles,
  deleteStyle,
  getTopStyle,
  getBottomStyle,
  addImageToSet,
  deleteImageFromSet,
  uploadNewItems,
  getSetOfItems,
  createOrder,
  getAllOrders,
};
