const express = require("express");
const router = express.Router();
const Category = require("../models/Category");
const { verifyToken, isAdmin } = require("../middleware/authMiddleware");
const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// CREATE
router.post("/", verifyToken, isAdmin, upload.single("Image"), async (req, res) => {
  try {
    const category = new Category({
      Name: req.body.Name,
      Price: req.body.Price,
      Image: req.file ? req.file.path : "",
    });

    await category.save();
    res.json(category);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// READ (Public)
router.get("/", async (req, res) => {
  const categories = await Category.find();
  res.json(categories);
});

// UPDATE
router.put("/:id", verifyToken, isAdmin, upload.single("Image"), async (req, res) => {
  const updateData = {
    Name: req.body.Name,
    Price: req.body.Price,
  };

  if (req.file) {
    updateData.Image = req.file.path;
  }

  const updated = await Category.findByIdAndUpdate(
    req.params.id,
    updateData,
    { new: true }
  );

  res.json(updated);
});

// DELETE
router.delete("/:id", verifyToken, isAdmin, async (req, res) => {
  await Category.findByIdAndDelete(req.params.id);
  res.json({ message: "Deleted successfully" });
});

module.exports = router;
