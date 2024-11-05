const { exist } = require("joi");
const {
  getAllBrands,
  createItem,
  createBrand,
  getItemTypes,
  getAllCategories,
} = require("../actions");

const parceCSV = require("../service/transformCSV");

module.exports = async (req, res, next) => {
  try {
    let uploaded = 0;
    let errorUpload = 0;
    let mbexist = 0;

    const file = req.file;
    const dataArr = await parceCSV(file.path);
    let brands = await getAllBrands();
    const categories = await getAllCategories();
    console.log(dataArr.length);

    for (let i = 0; i < dataArr.length; i++) {
      const { name, color, groupCode } = dataArr[i];
      let brand = brands.find((brand) => brand.name === dataArr[i].brand);
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
        const item = await createItem({
          name,
          brand: brand._id,
          category: category._id,
          type: type._id,
          color,
          groupCode,
        });
        uploaded++;
      } catch (err) {
        if (err.code === 11000) {
          console.log("exist continue");

          mbexist++;
        } else {
          throw err;
        }
      }
    }
    res.status(201).json({ uploaded, errorUpload, mbexist });
  } catch (err) {
    next(err);
  }
};
