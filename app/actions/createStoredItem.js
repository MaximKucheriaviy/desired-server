const { StoredItem } = require("../model");

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
