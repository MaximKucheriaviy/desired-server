const fs = require("fs/promises");

function toAlphanumeric(str) {
  return str.replace(/[^a-zA-Z0-9]/g, "");
}

module.exports = async (path) => {
  let data = (await fs.readFile(path)).toString("utf-8").split("\r\n");
  data = data.map((line) => line.split(","));
  const names = data[0].map((item) => toAlphanumeric(item).trim());
  const result = [];
  console.log(data.length);

  for (let i = 1; i < data.length; i++) {
    if (!data[i].every((item) => item) || data[i].length !== names.length) {
      continue;
    }
    const obj = {};
    for (let j = 0; j < names.length; j++) {
      if (names[j] === "count") {
        obj[names[j]] = Number.parseInt(data[i][j].trim());
      } else if (names[j] === "price" || names[j] === "priceUSD") {
        obj[names[j]] = Number.parseFloat(data[i][j].trim());
      } else {
        obj[names[j]] = data[i][j].trim();
      }
    }
    result.push(obj);
  }

  await fs.unlink(path);
  return result;
};
