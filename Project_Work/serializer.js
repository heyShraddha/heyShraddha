function customSerialize(obj) {
  return new Promise((resolve, reject) => {
    let binaryData = "";
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        binaryData += key.length.toString(16).padStart(2, "0"); // key length
        binaryData += key; // key
        binaryData += obj[key].length.toString(16).padStart(4, "0"); // value length
        binaryData += obj[key]; // value
      }
    }
    resolve(binaryData);
  });
}

function customDeserialize(binaryData) {
  let obj = {};
  let index = 0;
  while (index < binaryData.length) {
    let keyLength = parseInt(binaryData.substr(index, 2), 16);
    index += 2;
    let key = binaryData.substr(index, keyLength);
    index += keyLength;
    let valueLength = parseInt(binaryData.substr(index, 4), 16);
    index += 4;
    let value = binaryData.substr(index, valueLength);
    index += valueLength;
    obj[key] = value;
  }
  return obj;
}

module.exports = { customSerialize, customDeserialize };
