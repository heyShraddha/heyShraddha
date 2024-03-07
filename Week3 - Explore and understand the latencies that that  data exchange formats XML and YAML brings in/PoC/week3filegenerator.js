import fs from "fs";

const generateLargeXMLFile = (filePath, sizeInBytes) => {
  const elementCount = sizeInBytes / 100;
  let xmlData = '<?xml version="1.0" encoding="UTF-8"?>\n<root>\n';
  for (let i = 0; i < elementCount; i++) {
    xmlData += `<item>${i}</item>\n`;
  }
  xmlData += "</root>";
  fs.writeFileSync(filePath, xmlData);
};

const generateLargeYAMLFile = (filePath, sizeInBytes) => {
  const nestedObjectCount = sizeInBytes / 100;
  let yamlData = "";
  for (let i = 0; i < nestedObjectCount; i++) {
    yamlData += `item${i}:\n`;
    for (let j = 0; j < 10; j++) {
      yamlData += `  key${j}: value${j}\n`;
    }
  }
  fs.writeFileSync(filePath, yamlData);
};

const xmlFilePath = "sample.xml";
const yamlFilePath = "sample.yaml";

generateLargeXMLFile(xmlFilePath, 262144000);
generateLargeYAMLFile(yamlFilePath, 262144000);
