const ProductService = require("../services/ProductService");

// Create product
const createProduct = async (req, res) => {
  try {
    const { name, image, type, price, countInStock, rating, description } =
      req.body;

    if (!name || !image || !type || !price || !countInStock || !rating) {
      return res.status(200).json({
        status: "error",
        message: "The input is required",
      });
    }

    const response = await ProductService.createProduct(req.body);

    return res.status(200).json(response);
  } catch (err) {
    return res.status(404).json({
      error: err,
    });
  }
};

// Update product
const updateProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const data = req.body;

    if (!productId) {
      return res.status(200).json({
        status: "error",
        message: "The productId is required",
      });
    }

    const response = await ProductService.updateProduct(productId, data);

    return res.status(200).json(response);
  } catch (err) {
    return res.status(404).json({
      error: err,
    });
  }
};

// Delete product
const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;

    if (!productId) {
      return res.status(200).json({
        status: "error",
        message: "The productId is required",
      });
    }

    const response = await ProductService.deleteProduct(productId);

    return res.status(200).json(response);
  } catch (err) {
    return res.status(404).json({
      error: err,
    });
  }
};

// Get detail product
const getDetailProduct = async (req, res) => {
  try {
    const productId = req.params.id;

    if (!productId) {
      return res.status(200).json({
        status: "error",
        message: "The productId is required",
      });
    }

    const response = await ProductService.getDetailProduct(productId);

    return res.status(200).json(response);
  } catch (err) {
    return res.status(404).json({
      error: err,
    });
  }
};

// Get all product
const getAllProduct = async (req, res) => {
  try {
    const response = await ProductService.getAllProduct();

    return res.status(200).json(response);
  } catch (err) {
    return res.status(404).json({
      error: err,
    });
  }
};

module.exports = {
  createProduct,
  updateProduct,
  getDetailProduct,
  deleteProduct,
  getAllProduct,
};
