const { log } = require("console");
const fs = require("fs/promises");

function toAlphanumeric(str) {
  return str.replace(/[^a-zA-Z0-9]/g, "");
}

function splitCsvString(input) {
  let result = [];
  let current = "";
  let inQuotes = false;

  for (let i = 0; i < input.length; i++) {
    let char = input[i];

    if (char === '"') {
      // Переключаем состояние inQuotes
      inQuotes = !inQuotes;
      continue; // Пропускаем кавычки
    } else if (char === "," && !inQuotes) {
      // Если запятая вне кавычек, это разделитель
      result.push(current);
      current = "";
      continue;
    }

    // Добавляем текущий символ к текущей строке
    current += char;
  }

  // Добавляем последний элемент
  if (current) {
    result.push(current);
  }

  return result;
}

module.exports = async (path) => {
  let data = (await fs.readFile(path)).toString("utf-8").split("\r\n");
  data = data.map((line) => splitCsvString(line));
  const names = data[0].map((item) => toAlphanumeric(item).trim());
  const result = [];
  console.log(data.length);
  console.log(data);

  for (let i = 1; i < data.length; i++) {
    if (
      !data[i].every(
        (item, index) =>
          item || names[index] === "topStyle" || names[index] === "bottomStyle"
      ) ||
      data[i].length !== names.length
    ) {
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
