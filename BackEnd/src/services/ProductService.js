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
const getAllProduct = (limit, page, sort, filter) => {
  return new Promise(async (resolve, reject) => {
    try {
      const totalProduct = await Product.estimatedDocumentCount(); // Hien thi co tat ca bao nhieu san pham

      // Filter
      if (filter) {
        const allProductFilter = await Product.find({
          // De nhu z no moi hieu day la key filter[0], day la value $regex: filter[1]
          [filter[0]]: { $regex: filter[1] }, // vd: filter product => product1, product2, .... con filter product1 => product1
        })
          .limit(limit)
          .skip(page * limit);

        resolve({
          status: "Ô sờ kê!",
          message: "Get all product success!",
          data: allProductFilter,
          total: totalProduct,
          pageCurrent: Number(page + 1),
          totalPage: Math.ceil(totalProduct / limit),
        });
      }

      // Sort
      if (sort) {
        const objectSort = {};
        // VD mun sort image thi tren url se la &sort=asc&sort=image vs asc, image co the thay doi
        objectSort[sort[1]] = sort[0]; // Ket qua cua objectSort luc nay se la { image: 'asc' }

        const allProductSort = await Product.find()
          .limit(limit)
          .skip(page * limit)
          .sort(objectSort);

        resolve({
          status: "Ô sờ kê!",
          message: "Get all product success!",
          data: allProductSort,
          total: totalProduct,
          pageCurrent: Number(page + 1),
          totalPage: Math.ceil(totalProduct / limit),
        });
      }

      // No sort or filter
      const allProduct = await Product.find()
        .limit(limit) //Gioi han limit san pham duoc hien thi
        .skip(page * limit); // Bo qua page * limit de hien thi san pham
      resolve({
        status: "Ô sờ kê!",
        message: "Get all product success!",
        data: allProduct,
        total: totalProduct,
        pageCurrent: Number(page + 1),
        totalPage: Math.ceil(totalProduct / limit),
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
