const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  },
  Price: {
    type: Number,
    required: true,
  },
  Image: {
    type: String,
  },
}, { timestamps: true });

module.exports = mongoose.model("Category", categorySchema);
