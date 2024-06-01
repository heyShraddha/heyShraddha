const express = require("express");
const { customSerialize, customDeserialize } = require("./serializer");
const {
  benchmarkSerialization,
  benchmarkDeserialization,
  benchmarkSerializationWithJson,
} = require("./benchmark");
const bodyparser = require("body-parser");

const app = express();
app.use(bodyparser({ limit: "200mb" }));
const port = 3000;

app.use(express.json());

app.post("/serialize", (req, res) => {
  const data = req.body;
  const binaryData = customSerialize(data);
  res.send(binaryData);
});

app.post("/deserialize", (req, res) => {
  const binaryData = req.body.data;
  const obj = customDeserialize(binaryData);
  res.json(obj);
});

app.post("/benchmark/serialize", (req, res) => {
  const binaryData = req.body.data;
  const { customSerializationTime, jsonSerializationTime } =
    benchmarkSerializationWithJson(binaryData);
  res.json({
    customSerializationTime: customSerializationTime,
    jsonSerializationTime: jsonSerializationTime,
  });
});

app.get("/benchmark/serialize", (req, res) => {
  const data = {
    name: "John",
    age: "30",
    city: "New York",
  };
  const ITERATIONS = 1000000;

  const { customSerializationTime, jsonSerializationTime } =
    benchmarkSerialization(data, ITERATIONS);
  res.json({
    customSerializationTime: customSerializationTime.toFixed(2),
    jsonSerializationTime: jsonSerializationTime.toFixed(2),
  });
});

app.get("/benchmark/deserialize", (req, res) => {
  const data = {
    name: "John",
    age: "30",
    city: "New York",
  };
  const binaryData = customSerialize(data);
  const jsonData = JSON.stringify(data);
  const ITERATIONS = 1000000;

  const { customDeserializationTime, jsonDeserializationTime } =
    benchmarkDeserialization(binaryData, jsonData, ITERATIONS);
  res.json({
    customDeserializationTime: customDeserializationTime.toFixed(2),
    jsonDeserializationTime: jsonDeserializationTime.toFixed(2),
  });
});

app.listen(port, () => {
  console.log(`API server listening at http://localhost:${port}`);
});
