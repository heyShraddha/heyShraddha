import fs from "fs";
import yaml from "js-yaml";

const readSampleData = (filePath) => {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
};

const filePathYAML = "sample.yaml";

console.log("Starting Serialization for YAML");

console.log("Starting YAML Serialization...");
console.time("YAML Serialization Latency");
readSampleData(filePathYAML)
  .then((yamlData) => {
    try {
      const parsedYAML = yaml.load(yamlData);
      console.log("YAML Serialization Completed.");
      console.timeEnd("YAML Serialization Latency");
    } catch (error) {
      console.error("YAML Serialization Error:", error);
    }
  })
  .catch((error) => {
    console.error("YAML Read Error:", error);
  });
