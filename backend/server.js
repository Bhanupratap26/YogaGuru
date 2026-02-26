require("dotenv").config();

const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const bookRoutes = require("./routes/bookRoutes");

// PostgreSQL connection (IMPORTANT)
require("./config/db");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/categories", categoryRoutes);
app.use("/api/books", bookRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});