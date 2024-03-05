import fs from "fs";
import { parseString } from "xml2js";

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

const filePathXML = "sample.xml";

console.log("Starting Serialization for XML");

console.log("Starting XML Serialization...");
console.time("XML Serialization Latency");
readSampleData(filePathXML)
  .then((xmlData) => {
    parseString(xmlData, (err, result) => {
      if (err) {
        console.error("XML Serialization Error:", err);
      } else {
        console.log("XML Serialization Completed.");
        console.timeEnd("XML Serialization Latency");
      }
    });
  })
  .catch((error) => {
    console.error("XML Read Error:", error);
  });
