import fs from "fs";

// function generateLargeData(sizeInMB) {
//   const dataSize = sizeInMB * 1024 * 1024; // Convert MB to bytes
//   const sampleData = {
//     id: 1,
//     name: "Example",
//     description: "This is a sample object.",
//   };
//   const largeData = [];
//   let dataSizeSoFar = 0;

//   // Keep adding the sampleData object to the array until the total size exceeds dataSize
//   while (dataSizeSoFar < dataSize) {
//     largeData.push(sampleData);
//     dataSizeSoFar += JSON.stringify(sampleData).length;
//   }
//   return largeData;
// }

// // Generate large JSON data
// const largeJsonData = generateLargeData(100); // Generates 100 MB of data

// // Check if largeJsonData is populated
// if (largeJsonData && largeJsonData.length > 0) {
//   // Convert JSON data to string
//   const jsonDataString = JSON.stringify(largeJsonData);

//   const filePath = "large_data.json";
//   fs.writeFileSync(filePath, jsonDataString);

//   console.log(`Large JSON data saved to ${filePath}`);
// } else {
//   console.error("Failed to generate large JSON data");
// }


// Function to generate large YAML data and store it in a file
const generateAndStoreLargeYAML = (filePath, sizeInMB) => {
    const dataSize = sizeInMB * 1024 * 1024; // Convert MB to bytes
    const nestedObjectCount = dataSize / 100; // Adjust count to achieve desired file size
    let yamlData = '';

    for (let i = 0; i < nestedObjectCount; i++) {
        yamlData += `item${i}:\n`;
        for (let j = 0; j < 10; j++) {
            yamlData += `  key${j}: value${j}\n`; // Nested structure
        }
    }

    // Write YAML data to file
    fs.writeFileSync(filePath, yamlData);
    console.log(`Large YAML file generated and stored at ${filePath}`);
};

// Function to generate large XML data and store it in a file
const generateAndStoreLargeXML = (filePath, sizeInMB) => {
    const dataSize = sizeInMB * 1024 * 1024; // Convert MB to bytes
    const elementCount = dataSize / 100; // Adjust count to achieve desired file size
    let xmlData = '<?xml version="1.0" encoding="UTF-8"?>\n<root>\n';

    for (let i = 0; i < elementCount; i++) {
        xmlData += `<item>${i}</item>\n`; // Repeated elements
    }

    xmlData += '</root>';

    // Write XML data to file
    fs.writeFileSync(filePath, xmlData);
    console.log(`Large XML file generated and stored at ${filePath}`);
};

// Example usage
generateAndStoreLargeYAML('large_data.yaml', 10); // Generates a 10 MB YAML file
generateAndStoreLargeXML('large_data.xml', 10); // Generates a 10 MB XML file
