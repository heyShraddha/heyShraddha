# High-Performance Data Interchange System

## Project Overview

This project aims to minimize latency in high-performance data interchange systems within a microservice architecture. The primary goals include analyzing latency caused by various data transmission technologies, exploring new data transmission methods, and concluding the most efficient methods based on performance benchmarks.

## Goals

1. Analyze latency caused by different data transmission technologies (JSON, XML, YAML) when calling a service in a microservice architecture.
2. Explore new data transmission technologies to minimize latency in microservice execution.
3. Conclude the most efficient transmission technologies based on analyzed scenarios.

## Project Structure

### Directories and Files

- `src/`
  - `server.ts`: Main server file handling API routes.
  - `routes.ts`: Contains API routes for serialization and deserialization testing.
  - `serialization.ts`: Custom serialization and deserialization functions.
  - `tests/`: Contains performance benchmarking tests.

### API Endpoints

- `POST /serialize/custom`: Custom serialization with a specified number of iterations.
- `POST /deserialize/custom`: Custom deserialization with a specified number of iterations.
- `POST /serialize/json`: JSON serialization with a specified number of iterations.
- `POST /deserialize/json`: JSON deserialization with a specified number of iterations.

## Setup and Usage

### Prerequisites

- Node.js
- npm or yarn

### Installation

1. Clone the repository:
    ```sh
    git clone <repository_url>
    cd <repository_directory>
    ```

2. Install dependencies:
    ```sh
    npm install
    # or
    yarn install
    ```

3. Compile TypeScript:
    ```sh
    npm run build
    # or
    yarn build
    ```

### Running the Server

Start the server:
```sh
npm start
# or
yarn start


Custom Requests : 

Custom Serialization:
curl -X POST http://localhost:3000/serialize/custom -H "Content-Type: application/json" -d '{"iterations": 1000000}'

Custom Deserialization:
curl -X POST http://localhost:3000/deserialize/custom -H "Content-Type: application/json" -d '{"iterations": 1000000}'

JSON Serialization:
curl -X POST http://localhost:3000/serialize/json -H "Content-Type: application/json" -d '{"iterations": 1000000}'

JSON Deserialization:
curl -X POST http://localhost:3000/deserialize/json -H "Content-Type: application/json" -d '{"iterations": 1000000}'



Key Learnings
Serialization and Deserialization Performance: Custom serialization methods can significantly reduce latency, especially for large data sets.
Scalability Considerations: While JSON is efficient for small to moderate data sizes, custom methods are necessary to handle high-performance requirements.
Microservice Integration: Implementing custom data interchange mechanisms within microservices can optimize overall system performance.