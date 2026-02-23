const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
{
  Name: {
    type: String,
    required: true
  },
  Price: {
    type: Number,
    required: true
  },
  Image: {
    type: String
  }
},
{ timestamps: true }
);

module.exports = mongoose.model("Book", bookSchema);
