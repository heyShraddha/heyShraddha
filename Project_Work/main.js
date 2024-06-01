// main.js
const { customSerialize } = require("./serializer");
const {
  benchmarkSerialization,
  benchmarkDeserialization,
} = require("./benchmark");

const data = {
  name: "John",
  age: "30",
  city: "New York",
};

const ITERATIONS = 10000000;

const { customSerializationTime, jsonSerializationTime } =
  benchmarkSerialization(data, ITERATIONS);
console.log(
  "Custom Serialization Time:",
  customSerializationTime.toFixed(2),
  "milliseconds"
);
console.log(
  "JSON Serialization Time:",
  jsonSerializationTime.toFixed(2),
  "milliseconds"
);

const binaryData = customSerialize(data);
const jsonData = JSON.stringify(data);

const { customDeserializationTime, jsonDeserializationTime } =
  benchmarkDeserialization(binaryData, jsonData, ITERATIONS);
console.log(
  "Custom Deserialization Time:",
  customDeserializationTime.toFixed(2),
  "milliseconds"
);
console.log(
  "JSON Deserialization Time:",
  jsonDeserializationTime.toFixed(2),
  "milliseconds"
);
