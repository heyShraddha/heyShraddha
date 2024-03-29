import fs from "fs";
import { performance } from "perf_hooks";
import xml2js from "xml2js";
import yaml from "js-yaml";

const readLargeData = (filePath) => {
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

const measureLatency = async (operation, payload) => {
  const start = performance.now();
  await operation(payload);
  const end = performance.now();
  const latency = end - start;
  return latency;
};

const serializeJSON = (data) => {
  return JSON.stringify(data);
};

const deserializeJSON = (data) => {
  return JSON.parse(data);
};

const serializeXML = async (data) => {
  const parser = new xml2js.Parser();
  return new Promise((resolve, reject) => {
    parser.parseString(data, (err, result) => {
      if (err) {
        reject(err);
      } else {
        const builder = new xml2js.Builder();
        const xml = builder.buildObject(result);
        resolve(xml);
      }
    });
  });
};

const deserializeXML = async (data) => {
  return new Promise((resolve, reject) => {
    const parser = new xml2js.Parser();
    parser.parseString(data, (err, result) => {
      if (err) {
        reject(err);
      } else {
        resolve(result);
      }
    });
  });
};

const serializeYAML = (data) => {
  return yaml.dump(data);
};

const deserializeYAML = (data) => {
  return yaml.load(data);
};

const testLatency = async () => {
  const jsonPayload = await readLargeData("large_data.json");
  const xmlPayload = await readLargeData("large_data.xml");
  const yamlPayload = await readLargeData("large_data.yaml");

  const jsonSerializationLatency = await measureLatency(
    serializeJSON,
    jsonPayload
  );
  console.log(
    "Serialization Latency (XML):",
    jsonSerializationLatency.toFixed(2),
    "ms"
  );

  const jsonDeserializationLatency = await measureLatency(
    deserializeJSON,
    jsonPayload
  );
  console.log(
    "Deserialization Latency (XML):",
    jsonDeserializationLatency.toFixed(2),
    "ms"
  );

  const xmlSerializationLatency = await measureLatency(
    serializeXML,
    xmlPayload
  );
  console.log(
    "Serialization Latency (JSON):",
    xmlSerializationLatency.toFixed(2),
    "ms"
  );

  const xmlDeserializationLatency = await measureLatency(
    deserializeXML,
    xmlPayload
  );
  console.log(
    "Deserialization Latency (JSON):",
    xmlDeserializationLatency.toFixed(2),
    "ms"
  );

  const yamlSerializationLatency = await measureLatency(
    serializeYAML,
    yamlPayload
  );
  console.log(
    "Serialization Latency (YAML):",
    yamlSerializationLatency.toFixed(2),
    "ms"
  );

  const yamlDeserializationLatency = await measureLatency(
    deserializeYAML,
    yamlPayload
  );
  console.log(
    "Deserialization Latency (YAML):",
    yamlDeserializationLatency.toFixed(2),
    "ms"
  );
};

testLatency();


const readLargeData1 = (filePath) => {
  return new Promise((resolve, reject) => {
    const start = performance.now();
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        reject(err);
      } else {
        const end = performance.now();
        const latency = end - start;
        console.log(`Reading Latency (${filePath}): ${latency.toFixed(2)} ms`);
        resolve(data);
      }
    });
  });
};
readLargeData1();