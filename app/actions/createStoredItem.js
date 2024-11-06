const { StoredItem } = require("../model");
const storedItem = require("../model/storedItem");
const createError = require("../service/createError");

module.exports = async ({
  itemID,
  barcode,
  count,
  article,
  price,
  priceUSD,
  size,
}) => {
  let storedItem = await StoredItem.findOne({ itemID, barcode });
  if (storedItem) {
    storedItem.count = count;
    storedItem.price = price;
    storedItem.priceUSD = priceUSD;
    await storedItem.save();
    return storedItem;
  } else {
    storedItem = await StoredItem.create({
      itemID,
      barcode,
      count,
      article,
      price,
      priceUSD,
      size,
    });
  }
  return storedItem;
};
