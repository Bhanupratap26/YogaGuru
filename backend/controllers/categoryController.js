const Category = require("../models/Category");

exports.createCategory = async (req, res) => {
  try {
    const { Name, Price } = req.body;

    const imagePath = req.file
      ? `uploads/${req.file.filename}`
      : "";

    const category = new Category({
      Name,
      Price,
      Image: imagePath,
    });

    await category.save();

    res.status(201).json(category);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
