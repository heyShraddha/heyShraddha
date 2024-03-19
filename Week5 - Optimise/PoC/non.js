import fs from "fs";
import xml2js from "xml2js";
import yaml from "js-yaml";

function generateLargeData(sizeInMB) {
  const dataSize = sizeInMB * 1024 * 1024;
  const sampleData = {
    id: 1,
    name: "Example",
    description: "This is a sample object.",
  };
  const largeData = [];
  let dataSizeSoFar = 0;
  while (dataSizeSoFar < dataSize) {
    largeData.push(sampleData);
    dataSizeSoFar += JSON.stringify(sampleData).length;
  }
  return largeData;
}

const largeJsonData = generateLargeData(100);
const largeXmlData = largeJsonData;
const largeYamlData = largeJsonData;

let jsonSerializationTime = 0;
let jsonDeserializationTime = 0;
let xmlSerializationTime = 0;
let xmlDeserializationTime = 0;
let yamlSerializationTime = 0;
let yamlDeserializationTime = 0;

const startJsonSerialization = process.hrtime.bigint();
let serializedJson = JSON.stringify(largeJsonData);
const endJsonSerialization = process.hrtime.bigint();
jsonSerializationTime =
  Number(endJsonSerialization - startJsonSerialization) / 1e6;

console.log("JSON Serialization Time (ms):", jsonSerializationTime);

const startJsonDeserialization = process.hrtime.bigint();
let deserializedJson = JSON.parse(serializedJson);
const endJsonDeserialization = process.hrtime.bigint();
jsonDeserializationTime =
  Number(endJsonDeserialization - startJsonDeserialization) / 1e6;

console.log("JSON Deserialization Time (ms):", jsonDeserializationTime);

// XML Serialization
const startXmlSerialization = process.hrtime.bigint();
const builder = new xml2js.Builder();
const xml = builder.buildObject({ data: largeXmlData });
fs.writeFileSync("sample.xml", xml);
const endXmlSerialization = process.hrtime.bigint();
xmlSerializationTime =
  Number(endXmlSerialization - startXmlSerialization) / 1e6;

console.log("XML Serialization Time (ms):", xmlSerializationTime);

// XML Deserialization
const startXmlDeserialization = process.hrtime.bigint();
const parser = new xml2js.Parser();
const xmlData = fs.readFileSync("sample.xml");
parser.parseString(xmlData, (err, result) => {
  if (!err) {
    const endXmlDeserialization = process.hrtime.bigint();
    xmlDeserializationTime =
      Number(endXmlDeserialization - startXmlDeserialization) / 1e6;
    console.log("XML Deserialization Time (ms):", xmlDeserializationTime);
  }
});
