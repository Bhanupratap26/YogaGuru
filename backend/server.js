require("dotenv").config();   // ⭐ MUST BE FIRST LINE

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const authRoutes = require("./routes/authRoutes");
const categoryRoutes = require("./routes/categoryRoutes");
const bookRoutes = require("./routes/bookRoutes");

const app = express();

// ⭐ CORS MIDDLEWARE (IMPORTANT)
app.use(cors());

// Middleware
app.use(express.json());
app.use("/uploads", express.static("uploads"));

console.log(process.env.MONGO_URI);
// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

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
