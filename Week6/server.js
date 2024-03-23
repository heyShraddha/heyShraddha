import express from "express";

const app = express();
const port = 3000;

app.use((req, res, next) => {
  const start = Date.now();
  res.on("finish", () => {
    const end = Date.now();
    const latency = end - start;
    console.log(`Latency for ${req.method} ${req.url}: ${latency}ms`);
  });
  next();
});

app.get("/users", (req, res) => {
  setTimeout(() => {
    res.json({ message: "List of users" });
  }, 500);
});

app.post("/users", (req, res) => {
  setTimeout(() => {
    res.json({ message: "User created successfully" });
  }, 800);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
