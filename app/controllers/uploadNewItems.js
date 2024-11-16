const { exist } = require("joi");
const {
  getAllBrands,
  createItem,
  createBrand,
  getItemTypes,
  getAllCategories,
  createStoredItem,
  getItemByGroupCode,
  getTopStyles,
  getBottomStyles,
  createStyle,
} = require("../actions");

const parceCSV = require("../service/transformCSV");
const createError = require("../service/createError");

module.exports = async (req, res, next) => {
  try {
    let uploaded = 0;
    let errorUpload = 0;
    let barcodeDuplicate = 0;

    const file = req.file;

    const dataArr = await parceCSV(file.path);
    let brands = await getAllBrands();
    const categories = await getAllCategories();

    for (let i = 0; i < dataArr.length; i++) {
      const {
        name,
        color,
        groupCode,
        barcode,
        article,
        count,
        price,
        priceUSD,
        size,
        topStyle,
        bottomStyle,
      } = dataArr[i];
      let brand = brands.find((brand) => brand.name === dataArr[i].brand);
      let topStyleItem;
      let bottomStyleItem;
      if (topStyle) {
        topStyleItem = (await getTopStyles()).find(
          (item) => item.name.toLowerCase() === topStyle.toLowerCase()
        );
        if (!topStyleItem) {
          console.log("createing top style", topStyle);
          topStyleItem = await createStyle(topStyle, "top");
        }
      }
      if (bottomStyle) {
        bottomStyleItem = (await getBottomStyles()).find(
          (item) => item.name.toLowerCase() === bottomStyle.toLowerCase()
        );
        if (!bottomStyleItem) {
          console.log("createing bottom style", bottomStyle);
          bottomStyleItem = await createStyle(bottomStyle, "bottom");
        }
      }
      let category = await categories.find(
        (cat) => cat.name === dataArr[i].category
      );
      if (!category) {
        errorUpload++;
        continue;
      }
      const types = await getItemTypes(category._id);
      const type = types.find((type) => type.name === dataArr[i].type);
      if (!type || !types) {
        errorUpload++;
        continue;
      }
      if (!brand) {
        brand = await createBrand(dataArr[i].brand);
        brands = await getAllBrands();
      }
      try {
        let item = await getItemByGroupCode(groupCode);
        if (!item) {
          item = await createItem({
            name,
            brand: brand._id,
            category: category._id,
            type: type._id,
            groupCode,
            color,
            topStyle: topStyleItem ? topStyleItem._id : null,
            bottomStyle: bottomStyleItem ? bottomStyleItem._id : null,
          });
        }
        await createStoredItem({
          itemID: item._id,
          barcode,
          article,
          count,
          price,
          priceUSD,
          size,
        });
      } catch (err) {
        console.log(err);
        if (err.code === 11000) {
          barcodeDuplicate++;
        }
      }
    }
    console.log({ uploaded, errorUpload, barcodeDuplicate });
    res.status(201).json({ uploaded, errorUpload, barcodeDuplicate });
  } catch (err) {
    next(err);
  }
};
