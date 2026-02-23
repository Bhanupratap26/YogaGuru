const express = require("express");
const router = express.Router();
const Book = require("../models/Book");
const multer = require("multer");
const path = require("path");
const { verifyToken, isAdmin } = require("../middleware/authMiddleware");

/* IMAGE UPLOAD */
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });


/* CREATE BOOK */
router.post(
  "/",
  verifyToken,
  isAdmin,
  upload.single("Image"),
  async (req, res) => {
    try {

      const book = new Book({
        Name: req.body.Name,
        Price: req.body.Price,
        Image: req.file ? req.file.path : ""
      });

      await book.save();

      res.json(book);

    } catch (err) {
      res.status(500).json(err.message);
    }
  }
);


/* READ BOOKS */
router.get("/", async (req, res) => {
  const books = await Book.find();
  res.json(books);
});


/* UPDATE */
router.put(
  "/:id",
  verifyToken,
  isAdmin,
  upload.single("Image"),
  async (req, res) => {

    const updateData = {
      Name: req.body.Name,
      Price: req.body.Price
    };

    if (req.file) {
      updateData.Image = req.file.path;
    }

    const updated = await Book.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true }
    );

    res.json(updated);
});


/* DELETE */
router.delete("/:id", verifyToken, isAdmin, async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);
  res.json("Deleted");
});

module.exports = router;
