const express = require("express");
const router = express.Router();
const userController = require("../controllers/UserController");
const { authMiddelWare } = require("../middleware/authMiddleware");

router.post("/sign-up", userController.createUser);

router.post("/sign-in", userController.loginUser);

router.put("/update-user/:id", userController.updateUser);

router.delete("/delete-user/:id", authMiddelWare, userController.deleteUser);

router.get("/getAll", authMiddelWare, userController.getAllUser);

router.get("/get-detailUser/:id", userController.getDetailUser);

module.exports = router;
