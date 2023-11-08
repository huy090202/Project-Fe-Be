const express = require("express");
const router = express.Router();
const productController = require("../controllers/ProductController");
const { authMiddelWare } = require("../middleware/authMiddleware");

router.post("/create-product", productController.createProduct);

router.put(
  "/update-product/:id",
  authMiddelWare,
  productController.updateProduct
);

router.delete(
  "/delete-product/:id",
  authMiddelWare,
  productController.deleteProduct
);

router.get("/detail-product/:id", productController.getDetailProduct);

router.get("/getAll-product", productController.getAllProduct);

module.exports = router;
