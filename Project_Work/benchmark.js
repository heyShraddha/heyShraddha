const { customSerialize, customDeserialize } = require("./serializer");

function benchmarkSerialization(data, iterations) {
  let customSerializationStart = process.hrtime();
  for (let i = 0; i < iterations; i++) {
    customSerialize(data);
  }
  let customSerializationEnd = process.hrtime(customSerializationStart);
  let customSerializationTime =
    customSerializationEnd[0] * 1000 + customSerializationEnd[1] / 1000000;

  let jsonSerializationStart = process.hrtime();
  for (let i = 0; i < iterations; i++) {
    JSON.stringify(data);
  }
  let jsonSerializationEnd = process.hrtime(jsonSerializationStart);
  let jsonSerializationTime =
    jsonSerializationEnd[0] * 1000 + jsonSerializationEnd[1] / 1000000;

  return {
    customSerializationTime,
    jsonSerializationTime,
  };
}

async function benchmarkSerializationWithJson(data) {
  let customSerializationStart = process.hrtime();
  console.time("customSerializationStart");
  await customSerialize(data);
  let customSerializationEnd = process.hrtime(customSerializationStart);
  console.timeEnd("customSerializationStart");
  let customSerializationTime =
    customSerializationEnd[0] * 1000 + customSerializationEnd[1] / 1000000;

  let jsonSerializationStart = process.hrtime();
  console.time("jsonSerializationStart");
  await JSON.stringify(data);
  console.timeEnd("jsonSerializationStart");
  let jsonSerializationEnd = process.hrtime(jsonSerializationStart);
  let jsonSerializationTime =
    jsonSerializationEnd[0] * 1000 + jsonSerializationEnd[1] / 1000000;

  return {
    customSerializationTime,
    jsonSerializationTime,
  };
}

function benchmarkDeserialization(binaryData, jsonData, iterations) {
  let customDeserializationStart = process.hrtime();
  for (let i = 0; i < iterations; i++) {
    customDeserialize(binaryData);
  }
  let customDeserializationEnd = process.hrtime(customDeserializationStart);
  let customDeserializationTime =
    customDeserializationEnd[0] * 1000 + customDeserializationEnd[1] / 1000000;

  let jsonDeserializationStart = process.hrtime();
  for (let i = 0; i < iterations; i++) {
    JSON.parse(jsonData);
  }
  let jsonDeserializationEnd = process.hrtime(jsonDeserializationStart);
  let jsonDeserializationTime =
    jsonDeserializationEnd[0] * 1000 + jsonDeserializationEnd[1] / 1000000;

  return {
    customDeserializationTime,
    jsonDeserializationTime,
  };
}

module.exports = {
  benchmarkSerialization,
  benchmarkDeserialization,
  benchmarkSerializationWithJson,
};
