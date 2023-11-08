const express = require("express");
const router = express.Router();
const userController = require("../controllers/UserController");
const {
  authMiddelWare,
  authUserMiddelWare,
} = require("../middleware/authMiddleware");

router.post("/sign-up", userController.createUser);

router.post("/sign-in", userController.loginUser);

router.put("/update-user/:id", userController.updateUser);

router.delete("/delete-user/:id", authMiddelWare, userController.deleteUser);

router.get("/getAll-user", authMiddelWare, userController.getAllUser);

router.get("/detai-user/:id", authUserMiddelWare, userController.getDetailUser);

router.post("/refresh-token", userController.refreshToken);

module.exports = router;
