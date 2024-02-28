const { performance, PerformanceObserver } = require("perf_hooks");

import { Worker, isMainThread, parentPort } from "worker_threads";

const generateSampleData = (sizeInBytes) => {
  const data = {
    id: 1,
    name: "User",
    age: 30,
    email: "user@example.com",
    address: {
      street: "123 Main St",
      city: "City",
      country: "Country",
    },
  };
  const numberOfObjects = Math.ceil(sizeInBytes / JSON.stringify(data).length);
  return Array.from({ length: numberOfObjects }, (_, i) => ({
    ...data,
    id: i,
  }));
};

function serializeData(data) {
  return new Promise((resolve, reject) => {
    try {
      const serializedData = JSON.stringify(data);
      resolve(serializedData);
    } catch (error) {
      reject(error);
    }
  });
}

function deserializeData(json) {
  return new Promise((resolve, reject) => {
    try {
      const deserializedData = JSON.parse(json);
      resolve(deserializedData);
    } catch (error) {
      reject(error);
    }
  });
}

const obs = new PerformanceObserver((items) => {
  items.getEntries().forEach((entry) => {
    console.log(`${entry.name}: ${entry.duration.toFixed(2)} milliseconds`);
  });
  performance.clearMarks();
});
obs.observe({ entryTypes: ["measure"], buffered: true });

const sampleSize = 262144000;
const sampleData = generateSampleData(sampleSize);

if (isMainThread) {
  console.log("Main Thread: Starting Serialization and Deserialization");

  performance.mark("startDiskIO");
  const serializedPromise = serializeData(sampleData);
  serializedPromise
    .then((serializedData) => {
      performance.mark("endDiskIO");
      performance.measure("Disk I/O Latency", "startDiskIO", "endDiskIO");

      const initialMemoryUsage = process.memoryUsage().heapUsed;
      performance.mark("startSerialize");

      const initialCPUUsage = process.cpuUsage();

      const serializedPromise = serializeData(sampleData);
      serializedPromise
        .then((serializedData) => {
          const finalMemoryUsage = process.memoryUsage().heapUsed;
          console.log(
            `Memory Usage Increase (Serialization): ${
              (finalMemoryUsage - initialMemoryUsage) / (1024 * 1024)
            } MB`
          );

          const finalCPUUsage = process.cpuUsage(initialCPUUsage);
          console.log(
            `CPU Utilization (Serialization): User ${
              finalCPUUsage.user / 1000
            }ms, System ${finalCPUUsage.system / 1000}ms`
          );

          performance.mark("endSerialize");
          performance.measure(
            "Serialization Latency",
            "startSerialize",
            "endSerialize"
          );

          performance.mark("startDeserialize");
          const deserializedPromise = deserializeData(serializedData);
          deserializedPromise
            .then((deserializedData) => {
              performance.mark("endDeserialize");
              performance.measure(
                "Deserialization Latency",
                "startDeserialize",
                "endDeserialize"
              );
            })
            .catch((error) => {
              console.error("Deserialization Error:", error);
            });
        })
        .catch((error) => {
          console.error("Serialization Error:", error);
        });
    })
    .catch((error) => {
      console.error("Serialization Error:", error);
    });
} else {
}
