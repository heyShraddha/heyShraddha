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

const startJsonSerialization = process.hrtime.bigint();
const serializedJson = JSON.stringify(largeJsonData);
const endJsonSerialization = process.hrtime.bigint();
const jsonSerializationTime =
  Number(endJsonSerialization - startJsonSerialization) / 1e6;

console.log("JSON Serialization Time (ms):", jsonSerializationTime);

const startJsonDeserialization = process.hrtime.bigint();
const deserializedJson = JSON.parse(serializedJson);
const endJsonDeserialization = process.hrtime.bigint();
const jsonDeserializationTime =
  Number(endJsonDeserialization - startJsonDeserialization) / 1e6;

console.log("JSON Deserialization Time (ms):", jsonDeserializationTime);

const startXmlSerialization = process.hrtime.bigint();
const builder = new xml2js.Builder();
const xml = builder.buildObject({ data: largeXmlData });
fs.writeFileSync("sample.xml", xml);
const endXmlSerialization = process.hrtime.bigint();
const xmlSerializationTime =
  Number(endXmlSerialization - startXmlSerialization) / 1e6;

console.log("XML Serialization Time (ms):", xmlSerializationTime);

const startXmlDeserialization = process.hrtime.bigint();
const parser = new xml2js.Parser();
const xmlData = fs.readFileSync("sample.xml");
parser.parseString(xmlData, (err, result) => {
  if (!err) {
    const endXmlDeserialization = process.hrtime.bigint();
    const xmlDeserializationTime =
      Number(endXmlDeserialization - startXmlDeserialization) / 1e6;
    console.log("XML Deserialization Time (ms):", xmlDeserializationTime);
  }
});

const startYamlSerialization = process.hrtime.bigint();
const serializedYaml = yaml.dump(largeYamlData);
fs.writeFileSync("sample.yaml", serializedYaml);
const endYamlSerialization = process.hrtime.bigint();
const yamlSerializationTime =
  Number(endYamlSerialization - startYamlSerialization) / 1e6;

console.log("YAML Serialization Time (ms):", yamlSerializationTime);

const startYamlDeserialization = process.hrtime.bigint();
const yamlData = fs.readFileSync("sample.yaml", "utf8");
const deserializedYaml = yaml.load(yamlData);
const endYamlDeserialization = process.hrtime.bigint();
const yamlDeserializationTime =
  Number(endYamlDeserialization - startYamlDeserialization) / 1e6;

console.log("YAML Deserialization Time (ms):", yamlDeserializationTime);
