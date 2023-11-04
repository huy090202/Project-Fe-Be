const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    image: { type: String, required: true },
    type: { type: String, required: true },
    price: { type: Number, required: true },
    countInStock: { type: Number, required: true }, // so luong sp con trong kho
    rating: { type: Number, required: true }, // so sao cua sp
    description: { type: String, required: true }, // mieu ta
  },
  {
    timestamps: true,
  }
);

const Product = mongoose.Schema("Product", productSchema);
module.exports = Product;
