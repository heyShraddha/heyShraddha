const fs = require("fs");

function generateLargeObject(size) {
  const largeObject = {};
  for (let i = 0; i < size; i++) {
    const key = `key${i}`;
    const value = `value${i}`;
    largeObject[key] = value;
  }
  return largeObject;
}

const largeObject = generateLargeObject(1000000000);

fs.writeFileSync("largeObject.json", JSON.stringify(largeObject));

console.log("Large object with 1,000,000 key-value pairs generated.");
