const Product = require("../models/ProductModel");

// Create product
const createProduct = (newProduct) => {
  return new Promise(async (resolve, reject) => {
    const { name, image, type, price, countInStock, rating, description } =
      newProduct;
    try {
      const checkProduct = await Product.findOne({
        name: name,
      });
      if (checkProduct !== null) {
        resolve({
          status: "Ô sờ kê!",
          message: "The name of product is already!",
        });
      }
      const createdProduct = await Product.create({
        name,
        image,
        type,
        price,
        countInStock,
        rating,
        description,
      });
      if (createdProduct) {
        resolve({
          status: "Ô sờ kê!",
          message: "Success!",
          data: createdProduct,
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

// Update product
const updateProduct = (id, data) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkProduct = await Product.findOne({
        _id: id,
      });

      if (checkProduct === null) {
        resolve({
          status: "Ô sờ kê!",
          message: "The product is not defined!",
        });
      }

      const updatedProduct = await Product.findByIdAndUpdate(id, data, {
        new: true,
      });

      resolve({
        status: "Ô sờ kê!",
        message: "Update user success!",
        data: updatedProduct,
      });
    } catch (e) {
      reject(e);
    }
  });
};

// Delete product
const deleteProduct = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const checkProduct = await Product.findOne({
        _id: id,
      });

      if (checkProduct === null) {
        resolve({
          status: "Ô sờ kê!",
          message: "The product is not defined!",
        });
      }

      await Product.findByIdAndDelete(id);

      resolve({
        status: "Ô sờ kê!",
        message: "Delete product success!",
      });
    } catch (e) {
      reject(e);
    }
  });
};

// Get all product
const getAllProduct = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const allProduct = await Product.find();

      resolve({
        status: "Ô sờ kê!",
        message: "Delete user success!",
        data: allProduct,
      });
    } catch (e) {
      reject(e);
    }
  });
};

// Get detail product
const getDetailProduct = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const product = await Product.findOne({
        _id: id,
      });

      if (product === null) {
        resolve({
          status: "Ô sờ kê!",
          message: "The product is not defined!",
        });
      }

      resolve({
        status: "Ô sờ kê!",
        message: "Get detail product success!",
        data: product,
      });
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  createProduct,
  updateProduct,
  deleteProduct,
  getDetailProduct,
  getAllProduct,
};
