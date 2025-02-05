//external packages
import express from "express";
import "dotenv/config";
import mongoose from "mongoose";

const app = express();
app.use(express.json());
app.listen(5555, () => {
  console.log("Server is running on port 5555");
});
mongoose
  .connect(process.env.MONGODB_URI || "mongodb://localhost:27017/your-database")
  .then(() => console.log("Connected to database"))
  .catch((err) => console.error("Database connection failed:", err));

app.get("/", (req, res) => {
  res.send("Hello World");
});
